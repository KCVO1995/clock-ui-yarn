<template>
  <div class="global">
    <c-button icon="setting"></c-button>
    <c-button icon="like"></c-button>
    <c-button icon="download">下载</c-button>
    <c-button icon="left">上一页</c-button>
    <c-button icon="right">下一页</c-button>
    <c-button icon="down">展开</c-button>
  </div>
</template>
<script>
  import Button from "../../../../src/components/button/Button"

  export default {
    components: {"c-button": Button},
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box;
    > .c-button {
      margin-right: 10px;
    }
  }
</style>
