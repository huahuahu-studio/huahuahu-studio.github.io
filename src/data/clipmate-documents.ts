import type { AppDocuments } from './documents';

export const clipmateDocuments: AppDocuments = {
  zh: {
    privacy: {
      title: 'ClipMate 隐私政策',
      lead: '这份政策说明剪贴调试如何处理剪贴板内容、本地设置、Apple 购买服务和你主动发送的支持信息。',
      updated: {
        zh: '更新于 2026 年 11 月 7 日',
        en: 'Updated November 7, 2026',
      },
      sections: [
        {
          id: 'scope',
          title: '适用范围',
          paragraphs: [
            'ClipMate 是检查和调试剪贴板的工具，不需要注册开发者运营的账户。我们没有用于接收、保存或远程浏览你剪贴板内容的开发者服务器。官网的访问处理另见网站隐私说明。',
          ],
        },
        {
          id: 'clipboard',
          title: '剪贴板与输入内容',
          paragraphs: [
            '当你使用剪贴板检查、刷新、粘贴或预览功能时，App 会在设备上读取和展示相应内容及其类型。剪贴板可能包含密码、个人信息或其他敏感内容，请用虚构样例排查问题。',
            '内置网页测试页随 App 打包，用于比较网页剪贴板和原生输入控件的行为。它没有将剪贴板内容上传给我们的功能。若你主动打开外部链接或使用系统分享，接收方会按其自身规则处理数据。',
          ],
        },
        {
          id: 'local-storage',
          title: '本地设置与预览文件',
          paragraphs: [
            '主题、外观等偏好保存在 App 的本地设置中。预览文本或图片时，App 可能在自身临时目录写入副本供系统预览；这些文件不承诺在关闭预览时立即删除，系统可在之后清理。',
            'ClipMate 不是剪贴板历史备份服务。系统剪贴板的保存、权限和通用剪贴板同步由 Apple 管理；本政策不改变其他 App 或系统服务的处理方式。',
          ],
        },
        {
          id: 'purchases',
          title: 'ClipMate Pro 与 Apple 服务',
          paragraphs: [
            '在包含 Pro 的版本中，购买及恢复由 Apple 的 App Store 与 StoreKit 处理。App 读取经过验证的交易与权益状态，以判断功能是否解锁。我们不接收你的支付卡资料或 Apple 账户密码，也没有自建的购买验证服务器。',
            'Apple 可能按其隐私政策处理购买、下载、诊断和你同意共享的信息。该处理与 ClipMate 向开发者上传剪贴板内容是不同的行为。',
          ],
        },
        {
          id: 'analytics',
          title: '分析、广告与诊断',
          paragraphs: [
            'App 没有接入开发者运营的使用分析、广告追踪或第三方广告 SDK。出现预览错误时可能写入设备系统诊断日志；我们不会自动接收完整剪贴板。你是否向 Apple 共享诊断由系统设置决定。',
          ],
        },
        {
          id: 'support',
          title: '你主动发送的信息',
          paragraphs: [
            '如果你通过本页邮箱联系开发者，我们会收到你主动发送的邮箱地址、正文及附件，用于回复和排查问题。发送前请遮盖敏感内容，不要发送密码、支付资料或完整的真实剪贴板。',
            '如需查询或删除你主动提供的支持信息，请通过同一邮箱联系，并说明涉及的请求。',
          ],
        },
        {
          id: 'changes',
          title: '联系与更新',
          paragraphs: [
            '如对隐私处理有疑问，请使用本页的联系邮箱。App 的数据处理变化时，我们会更新这份政策和日期。',
          ],
        },
      ],
    },
    data: {
      title: 'ClipMate 数据说明',
      lead: '了解剪贴板、设置和预览副本的保存与清理边界。',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'clipboard',
          title: '系统剪贴板',
          paragraphs: [
            'ClipMate 展示设备系统剪贴板当前提供的内容，不提供历史备份或恢复服务。复制其他内容可能替换现有剪贴板。',
            'App 的“清空剪贴板”会改变系统剪贴板，可能影响其他 App 的粘贴操作。请先保存需要的内容；清空不等于删除其他 App 中的原始文件。',
          ],
        },
        {
          id: 'previews',
          title: '临时预览副本',
          paragraphs: [
            '打开支持格式的预览时，App 可能在自己的临时目录生成文本或图片文件。关闭预览不会保证立即擦除这些副本；系统会自行管理临时空间。',
            '从设备删除 App 通常会移除其本地容器，但“卸载 App”保留文稿与数据的行为不同。删除 App 不会自动清空系统剪贴板，也不会撤销已发送给其他 App 或收件人的内容。',
          ],
        },
        {
          id: 'settings',
          title: '设置与购买',
          paragraphs: [
            '主题和外观保存在设备的 App 设置中。Pro 权益通过 Apple 验证；重新安装后可在使用相同购买账户的前提下恢复购买。恢复购买不会恢复剪贴板内容。',
          ],
        },
        {
          id: 'sharing',
          title: '分享与同步',
          paragraphs: [
            'ClipMate 不向开发者服务器同步剪贴板。Apple 通用剪贴板、设备备份和系统分享由相应服务管理，是否启用及其清理方式请查看系统设置。',
          ],
        },
      ],
    },
    support: {
      title: 'ClipMate 帮助与支持',
      lead: '遇到剪贴板、内容预览或购买问题时，可以从这里开始。',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'contact',
          title: '联系开发者',
          paragraphs: [
            '通过本页邮箱说明问题。请提供 App 版本、设备和系统版本、你执行的操作及实际结果；优先使用可公开的虚构样例。',
          ],
          bullets: [
            '如果是粘贴问题，请注明来源 App 与目标控件。',
            '如果是类型或预览问题，请提供类型标识和去除敏感内容后的错误提示。',
            '不要发送真实密码、支付资料或未经检查的剪贴板截图。',
          ],
        },
        {
          id: 'clipboard',
          title: '读不到内容或出现粘贴提示',
          paragraphs: [
            '确认已在来源 App 复制内容，并刷新或重新尝试粘贴。iOS 的跨 App 粘贴许可由系统控制，可在适用的系统设置中检查。',
            '并非每个 App 都向剪贴板提供相同格式；内容过期、来源 App 限制和系统通用剪贴板状态都可能影响结果。',
          ],
        },
        {
          id: 'preview',
          title: '某种数据无法预览',
          paragraphs: [
            '能看到类型标识不代表系统能够预览该表示。请尝试同一项目的其他表示，或使用已知的普通文本、PNG/JPEG 样例进行对照。',
          ],
        },
        {
          id: 'pro',
          title: 'Pro 购买与恢复',
          paragraphs: [
            '如果你使用包含 ClipMate Pro 的版本，它采用一次性非消耗型购买，不是自动续订订阅。基础内容检查、Type Info 和 Super Types 免费；Relations 图谱等 Pro 功能需要解锁。价格及可用性以 App 内 Apple 购买界面为准。',
            '已购买却未解锁时，请确认使用购买时的 Apple 账户，打开 Pro 购买页并选择“恢复购买”。检查网络后重新打开 App；仍有问题请发送错误提示。不要向我们提供 Apple 账户密码。',
            '退款由 Apple 的购买支持渠道处理。退款或交易撤销后，Pro 权益可能被取消。TestFlight 使用 Apple Sandbox 测试购买，不等于正式商店购买。',
          ],
        },
        {
          id: 'versions',
          title: '版本与地区',
          paragraphs: [
            '当前功能、最低系统要求与下载地区以 App Store 页面为准。新版逐步更新时，支持说明可能同时涉及旧版和新版；来信请注明完整版本和 build。中国大陆商店目前不提供下载。',
          ],
        },
      ],
    },
    terms: {
      title: 'ClipMate 使用条款',
      lead: '使用 ClipMate 时，请了解软件许可、购买和剪贴板操作的边界。',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'license',
          title: '软件许可',
          paragraphs: [
            'App 的许可采用 Apple 标准最终用户许可协议，页面下方提供链接。本说明补充介绍 ClipMate 的功能与数据边界。',
          ],
        },
        {
          id: 'responsible-use',
          title: '使用与内容',
          paragraphs: [
            '仅检查、粘贴或分享你有权处理的内容。你负责保护剪贴板中的敏感信息，并在清空、导出预览或分享前检查内容。',
            '剪贴板类型及预览结果取决于来源 App、格式、系统与设备。ClipMate 不是安全审计、恶意软件检测或数据备份工具。',
          ],
        },
        {
          id: 'purchases',
          title: '购买',
          paragraphs: [
            '包含 Pro 的版本通过 Apple 提供一次性购买，具体商品、价格与权益说明以购买页面为准。它不是自动续订订阅；可通过购买页恢复已有购买。Apple 处理付款与退款。',
          ],
        },
        {
          id: 'availability',
          title: '兼容性与服务',
          paragraphs: [
            '可用功能可能随系统、设备、App 版本或地区变化。我们会修复已知问题，但不能保证所有来源 App 的数据都可读取或预览。',
          ],
        },
        {
          id: 'contact',
          title: '联系',
          paragraphs: [
            '如需帮助或对这些说明有疑问，请通过本页邮箱联系开发者。',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: 'ClipMate Privacy Policy',
      lead: 'How ClipMate handles clipboard content, local preferences, Apple purchases, and information you choose to send to support.',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'scope',
          title: 'Scope',
          paragraphs: [
            'ClipMate is a clipboard inspection and debugging tool. It does not require a developer-operated account. We do not operate a server that receives, stores, or lets us remotely browse your clipboard content. Website visits are covered by the separate website privacy notice.',
          ],
        },
        {
          id: 'clipboard',
          title: 'Clipboard and input content',
          paragraphs: [
            'When you use clipboard inspection, refresh, paste, or preview features, the app reads and displays the relevant content and types on your device. Clipboard content may include passwords or other sensitive information. Use fictional samples when troubleshooting.',
            'The bundled web test page compares web clipboard behavior with native input controls. It does not upload clipboard content to us. If you choose to open an external link or share through the system, the recipient handles that data under its own rules.',
          ],
        },
        {
          id: 'local-storage',
          title: 'Local preferences and preview files',
          paragraphs: [
            'Theme and appearance preferences are stored in the app’s local settings. Previewing text or images may write a copy to the app’s temporary directory for the system preview. These files are not guaranteed to be deleted immediately when you close a preview; the system may clean them up later.',
            'ClipMate is not a clipboard history or backup service. Apple controls system clipboard retention, permissions, and Universal Clipboard. This policy does not change how other apps or system services handle content.',
          ],
        },
        {
          id: 'purchases',
          title: 'ClipMate Pro and Apple services',
          paragraphs: [
            'In versions that include Pro, Apple’s App Store and StoreKit process purchases and restoration. The app reads verified transactions and entitlement status to determine access. We do not receive payment card details or your Apple Account password, and we do not run a purchase verification server.',
            'Apple may process purchase, download, diagnostic, or other information you agree to share under its own privacy policy. This is separate from uploading clipboard content to the developer.',
          ],
        },
        {
          id: 'analytics',
          title: 'Analytics, advertising, and diagnostics',
          paragraphs: [
            'The app does not integrate developer-operated usage analytics, advertising tracking, or third-party advertising SDKs. Preview errors may be written to device system diagnostic logs. We do not automatically receive your full clipboard. Your system settings control diagnostic sharing with Apple.',
          ],
        },
        {
          id: 'support',
          title: 'Information you choose to send',
          paragraphs: [
            'If you contact us using the email on this page, we receive the email address, message, and attachments you choose to send, and use them to reply and troubleshoot. Remove sensitive content first. Do not send passwords, payment information, or a full real-world clipboard.',
            'To ask about or request deletion of support information you have sent, contact the same email address and identify the request.',
          ],
        },
        {
          id: 'changes',
          title: 'Contact and updates',
          paragraphs: [
            'Contact the email on this page with privacy questions. We will update this policy and its date when the app’s data practices change.',
          ],
        },
      ],
    },
    data: {
      title: 'ClipMate Data Guide',
      lead: 'Understand the limits of clipboard storage, preferences, and temporary preview copies.',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'clipboard',
          title: 'System clipboard',
          paragraphs: [
            'ClipMate displays the content currently provided by the system clipboard. It is not a history, backup, or recovery service. Copying something else may replace existing clipboard content.',
            'Clear Clipboard changes the system clipboard and may affect pasting in other apps. Save anything you need first. Clearing the clipboard does not delete original files held by another app.',
          ],
        },
        {
          id: 'previews',
          title: 'Temporary preview copies',
          paragraphs: [
            'Previewing supported content may create text or image files in the app’s temporary directory. Closing the preview does not guarantee immediate erasure; the system manages temporary storage.',
            'Deleting the app generally removes its local container. Offloading an app while keeping its documents and data is different. Deleting ClipMate does not automatically clear the system clipboard or remove content already shared with other apps or recipients.',
          ],
        },
        {
          id: 'settings',
          title: 'Preferences and purchases',
          paragraphs: [
            'Theme and appearance settings are stored locally. Apple verifies Pro entitlements; after reinstalling, restore purchases using the account that made the purchase. Restoring purchases does not restore clipboard content.',
          ],
        },
        {
          id: 'sharing',
          title: 'Sharing and synchronization',
          paragraphs: [
            'ClipMate does not synchronize clipboard content to a developer server. Apple Universal Clipboard, device backups, and system sharing are managed by their respective services. Check system settings for availability and deletion options.',
          ],
        },
      ],
    },
    support: {
      title: 'ClipMate Help & Support',
      lead: 'Start here for help with clipboard inspection, previews, or purchases.',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'contact',
          title: 'Contact the developer',
          paragraphs: [
            'Use the email on this page. Include the app version, device and system version, the steps you took, and what happened. Prefer a fictional sample you can safely share.',
          ],
          bullets: [
            'For paste issues, identify the source app and destination input control.',
            'For type or preview issues, include the type identifier and a redacted error message.',
            'Do not send real passwords, payment information, or unchecked clipboard screenshots.',
          ],
        },
        {
          id: 'clipboard',
          title: 'Missing content or paste permission prompts',
          paragraphs: [
            'Copy content in the source app, then refresh or try pasting again. iOS controls permission to paste between apps; check the relevant system setting when available.',
            'Apps do not all provide the same clipboard representations. Content expiration, source-app restrictions, and Universal Clipboard status may also affect the result.',
          ],
        },
        {
          id: 'preview',
          title: 'A representation will not preview',
          paragraphs: [
            'A visible type identifier does not guarantee the system can preview that representation. Try another representation of the same item, or compare with a known plain-text or PNG/JPEG sample.',
          ],
        },
        {
          id: 'pro',
          title: 'Pro purchases and restoration',
          paragraphs: [
            'In versions that include ClipMate Pro, it is a one-time, non-consumable purchase, not an auto-renewing subscription. Basic content inspection, Type Info, and Super Types remain free; Pro features such as the Relations graph require unlocking. The Apple purchase sheet in the app shows the current price and availability.',
            'If a purchase has not unlocked Pro, check that you are using the purchasing Apple Account, open the Pro purchase page, and select Restore Purchases. Check your connection and reopen the app. If the problem continues, send the error message, not your Apple Account password.',
            'Apple handles refunds through its purchase support channels. A refund or revoked transaction may remove Pro access. TestFlight uses Apple Sandbox purchases, which are separate from production App Store purchases.',
          ],
        },
        {
          id: 'versions',
          title: 'Versions and regions',
          paragraphs: [
            'Check the App Store listing for current features, minimum system requirements, and download availability. These support pages may cover both older and newer releases, so include the full version and build in your message. The app is currently unavailable in the mainland China storefront.',
          ],
        },
      ],
    },
    terms: {
      title: 'ClipMate Terms of Use',
      lead: 'Understand the software license, purchases, and the limits of clipboard operations.',
      updated: {
        zh: '更新于 2026 年 11 月 2 日',
        en: 'Updated November 2, 2026',
      },
      sections: [
        {
          id: 'license',
          title: 'Software license',
          paragraphs: [
            'Apple’s Standard End User License Agreement governs the app license. A link is provided below. This page adds an explanation of ClipMate’s features and data-handling boundaries.',
          ],
        },
        {
          id: 'responsible-use',
          title: 'Content and responsible use',
          paragraphs: [
            'Only inspect, paste, or share content you are entitled to handle. Protect sensitive clipboard information and check content before clearing, exporting previews, or sharing.',
            'Clipboard types and previews depend on the source app, format, system, and device. ClipMate is not a security audit, malware detection, or data backup tool.',
          ],
        },
        {
          id: 'purchases',
          title: 'Purchases',
          paragraphs: [
            'Versions with Pro offer a one-time purchase through Apple. The purchase page describes the product, price, and included access. It is not an auto-renewing subscription. Existing purchases can be restored from the purchase page. Apple processes payments and refunds.',
          ],
        },
        {
          id: 'availability',
          title: 'Compatibility and availability',
          paragraphs: [
            'Features may vary by system, device, app version, or region. We work to fix known issues but cannot guarantee that content from every source app can be read or previewed.',
          ],
        },
        {
          id: 'contact',
          title: 'Contact',
          paragraphs: [
            'For help or questions about these explanations, contact the developer using the email on this page.',
          ],
        },
      ],
    },
  },
};
