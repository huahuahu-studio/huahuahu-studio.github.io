# ClipMate 网站内容依据

2026-11-02，基于 ClipMate 源码 `6dda0c1` 和当前 App Store Connect 状态。未将 App 源码复制到网站仓库。

- 剪贴板、表示与本地预览：`Packages/ClipboardCore`，特别是 `PreviewFileWriter.swift`。文本和图片可能写入临时目录；关闭预览没有保证立即删除，因此政策明确说明这一点。
- 主题和外观：`Packages/AppPreferences/.../PreferencesStore.swift` 使用本地 UserDefaults。
- 网页测试：`WebPasteView.swift` 加载随 App 打包的 `ClipboardResources.paste`。不是远程网站，也不提供开发者剪贴板上传服务。
- 购买：`Packages/AppPurchases` 使用 StoreKit 2 的已验证交易；商品是一次性非消耗型 Pro，不是订阅。不使用开发者购买服务器。
- Pro 尚未正式发布，支持和条款使用“包含 Pro 的版本”表述；产品页以已经存在的内容检查、UTType 与粘贴测试功能为主。
- 日志只描述设备诊断边界，不承诺 App 内所有内容从不触及磁盘，也不将系统服务、主动分享或支持邮件描述为完全不处理数据。
- 中国大陆已从 App 销售地区移除。香港、澳门、台湾保持原样；中文下载入口不指向大陆商店。
- 联系邮箱复用站点配置，不额外引入追踪脚本或表单服务。
- 图标由 App 的既有三个 SVG 图层与其琥珀色背景组合而成，属于静态品牌展示，不宣称是系统 Liquid Glass 渲染截图。

## 验证

- `npm run build`：28 个 HTML 页面。
- `npm run check`：760 个站内链接/资源、邮箱、翻译、锚点和 sitemap 检查通过。
- 浏览器检查产品页桌面布局及 390px 手机布局；产品页、支持页没有横向溢出。中文支持、英文隐私和语言切换均检查；预览截图保存在忽略的 `artifacts/clipmate/`。
- 正式上线、Git PR 合并、ASC URL 写入是独立阶段；本文件本身不证明部署已完成。
