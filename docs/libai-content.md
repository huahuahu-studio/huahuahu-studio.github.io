# 李白官网资料

2026-11-08 新增李白产品介绍及支持文档，使用现有 bloom tiger 品牌、邮箱与 Astro 模板。中英文各有产品、支持、隐私、数据管理与条款五页；另提供繁体支持与隐私两页。首页 App 列表保留 HDiary、ClipMate 并加入李白。

## 内容依据

- 李白源码：`huahuahu-studio/libai`，归档源码 `a4d839f75abddb6c65b82fbe7bfa00ceae35bc6d`（1.7 build 4）。
- 收藏同步：`Packages/LibaiModel/Sources/LibaiModel/Container.swift` 使用 Apple CloudKit 私有数据库。
- 主动反馈：`Packages/SettingsFeature/Sources/SettingsFeature/Setttings/FeedBack/Model/FeedbackSender.swift`；提交内容、设备型号、App 版本与日期。
- 原图：李白发布资料 `release/1.7/screenshots/raw/`，由对应源码的实际模拟器界面拍摄；网站仅等比缩至宽 600 像素并转为 WebP。图标来自当前 App Store 图标资源。
- 不承诺英文文学内容；英文产品页明确说明内容为中文。页面标注截图来自 1.7，功能以实际安装的商店版本为准。
- 未新增分析服务、账号系统、订阅或数据导出功能。

## 正式链接

- 产品：`https://bloomtiger.pages.dev/zh/apps/libai/`
- 简体支持：`https://bloomtiger.pages.dev/zh/apps/libai/support/`
- 简体隐私：`https://bloomtiger.pages.dev/zh/apps/libai/privacy/`
- 繁体支持：`https://bloomtiger.pages.dev/zh-Hant/apps/libai/support/`
- 繁体隐私：`https://bloomtiger.pages.dev/zh-Hant/apps/libai/privacy/`

繁体文档使用现有响应式样式，具有三语言对应链接与独立 canonical、HTML lang、Open Graph、sitemap 项。全站仍保留原中英文导航；指向简体页面的繁体文档链接明确标注语言。

## 验证

Node 24.22.1 下 `npm run build`、`npm run check` 通过：40 页、1117 个站内链接和资源，包含邮箱、锚点、语言页面、SEO 和 sitemap 检查。当前环境的浏览器控制不可用，未完成浏览器视觉验收；本地静态构建不代替生产部署与真实 HTTP 检查。生产验证回执保存于被忽略的 `artifacts/libai/`，相应 App Store 发布记录保存于李白仓库。
