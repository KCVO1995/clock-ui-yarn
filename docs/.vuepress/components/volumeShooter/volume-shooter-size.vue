<template>
  <div class="global-container">
    <c-volume-shooter v-model="value1" size="small"></c-volume-shooter>
    <c-volume-shooter v-model="value2" size="normal"></c-volume-shooter>
    <c-volume-shooter v-model="value3" size="big"></c-volume-shooter>
  </div>
</template>
<script>
  import VolumeShooter from '../../../../src/components/volumeShooter/VolumeShooter'

  export default {
    name: 'volume-shooter-size',
    components: {
      'c-volume-shooter': VolumeShooter,
    },
    data() {
      return {
        value1: 0,
        value2: 0,
        value3: 0
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";

  .global-container {
    display: flex;
    flex-direction: column;
    @extend %box;
  }
</style>
