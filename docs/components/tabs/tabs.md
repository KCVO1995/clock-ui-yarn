---
title: 标签 -  Tabs 
---

# 标签 - Tabs

## 基础用法

<tabs-tabs-demo></tabs-tabs-demo>

```html
<c-tabs selected="chinese">
  <c-tabs-head>
    <template v-slot:actions>
      <c-button>设置</c-button>
    </template>
    <c-tabs-item name="chinese">
      <c-icon icon="like" style="padding-right: 2px;"/>
        语文
      </c-tabs-item>
      <c-tabs-item name="mathematics" disabled>数学</c-tabs-item>
      <c-tabs-item name="english">英语</c-tabs-item>
      </c-tabs-head>

  <c-tabs-body>
    <c-tabs-pane name="chinese">语文相关资讯</c-tabs-pane>
    <c-tabs-pane name="math">数学相关资讯</c-tabs-pane>
    <c-tabs-pane name="english">英语相关资讯</c-tabs-pane>
  </c-tabs-body>
</c-tabs>
```

Tabs 组件包含了 `tabs` `tabs-head` `tabs-item` `tabs-body` `tabs-pane` 这几个组件，可以通过基础实例了解他们的层级关系

你可以在名字为 `actions` 的具名插槽中添加内容

```html
<template v-slot:actions>
  <c-button>设置</c-button>
</template>
```

name
---

:::tip
* 必须
* 类型: `string number`
* 默认值: `undefined`
:::

```html
<c-tabs-head>
  <c-tabs-item name="chinese"> 语文 </c-tabs-item>
  <c-tabs-item name="math" disabled>数学</c-tabs-item>
  <c-tabs-item name="english">英语</c-tabs-item>
</c-tabs-head>

<c-tabs-body>
  <c-tabs-pane name="chinese">语文相关资讯</c-tabs-pane>
  <c-tabs-pane name="math">数学相关资讯</c-tabs-pane>
  <c-tabs-pane name="english">英语相关资讯</c-tabs-pane>
</c-tabs-body>
```

:::warning
注意：每一个 `tabs-item` 和 `tabs-pans` 都需要指定一个 `name`，而且有对应关系的 `tabs-item` 和 `tabs-pans` 需要拥有相同的 `name`
:::

selected
---

:::tip
####
* 必须
* 类型: `string number`
* 默认值: `undefined`
:::

```html
<c-tabs selected="chinese">
  ...
</c-tabs>
```

给定的 `selected` 的值为默认选定对象，所有 `selected` 的值必须时 `tabs-item` 和 `tabs-pane` 的 `name` 属性的其中一个

`seleted` 支持 `.sync` 语法，传入一个变量可动态获取 `selected` 实时的值

<tabs-tabs-selected></tabs-tabs-selected>

```html
<c-tabs :selected.sync="selectedTab">
  ...
</c-tabs>
```

```javascript
export default {
  data() {
    return {
      selectedTab: "chinese"
    }
  }
}
```

disabled
---

:::tip
#### 
* 可选
* 类型: `boolean`
:::

<tabs-tabs-disabled></tabs-tabs-disabled>

通过 `disabled` 属性指定是否禁用选项

```html
<c-tabs-item name="math" disabled>数学</c-tabs-item>
```
