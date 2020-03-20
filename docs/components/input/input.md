---
title: 输入框 - Input 
---

# 输入框

基础用法
---

<input-input-demo></input-input-demo>

```html
<c-input></c-input>
```

value 
---

:::tip
####
* 可选
* 类型: `string` 
* 默认值: `undefined`
:::

<input-input-value></input-input-value>

```html
<c-input value="默认内容"></c-input>
```

通过 `value` 属性可指定默认显示的值

placeholder
---

:::tip
####
* 可选
* 类型: `string` 
* 默认值: `undefined`
:::

<input-input-placeholder></input-input-placeholder>

```html
<c-input placeholder="请输入内容"></c-input>
```

通过 `placeholder` 属性可指定占位内容

disabled
---

:::tip
#### 
* 可选
* 类型: `boolean` 
* 默认值: `false`
* 可接受值: `true false` 
:::

<input-input-disabled></input-input-disabled>

```html
<c-input disabled placeholder="不可用"></c-input>
```

通过 `disabled` 属性指定是否禁用 input 组件

readonly
---

:::tip
#### 
* 可选
* 类型: `boolean` 
* 默认值: `false`
* 可接受值: `true false` 
:::

<input-input-readonly></input-input-readonly>

```html
<c-input readonly placeholder="只读"></c-input>
```

通过 `readonly` 属性指定是否只读的 input 组件

error
---

:::tip
####
* 可选
* 类型: `string` 
* 默认值: `undefined`
:::

<input-input-error></input-input-error>

```html
<c-input error="您输入的信息不符合要求"></c-input>
```

通过 `error` 属性传入错误提示，并将输入框指定为 `error` 样式

v-model
---

input 组件支持 `v-model` 双向绑定

<input-input-v-model></input-input-v-model>

```html
<c-input v-model="value"></c-input>
```

```javascript
export default {
  data() {
    return {
      value: ''
    }
  }
}
```