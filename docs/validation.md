# 官网验证记录

日期：2026-10-25。

- `npm run build`：18 个 HTML 页面构建成功，其中中文与英文各 8 页，另有根入口与 404。
- `npm run check`：473 个站内链接／资源引用、章节锚点、语言对应页、标题、替代文字及 16 条 sitemap 页面检查通过。
- 浏览器实际检查中文／英文首页、App 详情、隐私、数据管理与支持页。验证语言切换保持当前页面，并保留 `#export-delete` 章节。
- 320px 英文首页与产品页、320px 中文数据页、390px 中文首页与产品页、768px 英文隐私页均检查了布局；320px 首页的 Grid 最小尺寸溢出已修复，重查页面宽度与 scrollWidth 一致。桌面首屏和真实截图展示也已查看。
- 移动端可以从文档目录直接进入该 App 的其他政策／支持页面。
- App Store 中国区完整产品链接及英文语言参数链接返回产品地址；美国区链接在本次环境会跳转 Today，故未作为默认下载入口。
- 不包含对 HDiary App 的构建、模拟器或真机操作；App 数据行为的依据与范围见 `content-evidence.md`。

GitHub Actions 会对每次发布重新执行构建与静态检查。实际部署结果以该仓库对应 commit 的工作流和线上网址为准。

## Cloudflare 迁移准备

日期：2026-10-26。

- 本地 Node.js 24.18.0 下 `npm run build` 通过，保持纯静态构建，生成 18 个 HTML 页面。
- `npm run check` 通过，检查 473 个站内链接／资源和 16 条 sitemap URL，并验证 canonical、Open Graph、语言对应链接的域名及 robots 的正式网址。
- 临时将生成的中文网站隐私页、sitemap、robots 分别替换为旧域名，检查脚本均按预期失败；恢复产物后检查通过。未修改源文件以制造这些失败。
- 浏览器核对中英文网站隐私正文、2026-10-26 的网站说明日期及两个托管服务的政策链接；App 文档日期保持原值。
- 390px 宽度下中英文网站隐私页的页面宽度均为 390px，无横向溢出；从中文 `#hosting` 切到英文后 URL 保持 `/en/privacy/#hosting`。
- 修改文件的 Prettier 检查和 `git diff --check` 通过。
- 目标地址为 `https://bloomtiger.pages.dev`。以上为本地准备与验证记录，不代表该名称已获分配、Cloudflare 构建成功或生产站已上线；线上验收按 `cloudflare-deployment.md` 执行。
