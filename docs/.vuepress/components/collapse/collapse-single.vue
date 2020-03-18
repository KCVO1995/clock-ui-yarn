<template>
  <div style="padding-top: 16px;">
    <c-collapse :selected="['标题1']" single>
      <c-collapse-item title="标题1">
        <div class="content">这里是第1段内容</div>
      </c-collapse-item>

      <c-collapse-item title="标题2">
        <div class="content">这里是第2段内容</div>
      </c-collapse-item>

      <c-collapse-item title="标题3">
        <div class="content">这里是第3段内容</div>
      </c-collapse-item>
    </c-collapse>
  </div>
</template>
<script>
  import Collapse from "../../../../src/collapse/Collapse"
  import CollapseItem from "../../../../src/collapse/CollapseItem"

  export default {
    components: {
      "c-collapse": Collapse,
      "c-collapse-item": CollapseItem,
    },
  }
</script>