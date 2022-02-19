module.exports = {
    // site config
    lang: 'en-US',
    title: 'Bootleg!',
    description: 'No, i dont think so',
  
    // theme and its config
    theme: '@vuepress/theme-default', 
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        lastUpdated: false,
        sidebar: [
          ["/", "Home"],
          "/otázky/1/",
          "/demos/local/",
          "/demos/remote/",
          "/demos/remote-async/",
          "/demos/native/",
          "/demos/socket-io/",
          ["/demos/homepage/", "A Homepage Fit for Heroes"],
          "/demos/netlify/",
          "/demos/partials/",
          "/demos/diagrams/",
          "/demos/tweet/",
          "/demos/video/",
          "/demos/extending/",
        ],
        nav: [
          { text: "Home", link: "/" }
        ],
        repo: "colwilson/vuepress-examples",
        repoLabel: "Contribute",
        displayAllHeaders: true
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
          },
        ],
      ],
  }