const { path } = require('@vuepress/utils')

module.exports = {
  // inherit the default theme
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',

  // override the `404` layout
  layouts: {
    FooBar: path.resolve(__dirname, './components/Home.vue'),
  },
}