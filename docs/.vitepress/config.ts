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
