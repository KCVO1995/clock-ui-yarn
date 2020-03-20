<template>
  <div class="global">
    <c-input error="您输入的信息不符合要求"></c-input>
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