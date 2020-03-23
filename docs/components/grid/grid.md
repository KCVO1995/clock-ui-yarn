---
title: 栅格布局 - Grid 
sidebarDepth: 2 
---
#  栅格布局 - Grid

基础用法
---

<gird-gird-demo></gird-gird-demo>

```html
<c-row>
  <c-col class="bg-lime"></c-col>
  <c-col class="bg-green"></c-col>
  <c-col class="bg-lime"></c-col>
  <c-col class="bg-green"></c-col>
  <c-col class="bg-lime"></c-col>
</c-row>
```

栅格布局由 row 和 col 组件组成，每个 row 可包裹多个 col, 形成一分栏的布局

gutter 
---

:::tip
####
* 可选
* 类型: `string number`
* 默认值: `undefined`
:::

<ClientOnly>
<gird-gird-gutter></gird-gird-gutter>
</ClientOnly>

```html
<c-row gutter="20">
  <c-col>
    <div class="bg-lime"></div>
  </c-col>
  <c-col>
    <div class="bg-green"></div>
  </c-col>
  <c-col>
    <div class="bg-lime"></div>
  </c-col>
</c-row>
```

通过 `gutter` 可指定每个 col 内部元素之间的间距

span
---

:::tip
####
* 可选
* 类型: `string number`
* 默认值: `undefined`
* 可接受值: `0 ~ 24`
:::

<ClientOnly>
<gird-gird-span></gird-gird-span>
</ClientOnly>

```html
<c-row>
  <c-col span="10" class="bg-lime"></c-col>
  <c-col span="8" class="bg-green"></c-col>
  <c-col span="6" class="bg-lime"></c-col>
</c-row>
```

通过 `span` 属性可指定每个 col 组件所占的比例，每排共有 `24` 分，若在单个 row 中 col 的 `span` 属性相加之和大于 `24` , 末尾的元素将会换行显示

offset
---

:::tip
####
* 可选
* 类型: `string number`
* 默认值: `undefined`
* 可接受值: `0 ~ 24`
:::

<ClientOnly>
<gird-gird-offset></gird-gird-offset>
</ClientOnly>

```html
<c-row>
  <c-col span="8" class="bg-lime"></c-col>
  <c-col span="6" offset="5" class="bg-green"></c-col>
  <c-col span="3" offset="2" class="bg-lime"></c-col>
</c-row>
```

通过 `offset` 属性可指定每个 col 组件左侧间隔的距离所占比例，若在单个 row 中 col 的 `span` 属性和 `offser` 属性相加之和大于 `24` , 末尾的元素将会换行显示

align 
---

:::tip
####
* 可选
* 类型: `string`
* 默认值: `undefined`
* 可接受值: `left center right`
:::

<ClientOnly>
<gird-gird-align></gird-gird-align>
</ClientOnly>

```html
<c-row align="left">
  <c-col span="5" class="bg-green"></c-col>
  <c-col span="5" class="bg-lime"></c-col>
  <c-col span="5" class="bg-green"></c-col>
<c-row>
<c-row align="right">
  <c-col span="5" class="bg-green"></c-col>
  <c-col span="5" class="bg-lime"></c-col>
  <c-col span="5" class="bg-green"></c-col>
  </c-row>
<c-row align="center">
  <c-col span="5" class="bg-green"></c-col>
  <c-col span="5" class="bg-lime"></c-col>
  <c-col span="5" class="bg-green"></c-col>
</c-row>
```

通过 `align` 属性可指定，row 中的对齐方式

响应式布局
---

栅格布局支持响应式布局，内置 5 种宽度范围，当没写对应范围的样式时，默认向下取值

| 属性        |  宽度 (px)          | 
| ------------- |:-------------:|
| 默认      | 0 ~ 576 |
| pad      | 576 ~ 768     |
| narrow-pc | 769 ~ 992      |
| pc | 993 ~ 1200      |
| wide-pc | > 1200      |


<ClientOnly>
<gird-gird-responsive></gird-gird-responsive>
</ClientOnly>

```html
<c-row>
  <c-col class="bg-lime"
         :pad="{span:8}"
         :narrow-pc="{span:6}"
         :pc="{span:4}"
         :wide-pc="{span:2}"
  ></c-col>
  <c-col class="bg-green"
         :pad="{span:15, offset:1}"
         :narrow-pc="{span:17,offset:1}"
         :pc="{span:18,offset:2}"
         :wide-pc="{span:19, offset:3}"
  ></c-col>
</c-row>
```
