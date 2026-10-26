# Cloudflare Pages 部署

官网已于 2026-10-26 使用免费计划发布到 `https://bloomtiger.pages.dev`，保留现有页面路径和 GitHub Pages 兼容入口。

## 当前部署

- Cloudflare Pages 项目：`bloomtiger`；生产分支：`main`；自动部署已开启。
- GitHub App 仅授权 `huahuahu-studio/huahuahu-studio.github.io` 一个仓库。
- 首次生产提交：`f475951a29499a34b5e48be6cc398e1fd6344b58`。
- 首次生产部署：`5810cdce-3335-4a23-ae8d-f514b0d5c27b`，云端显示 success，耗时 32 秒。
- 首次云端构建使用 Node.js 24.22.1，执行 `npm run build && npm run check`。
- 实际线上与本地验证记录见 [`validation.md`](validation.md)。

## 后续发布与配置约定

2026-10-26，用户明确要求：以后发布和配置 Cloudflare 时，优先使用 MCP、CLI 或 API 完成操作。

- **日常发布**：保留现有 Git 自动部署流程，推送 `main` 后由 Cloudflare 构建并发布；通过工具核对对应提交、部署状态和线上结果。
- **配置与查询**：优先使用已授权的 Cloudflare API MCP；官方服务地址为 `https://mcp.cloudflare.com/mcp`，支持 Pages。文档 MCP 用于查资料，账号资源管理使用 API MCP。
- **命令行与脚本**：根据操作能力使用 Wrangler CLI 或 Cloudflare REST API／官方 SDK，完成部署、项目配置和状态查询。MCP 未接入或不支持某项操作时，继续使用可用的 CLI／API。
- **网页操作**：用于注册、登录、邮箱验证、GitHub App 安装授权、本人确认，以及工具不支持或失败后确有必要的操作。首次部署使用过网页配置，后续按本约定选择工具。
- **授权与凭据**：首次接入 MCP 或 CLI 时完成必要的 OAuth／API 授权，按任务授予所需权限；凭据通过工具授权或本机安全配置提供，不写入仓库。
- **本机联网**：CLI、API 脚本、Git 推送及工具安装遵循用户的完整代理环境约定，使用 `http://127.0.0.1:1082`；本地构建与检查不加代理。

采用新工具时保留当前 `bloomtiger` 项目和 Git 集成，按需要接入工具即可。此约定记录操作偏好，不代表已安装 Wrangler 或接入 Cloudflare MCP。

## 账号与项目

1. 注册或登录 Cloudflare 免费账号，完成邮箱验证。使用 `pages.dev` 子域名无需购买域名，也无需接入已有域名。
2. 在 **Workers & Pages → Create application → Pages → Connect to Git** 连接 GitHub。
3. 给 Cloudflare GitHub App 授予部署仓库的访问权限，优先仅选择 `huahuahu-studio/huahuahu-studio.github.io`。组织可能需要管理员完成安装或批准。
4. 项目名填写 `bloomtiger`，确认 Cloudflare 最终分配的生产域名。若名称不可用，先确定替代名称，再同步代码中的正式网址；不要使用与实际项目不一致的 canonical。

Cloudflare 的项目名和 GitHub 仓库名互相独立，无需重命名仓库。

## 构建设置

| 设置     | 值                                    |
| -------- | ------------------------------------- |
| 框架     | Astro                                 |
| 生产分支 | `main`                                |
| 根目录   | 仓库根目录，留空                      |
| 构建命令 | `npm run build && npm run check`      |
| 输出目录 | `dist`                                |
| 环境变量 | `NODE_VERSION=24`，同时用于生产与预览 |

保留仓库的 `.nvmrc`、`package-lock.json` 和静态输出模式。Cloudflare 的默认 Node 版本可能低于 `package.json` 要求，显式指定 Node 24。Pages 自动安装依赖；构建命令中的检查失败时，不应发布该构建。

当前没有 Functions 或服务端路由，`sitemap.xml.ts` 在构建时生成静态文件，无需添加 Cloudflare adapter 或数据库。现有 Git 自动部署不要求在仓库中添加 Wrangler 依赖或 API token；按上面的工具约定管理项目时，可使用外部 CLI 或 API 授权。保持网站未接入访问分析的现状；不要在控制台额外开启会注入脚本的分析功能而不更新网站隐私说明。

Git 集成连接后，`main` 更新触发生产部署，其他分支和 PR 使用预览部署。预览中的 canonical、语言对应 URL 和 sitemap 继续指向生产域名。生产部署应确认对应提交包含本次迁移配置；首次连接旧提交产生的部署不作为最终验收结果。

## 正式网址与兼容入口

- `src/data/site.ts` 的 `siteUrl` 是正式网址来源，供 Astro 配置、SEO、sitemap 和静态检查复用。
- `public/robots.txt` 的 Sitemap 必须与该网址一致，`npm run check` 会校验。
- `.github/workflows/deploy.yml` 暂时保留 GitHub Pages 自动发布，旧站继续使用现有路径。兼容入口的 canonical 指向 Cloudflare 正式站。
- 中英文网站隐私说明同时解释 Cloudflare 和 GitHub 的托管处理，并链接各自的隐私政策。
- 线上验收前不关闭旧站。旧入口重定向与工作流收尾后续单独安排。
- HDiary App 和 App Store Connect 的网址需要在新站稳定后单独更新，本仓库部署不会自动修改它们。

## 验收

本地执行：

```bash
npm run build
npm run check
```

Cloudflare 部署后检查：

- 生产项目实际地址为 `bloomtiger.pages.dev`，HTTPS 正常，部署关联正确的 Git 提交。
- `/` 按浏览器语言进入 `/zh/` 或 `/en/`；直接访问两种语言的首页、App 详情和全部文档路径正常。
- 语言切换保留当前文档与章节锚点，图片、样式、下载链接和邮箱链接正常。
- 网站隐私说明显示正确的托管服务、政策链接和日期。
- 不存在的路径返回 HTTP 404 并显示自定义 404 页面。
- canonical、Open Graph、语言对应链接、`/sitemap.xml` 和 `/robots.txt` 使用生产地址。
- 手机布局无回归，在主要访问网络下验证实际加载。
- 后续一次 `main` 更新能够触发构建检查并发布到对应生产版本。

仓库配置、本地检查、云端构建与线上验收是不同状态；仅完成其中一项不能视为全部上线。

## 官方参考

- Cloudflare API MCP：https://github.com/cloudflare/mcp
- Wrangler CLI：https://developers.cloudflare.com/workers/wrangler/
- Pages API：https://developers.cloudflare.com/api/resources/pages/subresources/projects/
- TypeScript SDK：https://github.com/cloudflare/cloudflare-typescript
- Astro 部署：https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- Git 集成：https://developers.cloudflare.com/pages/get-started/git-integration/
- Node 版本：https://developers.cloudflare.com/pages/configuration/build-image/
- 免费计划限制：https://developers.cloudflare.com/pages/platform/limits/
- 静态请求免费：https://developers.cloudflare.com/pages/functions/pricing/
- Cloudflare 隐私政策：https://www.cloudflare.com/privacypolicy/
