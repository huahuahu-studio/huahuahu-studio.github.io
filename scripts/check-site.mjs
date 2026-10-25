import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import { apps } from '../src/data/apps.ts';
import { languages, documentKeys } from '../src/data/site.ts';

const root = path.resolve('dist');
const origin = 'https://huahuahu-studio.github.io';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((e) =>
        e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name),
      ),
    )
  ).flat();
}
const files = await walk(root);
const pages = files.filter((f) => f.endsWith('.html'));
const errors = [];
let links = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const relative = path.relative(root, file);
  const urlPath = '/' + relative.replace(/index\.html$/, '');
  const language = relative.startsWith('en/') ? 'en' : 'zh-Hans';
  const check = (ok, msg) => {
    if (!ok) errors.push(relative + ': ' + msg);
  };
  check(
    html.includes('lang="' + language + '"'),
    'missing correct HTML language',
  );
  check((html.match(/<h1[\s>]/g) || []).length === 1, 'expected one h1');
  check(
    /<meta name="description" content="[^"]+"/.test(html),
    'missing description',
  );
  check(/<link rel="canonical"/.test(html), 'missing canonical');
  check(
    !/<script[^>]+src="https?:/.test(html),
    'unexpected third-party script',
  );
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  const rawIds = [...html.matchAll(/\bid="([^"]+)"/g)];
  check(ids.size === rawIds.length, 'duplicate element IDs');
  for (const image of html.matchAll(/<img\b[^>]*>/g))
    check(/\balt=/.test(image[0]), 'image missing alt');
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const raw = match[1].replace(/&amp;/g, '&');
    if (/^(mailto:|tel:|data:)/.test(raw)) continue;
    const url = new URL(raw, origin + urlPath);
    if (url.origin !== origin) continue;
    links++;
    let target = path.join(root, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith('/')) target = path.join(target, 'index.html');
    try {
      await access(target);
      if (url.hash && target.endsWith('.html')) {
        const linked = target === file ? html : await readFile(target, 'utf8');
        check(
          linked.includes('id="' + decodeURIComponent(url.hash.slice(1)) + '"'),
          'broken anchor ' + raw,
        );
      }
    } catch {
      errors.push(relative + ': missing link target ' + raw);
    }
  }
  if (/^(zh|en)\//.test(relative)) {
    const counterpart = path.join(
      root,
      relative.replace(/^(zh|en)\//, language === 'en' ? 'zh/' : 'en/'),
    );
    try {
      await access(counterpart);
    } catch {
      check(false, 'missing translated page');
    }
  }
}
assert.equal(errors.length, 0, errors.join('\n'));
const expectedLocalizedPages =
  languages.length * (3 + apps.length * (1 + documentKeys.length));
assert.equal(
  pages.length,
  expectedLocalizedPages + 2,
  'Missing localized, root, or 404 pages',
);
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
assert.equal(
  (sitemap.match(/<loc>/g) || []).length,
  expectedLocalizedPages,
  'Sitemap must cover all localized pages',
);
console.log(
  'Validated ' +
    pages.length +
    ' pages and ' +
    links +
    ' internal links/assets, translations, anchors, accessibility basics, and sitemap.',
);
