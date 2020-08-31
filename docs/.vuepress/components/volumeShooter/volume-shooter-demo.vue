<template>
  <div class="global-container">
    <c-volume-shooter size="normal" v-model="value"></c-volume-shooter>
  </div>
</template>
<script>
  import VolumeShooter from '../../../../src/components/volumeShooter/VolumeShooter'

  export default {
    name: 'volume-shooter-demo',
    components: {
      'c-volume-shooter': VolumeShooter,
    },
    data() {
      return {
        value: 0
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";

  .global-container {
    @extend %box;
  }
</style>
