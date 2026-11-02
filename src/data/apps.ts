import type { Language } from './site';

export interface AppScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface AppContent {
  name: string;
  secondaryName?: string;
  learn: string;
  back: string;
  appDescription: string;
  productLine: string;
  productAccent: string;
  productDescription: string;
  platform: string;
  appCategory: string;
  screenshotNote: string;
  sticker: string;
  artCaption: string;
  featureTitle: string;
  scene?: { front: AppScreenshot; back: AppScreenshot };
  features: readonly {
    number: string;
    title: string;
    text: string;
    screenshot?: AppScreenshot;
  }[];
  termsLink?: { href: string; label: string };
  privacyLink?: { href: string; label: string };
}

export interface AppConfig {
  id: string;
  brandName: string;
  icon: string;
  platformBadge: string;
  storeUrl: Record<Language, string>;
  content: Record<Language, AppContent>;
}

export const apps = [
  {
    id: 'hdiary',
    brandName: 'HDiary',
    icon: '/images/hdiary/sun.svg',
    platformBadge: 'iOS & iPadOS',
    storeUrl: {
      zh: 'https://apps.apple.com/cn/app/hdiary/id6470147729',
      en: 'https://apps.apple.com/cn/app/hdiary/id6470147729?l=en-GB',
    },
    content: {
      zh: {
        name: '快乐日记',
        secondaryName: 'HDiary',
        learn: '认识快乐日记',
        back: '返回快乐日记',
        appDescription:
          '一杯咖啡、一段散步、和朋友的相聚。把值得记住的小事，留在快乐日记里。',
        productLine: '快乐不必很大，',
        productAccent: '值得记住就好。',
        productDescription:
          '用文字和照片记录快乐时刻，添上标签、一起经历的人和心情评分。让那些转瞬即逝的美好，有个可以回来的地方。',
        platform: '为 iPhone 和 iPad 设计',
        appCategory: '生活记录',
        screenshotNote: '真实应用界面 · 使用虚构示例内容',
        sticker: '收集一点小快乐',
        featureTitle: '把小快乐，慢慢攒起来。',
        artCaption: 'HAPPY MOMENTS, KEPT CLOSE.',
        scene: {
          front: {
            src: '/images/hdiary/zh/01-moments.webp',
            alt: '快乐日记的乐事列表',
            width: 600,
            height: 1304,
          },
          back: {
            src: '/images/hdiary/zh/02-detail.webp',
            alt: '快乐日记：用照片和文字记录秋天的散步',
            width: 600,
            height: 1304,
          },
        },
        features: [
          {
            number: '01',
            title: '留下那一刻',
            text: '用文字、照片和评分记录乐事。几句话也好，一张照片也好，都是生活的切片。',
            screenshot: {
              src: '/images/hdiary/zh/02-detail.webp',
              alt: '快乐日记详情页，展示文字、照片、参与者和评分',
              width: 600,
              height: 1304,
            },
          },
          {
            number: '02',
            title: '记住一起的人',
            text: '用参与者和标签整理回忆。再见到一个名字，就想起那些一起度过的好时光。',
            screenshot: {
              src: '/images/hdiary/zh/03-participants.webp',
              alt: '快乐日记资料库中的参与者列表',
              width: 600,
              height: 1304,
            },
          },
          {
            number: '03',
            title: '看见快乐的轨迹',
            text: '通过图表回顾最近的乐事，也可以用小组件，让回忆出现在主屏幕上。',
            screenshot: {
              src: '/images/hdiary/zh/05-chart.webp',
              alt: '快乐日记图表，展示按评分分组的乐事统计',
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
      },
      en: {
        name: 'HDiary',
        learn: 'Meet HDiary',
        back: 'Back to HDiary',
        appDescription:
          'A good coffee. A quiet walk. Time with a friend. Give the little things worth remembering a home in HDiary.',
        productLine: 'Joy can be small.',
        productAccent: 'Keep it anyway.',
        productDescription:
          'Save happy moments with words and photos. Add tags, the people you shared them with, and a rating. Make a home for the good things that pass too quickly.',
        platform: 'Made for iPhone and iPad',
        appCategory: 'Journaling',
        screenshotNote: 'Actual app screens · Fictional sample content',
        sticker: 'A little joy, collected',
        featureTitle: 'Let the little joys add up.',
        artCaption: 'HAPPY MOMENTS, KEPT CLOSE.',
        scene: {
          front: {
            src: '/images/hdiary/en/01-moments.webp',
            alt: 'A list of happy moments in HDiary',
            width: 600,
            height: 1304,
          },
          back: {
            src: '/images/hdiary/en/02-detail.webp',
            alt: 'HDiary: a happy autumn walk saved with words and a photo',
            width: 600,
            height: 1304,
          },
        },
        features: [
          {
            number: '01',
            title: 'Keep the moment',
            text: 'Capture a happy moment with words, photos, and a rating. A few lines or a single picture can say so much.',
            screenshot: {
              src: '/images/hdiary/en/02-detail.webp',
              alt: 'HDiary moment detail with writing, a photo, participants, and a rating',
              width: 600,
              height: 1304,
            },
          },
          {
            number: '02',
            title: 'Remember who was there',
            text: 'Organize memories with participants and tags. A familiar name can bring a whole afternoon back.',
            screenshot: {
              src: '/images/hdiary/en/03-participants.webp',
              alt: 'HDiary participant list in the library',
              width: 600,
              height: 1304,
            },
          },
          {
            number: '03',
            title: 'See the good things grow',
            text: 'Look back at recent moments in charts, and bring a memory to your Home Screen with widgets.',
            screenshot: {
              src: '/images/hdiary/en/05-chart.webp',
              alt: 'HDiary charts showing moment counts grouped by rating',
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
      },
    },
  },
  {
    id: 'clipmate',
    brandName: 'ClipMate',
    icon: '/images/clipmate/icon.svg',
    platformBadge: 'iOS & iPadOS',
    storeUrl: {
      zh: 'https://apps.apple.com/hk/app/id6447276479',
      en: 'https://apps.apple.com/us/app/id6447276479',
    },
    content: {
      zh: {
        name: '剪切调试',
        secondaryName: 'ClipMate',
        learn: '认识 ClipMate',
        back: '返回 ClipMate',
        appDescription:
          '看清剪贴板里有什么。为开发者检查内容、数据表示与 UTType，排查原生输入和网页粘贴行为。',
        productLine: '复制了什么，',
        productAccent: '看得更清楚。',
        productDescription:
          '一次复制可能包含多种数据表示。ClipMate 帮你检查系统剪贴板中的类型、内容与预览，并比较 UIKit 输入控件和网页的粘贴结果。',
        platform: '为 iPhone 和 iPad 设计',
        appCategory: '开发者工具',
        screenshotNote: '功能与最低系统要求以你安装的 App Store 版本为准。',
        sticker: '看清每一次复制',
        featureTitle: '从内容，到类型，再到粘贴行为。',
        artCaption: 'CLIPBOARD CONTENT, MADE VISIBLE.',
        features: [
          {
            number: '01',
            title: '检查剪贴板内容',
            text: '查看剪贴板项目及它们提供的数据表示，检查文本、图片和类型信息；对支持的格式打开系统预览。',
          },
          {
            number: '02',
            title: '理解 UTType',
            text: '查看类型标识和父类型，理解同一份内容为何能以不同格式被其他 App 接收。',
          },
          {
            number: '03',
            title: '比较粘贴行为',
            text: '在 UITextView、UITextField 与内置网页测试页中比较粘贴效果，定位原生与网页剪贴板的差异。',
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
      },
      en: {
        name: 'ClipMate',
        learn: 'Meet ClipMate',
        back: 'Back to ClipMate',
        appDescription:
          'See what is on your clipboard. Inspect content, data representations, and UTTypes, and investigate native and web paste behavior.',
        productLine: 'Know what',
        productAccent: 'you just copied.',
        productDescription:
          'One copy can contain several data representations. ClipMate helps you inspect clipboard types, content, and previews, then compare how UIKit controls and a web page handle pasting.',
        platform: 'Made for iPhone and iPad',
        appCategory: 'Developer tools',
        screenshotNote:
          'Features and minimum system requirements depend on the App Store version you install.',
        sticker: 'Every copy, understood',
        featureTitle: 'Content. Types. Paste behavior.',
        artCaption: 'CLIPBOARD CONTENT, MADE VISIBLE.',
        features: [
          {
            number: '01',
            title: 'Inspect the contents',
            text: 'Browse clipboard items and their available representations. Inspect text, images, and type information, and open system previews for supported formats.',
          },
          {
            number: '02',
            title: 'Understand UTTypes',
            text: 'Explore type identifiers and parent types to understand how other apps can accept different representations of the same content.',
          },
          {
            number: '03',
            title: 'Compare paste behavior',
            text: 'Try pasting into UITextView, UITextField, and the bundled web test page to investigate differences between native and web clipboard behavior.',
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
      },
    },
  },
] as const satisfies readonly AppConfig[];

export type AppId = (typeof apps)[number]['id'];
export const featuredApp = apps[0];
