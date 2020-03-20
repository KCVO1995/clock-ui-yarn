<template>
  <div class="global">
    <c-button @click="showToast_1">从顶部弹出</c-button>
    <c-button @click="showToast_2">从中间弹出</c-button>
    <c-button @click="showToast_3">从底部弹出</c-button>
  </div>
</template>
<script>
  import Button from "../../../../src/components/button/Button"
  import plugin from "../../../../src/components/toast/Toast"
  import Vue from "vue"

  Vue.use(plugin)

  export default {
    components: {
      "c-button": Button
    },
    methods: {
      showToast_1() {
        this.$toast("我是message", {
          position: "top"
        })
      },
      showToast_2() {
        this.$toast("我是message", {
          position: "middle"
        })
      },
      showToast_3() {
        this.$toast("我是message", {
          position: "bottom"
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box;
    > .c-button {
      margin-right: 10px;
    }
  }
</style>
