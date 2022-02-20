module.exports = {
    // site config
    lang: 'cs',
    title: 'NESTLING',
    description: 'Maturitní otázky pro SPŠS',
  
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
        ],
        nav: [
          { text: "Home", link: "/" },
        ],
        repo: "/Moumirrai/nestling",
        repoLabel: "Pomoct s projektem",
        displayAllHeaders: false,
        editLink: false,
        contributors: false
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