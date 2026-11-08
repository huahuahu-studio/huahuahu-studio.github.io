import type { AppDocuments, DocumentContent } from './documents';

export const libaiDocuments: AppDocuments = {
  zh: {
    privacy: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: '李白隐私政策',
      lead: '这份政策说明李白 App 如何处理本地阅读、收藏同步、地图和你主动提交的反馈。',
      sections: [
        {
          id: 'local',
          title: '本地阅读与设置',
          paragraphs: [
            '诗歌、散文、生平等主要文字资源随应用提供。阅读内容、界面偏好与主题设置在设备本地使用。应用未集成广告 SDK 或第三方行为分析 SDK。',
          ],
        },
        {
          id: 'icloud',
          title: '收藏与 iCloud',
          paragraphs: [
            '收藏数据在设备上保存，并通过 Apple CloudKit 的私有数据库在用户自己的 Apple 账户下同步。应用使用 App Group 与小组件共享必要的偏好和内容。同步服务由 Apple 提供，受 Apple 隐私政策与账户设置约束。',
          ],
        },
        {
          id: 'feedback',
          title: '主动反馈',
          paragraphs: [
            '只有主动提交反馈时，应用才将填写的反馈内容、设备型号、应用版本与提交时间保存到开发者使用的 CloudKit 数据库，供排查问题和改进应用。请勿在反馈中提供密码、验证码或不必要的个人信息。通过电子邮件联系时，收件人也会收到邮件地址及用户主动提供的内容。',
          ],
        },
        {
          id: 'external',
          title: '地图与外部服务',
          paragraphs: [
            '浏览地图、跳转外部地图或网页、使用系统分享时，相应系统或第三方服务会按其政策处理网络请求及用户主动选择分享的信息。地图可用性依赖网络和服务提供方。',
          ],
        },
        {
          id: 'management',
          title: '数据管理',
          paragraphs: [
            '可在应用中取消收藏，或在系统的 iCloud 设置中管理应用数据。删除本地应用不等于删除 iCloud 中的数据。反馈的查询或删除请求应通过正式支持渠道提出，并提供可定位该条反馈的必要信息。',
          ],
        },
        {
          id: 'contact',
          title: '联系方式',
          paragraphs: [
            '可通过工作室公开邮箱 bloomtiger.apps@outlook.com 联系开发者。',
          ],
        },
      ],
    },
    support: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: '李白帮助与支持',
      lead: '从阅读与查找，到收藏、词云和语言设置，在这里找到常用功能入口。',
      sections: [
        {
          id: 'start',
          title: '开始使用',
          paragraphs: [],
          bullets: [
            '作品：浏览诗歌，按体裁筛选，使用搜索与拼音／注音索引查找作品。',
            '生平：按年龄与年代阅读年谱，在宽屏布局下通过侧栏切换。',
            '收藏：打开作品后点击爱心；收藏列表位于「专题」。收藏通过 Apple 的 iCloud 私有数据库同步，请在系统设置中登录同一 Apple 账户并启用 iCloud。',
            '词云：进入「专题 → 词云」，使用筛选按钮调整内容，点击分享按钮导出图片。',
            '繁体中文：在 iOS 的应用语言设置中选择繁体中文；诗名索引默认跟随语言，也可在应用设置中手动切换。',
            '离线：主要文字资源内置；地图加载、反馈提交和 iCloud 同步需要网络。',
          ],
        },
        {
          id: 'contact',
          title: '联系开发者',
          paragraphs: [
            '遇到问题时，请通过「设置 → 反馈」或工作室邮箱联系。请提供版本、设备型号、操作步骤与实际现象，并移除不必要的个人信息。',
          ],
        },
      ],
    },
    data: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: '李白数据管理',
      lead: '了解收藏与设置保存在哪里，以及如何管理本地和 iCloud 数据。',
      sections: [
        {
          id: 'favorites',
          title: '管理收藏',
          paragraphs: [
            '在作品页面点击爱心即可添加或取消收藏，收藏列表位于「专题」。收藏通过 Apple CloudKit 私有数据库在自己的 Apple 账户下同步。',
            '取消收藏后，请保持网络连接并等待同步，在其他设备检查结果。同步可用性取决于 iCloud 设置、账户状态、储存空间和网络。',
          ],
        },
        {
          id: 'local',
          title: '本地设置与小组件',
          paragraphs: [
            '外观、主题和诗名索引偏好在设备上使用；小组件通过 App Group 读取所需偏好和内容。主要诗文资源随 App 提供，不依赖下载个人账户资料。',
          ],
        },
        {
          id: 'delete',
          title: '卸载与云端数据',
          paragraphs: [
            '删除本地 App 不等于删除 iCloud 中的资料。可在系统 iCloud 设置中查看和管理该 App 的数据，执行清理前请确认范围。',
          ],
        },
        {
          id: 'feedback',
          title: '管理主动提交的反馈',
          paragraphs: [
            '反馈内容、设备型号、版本和提交时间保存到开发者使用的 CloudKit 数据库，供处理问题。需要查询或删除反馈时，请通过支持邮箱联系，并提供回馈内容与大致时间等定位信息。不要发送 Apple 账户密码或验证码。',
          ],
        },
      ],
    },
    terms: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: '李白使用条款',
      lead: '李白用于阅读与查阅诗文、生平及相关历史资料。',
      sections: [
        {
          id: 'use',
          title: '使用应用',
          paragraphs: [
            '通过 App Store 获取和使用李白，适用 Apple 标准许可协议以及相关服务规则。请依法使用应用提供的阅读、收藏与分享功能。',
          ],
        },
        {
          id: 'content',
          title: '作品与资料',
          paragraphs: [
            '古代作品、现代整理、译文、图片与其他资料可能适用不同的权利范围。分享时请尊重相应作者与来源；应用提供内容不代表授予所有资料的再出版许可。',
            '诗文版本、译文与历史叙述可能存在差异。资料用于阅读和参考，发现文字或史实问题欢迎反馈。',
          ],
        },
        {
          id: 'services',
          title: '网络与系统服务',
          paragraphs: [
            '主要文字内容可离线阅读；地图、iCloud 同步与反馈提交依赖网络、Apple 服务及设备设置。具体功能与系统要求以你安装的 App Store 版本为准。',
          ],
        },
        {
          id: 'changes',
          title: '更新与联系',
          paragraphs: [
            '应用与说明可能随版本更新。遇到问题可通过「设置 → 反馈」或工作室支持邮箱联系。',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: 'Li Bai Privacy Policy',
      lead: 'How Li Bai handles local reading, favorite synchronization, maps, and feedback you choose to send.',
      sections: [
        {
          id: 'local',
          title: 'Local reading and preferences',
          paragraphs: [
            'Poetry, prose, and biographical text are bundled with the app. Reading and interface preferences are used on your device. The app does not integrate advertising SDKs or third-party behavioral analytics SDKs.',
          ],
        },
        {
          id: 'icloud',
          title: 'Favorites and iCloud',
          paragraphs: [
            'Favorites are stored on your device and synchronized through an Apple CloudKit private database under your own Apple Account. The app uses an App Group to share necessary preferences and content with its widgets. Apple provides the synchronization service, subject to its privacy policy and your account settings.',
          ],
        },
        {
          id: 'feedback',
          title: 'Feedback you choose to submit',
          paragraphs: [
            'Only when you submit feedback does the app save your message, device model, app version, and submission date in the developer’s CloudKit database, to investigate issues and improve the app. Do not include passwords, verification codes, or unnecessary personal information. If you contact us by email, we also receive your email address and the information you choose to include.',
          ],
        },
        {
          id: 'external',
          title: 'Maps and external services',
          paragraphs: [
            'Viewing maps, opening an external map or website, and using system sharing may send network requests or information you choose to share to the corresponding service. Those services apply their own policies. Map availability depends on the network and service provider.',
          ],
        },
        {
          id: 'management',
          title: 'Managing your data',
          paragraphs: [
            'You can remove favorites in the app or manage app data in system iCloud settings. Deleting the local app does not automatically delete iCloud data. To request access to or deletion of feedback, contact support and provide enough information to identify the message.',
          ],
        },
        {
          id: 'contact',
          title: 'Contact',
          paragraphs: ['Contact the developer at bloomtiger.apps@outlook.com.'],
        },
      ],
    },
    support: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: 'Li Bai Help & Support',
      lead: 'Find your way around reading, search, favorites, word clouds, and Chinese language settings.',
      sections: [
        {
          id: 'start',
          title: 'Getting started',
          paragraphs: [],
          bullets: [
            'Works: browse poems by form, or find titles using search and pinyin or zhuyin indexes. The literary content is in Chinese.',
            'Life: explore the chronology by age and year; on wider screens, use the sidebar to move between years.',
            'Favorites: tap the heart on a work. Find saved works in Topics. Sign in to the same Apple Account and enable iCloud to synchronize favorites.',
            'Word Cloud: open Topics → Word Cloud, filter the content, rearrange the layout, or share an image.',
            'Traditional Chinese: select Traditional Chinese in the iOS app language settings. The title index follows the language by default and can also be changed in the app’s settings.',
            'Offline: core text is bundled. Maps, feedback submission, and iCloud synchronization require a network connection.',
          ],
        },
        {
          id: 'contact',
          title: 'Contact the developer',
          paragraphs: [
            'Use Settings → Feedback in the app or email support. Include the app version, device model, steps, and actual result. Remove unnecessary personal information from screenshots or attachments.',
          ],
        },
      ],
    },
    data: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: 'Li Bai Data Management',
      lead: 'Where favorites and preferences are stored, and how to manage local and iCloud data.',
      sections: [
        {
          id: 'favorites',
          title: 'Manage favorites',
          paragraphs: [
            'Tap the heart on a work to add or remove a favorite. The favorites list is in Topics. Favorites synchronize through an Apple CloudKit private database under your own Apple Account.',
            'After removing a favorite, keep a network connection available and allow synchronization to complete before checking another device. Availability depends on your iCloud settings, account, storage, and network.',
          ],
        },
        {
          id: 'local',
          title: 'Local preferences and widgets',
          paragraphs: [
            'Appearance, accent colors, and title-index preferences are used on the device. Widgets read necessary preferences and content through the App Group. Core literary resources are bundled with the app.',
          ],
        },
        {
          id: 'delete',
          title: 'Deleting the app and cloud data',
          paragraphs: [
            'Deleting the local app does not automatically delete iCloud data. Review and manage the app’s data in system iCloud settings, checking the scope before removing anything.',
          ],
        },
        {
          id: 'feedback',
          title: 'Manage feedback',
          paragraphs: [
            'Submitted feedback, device model, app version, and submission date are stored in the developer’s CloudKit database for support. To request access or deletion, email support with details such as the message and approximate date. Never send your Apple Account password or verification codes.',
          ],
        },
      ],
    },
    terms: {
      updated: {
        zh: '更新于 2026 年 11 月 8 日',
        en: 'Updated November 8, 2026',
      },
      title: 'Li Bai Terms of Use',
      lead: 'Li Bai provides poetry, prose, biography, and related historical material for reading and reference.',
      sections: [
        {
          id: 'use',
          title: 'Using the app',
          paragraphs: [
            'Obtaining and using Li Bai through the App Store is subject to Apple’s Standard License Agreement and applicable service rules. Use reading, favorites, and sharing features lawfully.',
          ],
        },
        {
          id: 'content',
          title: 'Works and reference material',
          paragraphs: [
            'Ancient works, modern editions, translations, images, and other material can have different rights. Respect the relevant authors and sources when sharing; access in the app does not grant republication rights to all included material.',
            'Textual editions, translations, and historical accounts may differ. The material is for reading and reference. Please report textual or historical errors through feedback.',
          ],
        },
        {
          id: 'services',
          title: 'Network and system services',
          paragraphs: [
            'Core text is available offline. Maps, iCloud synchronization, and feedback submission depend on the network, Apple services, and device settings. Features and system requirements depend on the App Store version you have installed.',
          ],
        },
        {
          id: 'changes',
          title: 'Updates and contact',
          paragraphs: [
            'The app and these documents may change with new versions. Contact us through Settings → Feedback or the support email if you need help.',
          ],
        },
      ],
    },
  },
};

export const libaiTraditionalDocuments: Record<
  'support' | 'privacy',
  DocumentContent
> = {
  support: {
    updated: {
      zh: '更新于 2026 年 11 月 8 日',
      en: 'Updated November 8, 2026',
    },
    title: '李白協助與支援',
    lead: '從閱讀與查找，到收藏、詞雲和語言設定，在這裡找到常用功能入口。',
    sections: [
      {
        id: 'start',
        title: '開始使用',
        paragraphs: [],
        bullets: [
          '作品：瀏覽詩歌，依體裁篩選，使用搜尋與拼音／注音索引查找作品。',
          '生平：依年齡與年代閱讀年譜，在寬螢幕配置下透過側邊欄切換。',
          '收藏：開啟作品後點選愛心；收藏列表位於「專題」。收藏透過 Apple 的 iCloud 私有資料庫同步，請在系統設定中登入相同的 Apple 帳號並啟用 iCloud。',
          '詞雲：進入「專題 → 詞雲」，使用篩選按鈕調整內容，點選分享按鈕匯出圖片。',
          '繁體中文：在 iOS 的應用程式語言設定中選擇繁體中文；詩名索引預設跟隨語言，也可在應用程式設定中手動切換。',
          '離線：主要文字資源內建；地圖載入、意見回饋提交和 iCloud 同步需要網路。',
        ],
      },
      {
        id: 'contact',
        title: '聯絡開發者',
        paragraphs: [
          '遇到問題時，請透過「設定 → 意見回饋」或工作室信箱聯絡。請提供版本、裝置型號、操作步驟與實際情形，並移除不必要的個人資訊。',
        ],
      },
    ],
  },
  privacy: {
    updated: {
      zh: '更新于 2026 年 11 月 8 日',
      en: 'Updated November 8, 2026',
    },
    title: '李白隱私權政策',
    lead: '這份政策說明李白 App 如何處理本機閱讀、收藏同步、地圖與你主動提交的意見回饋。',
    sections: [
      {
        id: 'local',
        title: '本機閱讀與設定',
        paragraphs: [
          '詩歌、散文、生平等主要文字資源隨應用程式提供。閱讀內容、介面偏好與主題設定在裝置本機使用。應用程式未整合廣告 SDK 或第三方行為分析 SDK。',
        ],
      },
      {
        id: 'icloud',
        title: '收藏與 iCloud',
        paragraphs: [
          '收藏資料儲存在裝置上，並透過 Apple CloudKit 的私有資料庫，在使用者自己的 Apple 帳號下同步。應用程式使用 App Group 與小工具分享必要的偏好與內容。同步服務由 Apple 提供，受 Apple 隱私權政策與帳號設定規範。',
        ],
      },
      {
        id: 'feedback',
        title: '主動提供意見回饋',
        paragraphs: [
          '只有主動提交意見回饋時，應用程式才會將填寫的內容、裝置型號、應用程式版本與提交時間儲存至開發者使用的 CloudKit 資料庫，供排查問題及改進應用程式。請勿在意見回饋中提供密碼、驗證碼或不必要的個人資訊。透過電子郵件聯絡時，收件人也會收到電子郵件地址及使用者主動提供的內容。',
        ],
      },
      {
        id: 'external',
        title: '地圖與外部服務',
        paragraphs: [
          '瀏覽地圖、開啟外部地圖或網頁、使用系統分享時，相應系統或第三方服務會依其政策處理網路請求，以及使用者主動選擇分享的資訊。地圖可用性取決於網路及服務提供者。',
        ],
      },
      {
        id: 'management',
        title: '資料管理',
        paragraphs: [
          '可在應用程式中取消收藏，或在系統的 iCloud 設定中管理應用程式資料。刪除本機應用程式不等於刪除 iCloud 中的資料。若要查詢或刪除意見回饋，請透過正式支援管道提出要求，並提供可辨識該筆回饋的必要資訊。',
        ],
      },
      {
        id: 'contact',
        title: '聯絡方式',
        paragraphs: [
          '可透過工作室公開信箱 bloomtiger.apps@outlook.com 聯絡開發者。',
        ],
      },
    ],
  },
};
