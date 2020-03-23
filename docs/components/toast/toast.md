---
title: 弹出信息 - Toast  
sidebarDepth: 2 
---

# 弹出信息 - Toast

按需引入
---

```javascript
import {CloToast} from 'clock-ui'
Vue.use(CloToast)
```

基础用法
---

<ClientOnly>
<toast-toast-demo></toast-toast-demo>
</ClientOnly>

```html
<c-button @click="showToast">弹出信息</c-button>
```
```javascript
export default {
  methods: {
    showToast() {
      this.$toast("我是message")
    }
  }
}
```

使用时，你需要添加一个 `showToast` 的方法，并在适当的时刻触发它

:::warning
多次触发弹出信息，只会显示最后的一个，也就是页面同一时间内只能存在一个弹出信息
:::

this.$toast()
---

通过 `this.$toast()` 方法来调用 `toast` 组件，它接受两个参数：`message` 和 `options`，下面会详细介绍这两个参数的用法

message
---

::: tip
#### 
* 可选
* 类型: `string HTML`
* 默认值: `undefined`
:::

<ClientOnly>
<toast-toast-message></toast-toast-message>
</ClientOnly>

```javascript
export default {
  methods: {
    showToast_1() {
      this.$toast("我是 message")
    },
    showToast_2() {
      this.$toast(<a href="https://kcvo.top/" target="blank">my blog</a>)
    },
  }
}
```

通过 `message` 参数可以指定弹出信息的内容，内容可以时 字符串 或者 html

# options

`options` 是 `this.$toast()` 接受的第二个参数，类型为对象，并包含以下属性，这些属性都是可选的

autoClose
---

::: tip
#### 
* 可选
* 类型: `boolean number`
* 默认值: `5`
:::

<ClientOnly>
<toast-toast-autoClose></toast-toast-autoClose>
</ClientOnly>

```javascript
export default {
  methods: {
    showToast() {
      this.$toast("我是message", {
        autoClose: 3
      })
    },
  }
}
```
通过 `options` 的 `autoClose` 属性指定弹出信息的关闭时间，传入数字代表关闭的秒数，若不写 `autoClose` 属性，弹出信息默认在 `5` 秒后关闭

若需要取消自动关闭，则将 `autoClose` 指定为 `false` 即可

closeButton
---

::: tip
#### 
* 可选
* 类型: `object`
:::

<ClientOnly>
<toast-toast-closeButton></toast-toast-closeButton>
</ClientOnly>

```javascript
export default {
  methods: {
    showToast() {
      this.$toast("国家机密", {
        closeButton: {
          text: "收到",
          callback: () => {
            const content = this.$el.querySelector('.content')
            content.outerHTML = '已阅'
          }
        }
      })
    },
  }
}
```

通过 `options` 的 `closeButton` 可指定关闭按钮和回调函数，`text` 为关闭按钮内容，`callback` 为回调函数，当用户点击关闭按钮时，回调函数会被调用，若不指定回调函数内容，则不执行回调

position
---

::: tip
#### 
* 可选
* 类型: `string`
* 接受值: `top middle bottom`
:::

<ClientOnly>
<toast-toast-position></toast-toast-position>
</ClientOnly>

```javascript
export default {
  methods: {
    showToast_1() {
      this.$toast("我是message", {
        position: "top"
      })
    },
    showToast_2() {
      this.$toast("我是message", {
        position: "middle"
      })
    },
    showToast_3() {
      this.$toast("我是message", {
        position: "bottom"
      })
    },
  }
}
```

通过 `options` 的 `position` 属性可指定弹出位置


