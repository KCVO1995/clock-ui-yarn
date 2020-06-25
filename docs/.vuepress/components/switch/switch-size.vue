<template>
  <div class="global">
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="30" s-height="15"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="50" s-height="25"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="90" s-height="45"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="110" s-height="55"  class="switch-margin"/>
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
    overflow: auto;
    > .switch-margin {
    margin-right: 10px;
  }
  }
</style>
