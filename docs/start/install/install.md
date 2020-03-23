---
title: 安装
---

# 安装
---

## 使用 npm 或 yarn 安装

你可以在使用 parcel、webpack、vue-cli 等工具搭建的项目中，通过 yarn 或 npm 来安装 Clock-UI, 我们推荐优先使用 yarn 安装      

```text
yarn add clock-ui
npm i clock-ui -S
```

# 按需引入
---

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


:::warning
注意: [弹出信息组件](/components/toast/toast.html)的引入方式有些不同，因为它是以插件方式提供的，详细用法请查阅相关章节
:::






