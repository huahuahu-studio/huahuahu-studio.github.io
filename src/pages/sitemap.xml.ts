import { languages, documentKeys, route, siteUrl } from '../data/site';
import { apps } from '../data/apps';
export function GET() {
  const paths = [
    '',
    'about',
    'privacy',
    ...apps.flatMap((app) => [
      'apps/' + app.id,
      ...documentKeys.map((key) => 'apps/' + app.id + '/' + key),
    ]),
  ];
  const urls = languages
    .flatMap((lang) =>
      paths.map(
        (path) => '<url><loc>' + siteUrl + route(lang, path) + '</loc></url>',
      ),
    )
    .join('');
  return new Response(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      urls +
      '</urlset>',
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
