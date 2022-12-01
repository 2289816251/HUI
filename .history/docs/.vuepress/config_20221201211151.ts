// 配置文件
import { defineUserConfig } from "vuepress";

// 主题配置文件
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  base: "/",
  //   lang: 'zh-CN',
//   title: "HUI",
  //  description: '个性化UI组件库',
  locales: { // 国际化配置
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
        lang: "zh-CN",
        title:'个性化UI组件库'
      },
    "/us/": {
      lang: "en-US",
      title:'个性化UI组件库'
    } 
  },
  theme: defaultTheme({
    // 在这里进行配置
    colorModeSwitch: true, // 是否启用切换颜色按钮
    home: "/zn/", // 首页的路径
    // 导航栏
    navbar: [
      // 嵌套 Group - 最大深度为 2
      {
        text: "Group",
        children: [
          {
            text: "SubGroup",
            children: ["/group/sub/foo.md", "/group/sub/bar.md"],
          },
        ],
      },
      // 控制元素何时被激活
      {
        text: "Group 2",
        children: [
          {
            text: "Always active",
            link: "/",
            // 该元素将一直处于激活状态
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // 该元素在当前路由路径是 /foo/ 开头时激活
            // 支持正则表达式
            activeMatch: "^/foo/",
          },
        ],
      },
    ],
    // logo
    logo: "/images/logo.png",
    // 国际化配置
    selectLanguageText: '切换语言',
    locales: {
        '/': {
          selectLanguageName: '简体中文',
        },
        '/us/': {
          selectLanguageName: 'English',
        },
      },
  }),
});
