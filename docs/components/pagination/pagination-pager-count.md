---
title: pager-count
---

# 分页器 - Pagination

pager-count
---

:::tip
* 可选
* 类型: `number`
* 默认值: `7`
:::

<ClientOnly>
<pagination-pagination-pager-count></pagination-pagination-pager-count>
</ClientOnly>

```html
<c-pagination :total="1000" :pager-count="9" v-model="current"/>
```

通过 `pager-count` 指定页码按钮个数，大于等于 5 且小于等于 21 的奇数
