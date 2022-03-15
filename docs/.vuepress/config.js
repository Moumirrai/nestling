const path = require('path')
module.exports = {
  // site config
  lang: "cs",
  title: "Nestling",
  description: "Maturitní otázky",
  head: [
    ['link', { rel: 'icon', href: `/images/icons/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#22272e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#ffcc00'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/android-chrome-192x192.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#ffcc00' }]
  ],

  // theme and its config
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    logo: '/images/icons/logo.png',
    lastUpdated: false,
    sidebar: {
      "/pos/": [
        {
          text: "Pozemní stavitelství",
          children: [
            "/pos/1/",
            "/pos/2/",
            "/pos/3/",
            /*
            "/pos/4/",
            */
            "/pos/5/",
            /*
            "/pos/6/",
            "/pos/7/",
            "/pos/8/",
            */
            "/pos/9/",
            /*
            "/pos/10/",
            "/pos/11/",
            "/pos/12/",
            "/pos/13/",
            "/pos/14/",
            "/pos/15/",
            "/pos/16/",
            "/pos/17/",
            */
            "/pos/18/",
            /*
            "/pos/19/",
            "/pos/20/",
            */
            "/pos/21/",
            /*
            "/pos/22/",
            "/pos/23/",
            "/pos/24/",
            "/pos/25/",
            */
            "/pos/26/",
            /*
            "/pos/27/",
            */
            "/pos/28/",
            /*
            "/pos/29/",
            "/pos/30/",
            "/pos/36/",
            */
            "/pos/37/",
            "/pos/38/",
            "/pos/39/",
          ],
        },
      ],
      /*
      "/stk/": [
        {
          text: "Stavební mechanika",
          children: ["/stk/1/"],
        },
      ],
      */
    },
    nav: [{ text: "Home", link: "/" }],
    navbar: [
      {
        text: "POS",
        link: "/pos/1/",
      },
      /*
      {
        text: "STK",
        link: "/stk/1/",
      },
      */
    ],
    repo: "/Moumirrai/nestling",
    displayAllHeaders: false,
    editLink: true,
    editLinkText: "Upravit stránku",
    docsRepo: 'https://github.com/Moumirrai/nestling',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    contributors: true,
    themePlugins: {
      mediumZoom: true,
    }
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Hledat",
          },
        },
        hotKeys: ["ctrl", "k"],
        maxSuggestions: 10,
      },
    ],
    ["@renovamen/vuepress-plugin-katex"],
    ["@vuepress/plugin-medium-zoom", {
      zoomOptions: {
        scrollOffset: 40,
      }
    }],
    ['@vuepress/pwa',
    {
      skipWaiting: true,
    }],
  ],
};
