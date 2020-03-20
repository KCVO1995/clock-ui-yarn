<template>
  <div class="global">
    <c-popover position="top">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>从顶部弹出</c-button>
    </c-popover>
    <c-popover position="bottom">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>从底部弹出</c-button>
    </c-popover>
    <c-popover position="left">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>从左侧弹出</c-button>
    </c-popover>
    <c-popover position="right">
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>从右侧弹出</c-button>
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
    }
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