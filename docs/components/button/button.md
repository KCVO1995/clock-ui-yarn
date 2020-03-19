---
title: button
---
# Button 按钮
---

## 基础用法 


<button-button-demo></button-button-demo>


```html
<c-button>按钮</c-button>
```

## icon

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: tip
可选
 
* 类型: `string`
* 默认值: `undefined`
:::
 
 
<button-button-icon></button-button-icon>


```html
<c-button icon="setting"></c-button>
<c-button icon="like"></c-button>
<c-button icon="download">下载</c-button>
<c-button icon="left">上一页</c-button>
<c-button icon="right">下一页</c-button>
<c-button icon="down">展开</c-button>
```

`button` 组件默认提供 6 种 `icon`, 设置 `icon` 属性即可使用，也可以通过 `Symbol` 的方式引入自定义图标，然后把图标名传给 `icon` 属性即可


## icon-position

可控制 `icon` 的显示位置

::: tip
可选

* 类型: `string`
* 默认值: `left`
* 可接受值: `left right`
::: 

<button-button-icon-position></button-button-icon-position>

```html
<c-button icon="left" icon-position="left">按钮</c-button>
<c-button icon="right" icon-position="right">按钮</c-button>
```

可以通过 `icon-position` 属性来控制图标的位置

## loading

可用于展示正在加载的状态

::: tip
可选

* 类型: `Boolean`
* 默认值: `false`
* 可接受值: `true false`
:::


<button-button-loading></button-button-loading>


```html
<c-button loading>按钮</c-button>
<c-button :loading="state" @click="state = !state" icon="setting">按钮</c-button>
```

`loading` 属性可以控制是否显示 `loading` 图标, 显示 `loading` 图标时将隐藏之前的图标，可以给 `loading` 属性传一个变量，以达到切换图标的效果
 

## button-group

以按钮组的方式出现，常用于多项类似操作

<button-button-group></button-button-group>


```html
<c-button-group>
   <c-button icon="left">上一页</c-button>
   <c-button icon="right">上一页</c-button>
</c-button-group>

<c-button-group>
   <c-button icon="setting"></c-button>
   <c-button icon="loading"></c-button>
   <c-button icon="like"></c-button>
</c-button-group>
```

使用 `c-button-group` 标签来嵌套你的按钮

