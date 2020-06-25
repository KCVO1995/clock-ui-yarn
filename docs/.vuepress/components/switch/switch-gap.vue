<template>
  <div class="global">
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="3"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="5"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="7"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="9"  class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" s-width="70" s-height="35" gap="11"  class="switch-margin"/>
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
