<template>
  <div class="global">
    <c-popover>
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>点击弹出</c-button>
    </c-popover>
    <c-popover trigger="hover">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>悬浮弹出</c-button>
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
    @extend %box;
    .c-button {
      margin-right: 10px;
    }
  }
</style>
