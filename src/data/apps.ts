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
  scene: { front: AppScreenshot; back: AppScreenshot };
  features: readonly {
    number: string;
    title: string;
    text: string;
    screenshot: AppScreenshot;
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
] as const satisfies readonly AppConfig[];

export type AppId = (typeof apps)[number]['id'];
export const featuredApp = apps[0];
