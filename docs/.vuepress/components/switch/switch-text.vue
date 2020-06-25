<template>
  <div class="global">
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" active-text="study" inactive-text="game" class="switch-margin"/>
    <c-switch v-model="value" active-color="#ff9234" inactive-color="#e8e4e1" active-text="按月付费" inactive-text="按年付费" class="switch-margin"/>
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
