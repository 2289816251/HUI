// 配置文件
import { defineUserConfig } from 'vuepress'

// 主题配置文件
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base:'/',
//   lang: 'zh-CN',
  title: 'HUI',
//   description: '个性化UI组件库',
  theme: defaultTheme({
    // 在这里进行配置
    colorModeSwitch: true, // 是否启用切换颜色按钮
    home:'/zn/', // 首页的路径
  }),
})