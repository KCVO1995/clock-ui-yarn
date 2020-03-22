<template>
  <div class="global">
    <c-popover position="right">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>弹出信息</c-button>
    </c-popover>
  </div>
</template>

<script>
  import Button from "../../../../src/components/button/Button"
  import Popover from "../../../../src/Popover"

  export default {
    components: {
      "c-button": Button,
      "c-popover": Popover
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box
  }
</style>
