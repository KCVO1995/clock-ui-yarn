---
title: 默认布局 - Layout 
sidebarDepth: 2 
---
# 默认布局 - Layout

基础用法
---

<layout-layout-demo></layout-layout-demo>

```html
<c-layout class="container">
  <c-header class="header">header</c-header>
  <c-content class="content">content</c-content>
  <c-footer class="footer">footer</c-footer>
</c-layout>
```

header、content、footer 组件嵌套在 layout 组件种，实现基础默认布局

含边栏布局
---

<layout-layout-sider></layout-layout-sider>

```html
<c-layout class="container">
  <c-sider class="sider">sider</c-sider>
  <c-layout>
    <c-header class="header">header</c-header>
    <c-content class="content">content</c-content>
    <c-footer class="footer">footer</c-footer>
  </c-layout>
</c-layout>
```

通过组合嵌套的方式，实现含边栏的布局

:::warning
Layout 组件采用了 flex 布局，使用前请确定目标浏览器是否兼容
:::
