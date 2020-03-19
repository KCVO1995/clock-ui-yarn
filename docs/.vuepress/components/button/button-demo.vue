<template>
  <div class="global">
    <c-button>按钮</c-button>
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
    @extend %box
  }
</style>