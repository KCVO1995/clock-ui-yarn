module.exports = {
  title: "Clock UI",
  description: "一个好用的 UI 框架",
  theme: "vuepress-theme-onen",
  themeConfig: {
    avatar: '/avatar.jpg',
    music: '/music.mp3',
    displayAllHeaders: false,
    navbar: [
      {type: 'home', title: "主页", href: "/"},
      {type: 'user', title: "博客", href: "https://kcvo.top/"},
      {type: 'github', title: "GitHub", href: "https://github.com/KCVO1995/Clock-UI"},
    ],
    menu: [
      {
        text: '入门',
        link: '/start',
        children: [{text: 'install', link: '/install'}, {text: 'get-started', link: '/get-started'}]
      },
      {
        text: "组件",
        link: '/components',
        children: [
          {text: "按钮-Button", link: "/button"},
          {text: "输入框-Input", link: "/input"},
          {text: "栅格布局-Grid", link: "/grid"},
          {text: "默认布局-Layout", link: "/layout"},
          {text: "弹出信息-Toast", link: "/toast"},
          {text: "标签-Tabs", link: "/tabs"},
          {text: "气泡卡片-Popover", link: "/popover"},
          {text: "折叠面板-Collapse", link: "/collapse"},
        ]
      }
    ],
  },
}