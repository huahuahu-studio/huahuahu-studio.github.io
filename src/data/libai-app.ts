import type { AppConfig } from './apps';

export const libaiApp = {
  id: 'libai',
  brandName: 'Li Bai',
  icon: '/images/libai/icon.webp',
  platformBadge: 'iOS & iPadOS',
  storeUrl: {
    zh: 'https://apps.apple.com/cn/app/id1609067377',
    en: 'https://apps.apple.com/hk/app/id1609067377?l=en',
  },
  content: {
    zh: {
      name: '李白',
      secondaryName: 'Li Bai',
      learn: '认识李白',
      back: '返回李白',
      appDescription:
        '读李白的诗，也走近他的生平。把诗歌、年代、人物与地点连在一起，慢慢读懂诗中的人生。',
      productLine: '读一首诗，',
      productAccent: '走近李白。',
      productDescription:
        '从诗词与散文，到书法与生平年谱，沿着作品、年代与地点探索李白。支持简体与繁体阅读，让诗意随时在身边。',
      platform: '为 iPhone 和 iPad 设计',
      appCategory: '诗词与文学',
      screenshotNote:
        '图示为 1.7 版本的真实界面；功能以你安装的 App Store 版本为准。',
      sticker: '诗意，随身而行',
      artCaption: 'POETRY AND A LIFE, CONNECTED.',
      featureTitle: '从诗句，读到人生。',
      scene: {
        front: {
          src: '/images/libai/zh-Hans/03-reading.webp',
          alt: '李白：静夜思原文与译文',
          width: 600,
          height: 1304,
        },
        back: {
          src: '/images/libai/zh-Hans/04-wordcloud.webp',
          alt: '李白诗词词云',
          width: 600,
          height: 1304,
        },
      },
      features: [
        {
          number: '01',
          title: '静心读一首诗',
          text: '按体裁浏览作品，通过搜索与拼音／注音索引查找诗名。部分作品附有译文，正文支持简体与繁体。',
          screenshot: {
            src: '/images/libai/zh-Hans/03-reading.webp',
            alt: '静夜思阅读页面',
            width: 600,
            height: 1304,
          },
        },
        {
          number: '02',
          title: '沿年谱走近生平',
          text: '了解不同年龄的经历，连接当时的作品与地点。宽屏侧栏方便在年代之间来回阅读。',
          screenshot: {
            src: '/images/libai/zh-Hans/01-life.webp',
            alt: '李白二十五岁生平与相关地点',
            width: 600,
            height: 1304,
          },
        },
        {
          number: '03',
          title: '让诗意有新模样',
          text: '生成诗词词云，筛选、重排并分享图片。也可收藏喜欢的作品，使用主题色与深色模式阅读。',
          screenshot: {
            src: '/images/libai/zh-Hans/04-wordcloud.webp',
            alt: '可分享的李白诗词词云',
            width: 600,
            height: 1304,
          },
        },
      ],
      termsLink: {
        href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
        label: '阅读 Apple 标准许可协议',
      },
      privacyLink: {
        href: 'https://www.apple.com/legal/privacy/',
        label: '阅读 Apple 隐私政策',
      },
      extraLinks: [
        {
          href: '/zh-Hant/apps/libai/support/',
          label: '繁體中文協助與支援',
        },
        {
          href: '/zh-Hant/apps/libai/privacy/',
          label: '繁體中文隱私權政策',
        },
      ],
    },
    en: {
      name: 'Li Bai',
      learn: 'Meet Li Bai',
      back: 'Back to Li Bai',
      appDescription:
        'Read Li Bai’s poetry and explore the life behind it. Connect poems with years, people, and places, at your own pace.',
      productLine: 'Read a poem.',
      productAccent: 'Meet the poet.',
      productDescription:
        'Explore Li Bai through poetry, prose, calligraphy, and a biographical timeline. Follow the links between works, years, and places, with Simplified and Traditional Chinese reading.',
      platform: 'Made for iPhone and iPad',
      appCategory: 'Poetry & literature',
      screenshotNote:
        'Screens show version 1.7. Features depend on the App Store version you have installed. The app’s literary content is in Chinese.',
      sticker: 'Poetry, close at hand',
      artCaption: 'POETRY AND A LIFE, CONNECTED.',
      featureTitle: 'From the words to the life.',
      scene: {
        front: {
          src: '/images/libai/zh-Hant/03-reading.webp',
          alt: 'Li Bai: Quiet Night Thought in Traditional Chinese',
          width: 600,
          height: 1304,
        },
        back: {
          src: '/images/libai/zh-Hant/04-wordcloud.webp',
          alt: 'A word cloud of Li Bai’s poetry',
          width: 600,
          height: 1304,
        },
      },
      features: [
        {
          number: '01',
          title: 'Take time with a poem',
          text: 'Browse by poetic form or find a title using search and pinyin or zhuyin indexes. Some works include modern Chinese translations.',
          screenshot: {
            src: '/images/libai/zh-Hant/03-reading.webp',
            alt: 'Quiet Night Thought reading screen',
            width: 600,
            height: 1304,
          },
        },
        {
          number: '02',
          title: 'Follow his life through time',
          text: 'Explore events at different ages, alongside related works and places. A sidebar on wider screens makes moving between years easier.',
          screenshot: {
            src: '/images/libai/zh-Hant/01-life.webp',
            alt: 'Li Bai at age twenty-five, with places on a map',
            width: 600,
            height: 1304,
          },
        },
        {
          number: '03',
          title: 'See poetry take shape',
          text: 'Create, filter, rearrange, and share a poetry word cloud. Save favorite works and read with accent colors or dark mode.',
          screenshot: {
            src: '/images/libai/zh-Hant/04-wordcloud.webp',
            alt: 'A shareable poetry word cloud',
            width: 600,
            height: 1304,
          },
        },
      ],
      termsLink: {
        href: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
        label: 'Read Apple’s Standard License Agreement',
      },
      privacyLink: {
        href: 'https://www.apple.com/legal/privacy/',
        label: 'Read Apple’s Privacy Policy',
      },
      extraLinks: [
        {
          href: '/zh-Hant/apps/libai/support/',
          label: '繁體中文協助與支援',
        },
        {
          href: '/zh-Hant/apps/libai/privacy/',
          label: '繁體中文隱私權政策',
        },
      ],
    },
  },
} as const satisfies AppConfig;
