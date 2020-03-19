<template>
  <div class="global">
    <c-button loading>按钮</c-button>
    <c-button :loading="state" @click="state = !state" icon="setting">按钮</c-button>
  </div>
</template>
<script>
  import Button from "../../../../src/components/button/Button"

  export default {
    components: {"c-button": Button},
    data() {
      return {
        state: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/helper";
  .global {
    @extend %box;
    > .c-button {
      margin-right: 10px;
    }
  }
</style>
