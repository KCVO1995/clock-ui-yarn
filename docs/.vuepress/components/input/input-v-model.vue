<template>
  <div class="global">
    <c-input v-model="value"></c-input>
  </div>
</template>
<script>
  import Input from "../../../../src/Input"

  export default {
    components: {"c-input": Input},
    data() {
      return {
        value: ""
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {@extend %box}
</style>