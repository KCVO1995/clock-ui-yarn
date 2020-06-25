<template>
  <div class="global">
    <c-switch v-model="value" active-color="pink"    inactive-color="#545456" class="switch-margin"/>
    <c-switch v-model="value" active-color="#89c9b8" inactive-color="#f7f5dd" class="switch-margin"/>
    <c-switch v-model="value" active-color="#ddf3f5" inactive-color="#e0dede" class="switch-margin"/>
    <c-switch v-model="value" active-color="#32e0c4" inactive-color="#b1b493" class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" class="switch-margin"/>
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
    @extend %box;
    display: flex;
    align-items: center;
    > .switch-margin {
    margin-right: 10px;
  }
  }
</style>
