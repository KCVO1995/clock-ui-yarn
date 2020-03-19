<template>
  <div class="global">
    <c-button icon="left" icon-position="left">按钮</c-button>
    <c-button icon="right" icon-position="right">按钮</c-button>
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
