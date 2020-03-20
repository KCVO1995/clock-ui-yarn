<template>
  <div class="global">
    <c-button @click="showToast_1">string</c-button>
    <c-button @click="showToast_2">html</c-button>
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
        this.$toast("我是 message")
      },
      showToast_2() {
        this.$toast( < a
        href = "https://kcvo.top/"
        target = "blank" > my
        blog < /a>)
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