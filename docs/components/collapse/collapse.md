---
title: 折叠面板 - Collapse 
---

# 折叠面板 - Collapse

基础用法
---

<ClientOnly>
<collapse-collapse-demo></collapse-collapse-demo>
</ClientOnly>

```html
<c-collapse>
  <c-collapse-item title="标题1">
    <div class="content">这里是第1段内容</div>
  </c-collapse-item>

  <c-collapse-item title="标题2">
    <div class="content">这里是第2段内容</div>
  </c-collapse-item>

  <c-collapse-item title="标题3">
    <div class="content">这里是第3段内容</div>
  </c-collapse-item>
</c-collapse>
```

`collapse` 组件由 `collapse` 和 `collapse-item` 两部组成，这个一个基础的示例

title
---

:::tip
####
* 必须
* 类型: `string`
* 默认值: `undefined`
:::

```html
<c-collapse-item title="标题2">
  ...
</c-collapse-item>
```

每个 `collapse-item` 都必须设置一个 `title` 

selected
---

:::tip
####
* 可选
* 类型: `array`
* 默认: `[]`
:::

<ClientOnly>
<collapse-collapse-selected></collapse-collapse-selected>
</ClientOnly>

```html
<c-collapse :selected="['标题1', '标题2']">
  <c-collapse-item title="标题1">
    <div class="content">这里是第1段内容</div>
  </c-collapse-item>

  <c-collapse-item title="标题2">
    <div class="content">这里是第2段内容</div>
  </c-collapse-item>

  <c-collapse-item title="标题3">
    <div class="content">这里是第3段内容</div>
  </c-collapse-item>
</c-collapse>
```

通过 `selected` 属性可指定默认展开项，`selected` 是一个数组，数组的内容是需要展开项的 `title`

`selected` 属性同时也支持 `.sync` 语法，可以通过变量动态获取已展开项实时的 `title`

<collapse-collapse-sync></collapse-collapse-sync>

```html
<c-collapse :selected.sync="selected">
  <c-collapse-item title="标题1">
    <div class="content">这里是第1段内容</div>
  </c-collapse-item>

  <c-collapse-item title="标题2">
    <div class="content">这里是第2段内容</div>
  </c-collapse-item>

  <c-collapse-item title="标题3">
    <div class="content">这里是第3段内容</div>
  </c-collapse-item>
</c-collapse>
<div>展开项:{{selected}}</div>
```


single
---


:::tip
####
* 可选
* 类型: `boolean`
* 默认: `false`
:::

<ClientOnly>
<collapse-collapse-single></collapse-collapse-single>
</ClientOnly>

```html
<c-collapse single>
  ...
</c-collapse>
```

通过 `single` 属性可指定 `collapse` 每次只有唯一一个展开项