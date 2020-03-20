<template>
  <div class="global">
    <c-input></c-input>
  </div>
</template>
<script>
  import Input from "../../../../src/Input"

  export default {
    components: {
      "c-input": Input
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {@extend %box}
</style>

