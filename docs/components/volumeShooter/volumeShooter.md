---
title: 音量弹射 - VolumeShooter  
sidebarDepth: 2 
---

# 音量弹射 - VolumeShooter  

基础用法
---

<ClientOnly>
<volumeShooter-volume-shooter-demo></volumeShooter-volume-shooter-demo>
</ClientOnly>

```html
<c-volume-shooter v-model="value"><c-volume-shooter>
```
```javascript
export default {
  data() {
    return {
      value: 0
    } 
  }
}
```

Size
---

::: tip
#### 
* 可选
* 类型: `small | normal | big`
* 默认值: `normal`
:::

<ClientOnly>
<volumeShooter-volume-shooter-size></volumeShooter-volume-shooter-size>
</ClientOnly>

```html
<c-volume-shooter v-model="value1" size="small"></c-volume-shooter>
<c-volume-shooter v-model="value2" size="normal"></c-volume-shooter>
<c-volume-shooter v-model="value3" size="big"></c-volume-shooter>
```

通过 `size` 属性调整大小，由于 svg mask 依赖 Id 选择，出现了颜色错误的问题，单独使用不会出现

Color
---

::: tip
#### 
* 可选
* 类型: `string`
* 默认值: `5`
:::

<ClientOnly>
<volumeShooter-volume-shooter-color></volumeShooter-volume-shooter-color>
</ClientOnly>

```html
<c-volume-shooter v-model="value1" color="#ff9234"></c-volume-shooter>
<c-volume-shooter v-model="value2" color="pink"></c-volume-shooter>
<c-volume-shooter v-model="value3" color="#545456"></c-volume-shooter>
```

通过 `color` 属性控制主题颜色

