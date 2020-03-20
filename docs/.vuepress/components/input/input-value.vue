<template>
  <div class="global">
    <c-input value="默认内容"></c-input>
  </div>
</template>
<script>
  import Input from "../../../../src/Input"

  export default {
    components: {"c-input": Input}
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {@extend %box}
</style>