module.exports = {
    // site config
    lang: 'cs',
    title: 'NESTLING',
    description: 'No, i dont think so',
  
    // theme and its config
    theme: '@vuepress/theme-default', 
    themeConfig: {
        //logo: 'https://vuejs.org/images/logo.png',
        lastUpdated: false,
        sidebar: [
          ["/", "Home"],
          "/otázky/1/",
          "/otázky/2/",
          "/otázky/3/",
          "/otázky/4/",
          "/otázky/5/",
          "/otázky/6/",
        ],
        nav: [
          { text: "Home", link: "/" }
        ],
        repo: "colwilson/vuepress-examples",
        repoLabel: "Contribute",
        displayAllHeaders: false
      },
      plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
            },
            hotKeys: ['ctrl', 'k'],
            maxSuggestions: 10,
          },
        ],
        ['vuepress-plugin-smooth-scroll'],
      ],
  }