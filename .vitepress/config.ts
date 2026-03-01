import { defineConfig, type DefaultTheme } from 'vitepress'
import { translations } from './i18n/translations'

const SITE_URL = 'https://vlang.io'

function getDocsSidebar(lang: string = 'root', locale: string = ''): DefaultTheme.SidebarItem[] {
  const t = translations[lang] ?? translations['root']
  const s = t.docs.sidebar
  const base = locale ? `/${locale}/docs` : '/docs/en'
  return [
    {
      text: s.gettingStarted,
      items: [
        { text: s.items.introduction, link: `${base}/` },
        { text: s.items.installation, link: `${base}/installation` },
        { text: s.items.helloWorld, link: `${base}/hello-world` },
      ],
    },
    {
      text: s.basics,
      collapsed: false,
      items: [
        { text: s.items.variables, link: `${base}/basics/variables` },
        { text: s.items.functions, link: `${base}/basics/functions` },
        { text: s.items.primitiveTypes, link: `${base}/basics/types` },
        { text: s.items.strings, link: `${base}/basics/strings` },
        { text: s.items.arrays, link: `${base}/basics/arrays` },
        { text: s.items.maps, link: `${base}/basics/maps` },
      ],
    },
    {
      text: s.controlFlow,
      collapsed: false,
      items: [
        { text: s.items.ifElse, link: `${base}/control-flow/if` },
        { text: s.items.match, link: `${base}/control-flow/match` },
        { text: s.items.forLoops, link: `${base}/control-flow/for-loops` },
      ],
    },
    {
      text: s.structsTypes,
      collapsed: false,
      items: [
        { text: s.items.structs, link: `${base}/structs-types/structs` },
        { text: s.items.enums, link: `${base}/structs-types/enums` },
        { text: s.items.interfaces, link: `${base}/structs-types/interfaces` },
      ],
    },
    {
      text: s.advanced,
      collapsed: false,
      items: [
        { text: s.items.concurrency, link: `${base}/concurrency` },
        { text: s.items.errorHandling, link: `${base}/error-handling` },
        { text: s.items.json, link: `${base}/json` },
        { text: s.items.orm, link: `${base}/orm` },
        { text: s.items.testing, link: `${base}/testing` },
      ],
    },
  ]
}

function getNav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Docs', link: '/docs/en/', activeMatch: '/docs/en/' },
    { text: 'Examples', link: 'https://github.com/vlang/v/tree/master/examples' },
    { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
    { text: 'Stdlib', link: 'https://modules.vlang.io' },
    { text: 'vpm', link: 'https://vpm.vlang.io' },
    { text: 'Playground', link: 'https://play.vlang.io' },
    {
      text: 'Community',
      items: [
        { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
        { text: 'Discord', link: 'https://discord.gg/vlang' },
        { text: 'GitHub', link: 'https://github.com/vlang/v' },
        { text: 'Telegram', link: 'https://t.me/vlang_lang' },
        { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
      ],
    },
    { text: 'Showcase', link: '/showcase' },
  ]
}

export default defineConfig({
  title: 'The V Programming Language | Fast, Safe, Compiled & Maintainable',
  description: 'A simple, fast, safe, compiled language for developing maintainable software. Batteries included, cross-platform and open source.',
  srcDir: './content',
  lang: 'en-US',
  appearance: 'dark',
  cleanUrls: true,
  sitemap: {
    hostname: SITE_URL,
  },
  head: [
    ['link', { rel: 'icon', href: '/img/v-logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Mono:wght@400;500&display=swap',
      },
    ],
  ],
  transformHead({ pageData }) {
    const canonicalUrl = `${SITE_URL}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
    return [['link', { rel: 'canonical', href: canonicalUrl }]]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      description: 'سهلة، سريعة، آمنة، و لغة (تجميع) لتطوير برامج قوية و مستدامة. مشمولة البطاريات، عبر الأنظمة ومفتوحة المصدر.',
      themeConfig: {
        nav: [
          { text: 'المرجع', link: '/ar/docs/', activeMatch: '/ar/docs/' },
          { text: 'أمثلة', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'وحدات', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'المنتدى', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/ar/docs/': getDocsSidebar('ar', 'ar'),
        },
      },
    },
    ms: {
      label: 'Bahasa Melayu',
      lang: 'ms',
      description: 'Bahasa yang simple, cepat, aman, dan terkompilasi untuk mengembangkan perangkat lunak yang mudah dipelihara.',
      themeConfig: {
        nav: [
          { text: 'Dokumentasi', link: '/ms/docs/', activeMatch: '/ms/docs/' },
          { text: 'Contoh', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Modul', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/ms/docs/': getDocsSidebar('ms', 'ms'),
        },
      },
    },
    bs: {
      label: 'Bosanski',
      lang: 'bs',
      description: 'Jednostavan, brz, siguran kompajliran jezik za kreiranje održivog softvera.',
      themeConfig: {
        nav: [
          { text: 'Dokumentacija', link: '/bs/docs/', activeMatch: '/bs/docs/' },
          { text: 'Primjeri', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Moduli', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/bs/docs/': getDocsSidebar('bs', 'bs'),
        },
      },
    },
    ca: {
      label: 'Català',
      lang: 'ca',
      description: 'Un llenguatge senzill, ràpid, segur i compilat per desenvolupar programari mantenible.',
      themeConfig: {
        nav: [
          { text: 'Documentació', link: '/ca/docs/', activeMatch: '/ca/docs/' },
          { text: 'Exemples', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Mòduls', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Fòrum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/ca/docs/': getDocsSidebar('ca', 'ca'),
        },
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      description: '简洁、快速、安全的编译型语言，用于开发易维护的软件。包含内置电池，跨平台且开源。',
      themeConfig: {
        nav: [
          { text: '文档', link: '/zh/docs/', activeMatch: '/zh/docs/' },
          { text: '例子', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: '模块', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: '论坛', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/zh/docs/': getDocsSidebar('zh', 'zh'),
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Langage compilé simple, rapide, sûr pour le développement de logiciels maintenables. Inclus batteries, multiplateforme et open source.',
      themeConfig: {
        nav: [
          { text: 'Documentation', link: '/fr/docs/', activeMatch: '/fr/docs/' },
          { text: 'Examples', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Modules', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/fr/docs/': getDocsSidebar('fr', 'fr'),
        },
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      description: 'Eine einfache, schnelle und sichere kompilierte Sprache zur Entwicklung von wartungsfreundlicher Software.',
      themeConfig: {
        nav: [
          { text: 'Dokumentation', link: '/de/docs/', activeMatch: '/de/docs/' },
          { text: 'Beispiele', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Module', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/de/docs/': getDocsSidebar('de', 'de'),
        },
      },
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      description: 'Bahasa yang simple, cepat, aman, dan terkompilasi untuk mengembangkan perangkat lunak yang mudah dipelihara.',
      themeConfig: {
        nav: [
          { text: 'Dokumentasi', link: '/id/docs/', activeMatch: '/id/docs/' },
          { text: 'Contoh-contoh', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Modul-modul', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/id/docs/': getDocsSidebar('id', 'id'),
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: '保守性に優れたソフトウェアを開発するための、シンプル・高速・安全なコンパイラ型言語。',
      themeConfig: {
        nav: [
          { text: 'ドキュメント', link: '/ja/docs/', activeMatch: '/ja/docs/' },
          { text: '実装例', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'モジュール', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'フォーラム', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/ja/docs/': getDocsSidebar('ja', 'ja'),
        },
      },
    },
    no: {
      label: 'Norsk',
      lang: 'no',
      description: 'Enkelt, raskt, sikkert, kompilert programmeringsspråk for vedlikeholdbar programvarers utvikling.',
      themeConfig: {
        nav: [
          { text: 'Dokumentasjon', link: '/no/docs/', activeMatch: '/no/docs/' },
          { text: 'Eksempler', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Moduler', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Nettforum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/no/docs/': getDocsSidebar('no', 'no'),
        },
      },
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      description: 'Linguagem compilada simples, rápida e segura para o desenvolvimento de software sustentável.',
      themeConfig: {
        nav: [
          { text: 'Documentação', link: '/pt/docs/', activeMatch: '/pt/docs/' },
          { text: 'Exemplos', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Módulos', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Fórum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/pt/docs/': getDocsSidebar('pt', 'pt'),
        },
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      description: 'Простой, быстрый, безопасный язык для разработки легко поддерживаемых приложений.',
      themeConfig: {
        nav: [
          { text: 'Документация', link: '/ru/docs/', activeMatch: '/ru/docs/' },
          { text: 'Примеры', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Модули', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Форум', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/ru/docs/': getDocsSidebar('ru', 'ru'),
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      description: 'Lenguaje simple, rápido, seguro y compilado para el desarrollo de software mantenible.',
      themeConfig: {
        nav: [
          { text: 'Documentación', link: '/es/docs/', activeMatch: '/es/docs/' },
          { text: 'Ejemplos', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Módulos', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Foro', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/es/docs/': getDocsSidebar('es', 'es'),
        },
      },
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      description: 'Bakımı kolay yazılım geliştirmek için basit, hızlı, güvenli, derlenmiş dil.',
      themeConfig: {
        nav: [
          { text: 'Dökümantasyon', link: '/tr/docs/', activeMatch: '/tr/docs/' },
          { text: 'Örnekler', link: 'https://github.com/vlang/v/tree/master/examples' },
          { text: 'Tutorials', link: 'https://github.com/vlang/v/blob/master/tutorials' },
          { text: 'Modüller', link: 'https://modules.vlang.io' },
          { text: 'vpm', link: 'https://vpm.vlang.io' },
          { text: 'Playground', link: 'https://play.vlang.io' },
          {
            text: 'Community',
            items: [
              { text: 'Forum', link: 'https://github.com/vlang/v/discussions' },
              { text: 'Discord', link: 'https://discord.gg/vlang' },
              { text: 'GitHub', link: 'https://github.com/vlang/v' },
              { text: 'Telegram', link: 'https://t.me/vlang_lang' },
              { text: 'YouTube', link: 'https://www.youtube.com/@VLang' },
            ],
          },
          { text: 'Showcase', link: '/showcase' },
        ],
        sidebar: {
          '/tr/docs/': getDocsSidebar('tr', 'tr'),
        },
      },
    },
  },
  themeConfig: {
    logo: '/img/v-logo.png',
    siteTitle: 'V Lang',
    nav: getNav(),
    sidebar: {
      '/docs/en/': getDocsSidebar(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vlang/v' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present V Language Contributors',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    languages: ['v'],
  },
})
