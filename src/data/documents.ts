import type { AppId } from './apps';
import type { Language, documentKeys } from './site';

export type DocSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type DocumentContent = {
  title: string;
  lead: string;
  sections: DocSection[];
};

export type AppDocuments = Record<
  Language,
  Record<(typeof documentKeys)[number], DocumentContent>
>;

const hdiaryDocuments: AppDocuments = {
  zh: {
    privacy: {
      title: 'HDiary 隐私政策',
      lead: '快乐日记帮助你记录与回顾生活中的快乐时刻。这份政策说明 App 如何处理你的记录、系统服务和你主动提供的支持信息。',
      sections: [
        {
          id: 'scope',
          title: '日记属于你的私人空间',
          paragraphs: [
            'HDiary 不要求你注册开发者运营的账号，也不通过开发者的服务器保存你的日记。App 使用设备上的数据存储与 Apple 的 iCloud／CloudKit 服务。官网的访问数据另见网站隐私说明。',
          ],
        },
        {
          id: 'stored-data',
          title: 'App 处理哪些内容',
          paragraphs: [
            'App 保存你创建或选择加入的内容，包括记录的标题、正文、日期、评分、照片、标签，以及人物的姓名、昵称、备注和头像。你选择的图片可能保留原文件所含的元数据。',
            '为了整理和回顾记录，App 还保存记录标识、关联关系，以及部分记录的浏览次数和最近浏览时间。主题、应用锁和部分订阅状态等偏好保存在设备的应用设置中。',
          ],
        },
        {
          id: 'icloud',
          title: '设备存储与 iCloud 同步',
          paragraphs: [
            '日记数据保存在设备上，并配置为通过你 Apple 账户下的 CloudKit 私有数据库同步。同步是否可用取决于你的 iCloud 设置、账户状态、网络和可用储存空间。主 App 与小组件也会在设备上的共享容器内交换显示所需的数据。',
            'Apple 提供 iCloud 服务并适用其隐私政策与服务条款。HDiary 没有让开发者远程浏览你私人日记的管理后台。同步需要时间，可用云端空间取决于你的 iCloud 方案；数据在 Apple 服务中的保护方式以 Apple 的说明为准。',
          ],
        },
        {
          id: 'permissions',
          title: '你选择使用的系统能力',
          paragraphs: [
            '这些能力用于你主动使用的功能。你可以通过 App 或相应的系统设置管理它们。',
          ],
          bullets: [
            '照片：通过系统照片选择器添加你选中的图片或人物头像。',
            '手记建议：在支持的设备上，你可以从 Apple 的建议选择器选择内容；选中的照片、地点、活动、媒体或心情等信息可以转成记录的一部分。',
            '通知：开启每日提醒时请求通知授权，并在设备上安排提醒。',
            '应用锁：使用 Apple 的设备身份验证能力，包括设备支持的生物识别或密码验证；App 不获取你的 Face ID 或 Touch ID 生物特征数据。',
          ],
        },
        {
          id: 'purchases',
          title: '购买与 Apple 服务',
          paragraphs: [
            'App 内购买通过 Apple 的 StoreKit 处理。HDiary 读取商品和订阅权限状态，以决定相应功能是否可用，并在设备保存部分状态。付款与 Apple 账户支付资料由 Apple 处理。',
            '加载你选择的系统建议或媒体、查看外部网页、使用 iCloud 或购买功能时，可能与对应的 Apple 或网页服务通信；这些服务适用各自的隐私政策。',
          ],
        },
        {
          id: 'diagnostics-support',
          title: '诊断与主动联系',
          paragraphs: [
            'HDiary 不接入广告跟踪或第三方行为分析服务。App 的运行和错误信息可能记入设备的系统日志，不会通过 App 自动上传到我们运营的分析服务器。',
            '你发送支持邮件时，我们会收到你的邮箱地址、邮件内容及你选择附带的截图、文件或日志，并用于处理你的问题。请在发送前检查附件，移除不希望分享的私人内容。我们不会要求你提供 Apple 账户密码。',
            '如果你希望删除之前主动发送的支持资料，可以通过同一支持邮箱提出请求，并说明相关邮件或附件。',
          ],
        },
        {
          id: 'data-controls',
          title: '导出、删除与保留',
          paragraphs: [
            '你可以在 App 设置中导出原始数据归档，或在相应页面删除记录、图片、人物和标签。导出的副本由你选择的保存位置或接收方管理。',
            '删除一条记录后，它会从日记列表隐藏，关联媒体会被移除；记录文字等数据可能继续保留，直到删除超过 30 天后，由 App 后续启动时的维护任务清理。清理与跨设备同步并非即时完成，不能将这段保留期视为可恢复的回收站。',
            '卸载 App 或关闭 iCloud 同步不等同于删除已有的 iCloud 数据。具体操作与导出限制请阅读“数据管理”。',
          ],
        },
        {
          id: 'contact-changes',
          title: '联系与政策更新',
          paragraphs: [
            '如对隐私或你主动发送的支持资料有疑问，请通过本页的支持邮箱联系我们。我们会在此页面公布政策更新，并注明更新日期。',
          ],
        },
      ],
    },
    data: {
      title: 'HDiary 数据管理',
      lead: '了解记录存在哪里、如何导出，以及删除和 iCloud 同步各自意味着什么。重要操作前，请先保存并检查你需要保留的副本。',
      sections: [
        {
          id: 'storage-sync',
          title: '查看存储与同步',
          paragraphs: [
            'HDiary 在设备保存记录，并使用你 Apple 账户下的 iCloud／CloudKit 私有数据库进行同步。App 设置提供储存空间用量与云端数据查看入口；云端列表用于查看已读取到的数据，不是强制同步按钮。',
            '正式版 App 没有独立的“仅本机／iCloud”切换开关。iCloud 是否启用由 Apple 的系统设置管理；账户、空间、网络和系统调度都会影响同步。',
          ],
        },
        {
          id: 'export',
          title: '导出原始数据',
          paragraphs: [
            '打开 HDiary 的设置，选择导出数据，再通过系统分享面板保存或发送归档。归档使用 Apple Archive 格式，包含从当前设备数据库读取的记录、人物、标签等 JSON 数据，以及可用的媒体文件。',
            '导出读取的是设备当前已有的数据。尚未同步到这台设备的内容可能不在归档中；仍保留在数据库中的已删除记录也可能包含在内。分享前请检查归档内容。',
            '目前没有将这份归档导回 HDiary 的导入或恢复入口。它不是 PDF、Markdown 日记，也不是承诺可一键恢复的备份格式。请检查文件确实保存成功，并保管在你信任的位置。',
          ],
        },
        {
          id: 'delete-records',
          title: '删除记录与附件',
          paragraphs: [
            '你可以从记录列表删除时刻，也可以在编辑记录时移除图片。人物和标签可在对应的资料页面管理；储存空间页面也提供媒体删除功能。',
            '删除时刻会立即将其从日记列表隐藏并移除关联媒体，但记录文字等数据可能继续保留。删除超过 30 天后，App 后续启动时的维护任务会尝试清理这些记录。清理可能受 App 是否运行、存储操作是否成功及 iCloud 同步状态影响。',
            'App 不提供以这段保留期为基础的“最近删除”恢复功能。请将删除视为不可撤销的操作，不要依赖保留中的数据进行恢复。',
          ],
        },
        {
          id: 'cache-copies',
          title: '缓存与已导出的副本',
          paragraphs: [
            '储存空间中的清理缓存功能清除 App 的临时文件，不等同于删除日记数据库或 iCloud 数据。',
            '你已经保存到文件 App、发给他人或上传到其他服务的导出文件、图片和截图，不会随 App 内删除而自动消失。请到相应位置单独管理。',
          ],
        },
        {
          id: 'icloud-removal',
          title: '管理 iCloud 中的数据',
          paragraphs: [
            '如需管理 iCloud 数据，请在设备的 Apple 账户与 iCloud 储存空间设置中查看 HDiary 的可用选项。系统页面名称和可执行操作可能随系统版本而不同；请认真阅读 Apple 显示的影响说明。',
            '关闭同步只影响后续同步行为，不能作为云端数据已经删除的证明。卸载 App 也不等同于清除 iCloud 中的记录。对多个设备或云端副本的删除，不能保证在同一时刻完成。',
            'HDiary 没有由开发者代为管理日记的账号后台。请通过 App 和 Apple 提供的系统入口管理私人记录；支持邮箱可以协助解释操作，但不能代替你操作 Apple 账户。',
          ],
        },
        {
          id: 'sync-help',
          title: '同步或导出遇到问题',
          paragraphs: [
            '先确认设备使用的是预期的 Apple 账户、HDiary 的 iCloud 权限可用、网络连接正常且 iCloud 有足够空间，再打开 App 等待系统同步。',
            '如果仍有差异，请先保留现有数据与导出副本，再联系支持，并说明 App 版本、设备系统、涉及的设备和问题出现时间。不要为了排查而直接卸载 App 或删除唯一的数据副本。',
          ],
        },
      ],
    },
    support: {
      title: 'HDiary 支持',
      lead: '使用快乐日记遇到问题，或想分享一个建议，都可以给我们写邮件。常见问题也可以从下面开始。',
      sections: [
        {
          id: 'contact',
          title: '联系开发者',
          paragraphs: [
            '请使用本页的支持邮箱，或在 App 的“设置 → 帮助与反馈”中打开邮件反馈。描述你希望完成的操作、实际发生的情况与复现步骤，会更便于我们理解问题。',
          ],
          bullets: [
            'App 版本，以及设备型号和系统版本。',
            '问题出现的时间与是否可以重复发生。',
            '经你检查并愿意分享的截图或错误提示。',
          ],
        },
        {
          id: 'sync',
          title: '不同设备的记录不一致',
          paragraphs: [
            '请检查各设备的 Apple 账户、iCloud 设置、可用空间与网络。HDiary 依赖 Apple 的同步服务，变化可能不会立刻出现在所有设备上。',
            '设置中的云端数据页面可以帮助查看已读取的云端内容。更多说明见“数据管理”；在排查前先保留已有数据。',
          ],
        },
        {
          id: 'export-delete',
          title: '如何导出或删除日记',
          paragraphs: [
            '设置中的导出入口可通过系统分享面板保存原始数据归档。目前没有归档导入或一键恢复功能。',
            '你可以在记录列表删除时刻。删除后的文字等数据可能保留到 30 天以上，并由后续启动维护清理；App 没有“最近删除”恢复入口。完整边界见“数据管理”。',
          ],
        },
        {
          id: 'subscription',
          title: '订阅、恢复购买与取消',
          paragraphs: [
            'HDiary 提供免费记录额度，以及用于解除记录数量限制的月度和年度订阅。具体商品、价格与购买条件以 App 内 Apple 购买页面为准。',
            '如果购买后功能未解锁，请确认使用正确的 Apple 账户，并尝试 App 设置中的“恢复购买”。它用于重新检查购买权限，不会恢复已删除的日记。',
            '你可以在 Apple 账户的订阅管理中查看或取消自动续订。退款申请由 Apple 的购买支持渠道处理，开发者无法直接更改 Apple 的付款记录。',
          ],
        },
        {
          id: 'system-features',
          title: '照片、提醒或手记建议不可用',
          paragraphs: [
            '添加照片使用系统照片选择器。每日提醒需要通知授权，也可能受系统专注模式和通知设置影响。',
            '手记建议依赖支持该能力的设备与系统环境，在部分环境下不会提供入口。你仍可以手动创建记录。应用锁使用设备的系统身份验证；请检查设备密码和生物识别设置。',
          ],
        },
        {
          id: 'privacy',
          title: '分享问题时保护自己的内容',
          paragraphs: [
            '请先检查邮件、截图与附件，遮盖私人日记、人物信息或不希望分享的内容。我们不会要求你提供 Apple 账户密码、设备密码或完整支付卡信息。',
            '我们没有可以远程浏览你日记的管理后台。定位问题时，只能使用你主动提供的信息；不需要发送完整日记即可描述的问题，请优先用文字说明。',
          ],
        },
      ],
    },
    terms: {
      title: 'HDiary 使用条款',
      lead: '这份说明帮助你了解 HDiary 的许可、购买与数据使用边界。App 的许可条款采用 Apple 标准最终用户许可协议。',
      sections: [
        {
          id: 'license',
          title: '应用许可',
          paragraphs: [
            'HDiary 的使用适用 Apple 标准最终用户许可协议（Standard EULA）。你可以通过本页链接阅读 Apple 的完整协议。本页对应用功能和支持方式的说明不替代该协议，也不限制适用法律赋予你的权利。',
          ],
        },
        {
          id: 'subscriptions',
          title: '订阅与付款',
          paragraphs: [
            'HDiary 提供免费记录额度。月度和年度自动续订订阅可解除记录数量限制；实际可购买商品、期限、当地价格及优惠以 Apple 购买页面显示为准。',
            '付款和续订通过 Apple 处理。你可以在 Apple 账户的订阅管理中取消自动续订，并通过 Apple 的支持渠道申请符合条件的退款。卸载 App 不会自动取消订阅。',
            'App 设置中的“恢复购买”用于重新检查有效购买权限。它不是日记恢复功能，也不会恢复已删除的内容。',
          ],
        },
        {
          id: 'your-content',
          title: '你保存与分享的内容',
          paragraphs: [
            '请只添加你有权使用的文字、图片及人物资料，并在向他人分享时尊重相关人员的隐私和权利。你决定记录什么，以及是否导出或发送给他人。',
            'HDiary 提供个人记录与回顾工具。评分、图表和记录建议用于帮助你整理自己的经历。',
          ],
        },
        {
          id: 'availability-data',
          title: '服务与数据边界',
          paragraphs: [
            'iCloud 同步、App Store 购买和手记建议等功能依赖 Apple 服务及设备环境；网络、账户、系统版本与储存空间可能影响它们的可用性。',
            '请自行保管重要内容和导出副本。当前原始归档没有 App 内导入恢复入口；删除操作也没有承诺可恢复的回收站。具体删除保留与同步行为请阅读“数据管理”和隐私政策。',
          ],
        },
        {
          id: 'contact-updates',
          title: '联系与更新',
          paragraphs: [
            '遇到使用或购买权限问题，请通过支持邮箱联系我们。购买交易、自动续订和退款也可通过 Apple 相应的账户与支持入口处理。',
            '我们可能随 App 功能变化更新本页说明，并在页面标注更新日期。Apple 标准 EULA 以 Apple 发布的协议为准。',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: 'HDiary Privacy Policy',
      lead: 'HDiary helps you record and revisit joyful moments. This policy explains how the app handles your entries, system services, and information you choose to send to support.',
      sections: [
        {
          id: 'scope',
          title: 'A private space for your journal',
          paragraphs: [
            'HDiary does not require an account operated by the developer and does not store your journal on a developer-operated server. The app uses storage on your device and Apple’s iCloud / CloudKit services. Visits to this website are covered separately by the website privacy notice.',
          ],
        },
        {
          id: 'stored-data',
          title: 'Information the app handles',
          paragraphs: [
            'The app stores content you create or choose to add: entry titles, text, dates, ratings, photos, tags, and people’s names, nicknames, notes, and avatars. Selected images may retain metadata contained in the original files.',
            'To organize and revisit entries, the app also stores identifiers, relationships between items, and view counts and last-viewed dates for some entries. Preferences such as appearance, app lock, and some subscription status information are stored in app settings on the device.',
          ],
        },
        {
          id: 'icloud',
          title: 'Device storage and iCloud sync',
          paragraphs: [
            'Journal data is stored on your device and configured to sync through a private CloudKit database associated with your Apple Account. Availability depends on your iCloud settings, account status, network, and available storage. The app and its widgets also exchange data needed for display through a shared container on the device.',
            'Apple provides iCloud under its own privacy policy and service terms. HDiary has no administrative service that lets the developer remotely browse your private journal. Sync takes time, available cloud storage depends on your iCloud plan, and Apple’s documentation explains how its services protect data.',
          ],
        },
        {
          id: 'permissions',
          title: 'System features you choose to use',
          paragraphs: [
            'These capabilities support features you choose to use. You can manage them in the app or the relevant system settings.',
          ],
          bullets: [
            'Photos: the system photo picker lets you add selected images or avatars.',
            'Journaling Suggestions: on supported devices, you can choose content from Apple’s suggestion picker. Selected photos, places, activities, media, or state-of-mind information can become part of an entry.',
            'Notifications: enabling a daily reminder requests notification permission and schedules a reminder on the device.',
            'App lock: Apple’s device authentication handles supported biometrics or passcode verification. The app does not receive your Face ID or Touch ID biometric data.',
          ],
        },
        {
          id: 'purchases',
          title: 'Purchases and Apple services',
          paragraphs: [
            'In-app purchases are handled by Apple’s StoreKit. HDiary reads product and subscription entitlement information to determine feature access and stores some status information on the device. Apple handles payments and Apple Account payment information.',
            'Loading system suggestions or media you select, opening external pages, using iCloud, and making purchases may involve communication with the relevant Apple or website services, which have their own privacy policies.',
          ],
        },
        {
          id: 'diagnostics-support',
          title: 'Diagnostics and contacting support',
          paragraphs: [
            'HDiary does not integrate advertising tracking or third-party behavioral analytics services. Operational and error information may be written to system logs on the device; the app does not automatically upload those logs to an analytics server operated by us.',
            'If you email support, we receive your email address, message, and any screenshots, files, or logs you choose to attach, and use them to address your request. Review attachments and remove private content you do not wish to share. We will not ask for your Apple Account password.',
            'To request deletion of information you previously sent to support, contact the same support email and identify the relevant messages or attachments.',
          ],
        },
        {
          id: 'data-controls',
          title: 'Export, deletion, and retention',
          paragraphs: [
            'You can export a raw data archive in app settings and delete entries, images, people, and tags from their respective screens. Exported copies are managed by the destination or recipient you choose.',
            'Deleting an entry hides it from the journal list and removes its associated media. Text and other entry data may remain until a maintenance task runs on a later app launch after more than 30 days have passed since deletion. Cleanup and cross-device sync are not immediate, and this retention period is not a recoverable trash feature.',
            'Uninstalling the app or turning off iCloud sync does not by itself delete existing iCloud data. Read Data Management for instructions and export limitations.',
          ],
        },
        {
          id: 'contact-changes',
          title: 'Contact and policy updates',
          paragraphs: [
            'For questions about privacy or information you have sent to support, contact the support email on this page. Policy updates will be published here with an updated date.',
          ],
        },
      ],
    },
    data: {
      title: 'HDiary Data Management',
      lead: 'Understand where entries are stored, how to export them, and what deletion and iCloud sync mean. Before an important change, save and check copies of anything you want to keep.',
      sections: [
        {
          id: 'storage-sync',
          title: 'Storage and sync',
          paragraphs: [
            'HDiary stores entries on your device and uses a private iCloud / CloudKit database associated with your Apple Account for sync. App settings include storage usage and cloud data views. The cloud list shows data that has been retrieved; it is not a force-sync control.',
            'The released app does not have a separate local-only / iCloud switch. Apple’s system settings control whether iCloud is enabled. Your account, storage, network, and system scheduling affect sync.',
          ],
        },
        {
          id: 'export',
          title: 'Export raw data',
          paragraphs: [
            'Open HDiary settings, choose the data export option, and use the system share sheet to save or send the archive. The Apple Archive file contains JSON data for entries, people, and tags read from the current device database, together with available media files.',
            'An export reads data currently present on that device. Content that has not yet synced to it may be missing, while deleted entries still retained in the database may be included. Check the contents before sharing.',
            'There is currently no in-app import or restore option for this archive. It is not a PDF or Markdown journal, and it is not a backup format with a promised one-step restore. Check that the file was saved successfully and keep it in a location you trust.',
          ],
        },
        {
          id: 'delete-records',
          title: 'Delete entries and attachments',
          paragraphs: [
            'You can delete moments from the entry list and remove images while editing an entry. Manage people and tags in their respective library screens. Storage usage also provides a media deletion option.',
            'Deleting a moment immediately hides it from the journal list and removes associated media, but text and other entry data may remain. Once more than 30 days have passed, a maintenance task on a later app launch attempts to remove the retained entry. Cleanup can be affected by whether the app runs, whether storage operations succeed, and iCloud sync status.',
            'The app has no Recently Deleted recovery feature based on this retention period. Treat deletion as irreversible and do not rely on retained data for recovery.',
          ],
        },
        {
          id: 'cache-copies',
          title: 'Cache and exported copies',
          paragraphs: [
            'Clearing the cache in storage usage removes temporary app files. It does not delete the journal database or iCloud data.',
            'Exports, images, or screenshots you have saved to Files, sent to someone else, or uploaded to another service do not disappear when you delete content in HDiary. Manage those copies at their destinations.',
          ],
        },
        {
          id: 'icloud-removal',
          title: 'Manage data in iCloud',
          paragraphs: [
            'To manage iCloud data, review the options available for HDiary in your device’s Apple Account and iCloud storage settings. Names and available actions can differ by system version. Read Apple’s explanation of the effects before proceeding.',
            'Turning off sync affects subsequent syncing; it is not proof that cloud data has been deleted. Uninstalling the app also does not clear entries from iCloud. Deletion across devices and cloud copies is not guaranteed to finish at the same time.',
            'HDiary has no developer-operated account service for managing your journal. Use the app and Apple’s system controls to manage private entries. Support can explain the process but cannot operate your Apple Account for you.',
          ],
        },
        {
          id: 'sync-help',
          title: 'If sync or export is not working',
          paragraphs: [
            'Check that you are using the intended Apple Account, iCloud access for HDiary is available, the network is working, and iCloud has enough space. Then open the app and allow time for the system to sync.',
            'If differences remain, preserve the existing data and any exports before contacting support. Include the app version, device and system versions, affected devices, and when the issue occurred. Do not uninstall the app or delete your only copy as a troubleshooting step.',
          ],
        },
      ],
    },
    support: {
      title: 'HDiary Support',
      lead: 'Email us if something is not working or you have an idea to share. These answers are a useful place to start.',
      sections: [
        {
          id: 'contact',
          title: 'Contact the developer',
          paragraphs: [
            'Use the support email on this page, or open email feedback from Settings → Help and Feedback in the app. Describe what you were trying to do, what happened, and how to reproduce it.',
          ],
          bullets: [
            'The app version, device model, and system version.',
            'When the issue occurred and whether it happens again.',
            'Screenshots or error messages you have reviewed and are comfortable sharing.',
          ],
        },
        {
          id: 'sync',
          title: 'Entries differ between devices',
          paragraphs: [
            'Check each device’s Apple Account, iCloud settings, available space, and network. HDiary relies on Apple’s sync service, so changes may not appear on every device immediately.',
            'The cloud data screen in settings can help you inspect retrieved cloud content. See Data Management for more details, and preserve your existing data before troubleshooting.',
          ],
        },
        {
          id: 'export-delete',
          title: 'Export or delete your journal',
          paragraphs: [
            'The export option in settings uses the system share sheet to save a raw data archive. There is currently no archive import or one-step restore feature.',
            'You can delete moments from the entry list. Text and other data may remain for more than 30 days before cleanup on a later app launch. The app has no Recently Deleted recovery screen. See Data Management for the full limitations.',
          ],
        },
        {
          id: 'subscription',
          title: 'Subscriptions, restoring purchases, and cancellation',
          paragraphs: [
            'HDiary offers a free entry allowance and monthly or yearly subscriptions that remove the entry limit. Available products, prices, and purchase conditions are shown in Apple’s in-app purchase screen.',
            'If a purchase has not unlocked access, check that you are using the correct Apple Account and try Restore Purchases in app settings. This checks purchase entitlements; it does not restore deleted journal entries.',
            'View or cancel automatic renewal in your Apple Account’s subscription settings. Refund requests are handled through Apple’s purchase support. The developer cannot directly change Apple’s payment records.',
          ],
        },
        {
          id: 'system-features',
          title: 'Photos, reminders, or suggestions are unavailable',
          paragraphs: [
            'Adding photos uses the system photo picker. Daily reminders require notification permission and may be affected by Focus and system notification settings.',
            'Journaling Suggestions depends on supported devices and system environments, and its entry point is unavailable in some environments. You can still create entries manually. App lock uses system device authentication; check the device’s passcode and biometric settings.',
          ],
        },
        {
          id: 'privacy',
          title: 'Protect private content when requesting help',
          paragraphs: [
            'Review emails, screenshots, and attachments, and hide journal text, people’s details, or anything else you do not wish to share. We will not ask for your Apple Account password, device passcode, or full payment card information.',
            'We have no administrative service for remotely browsing your journal. Troubleshooting relies on information you choose to send. If you can describe the issue in words, you do not need to send your complete journal.',
          ],
        },
      ],
    },
    terms: {
      title: 'HDiary Terms of Use',
      lead: 'This page explains HDiary’s license, purchases, and data limitations. The app is licensed under Apple’s Standard End User License Agreement.',
      sections: [
        {
          id: 'license',
          title: 'App license',
          paragraphs: [
            'Use of HDiary is subject to Apple’s Standard End User License Agreement (Standard EULA), available through the link on this page. This explanation of features and support does not replace that agreement or limit rights granted by applicable law.',
          ],
        },
        {
          id: 'subscriptions',
          title: 'Subscriptions and payment',
          paragraphs: [
            'HDiary includes a free entry allowance. Monthly and yearly auto-renewable subscriptions remove the entry limit. Available products, periods, local prices, and offers are those displayed on Apple’s purchase screen.',
            'Apple handles payment and renewal. You can cancel automatic renewal through your Apple Account’s subscription settings and request eligible refunds through Apple support. Uninstalling the app does not cancel a subscription.',
            'Restore Purchases in app settings checks valid purchase entitlements again. It is not a journal recovery feature and does not restore deleted content.',
          ],
        },
        {
          id: 'your-content',
          title: 'Content you save and share',
          paragraphs: [
            'Only add text, images, and people’s information that you have the right to use. Respect others’ privacy and rights when sharing. You decide what to record and whether to export or send it to someone else.',
            'HDiary is a personal recording and reflection tool. Ratings, charts, and entry suggestions help organize your experiences.',
          ],
        },
        {
          id: 'availability-data',
          title: 'Availability and data limitations',
          paragraphs: [
            'Features including iCloud sync, App Store purchases, and Journaling Suggestions rely on Apple services and the device environment. Networks, accounts, system versions, and storage can affect availability.',
            'Keep your important content and exported copies safe. The current raw archive has no in-app import or restore option, and deletion has no guaranteed recoverable trash feature. Read Data Management and the privacy policy for deletion retention and sync behavior.',
          ],
        },
        {
          id: 'contact-updates',
          title: 'Contact and updates',
          paragraphs: [
            'Contact the support email for app or purchase-access issues. Apple’s account and support tools also handle purchase transactions, automatic renewal, and refund requests.',
            'We may update these explanations as app features change and will show the updated date on this page. Apple’s published Standard EULA remains the source of its license terms.',
          ],
        },
      ],
    },
  },
};

// Each app must explicitly provide its own localized policy and support documents.
export const appDocuments: Record<AppId, AppDocuments> = {
  hdiary: hdiaryDocuments,
};

export const websitePrivacy: Record<'zh' | 'en', DocumentContent> = {
  zh: {
    title: '网站隐私说明',
    lead: '这份说明适用于花花虎工作室官网。各 App 的数据处理方式请阅读对应的 App 隐私政策。',
    sections: [
      {
        id: 'hosting',
        title: '网站托管与安全日志',
        paragraphs: [
          '本站通过 Cloudflare Pages 提供静态页面，并保留 GitHub Pages 兼容入口。访问页面时，相应托管服务可能处理 IP 地址、请求信息及安全日志，以交付网站和保障安全。相关处理适用 Cloudflare 或 GitHub 各自的隐私政策。',
        ],
      },
      {
        id: 'analytics-cookies',
        title: '分析、广告与 Cookie',
        paragraphs: [
          '本站没有接入我们自行运营的访问分析、第三方广告跟踪或营销 Cookie。你无需注册账号即可阅读页面。托管服务为交付网站和保障安全而进行的处理，仍适用其自身政策。',
        ],
      },
      {
        id: 'email',
        title: '你主动发送的信息',
        paragraphs: [
          '点击邮箱链接会打开你的邮件应用。只有在你发送邮件后，我们才会收到邮件地址、正文和你选择提供的附件，并使用这些信息答复你的问题或处理请求。请在发送前检查是否包含不希望分享的个人内容。',
        ],
      },
      {
        id: 'external-links',
        title: '外部链接',
        paragraphs: [
          '本站提供 App Store、Apple 协议等外部链接。访问这些网站后，对方会依据自己的隐私政策处理访问数据。本站的隐私说明不替代它们的政策。',
        ],
      },
      {
        id: 'contact-changes',
        title: '联系与更新',
        paragraphs: [
          '如对本站隐私或你主动发来的信息有疑问，请通过支持邮箱联系我们。网站服务变化时，我们会更新本页及其日期。',
        ],
      },
    ],
  },
  en: {
    title: 'Website Privacy Notice',
    lead: 'This notice applies to the Huahuahu Studio website. For an app’s data practices, read its own privacy policy.',
    sections: [
      {
        id: 'hosting',
        title: 'Hosting and security logs',
        paragraphs: [
          'This website serves static pages through Cloudflare Pages and retains a GitHub Pages compatibility site. When you visit, the relevant hosting provider may process IP addresses, request information, and security logs to deliver and secure the website. That processing is governed by Cloudflare’s or GitHub’s own privacy policy.',
        ],
      },
      {
        id: 'analytics-cookies',
        title: 'Analytics, advertising, and cookies',
        paragraphs: [
          'This site does not integrate analytics operated by us, third-party advertising tracking, or marketing cookies. You do not need an account to read the pages. Processing by the hosting service to deliver and secure the website remains subject to that service’s own policies.',
        ],
      },
      {
        id: 'email',
        title: 'Information you choose to send',
        paragraphs: [
          'An email link opens your mail app. Only after you send a message do we receive your email address, message, and any attachments you choose to provide. We use that information to answer your question or address your request. Review it for personal content you do not wish to share before sending.',
        ],
      },
      {
        id: 'external-links',
        title: 'External links',
        paragraphs: [
          'The site links to external destinations such as the App Store and Apple’s agreements. Those sites process visits under their own privacy policies. This notice does not replace their policies.',
        ],
      },
      {
        id: 'contact-changes',
        title: 'Contact and updates',
        paragraphs: [
          'Contact the support email with questions about website privacy or information you have sent us. We will update this notice and its date when website services change.',
        ],
      },
    ],
  },
};
