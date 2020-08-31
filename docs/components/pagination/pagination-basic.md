---
title: Basic
---

# 分页器 - Pagination

## 基础用法

<ClientOnly>
<pagination-pagination-base></pagination-pagination-base>
</ClientOnly>

```html
<c-pagination :total="100" v-model="current"/>
```

```javascript
export default {
  name: 'pagination-base',
  data() {
    return {
      current: 1
    }
  }
}
```
通过 `total` 表示总条目, `v-model` 关联当前页码
