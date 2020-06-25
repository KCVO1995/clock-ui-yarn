<template>
  <div class="global">
    <c-switch v-model="value"/>
  </div>
</template>
<script>
  import Switch from "../../../../src/components/switch/Switch"

  export default {
    components: {"c-switch": Switch},
    data() {
      return {
        value: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box
  }
</style>
