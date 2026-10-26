export const languages = ['zh', 'en'] as const;
export type Language = (typeof languages)[number];
export const siteUrl = 'https://bloomtiger.pages.dev';
export const email = 'huahuahuapple@outlook.com';
export const documentKeys = ['privacy', 'data', 'support', 'terms'] as const;
export const route = (lang: Language, path = '') =>
  '/' + lang + '/' + (path ? path.replace(/^\/+|\/+$/g, '') + '/' : '');
export const copy = {
  zh: {
    brand: '花花虎工作室',
    apps: '我们的应用',
    about: '关于工作室',
    contact: '联系我',
    skip: '跳到主要内容',
    language: '选择语言',
    home: '首页',
    explore: '探索应用',
    download: '在 App Store 下载',
    eyebrow: '独立开发 · 为日常而做',
    heroLine: '让日常，',
    heroAccent: '多一点喜欢。',
    heroDescription:
      '做一些简单、用心的小应用。\n陪你记住生活，也陪你发现生活的可爱。',
    heroNote: '小小的应用，装下认真生活的心意。',
    selected: '用心做的应用',
    selectedNote: '从一个小小的念头，到你手中的日常。',
    principleLabel: '我们在意的事',
    principleTitle: '好用，也让人安心。',
    principles: [
      {
        title: '从生活出发',
        text: '关注具体的小需求，让每一个功能在日常里派上用场。',
      },
      {
        title: '把复杂留在背后',
        text: '清楚的界面，自然的操作。打开就能开始，轻松融入你的习惯。',
      },
      {
        title: '把数据说清楚',
        text: '每个应用都有自己的隐私政策和数据说明，让你知道数据去向。',
      },
    ],
    helloTitle: '想法、问题，或一句你好。',
    helloText: '欢迎告诉我你的使用感受。你的日常，也是下一个小改进的起点。',
    footerLine: '给日常一点温度。',
    rights: '保留所有权利。',
    websitePrivacy: '网站隐私',
    privacy: '隐私政策',
    data: '数据管理',
    support: '帮助与支持',
    terms: '使用条款',
    contents: '本页内容',
    updated: '更新于 2026 年 10 月 25 日',
    websiteUpdated: '更新于 2026 年 10 月 26 日',
    question: '还有疑问？',
    emailAction: '通过邮件联系',
    resources: '安心使用，每一步都有说明。',
    resourcesDescription: '了解数据如何保存、如何管理，也随时找到我们。',
    aboutTitle: '认真做应用，\n好好过生活。',
    aboutLead:
      '你好，这里是花花虎工作室。一个从日常小事里寻找灵感的独立开发工作室。',
    aboutBody:
      '我们相信，好的应用不一定要做很多事情。能把一件小事做好，让生活更方便一点、更开心一点，就很有意义。快乐日记是这样的一个开始。',
    notFound: '这一页，暂时走丢了。',
    notFoundText: '可以回到首页，继续看看我们的小应用。',
    goHome: '回到首页',
  },
  en: {
    brand: 'Huahuahu Studio',
    apps: 'Our apps',
    about: 'The studio',
    contact: 'Say hello',
    skip: 'Skip to content',
    language: 'Choose language',
    home: 'Home',
    explore: 'Explore our apps',
    download: 'Download on the App Store',
    eyebrow: 'INDEPENDENTLY MADE · FOR EVERYDAY LIFE',
    heroLine: 'A little more',
    heroAccent: 'joy in the everyday.',
    heroDescription:
      'Small, thoughtful apps for the things that matter.\nMade to help you notice life, and keep a little of it.',
    heroNote: 'Small apps. A little heart in every detail.',
    selected: 'Thoughtfully made apps',
    selectedNote: 'From a small idea to a place in your everyday.',
    principleLabel: 'WHAT MATTERS TO US',
    principleTitle: 'Useful. Thoughtful. Reassuring.',
    principles: [
      {
        title: 'Inspired by real life',
        text: 'Small, specific needs come first. Every feature should earn its place in your day.',
      },
      {
        title: 'Simple on the surface',
        text: 'Clear interfaces and natural interactions. Easy to start, easy to make your own.',
      },
      {
        title: 'Clear about your data',
        text: 'Each app has its own privacy policy and data guide, so you know where your data goes.',
      },
    ],
    helloTitle: 'An idea, a question, or just hello.',
    helloText:
      'Tell me how the apps fit into your life. Your everyday experience can inspire the next small improvement.',
    footerLine: 'A little warmth for your everyday.',
    rights: 'All rights reserved.',
    websitePrivacy: 'Website privacy',
    privacy: 'Privacy policy',
    data: 'Manage your data',
    support: 'Help & support',
    terms: 'Terms of use',
    contents: 'ON THIS PAGE',
    updated: 'Updated October 25, 2026',
    websiteUpdated: 'Updated October 26, 2026',
    question: 'Still have a question?',
    emailAction: 'Get in touch by email',
    resources: 'A little clarity goes a long way.',
    resourcesDescription:
      'Learn how your data is stored, how to manage it, and how to reach us.',
    aboutTitle: 'Thoughtful apps.\nEveryday inspiration.',
    aboutLead:
      'Hello, we’re Huahuahu Studio. An independent studio finding inspiration in the small things in life.',
    aboutBody:
      'We believe an app doesn’t need to do everything. Doing one small thing well, and making your day a little easier or happier, is enough to matter. HDiary is one such beginning.',
    notFound: 'This page has wandered off.',
    notFoundText: 'Head back home to explore our little collection of apps.',
    goHome: 'Back to home',
  },
};
