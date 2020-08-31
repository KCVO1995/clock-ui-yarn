---
title: page-size
---

# 分页器 - Pagination

page-size
---

:::tip
* 可选
* 类型: `string number`
* 默认值: `10`
:::

<ClientOnly>
<pagination-pagination-page-size></pagination-pagination-page-size>
</ClientOnly>

```html
<c-pagination :total="100" page-size="5" v-model="current"/>
```

通过 `page-size` 指定每页显示的条目，默认值为 10
