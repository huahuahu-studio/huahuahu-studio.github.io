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
- 以上为本地准备与验证记录；实际生产部署结果见下一节。

## Cloudflare 生产部署验收

日期：2026-10-26。

- 实际生产地址：`https://bloomtiger.pages.dev`，项目名与预期一致，HTTPS 正常。
- `main` 的迁移提交为 `f475951a29499a34b5e48be6cc398e1fd6344b58`。Cloudflare 生产部署 `5810cdce-3335-4a23-ae8d-f514b0d5c27b` 关联该提交，状态为 success，耗时 32 秒。
- 云端日志确认 Node.js 24.22.1，依赖使用 `npm clean-install` 安装，构建命令为 `npm run build && npm run check`；静态构建与检查成功。
- 31 项线上 HTTP 检查通过：17 个正常 HTML 入口、13 项静态资源及 SEO 文件，以及 1 条不存在的路径。页面与资源返回 200，不存在的路径返回 404 并展示自定义页面。
- 线上 canonical、Open Graph、三组语言对应链接、16 条 sitemap URL 和 robots 中的 Sitemap 地址均使用正式域名。中英文网站隐私页包含两个托管服务及 Cloudflare 政策链接，HTML 未发现外部脚本。
- 浏览器从根入口按当前浏览器语言进入 `/en/`，切换中文后进入 `/zh/`。中文首页首屏图片正常加载，桌面页面宽度与视口均为 1680px，未发现横向溢出。
- GitHub Pages 兼容入口的构建与发布成功：[GitHub Actions run 40320365679](https://github.com/huahuahu-studio/huahuahu-studio.github.io/actions/runs/40320365679)。
- HTTP 检查通过本机配置的代理连接完成；本记录不代表已测试不同运营商网络或真机访问性能。
- 线上检查 JSON 和首页截图保存在本地忽略目录 `artifacts/cloudflare/`，未提交到公开仓库。
