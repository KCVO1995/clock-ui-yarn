<template>
  <div class="global">
    <c-scroll-indicator delay/>
  </div>
</template>
<script>
  import scrollIndicator from '../../../../src/components/scrollIndicator/ScrollIndicator'


  export default {
    components: {
      'c-scroll-indicator': scrollIndicator,
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
</style>
