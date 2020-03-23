# Clock-UI - 一个简单好用的 UI 框架

[![Build Status](https://www.travis-ci.org/KCVO1995/Clock-UI.svg?branch=master)](https://www.travis-ci.org/KCVO1995/Clock-UI)

![npm](https://img.shields.io/npm/v/clock-ui)


## 介绍

Clock UI 是一款简单好用的 UI 框架，它基于 [Vue.js](https://vuejs.org/) 搭建，提供了按钮、输入框、栅格布局、弹出信息、分组标签、气泡卡片、折叠面板等多个组件

这套框架在 PC 或 移动端平台均能很好地适配，并且提供了响应式布局的解决方案，在不同分辨率下均有良好的稳定性和视觉表现

您可以查看 [GitHub](https://github.com/KCVO1995/clock-ui-yarn) 上的源代码，或者浏览一下我的 [这篇博客]('')，里面记录着框架的设计思路以及如何解决各种难题的

话不多说，你可以 [直接体验一下这套框架](https://kcvo.top/clock-ui-yarn/start/install/install.html)，这篇文档会引导你一步一步地操作

## 安装

### 使用 npm 或 yarn 安装

你可以在使用 parcel、webpack、vue-cli 等工具搭建的项目中，通过 yarn 或 npm 来安装 Clock-UI, 我们推荐优先使用 yarn 安装      

```text
yarn add clock-ui
npm i clock-ui -S
```

### 按需引入

首先，在你的项目的**入口文件**中 (这可能是 `main.js` 或其他 `JavaScript` 文件) 引入 Vue、Clock-UI, 并按需**引入相应的组件并注册**

```javascript
import {CloButton} from 'clock-ui'

// 全局注册
Vue.component(CloButton.name, CloButton)

// 在组件内注册
export default {
  component: {
    'c-button': CloButton
  }
}
```

注意: [弹出信息组件](https://kcvo.top/clock-ui-yarn/components/toast/toast.html)的引入方式有些不同，因为它是以插件方式提供的，详细用法请查阅相关章节


# 快速上手

当你安装好 Clock-UI 套件后，你可以在 CSS 中将 `box-sizing` 指定为 `border-box`, 这样可以带来更为一致的体验，因为 Clock-UI 的套件中所有的 CSS 样式都是基于 `border-box` 设计的

```css
*{ box-sizing: border-box; }
*::before,*::after{ box-sizing: border-box; }
```


### Hello World


```html
<template>
  <div class="global">
    <c-popover position="left">
      <template v-slot:content>
        <div>Hellow World</div>
      </template>
      <c-button>click me</c-button>
    </c-popover>
  </div>
</template>

<script>
  import { CloButton, CloPopover } from 'clock-ui'

  export default {
    name: "app",
    components: {
      'c-button': CloButton,
      'c-popover': CloPopover
    }
  }
</script>

<style scoped>
  .global {
    margin: 100px;
  }
</style>
```

你可以在 `clock-ui/src` 文件夹中查看源代码，定制自己喜欢的样式




