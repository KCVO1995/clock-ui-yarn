---
title: Jumper
---

# 分页器 - Pagination

Jumper
---

:::tip
* 可选
* 类型: `boolean`
* 默认值: `false`
:::

<ClientOnly>
<pagination-pagination-jumper></pagination-pagination-jumper>
</ClientOnly>

```html
<c-pagination :total="100" jumper v-model="current"/>
```

通过 `jumper` 选择是否使用跳转器 
