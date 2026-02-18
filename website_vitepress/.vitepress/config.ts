import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The V Programming Language',
  description: 'Simple, fast, safe, compiled. For developing maintainable software.',
  lang: 'en-US',
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
  themeConfig: {
    logo: '/img/v-logo.png',
    siteTitle: 'The V Programming Language',
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
        activeMatch: '/docs/',
      },
      {
        text: 'Examples',
        link: 'https://github.com/vlang/v/tree/master/examples',
      },
      {
        text: 'Tutorials',
        link: 'https://github.com/vlang/v/blob/master/tutorials',
      },
      {
        text: 'Stdlib',
        link: 'https://modules.vlang.io',
      },
      {
        text: 'vpm',
        link: 'https://vpm.vlang.io',
      },
      {
        text: 'Playground',
        link: 'https://play.vlang.io',
      },
      {
        text: 'Forum',
        link: 'https://github.com/vlang/v/discussions',
      },
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
      ],
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
