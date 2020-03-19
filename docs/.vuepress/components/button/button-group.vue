<template>
  <div class="box" >
    <c-button-group>
      <c-button icon="left">上一页</c-button>
      <c-button icon="right">上一页</c-button>
    </c-button-group>

    <c-button-group>
      <c-button icon="setting"></c-button>
      <c-button icon="loading"></c-button>
      <c-button icon="like"></c-button>
    </c-button-group>
  </div>
</template>
<script>
  import Button from "../../../../src/components/button/Button"
  import ButtonGroup from "../../../../src/components/button/ButtonGroup"

  export default {
    components: {
      "c-button": Button,
      "c-button-group": ButtonGroup
    },

  }
</script>

<style lang="scss" scoped >
  @import "../../styles/helper";
  .box {
    @extend %box;
    > .global {
    margin-right: 10px;
  }
  }
</style>
