import { version } from '../../package.json'

export default {
  lang: 'en-US',
  title: 'Ryuzo',
  description: 'A Tailwind & Vue3 component library',

  lastUpdated: true,
  cleanUrls: 'without-subfolders',

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': guideSidebar(),
      '/components/': componentsSidebar()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vasisouv/ryuzo' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Vasilis Souvatzis'
    },
    // algolia: {
    //   appId: 'TODO',
    //   apiKey: 'TODO',
    //   indexName: 'TODO'
    // },
    // carbonAds: {
    //   code: 'TODO',
    //   placement: 'TODO'
    // }
  }
}

function nav() {
  return [
    { text: 'Components', link: '/components/introduction', activeMatch: '/components/' },
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    {
      text: version,
      items: [
        {
          text: 'npm',
          link: 'https://www.npmjs.com/package/@vasisouv/ryuzo'
        },
        {
          text: 'Github',
          link: 'https://github.com/vasisouv/ryuzo/'
        }
      ]
    }
  ]
}

function guideSidebar() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Home Page', link: '/guide/theme-home-page' },
        { text: 'Team Page', link: '/guide/theme-team-page' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function componentsSidebar() {
  return [
    {
      text: 'Components',
      items: [
        { text: 'Introduction', link: '/components/introduction' },
        { text: 'RButton', link: '/components/r-button' },
      ]
    }
  ]
}
