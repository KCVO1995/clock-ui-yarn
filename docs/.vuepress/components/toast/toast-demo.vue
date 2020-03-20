<template>
  <div class="global">
    <c-button @click="showToast">弹出信息</c-button>
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
      showToast() {
        this.$toast("我是message")
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box
  }
</style>