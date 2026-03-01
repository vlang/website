import { defineConfig, type DefaultTheme } from 'vitepress'

const SITE_URL = 'https://vlang.io'

function getDocsSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: '/docs/' },
        { text: 'Installation', link: '/docs/installation' },
        { text: 'Hello World', link: '/docs/hello-world' },
      ],
    },
    {
      text: 'Basics',
      collapsed: false,
      items: [
        { text: 'Variables', link: '/docs/basics/variables' },
        { text: 'Functions', link: '/docs/basics/functions' },
        { text: 'Primitive Types', link: '/docs/basics/types' },
        { text: 'Strings', link: '/docs/basics/strings' },
        { text: 'Arrays', link: '/docs/basics/arrays' },
        { text: 'Maps', link: '/docs/basics/maps' },
      ],
    },
    {
      text: 'Control Flow',
      collapsed: false,
      items: [
        { text: 'If / Else', link: '/docs/control-flow/if' },
        { text: 'Match', link: '/docs/control-flow/match' },
        { text: 'For Loops', link: '/docs/control-flow/for-loops' },
      ],
    },
    {
      text: 'Structs & Types',
      collapsed: false,
      items: [
        { text: 'Structs', link: '/docs/structs-types/structs' },
        { text: 'Enums', link: '/docs/structs-types/enums' },
        { text: 'Interfaces', link: '/docs/structs-types/interfaces' },
      ],
    },
    {
      text: 'Advanced',
      collapsed: false,
      items: [
        { text: 'Concurrency', link: '/docs/concurrency' },
        { text: 'Error Handling', link: '/docs/error-handling' },
        { text: 'JSON', link: '/docs/json' },
        { text: 'ORM', link: '/docs/orm' },
        { text: 'Testing', link: '/docs/testing' },
      ],
    },
  ]
}

function getNav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Docs', link: '/docs/', activeMatch: '/docs/' },
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
          { text: 'المرجع', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'مقدمة', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'متغيرات', link: '/docs/basics/variables' },
                { text: 'وظائف', link: '/docs/basics/functions' },
                { text: 'أنواع أساسية', link: '/docs/basics/types' },
                { text: 'سلاسل نصية', link: '/docs/basics/strings' },
                { text: 'مصفوفات', link: '/docs/basics/arrays' },
                { text: 'خرائط', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'if الشرطية', link: '/docs/control-flow/if' },
                { text: 'مفاتيح', link: '/docs/control-flow/match' },
                { text: 'الحلقات الدورانية', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'الهياكل', link: '/docs/structs-types/structs' },
                { text: 'التعدادات', link: '/docs/structs-types/enums' },
                { text: 'واجهات', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'التزامن', link: '/docs/concurrency' },
                { text: 'أنواع الخيارات ومعالجة الأخطاء', link: '/docs/error-handling' },
                { text: 'فك تشفير (json)', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'تجريب', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    ms: {
      label: 'Bahasa Melayu',
      lang: 'ms',
      description: 'Bahasa yang simple, cepat, aman, dan terkompilasi untuk mengembangkan perangkat lunak yang mudah dipelihara.',
      themeConfig: {
        nav: [
          { text: 'Dokumentasi', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Perkenalan', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variabel', link: '/docs/basics/variables' },
                { text: 'Fungsi', link: '/docs/basics/functions' },
                { text: 'Tipe Dasar', link: '/docs/basics/types' },
                { text: 'Strings', link: '/docs/basics/strings' },
                { text: 'Arrays', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'For loop', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Structs', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Interfaces', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Concurrency', link: '/docs/concurrency' },
                { text: 'Option types & error handling', link: '/docs/error-handling' },
                { text: 'Decoding JSON', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Testing', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    bs: {
      label: 'Bosanski',
      lang: 'bs',
      description: 'Jednostavan, brz, siguran kompajliran jezik za kreiranje održivog softvera.',
      themeConfig: {
        nav: [
          { text: 'Dokumentacija', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Uvod', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Varijable', link: '/docs/basics/variables' },
                { text: 'Funkcije', link: '/docs/basics/functions' },
                { text: 'Jednostavni tipovi', link: '/docs/basics/types' },
                { text: 'Stringovi', link: '/docs/basics/strings' },
                { text: 'Nizovi', link: '/docs/basics/arrays' },
                { text: 'Mape', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'For petlja', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Struktovi', link: '/docs/structs-types/structs' },
                { text: 'Enumi', link: '/docs/structs-types/enums' },
                { text: 'Interfejsi', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Konkurencija', link: '/docs/concurrency' },
                { text: 'Vrste opcija i rukovanje greškama', link: '/docs/error-handling' },
                { text: 'Dekodiranje JSON-a', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Testiranje', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    ca: {
      label: 'Català',
      lang: 'ca',
      description: 'Un llenguatge senzill, ràpid, segur i compilat per desenvolupar programari mantenible.',
      themeConfig: {
        nav: [
          { text: 'Documentació', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introducció', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variables', link: '/docs/basics/variables' },
                { text: 'Funcions', link: '/docs/basics/functions' },
                { text: 'Tipus bàsics', link: '/docs/basics/types' },
                { text: 'Strings', link: '/docs/basics/strings' },
                { text: 'Arrays', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Bucle for', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Structs', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Interfícies', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Concurrència', link: '/docs/concurrency' },
                { text: "Tipus opcionals i control d'errors", link: '/docs/error-handling' },
                { text: 'Descodificació de JSON', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Testing', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      description: '简洁、快速、安全的编译型语言，用于开发易维护的软件。包含内置电池，跨平台且开源。',
      themeConfig: {
        nav: [
          { text: '文档', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: '介绍', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: '变量', link: '/docs/basics/variables' },
                { text: '函数', link: '/docs/basics/functions' },
                { text: '基本类型', link: '/docs/basics/types' },
                { text: '字符串', link: '/docs/basics/strings' },
                { text: '数组', link: '/docs/basics/arrays' },
                { text: '集合', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If 语句', link: '/docs/control-flow/if' },
                { text: 'Switch 语句', link: '/docs/control-flow/match' },
                { text: 'For 循环', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: '结构体', link: '/docs/structs-types/structs' },
                { text: '枚举', link: '/docs/structs-types/enums' },
                { text: '接口', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: '并发', link: '/docs/concurrency' },
                { text: 'Option 类型 & 错误处理', link: '/docs/error-handling' },
                { text: 'JSON 解析', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: '测试', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Langage compilé simple, rapide, sûr pour le développement de logiciels maintenables. Inclus batteries, multiplateforme et open source.',
      themeConfig: {
        nav: [
          { text: 'Documentation', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variables', link: '/docs/basics/variables' },
                { text: 'Fonctions', link: '/docs/basics/functions' },
                { text: 'Types de base', link: '/docs/basics/types' },
                { text: 'Chaînes de caractères', link: '/docs/basics/strings' },
                { text: 'Listes', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Boucle for', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'stuctures', link: '/docs/structs-types/structs' },
                { text: 'Enumerations', link: '/docs/structs-types/enums' },
                { text: 'Interfaces', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'parallélisme', link: '/docs/concurrency' },
                { text: "Types d'options et gestion des erreurs", link: '/docs/error-handling' },
                { text: 'Décodage de json', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Tests', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      description: 'Eine einfache, schnelle und sichere kompilierte Sprache zur Entwicklung von wartungsfreundlicher Software.',
      themeConfig: {
        nav: [
          { text: 'Dokumentation', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Einführung', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variablen', link: '/docs/basics/variables' },
                { text: 'Funktionen', link: '/docs/basics/functions' },
                { text: 'Grundtypen', link: '/docs/basics/types' },
                { text: 'Strings', link: '/docs/basics/strings' },
                { text: 'Arrays', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'For-Schleife', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Structs', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Interfaces', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Parallelität', link: '/docs/concurrency' },
                { text: 'Optionstypen und Fehlerbehandlung', link: '/docs/error-handling' },
                { text: 'JSON dekodieren', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Testen', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      description: 'Bahasa yang simple, cepat, aman, dan terkompilasi untuk mengembangkan perangkat lunak yang mudah dipelihara.',
      themeConfig: {
        nav: [
          { text: 'Dokumentasi', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Pengantar', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variabel', link: '/docs/basics/variables' },
                { text: 'Fungsi', link: '/docs/basics/functions' },
                { text: 'Tipe-tipe Dasar', link: '/docs/basics/types' },
                { text: 'Strings', link: '/docs/basics/strings' },
                { text: 'Arrays', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Looping For', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Structs', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Antarmuka', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Konkurensi', link: '/docs/concurrency' },
                { text: 'Jenis opsi & penanganan kesalahan', link: '/docs/error-handling' },
                { text: 'Decoding JSON', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Pengujian', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      description: '保守性に優れたソフトウェアを開発するための、シンプル・高速・安全なコンパイラ型言語。',
      themeConfig: {
        nav: [
          { text: 'ドキュメント', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'はじめに', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: '変数', link: '/docs/basics/variables' },
                { text: '関数', link: '/docs/basics/functions' },
                { text: '基本型', link: '/docs/basics/types' },
                { text: '文字列', link: '/docs/basics/strings' },
                { text: '配列', link: '/docs/basics/arrays' },
                { text: 'マップ', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If条件分岐', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Forループ', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: '構造体', link: '/docs/structs-types/structs' },
                { text: '列挙型', link: '/docs/structs-types/enums' },
                { text: 'インターフェース', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: '並列処理', link: '/docs/concurrency' },
                { text: 'Optional型とエラーハンドリング', link: '/docs/error-handling' },
                { text: 'JSONのデコード', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'テスト', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    no: {
      label: 'Norsk',
      lang: 'no',
      description: 'Enkelt, raskt, sikkert, kompilert programmeringsspråk for vedlikeholdbar programvarers utvikling.',
      themeConfig: {
        nav: [
          { text: 'Dokumentasjon', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Innledning', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variabler', link: '/docs/basics/variables' },
                { text: 'Funksjoner', link: '/docs/basics/functions' },
                { text: 'Enkle basistyper', link: '/docs/basics/types' },
                { text: 'Teksttyper', link: '/docs/basics/strings' },
                { text: 'Matriser', link: '/docs/basics/arrays' },
                { text: 'Kart', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Brytere', link: '/docs/control-flow/match' },
                { text: 'For løkker', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Strukter', link: '/docs/structs-types/structs' },
                { text: 'Enumer', link: '/docs/structs-types/enums' },
                { text: 'Interfacer', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Samtidighet', link: '/docs/concurrency' },
                { text: 'Valgtyper og behandling av programfeil', link: '/docs/error-handling' },
                { text: 'JSON dekoding', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Feilsøking', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    pt: {
      label: 'Português',
      lang: 'pt-BR',
      description: 'Linguagem compilada simples, rápida e segura para o desenvolvimento de software sustentável.',
      themeConfig: {
        nav: [
          { text: 'Documentação', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introdução', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variáveis', link: '/docs/basics/variables' },
                { text: 'Funções', link: '/docs/basics/functions' },
                { text: 'Tipos básicos', link: '/docs/basics/types' },
                { text: 'Strings', link: '/docs/basics/strings' },
                { text: 'Arrays', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Laço for', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Structs', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Interfaces', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Concorrência', link: '/docs/concurrency' },
                { text: 'Tipos opcionais e tratamento de erros', link: '/docs/error-handling' },
                { text: 'Decodificação JSON', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Teste', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      description: 'Простой, быстрый, безопасный язык для разработки легко поддерживаемых приложений.',
      themeConfig: {
        nav: [
          { text: 'Документация', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Введение', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Переменные', link: '/docs/basics/variables' },
                { text: 'Функции', link: '/docs/basics/functions' },
                { text: 'Базовые типы', link: '/docs/basics/types' },
                { text: 'Строки', link: '/docs/basics/strings' },
                { text: 'Массивы', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Цикл for', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Cтруктуры', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Интерфейсы', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Concurrency', link: '/docs/concurrency' },
                { text: 'Опц. типы и обработка ошибок', link: '/docs/error-handling' },
                { text: 'Работа с JSON', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Тестирование', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      description: 'Lenguaje simple, rápido, seguro y compilado para el desarrollo de software mantenible.',
      themeConfig: {
        nav: [
          { text: 'Documentación', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introducción', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Variables', link: '/docs/basics/variables' },
                { text: 'Funciones', link: '/docs/basics/functions' },
                { text: 'Tipos básicos', link: '/docs/basics/types' },
                { text: 'Strings', link: '/docs/basics/strings' },
                { text: 'Arrays', link: '/docs/basics/arrays' },
                { text: 'Maps', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'Bucle for', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Structs', link: '/docs/structs-types/structs' },
                { text: 'Enums', link: '/docs/structs-types/enums' },
                { text: 'Interfaces', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Concurrencia', link: '/docs/concurrency' },
                { text: 'Tipos opcionales y manejo de errores', link: '/docs/error-handling' },
                { text: 'Decodificación de JSON', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Pruebas', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      description: 'Bakımı kolay yazılım geliştirmek için basit, hızlı, güvenli, derlenmiş dil.',
      themeConfig: {
        nav: [
          { text: 'Dökümantasyon', link: '/docs/', activeMatch: '/docs/' },
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
          '/docs/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Talimat', link: '/docs/' },
                { text: 'Installation', link: '/docs/installation' },
                { text: 'Hello World', link: '/docs/hello-world' },
              ],
            },
            {
              text: 'Basics',
              collapsed: false,
              items: [
                { text: 'Değişkenler', link: '/docs/basics/variables' },
                { text: 'Fonksiyonlar', link: '/docs/basics/functions' },
                { text: 'Basit tipler', link: '/docs/basics/types' },
                { text: 'Stringler', link: '/docs/basics/strings' },
                { text: 'Diziler', link: '/docs/basics/arrays' },
                { text: 'Mapler', link: '/docs/basics/maps' },
              ],
            },
            {
              text: 'Control Flow',
              collapsed: false,
              items: [
                { text: 'If', link: '/docs/control-flow/if' },
                { text: 'Switch', link: '/docs/control-flow/match' },
                { text: 'For döngüsü', link: '/docs/control-flow/for-loops' },
              ],
            },
            {
              text: 'Structs & Types',
              collapsed: false,
              items: [
                { text: 'Struct', link: '/docs/structs-types/structs' },
                { text: 'Enumlar', link: '/docs/structs-types/enums' },
                { text: 'Arayüzler', link: '/docs/structs-types/interfaces' },
              ],
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Eşzamanlılık', link: '/docs/concurrency' },
                { text: 'Option tipleri & hata işleme', link: '/docs/error-handling' },
                { text: 'JSON çözme', link: '/docs/json' },
                { text: 'ORM', link: '/docs/orm' },
                { text: 'Testing', link: '/docs/testing' },
              ],
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    logo: '/img/v-logo.png',
    siteTitle: 'V Lang',
    nav: getNav(),
    sidebar: {
      '/docs/': getDocsSidebar(),
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
