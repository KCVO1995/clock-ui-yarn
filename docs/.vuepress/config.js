module.exports = {
  base: '/clock-ui-yarn/',
  title: 'Clock UI',
  description: '一个好用的 UI 框架',
  theme: 'vuepress-theme-onen',
  themeConfig: {
    avatar: '/avatar.jpg',
    music: '/music.mp3',
    displayAllHeaders: false,
    navbar: [
      {type: 'home', title: '主页', href: '/'},
      {type: 'user', title: '博客', href: 'https://kcvo.top/'},
      {type: 'github', title: "GitHub", href: "https://github.com/KCVO1995/Clock-UI"},
    ],
    menu: [
      {
        text: '入门',
        link: '/start',
        children: [{text: '介绍', link: '/Introduction'}, {text: '安装', link: '/install'}, {
          text: '快速上手',
          link: '/get-started'
        }]
      },
      {
        text: "组件",
        link: '/components',
        children: [
          {text: '按钮-Button', link: '/button'},
          {text: '开关-Switch', link: '/switch'},
          {text: '输入框-Input', link: '/input'},
          {text: '栅格布局-Grid', link: '/grid'},
          {text: '默认布局-Layout', link: '/layout'},
          {text: '弹出信息-Toast', link: '/toast'},
          {text: '分组标签-Tabs', link: '/tabs'},
          {text: '气泡卡片-Popover', link: '/popover'},
          {text: '折叠面板-Collapse', link: '/collapse'},
          {text: '分页器-Pagination', link: '/pagination'},
          {text: '音量弹射-VolumeShooter', link: '/volumeShooter'},
        ]
      }
    ],
  },
}
