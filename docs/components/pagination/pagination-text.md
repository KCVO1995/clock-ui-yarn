---
title: prev-text && next-text
---

# 分页器 - Pagination

prev-text && next-text
---

:::tip
* 可选
* 类型: `string`
* 默认值: `上一页，下一页`
:::

<ClientOnly>
<pagination-pagination-text></pagination-pagination-text>
</ClientOnly>

```html
<c-pagination :total="1000" prev-text="上一步" next-text="下一步" v-model="current"/>
```

通过 `prev-text` 指定第一个按钮的文字， 通过 `next-text` 指定第二个按钮的文字

