const { path } = require("@vuepress/utils");

module.exports = {
  name: "vuepress-theme-local",
  extends: "@vuepress/theme-default",

  layouts: {
    CustomHomePage: path.resolve(__dirname, "./components/Home.vue"),
  },
};
