<template>
  <div class="global">
    <c-button @click="showToast">新信息</c-button>
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
        this.$toast("国家机密", {
          closeButton: {
            text: "收到",
            callback: () => {
              const content = this.$el.querySelector(".content")
              content.outerHTML = "已阅"
            }
          }
        })
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