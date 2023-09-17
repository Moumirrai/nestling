import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import themeConfig from "./themeConfig";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { componentsPlugin } from "vuepress-plugin-components";
import { removePWAPlugin } from "vuepress-plugin-remove-pwa";
import { pwaPlugin } from "vuepress-plugin-pwa2";

export default defineUserConfig({
  base: "/",
  lang: "cs-CZ",
  title: "Nestling",
  description: "Pozemní staviteství",
  head: [
    ["link", { rel: "icon", href: `/images/icons/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#22272e" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/images/icons/safari-pinned-tab.svg",
        color: "#ffcc00",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/images/icons/android-chrome-192x192.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#ffcc00" }],
  ],
  plugins: [
    searchProPlugin({
      locales: {
        "/": {
          placeholder: "Hledat",
        },
      },
      indexContent: true,
      autoSuggestions: false,
      queryHistoryCount: 0,
      resultHistoryCount: 0,
    }),
    mdEnhancePlugin({
      katex: true,
      align: true,
      mathjax: true,
      figure: true,
      footnote: true,
      imgSize: true,
    }),
    photoSwipePlugin({
      scrollToClose: false,
    }),
    componentsPlugin({
        components: [
            "PDF",
            "YouTube",
        ]
    }),
    pwaPlugin({
      update: "hint",
    }),
  ],
  theme: themeConfig.theme,
});
