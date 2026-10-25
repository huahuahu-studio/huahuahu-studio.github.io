# HDiary 官网内容证据

核对日期：2026-10-25（Asia/Shanghai）。本次只读检查 `HHappyDocs`，未修改该仓库，未构建或运行 Xcode 项目。官网正文位于 `src/data/documents.ts`。以下是维护内容时使用的证据与边界，不作为用户页面正文。

## 版本与证据范围

- 实时查询 Apple Lookup：`https://itunes.apple.com/lookup?id=6470147729&country=us`，返回 App `6470147729`、版本 `1.16`、发布日期 `2026-10-12T21:45:35Z`、最低系统 `26.0`、语言 `EN` / `ZH`。商店描述列出记录、标签、人物、评分、照片、图表和小组件，并链接 Apple Standard EULA。该查询不证明所有商店区域具有相同可用性，也不包含实时订阅价格。
- `HHappyDocs/release/1.16/README.md:3` 记录 1.16（2）签名包来自提交 `17d0d9d628d533ebb2e28515154d26e17653649c`。`:15`、`:18` 是 2026-10-12 的提审历史快照，不能用它代替当前 App Store 状态。
- 当前本地主分支提交：`aef483580c0f377c864429670a25ae707ac62b7e`。`HHappyDocs/HDiary/Configs/base.xcconfig:11-12` 为 1.17（3），这不是当前公开商店版本。
- 对 1.16 源提交与当前 HEAD 执行 `git diff --exit-code`，以下内容无差异：`HDiaryModel`、全部 `HDiaryAppFeature/Settings`、`HDiaryIAP`、`AppConstants.swift`、新增记录入口、手记建议、通知实现、`PrivacyInfo.xcprivacy`、App entitlements。四页政策依赖的主要处理行为因此不是 1.17 新功能。
- 1.16 之后的差异涉及人物头像编辑流程、详情图片布局及预览、菜单样式、小组件显示和发布记录。官网不要据本地主分支宣传这些改动已上架。特别是新的头像裁剪交互不能当作 1.16 能力；本页只说明使用选中图片作为头像。
- 本次为静态源码与公开商店资料核对，没有验证实体设备上的全部同步、删除、权限与导出流程，也没有访问用户私人 CloudKit 数据。

## 数据存储与处理

| 事实                                                                                                                | 源文件与行号                                                                              | 文案边界                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 核心模型为 Tag、Moment、MediaItem、Participant；主数据库为 App Group 内的 SwiftData store，配置 CloudKit 私有数据库 | `HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/Model/Container/ModelContainer.swift:11-20` | 可写设备保存、用户 Apple 账户的私有 CloudKit 数据库。不要写完全不经过网络。                      |
| 正式构建始终选 iCloudContainer；localContainer 选择仅存在于 DEBUG 分支                                              | 同文件 `:63-75`                                                                           | 不要写 App 内存在用户可切换的“仅本机模式”或同步开关。系统 iCloud 设置与 App 内设置必须区分。     |
| App Group 与 iCloud container 标识                                                                                  | `HHappyDocs/HDiaryLibrary/Sources/HDiaryConstants/AppConstants/AppConstants.swift:10-16`  | 可说明 App 与 Widget 共享显示所需的本机数据。不要把 App Group 当成向其他开发者 App 共享。        |
| 记录保存标题、正文、日期、媒体、人物、标签、评分、删除标记、最近浏览时间和浏览次数                                  | `HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/Model/Moment.swift:17-40`                   | “不处理任何个人信息／任何使用信息”不成立。浏览信息存在于用户的数据模型内，不等同于远端分析服务。 |
| 人物保存姓名、昵称、头像、备注与关联记录                                                                            | `HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/Model/Participant.swift:15-24`              | 这些是用户录入或选择的资料，未发现自动读取通讯录实现。                                           |
| Privacy manifest 声明收集数据类型为空、不跟踪，声明 UserDefaults required-reason API                                | `HHappyDocs/PrivacyInfo.xcprivacy:5-17`                                                   | 这是项目声明，不代表 Apple／托管服务无任何数据处理。不能以 manifest 代替完整政策。               |

运行时代码和依赖检查未发现广告、Firebase、Sentry、Crashlytics、第三方行为分析 SDK 或开发者自营日记上传服务。相关依赖在 `HHappyDocs/HDiaryLibrary/Package.swift:59-66` 与 `HHappyDocs/HSharedCode/Package.swift:43-45`。这支持当前文案中的“不接入广告跟踪或第三方行为分析服务”；未来新增网络 SDK 或后端时需要重新核对。不要承诺端到端加密、开发者绝对无法在任何情况下接触任何资料、无限云空间、无数据丢失或实时一致性。

## 系统能力与第三方通信

| 能力              | 源文件与行号                                                                                                                                                  | 可以表达的事实                                                                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 照片选择          | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Moments/MomentEditView/Media/MomentMediaEditView.swift:54-59`、`:90-106`                                   | 系统 PhotosPicker，当前普通图片添加入口匹配 `.images`，加载用户选中项并保存其原数据和缩略图。不宣传直接摄像、视频录制或自动读取整个相册。原始图片元数据可能保留。 |
| 手记建议          | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Moments/SuggestedMoment/MomentSuggestionPicker.swift:18-22`；`MomentSuggestionUtil.swift:22-47`、`:66-108` | 用户选择建议后转换内容，支持部分照片、地点、活动、媒体、心情等内容；不能说后台持续读取这些敏感数据。                                                              |
| 建议资源读取      | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Moments/SuggestedMoment/MomentSuggestionUtil.swift:125-127`、`:198-200`、`:270-272`                        | 通过系统建议提供的 URL 读取 artwork／app icon 等；源码没有约束所有 URL 都是本地文件，因此不要说除 CloudKit 外从不访问任何网络。                                   |
| 通知              | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Common/Notification/LocalNotificationManager.swift:57-82`、`:100-102`                                      | 用户开启每日提醒时请求通知授权并建立本地重复通知，可移除提醒。                                                                                                    |
| Face ID／设备认证 | `HHappyDocs/HDiary/InfoPlist.xcstrings:38-50`；`HHappyDocs/HSharedCode/Sources/HUIComponent/HSwiftUI/LocalAuth/LocalAuthModifier.swift:115-129`               | `.deviceOwnerAuthentication` 系统验证；不读取生物特征。App 锁不等于自行加密数据库，也不意味着 Widget 从不显示内容。                                               |
| entitlement       | `HHappyDocs/HDiary/HDiary.entitlements:9-25`                                                                                                                  | CloudKit、Journaling Suggestions、App Group 已声明；不能只因存在 remote notification 权限而宣传服务器推送服务。                                                   |

当前源码未发现直接相机、麦克风、通讯录或持续定位权限请求。共享库中存在高德／百度地图 URL opener，但 HDiary 的当前 source import／调用与依赖路径未使用它们；不应把共享库内未使用的工具说成 App 的第三方地图数据共享。

## 导出、删除与同步

| 事实                                                                                        | 源文件与行号                                                                                                                                                                                                                                                                                    | 必须保留的边界                                                                                               |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 设置中有导出、储存用量、云端数据入口                                                        | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/SettingsView.swift:39-43`                                                                                                                                                                                                           | 没有正式版一键清空全部数据或导入入口。                                                                       |
| 导出使用系统 ShareLink 与 RawDataCollection                                                 | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/Data/ExportDataCell.swift:21-32`                                                                                                                                                                                                    | 用户决定保存位置／接收方，不是自动上传给开发者。                                                             |
| Apple Archive 包含 JSON 和媒体文件                                                          | `HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/Export/DataExport.swift:22-26`、`:83-150`                                                                                                                                                                                                         | 不写 PDF、Markdown、ZIP 或可以导回 App 的完整备份。读取当前 modelContext，不能保证尚未下载数据在内。         |
| 导出枚举 Moment 没有过滤 markedAsDelete；Moment encode 包含 title/content，但不编码删除标记 | 同导出文件 `:85-91`；`HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/Model/Moment.swift:154-168`                                                                                                                                                                                                  | 已从列表删除但未清理的文字可能仍出现在导出中。分享前检查尤其重要。                                           |
| 导出错误只记录，之后仍返回目标 URL                                                          | 同导出文件 `:150-156`                                                                                                                                                                                                                                                                           | 不保证按钮触发即代表归档完整成功；提醒用户检查保存文件。                                                     |
| 列表删除调用 markAsDelete                                                                   | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Moments/MomentList/Section/Section.swift:36-41`                                                                                                                                                                                              | 列表隐藏不是立即从底层存储彻底清除。                                                                         |
| markAsDelete 清人物／标签关联、删除媒体、保存删除标记日期                                   | `HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/Model/Moment.swift:93-98`、`:114-118`、`:128-134`                                                                                                                                                                                                 | title/content 仍保留。媒体与文字并不遵循同一删除阶段。没有恢复 UI；不要称为“30 天回收站”。                   |
| 默认 30 天阈值，启动维护清理比阈值更早的已删除记录                                          | `HHappyDocs/HDiaryLibrary/Sources/HDiaryModel/ModelOperation/StartupDataMaintenanceService.swift:27-29`、`:58-64`、`:148-162`；`HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/BaseTabView.swift:50-57`                                                                                      | 应写“超过 30 天后，由后续启动维护尝试清理”，不能写第 30 天精确删除，不能承诺同时从云端、备份及所有设备消失。 |
| 人物／标签／媒体有删除实现                                                                  | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Library/Participant/ParticipantDetail/ParticipantDetailView.swift:136-152`；`Library/Tags/TagList/AllTagsView.swift:94-98`；`Settings/Data/StorageUsage/CloudStorage/ByMedia/MediaItemDeleteView.swift:75-77`（后两项同属 HDiaryAppFeature） | 不把全部对象删除都描述成 30 天软删除；该行为特指 Moment。                                                    |
| 清理缓存仅删除 temporaryDirectory 内容                                                      | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/Data/StorageUsage/LocalCacheView.swift:56-59`、`:106-123`                                                                                                                                                                           | 不是删除日记／iCloud 数据。导出副本应到用户选择的位置另行处理。                                              |
| 云端数据使用 privateCloudDatabase 查询                                                      | `HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/Data/CloudData/CloudDataDetail/CloudDataModel.swift:15-22`、`:85-112`                                                                                                                                                               | 云端查看不是强制同步、云端恢复或删除控制。                                                                   |

系统层面的 iCloud 储存空间管理应按实际系统显示的选项操作，官网不固定承诺某一系统版本的精确按钮路径。卸载与关闭同步不等价于删除云端数据。没有证据支持开发者提供远程账号清除服务。App 未建立开发者账号，所以不虚构“注销账号”入口。

## 诊断与支持

- 公开邮箱：`huahuahuapple@outlook.com`，见 `HHappyDocs/websites/hdiary/index.html:53`、`:64`；App 同样使用该邮箱，见 `HHappyDocs/HSharedCode/Sources/HUIComponent/HSwiftUI/HFeedback/HFeedback.swift:22-33`。
- App 内反馈：`HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/HelpAndFeedback/HelpAndFeedbackView.swift:22-25` 调用邮件反馈，邮件主题包含 App 名和版本。没有自动附带全库或后台发送邮件。
- 系统日志：`HHappyDocs/HDiaryLibrary/Sources/HDiaryConstants/Log/DiagnosticLogging.swift:23-37` 将诊断开启时的信息提升为 notice，默认开关读取缺省为 false（`:96-100`）。错误日志并不由此开关关闭。
- 日志读取与导出实现：`HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/Diagnostics/DiagnosticLogCollector.swift:11-35` 读取当前进程 OSLog；`DiagnosticLogReport.swift:29-42` 报告时间、分类、日志消息，明确不包括 Widget 日志；`DiagnosticLogView.swift:50-59` 使用 ShareLink。
- 重要可见性边界：虽然存在 `DiagnosticLogEntryCell` 和 destination，当前设置／帮助页未挂载该 cell，因此用户文档不声称能从某条既定菜单路径开启／导出诊断。仅说明设备日志与用户主动发来的资料。
- 不承诺日志“绝对匿名”或“一定不含私人内容”；应提醒用户检查共享文件。也不编造回复 SLA、支持资料固定保留天数或开发者可以查看私人日记的能力。
- 支持资料删除请求可由现有公开支持邮箱接收，正文说明这一请求渠道，不保证具体处理时限或所有邮件服务副本立即删除。源码仅能证明邮件反馈入口，不能核实邮箱实际清理周期、法律保留依据或运营保留规则。因此正文未自行承诺“仅在处理支持请求和必要记录期间保留”；若站点运营者采纳这一原则，需要同时按该原则管理支持邮箱。

## 条款与订阅

- Apple Standard EULA：`HHappyDocs/HDiaryLibrary/Sources/HDiaryAppFeature/Settings/HelpAndFeedback/TermOfUseCell.swift:18`，URL 为 `https://www.apple.com/legal/internet-services/itunes/dev/stdeula/`。实时公开商店描述同样链接该协议。官网“条款”提供使用说明并链接该协议，不另造一个相互冲突的完整许可协议。
- 免费数量当前为 50：`HHappyDocs/HDiaryLibrary/Sources/HDiaryConstants/AppConstants/AppConstants.swift:20-22`。`AddMomentNavigationView.swift:23-41` 按功能权限与当前数量控制新增流程。官网文档采用“免费记录额度”，避免把数量写死在每页。
- 月／年商品 ID：`HHappyDocs/HDiaryLibrary/Sources/HDiaryIAP/Model/RecordSubscription.swift:20-24`。购买页面使用 `SubscriptionStoreView`，见同模块 `View/RecordSubscriptionView.swift:25-33`。
- 本地 StoreKit 配置有年／月 recurring subscription：`HHappyDocs/HDiary/IAP/HDiary.storekit:96-100`、`:126-130`。其中 `displayPrice` 是本地测试配置，不能据此发布当前各区实际价格、免费试用或优惠承诺。
- Restore Purchases 调用 `AppStore.sync()`，见 `HHappyDocs/HDiaryLibrary/Sources/HDiaryIAP/View/RestoreCell.swift:45-59`，它不是恢复日记。
- StoreKit 交易与状态处理见 `HHappyDocs/HDiaryLibrary/Sources/HDiaryIAP/HDiaryShop.swift:20-31`、`:35-63`；不显示开发者直接处理付款卡信息的实现。
- 不宣传永久买断、Family Sharing、订阅到期即删除记录、退款保证或 1.17 TestFlight 权限等未被当前产品正文支持的结论。页面把实际价格、期限和条件交给 Apple 购买确认页。

## 旧政策与新版差异

`HHappyDocs/websites/hdiary/privacy.html:39-41` / `:48-50` 旧版同时写“使用 CloudKit 因此不收集用户信息”“不向任何第三方分享”和“可能收集匿名使用数据”。这些表述混淆本机处理、Apple 同步、开发者收集和匿名分析，也没有描述支持邮件、删除保留、导出及权限。

新版替换为具体的数据类型与流向，说明本机日志及用户自愿提供的信息，不继续保留没有对应自动分析实现的模糊“可能收集匿名使用数据”，也不把 CloudKit 当作不处理数据的证明。

App 当前隐私 URL 写死为 `https://app.tigerpro.org/hdiary/privacy.html`，见 `HHappyDocs/HDiaryLibrary/Sources/HDiaryConstants/AppConstants/AppConstants.swift:13`。这次只建立新官网文档，不修改 App 或旧站；上线时需保留旧路径可访问或另行安排重定向／后续 App URL 更新，不能默认为 App 已经指向新站。

## 网站隐私证据与维护要求

- GitHub 官方说明：`https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages`。2026-10-25 通过其公开 article API 读取正文，Data collection 段明确写：访问 GitHub Pages 时，无论是否登录 GitHub，访客 IP 地址都会为安全目的记录和保存。
- 因此网站正文应说明 GitHub Pages 的安全日志，不能宣传“网站完全不收集任何数据”。应提供 GitHub Privacy Statement 链接供用户查看：`https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement`。
- 此次网站方案为静态 Astro / GitHub Pages，未加入自建分析服务、第三方广告跟踪、营销 Cookie 或账号表单。最终交付前仍需检查合并后的页面、脚本与资源，确认没有新加入的分析标签、外部嵌入或远程字体。以后新增这些能力要同步修改网站政策。
- 邮箱链接仅打开邮件应用；邮件发送后由收件人及邮件服务处理用户主动提供的资料。不要把“点击邮件链接”说成已经上传日记，也不要宣称邮件服务完全不处理消息。
- 中英文各文档的 section id 保持一致；正文仅纯文本，邮箱、Apple EULA、GitHub Privacy Statement 等实际链接由页面模板另行提供。

## 本次验证

- HHappyDocs 工作区开始和结束时均干净；未发外部消息，未执行代码构建或用户数据操作。
- 核对了当前公开商店版本与 1.16 发布源码；主要政策实现与当前 main 的指定目录无差异。
- 已使用 Node 24.18.0 直接加载 TypeScript 数据：共 10 份文档，section id 唯一、格式有效、中英文一致，标题／段落非空；lead 不含模板已显示的重复更新日期。完整 Astro 构建与站点链接检查由官网集成流程执行。
