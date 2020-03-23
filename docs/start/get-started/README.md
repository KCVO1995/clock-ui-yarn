---
title: '快速上手'
---
# 快速上手

当你安装好 Clock-UI 套件后，你可以在 CSS 中将 `box-sizing` 指定为 `border-box`, 这样可以带来更为一致的体验，因为 Clock-UI 的套件中所有的 CSS 样式都是基于 `border-box` 设计的

```css
*{ box-sizing: border-box; }
*::before,*::after{ box-sizing: border-box; }
```


# Hello World
---

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

:::tip
你可以在 `clock-ui/src` 文件夹中查看源代码，定制自己喜欢的样式
:::