---
title: 气泡卡片 - Popover 
---
# 气泡卡片 - Popover

## 基础用法 

<ClientOnly>
<popover-popover-demo></popover-popover-demo>
</ClientOnly>

```html
<c-popover>
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>弹出信息</c-button>
</c-popover>
```

通过名字为 `content` 的具名插槽可以指定气泡卡片的内容

position
---

:::tip
####
* 可选
* 类型: `string`
* 可接受值: `top bottom left right`
:::

<ClientOnly>
<popover-popover-position></popover-popover-position>
</ClientOnly>


```html
<c-popover position="top">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>从顶部弹出</c-button>
</c-popover>

<c-popover position="bottom">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>从底部弹出</c-button>
</c-popover>

<c-popover position="left">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>从左侧弹出</c-button>
</c-popover>

<c-popover position="right">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>从右侧弹出</c-button>
</c-popover>
```

通过 `position` 属性可指定弹出气泡的方向

trigger
---

<ClientOnly>
<popover-popover-trigger></popover-popover-trigger>
</ClientOnly>


```html
<c-popover>
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>点击弹出</c-button>
</c-popover>

<c-popover trigger="hover">
  <template v-slot:content>
    <div>这是气泡卡片的内容</div>
  </template>
  <c-button>悬浮弹出</c-button>
</c-popover>
```

通过 `trigger` 属性可指定触发气泡的方法，默认触发方法为 `click` , 当触发方法为 `hover` 时，悬浮在气泡卡片上可延迟气泡的消失时间