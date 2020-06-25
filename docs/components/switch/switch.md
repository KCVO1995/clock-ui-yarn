---
title: 开关 - Switch 
---
# 开关 - Switch
---

## 基础用法 

<ClientOnly>
<switch-switch-base></switch-switch-base>
</ClientOnly>



```html
<c-switch v-model="value" />
```

```javascript
export default {
    data() {
      return {
        value: false
      }
    }
  }
```

通过 `v-model` 属性绑定一个 `Boolean`  类型的变量，实现开关状态的同步

## active-color && inactive-color 


::: tip
#### 
* 可选
* 类型: `string`
* 默认值: `#C0CCDA` && `#6cb88b`
:::
 
 
<ClientOnly>
<switch-switch-color></switch-switch-color>
</ClientOnly>


```html
<c-switch v-model="value" active-color="pink"    inactive-color="#545456" />
<c-switch v-model="value" active-color="#89c9b8" inactive-color="#f7f5dd" />
<c-switch v-model="value" active-color="#ddf3f5" inactive-color="#e0dede" />
<c-switch v-model="value" active-color="#32e0c4" inactive-color="#b1b493" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" />
```


```javascript
export default {
    data() {
      return {
        value: false
      }
    }
  }
```

通过 `active-color` 和 `inactive-color` 属性随心定义你喜欢的颜色


## s-width && s-height

::: tip
#### 
* 可选
* 类型: `string`
* 默认值: `40` && `20`
::: 

<ClientOnly>
<switch-switch-size></switch-switch-size>
</ClientOnly>

```html
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="30" s-height="15" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="50" s-height="25" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="90" s-height="45" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="110" s-height="55" />

```

```javascript
export default {
    data() {
      return {
        value: false
      }
    }
  }
```

通过 `s-width` 和 `s-height` 属性来控制 `switch` 的大小

## gap 

::: tip
#### 
* 可选
* 类型: `String`
* 默认值: `5`
:::


<ClientOnly>
<switch-switch-gap></switch-switch-gap>
</ClientOnly>


```html
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="3" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="5" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="7" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="9" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="11" />
```

```javascript
export default {
    data() {
      return {
        value: false
      }
    }
  }
```

通过 `gap` 属性来控制开关圆点的间隙

## duration 

::: tip
#### 
* 可选
* 类型: `String`
* 默认值: `5`
:::

<ClientOnly>
<switch-switch-duration></switch-switch-duration>
</ClientOnly>


```html
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" duration="0.6" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" duration="0.8" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" duration="1" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" duration="1.2" />
```

```javascript
export default {
    data() {
      return {
        value: false
      }
    }
  }
```

通过 `duration` 属性来控制开关的速度

## active-text && inactive-text

::: tip
#### 
* 可选
* 类型: `String`
:::

<ClientOnly>
<switch-switch-text></switch-switch-text>
</ClientOnly>


```html
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" active-text="study" inactive-text="game" />
<c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" active-text="按月付费" inactive-text="按年付费" />
```

```javascript
export default {
    data() {
      return {
        value: false
      }
    }
  }
```

通过 `active-text` 和 `inactive-text` 属性来定义文字描述

