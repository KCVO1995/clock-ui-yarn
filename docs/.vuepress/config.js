module.exports = {
  title: "Clock UI",
  description: "一个好用的 UI 框架",
  themeConfig: {
    displayAllHeaders: false,
    nav: [
      {text: "主页", link: "/"},
      {text: "指南", link: "/components/"},
      {text: "博客", link: "https://kcvo.top/"},
      {text: "GitHub", link: "https://github.com/KCVO1995/Clock-UI"},
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/get-started/"]
      },
      {
        title: "组件",
        collapse: false,
        children: [
          "/components/button.md",
          "/components/input.md",
          "/components/grid.md",
          "/components/layout.md",
          "/components/toast.md",
          "/components/tabs.md",
          "/components/popover.md",
          "/components/collapse.md",
        ]
      }
    ]
  },
}