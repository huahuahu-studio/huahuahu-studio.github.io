# 花花虎工作室 · Huahuahu Studio

工作室的中英双语官网。集中维护 App 介绍、隐私政策、数据管理、帮助支持与使用条款，首个应用是快乐日记 HDiary。

- 中文：https://huahuahu-studio.github.io/zh/
- English: https://huahuahu-studio.github.io/en/
- 技术：Astro 静态生成、TypeScript、原生 CSS、GitHub Pages。
- 无需数据库或应用服务器；没有网站分析脚本、广告或外部字体依赖。
- 内容在构建时生成 HTML，隐私与支持页不依赖 JavaScript。语言切换使用独立 URL 并保留章节锚点。

## 本地开发

需要 Node.js 24（或满足 package.json 中版本要求的 Node）。

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run check
npm run preview
```

遵守本机的代理要求执行联网安装。构建与检查不需要联网。

`npm run check` 检查生成页面的站内链接、资源、章节锚点、语言对应页、标题、图片替代文字与 sitemap。网站运行时不依赖这个脚本。

## 内容维护

| 文件                       | 用途                                                        |
| -------------------------- | ----------------------------------------------------------- |
| `src/data/site.ts`         | 工作室中英文文案、邮箱、网址及语言路由                      |
| `src/data/apps.ts`         | 每个 App 的名字、商店链接、中英文介绍、功能和截图配置       |
| `src/data/documents.ts`    | 每个 App 的双语隐私、数据、支持、条款文档，以及网站隐私说明 |
| `src/components/`          | 首页、产品展示、文档等可复用组件                            |
| `src/styles/global.css`    | 响应式视觉样式                                              |
| `public/images/<app-id>/`  | 图标与中英文截图                                            |
| `docs/content-evidence.md` | HDiary 文案事实来源、与旧网站的差异及维护注意事项           |

新增 App 时：

1. 在 `src/data/apps.ts` 中添加固定的 App ID、名字、商店地址、两种语言的产品内容和截图配置。App ID 发布后尽量保持不变。
2. 在 `src/data/documents.ts` 中按该 App 的真实实现添加对应中英文政策和说明，并加入 App ID 映射；不要复制其他 App 的数据承诺。
3. 将脱敏或明确虚构的展示素材放入 `public/images/<app-id>/`，优先使用优化过的 WebP。
4. 运行构建和链接检查（页面数量会根据 App 配置计算），再实际检查两种语言与手机布局。
5. PR 合入 `main` 后自动重新发布。增加语言时同时更新语言配置、文案、文档和 SEO 语言映射。

政策更新时同步修改 `src/data/site.ts` 中的页面日期，保留 Git 历史。不要将真实日记、用户反馈附件、诊断日志、密钥或 App 源码复制进公开网站仓库。

## 部署

仓库名称必须是 **`huahuahu-studio.github.io`**，归属 **`huahuahu-studio`** 组织；网站按域名根路径构建。

GitHub 仓库设置 → Pages → Source 选择 **GitHub Actions**。`.github/workflows/deploy.yml` 在 `main` 推送时完成构建、验证和发布；PR 只构建验证，不发布。

自定义域名时，需要同时修改 `astro.config.mjs`、`src/data/site.ts` 的网址、`public/robots.txt`，并配置 GitHub Pages 与 DNS。当前不提供项目子目录部署配置。

## HDiary 的稳定网址

| 用途     | 中文                       | English                    |
| -------- | -------------------------- | -------------------------- |
| 产品介绍 | `/zh/apps/hdiary/`         | `/en/apps/hdiary/`         |
| 隐私政策 | `/zh/apps/hdiary/privacy/` | `/en/apps/hdiary/privacy/` |
| 数据管理 | `/zh/apps/hdiary/data/`    | `/en/apps/hdiary/data/`    |
| 帮助支持 | `/zh/apps/hdiary/support/` | `/en/apps/hdiary/support/` |
| 使用条款 | `/zh/apps/hdiary/terms/`   | `/en/apps/hdiary/terms/`   |

部署官网不会自动更改 HDiary 中的旧网页地址，也不会自动修改 App Store Connect 的网址。新地址确认后，可单独更新 App 与商店资料；旧域名的跳转必须在旧域名托管服务上配置。

英文下载按钮当前使用已验证可打开产品的中国区 App Store 英文语言地址；美国区地址在本次网络和浏览器环境下会跳转 Today，因此未作为默认入口。面向其他市场时可在 App 配置中调整 `storeUrl`，并核实产品落点。

## 素材

HDiary 的太阳来自 App 原有的 SVG 品牌素材。截图来自 1.16 发布目录，使用代码生成的虚构文字、人物和插画，分别提供中文与英文版本；压缩为 600px 宽 WebP，保留实际 UI。详见 `docs/content-evidence.md`。

本仓库公开用于展示和维护；未另行授予品牌、App 图标、截图或文案的再使用许可。
