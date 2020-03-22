<template>
  <div class="global">
    <c-collapse :selected.sync="selected">
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
    <div style="color: rgb(66, 185, 130); padding-top: 10px;">展开项:{{selected}}</div>
  </div>
</template>
<script>
  import Collapse from "../../../../src/components/collapse/Collapse"
  import CollapseItem from "../../../../src/components/collapse/CollapseItem"

  export default {
    components: {
      "c-collapse": Collapse,
      "c-collapse-item": CollapseItem,
    },
    data() {
      return {
        selected: ["标题1", "标题2"]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box;
    display: flex;
    flex-wrap: wrap;
    > .collapse {
      width: 100%;
    }


  }
</style>