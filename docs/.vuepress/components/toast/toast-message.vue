<template>
  <div style="padding-top: 16px;">
    <c-button @click="showToast">弹出信息</c-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
    data() {
      return {
        content: `
         <c-input></c-input>
      `.replace(/^ {8}/gm, "").trim()
      }
    },
    methods: {
      showToast() {
        this.$toast("我是message", {
          closeButton: {text: "我知道了", callback: () => {console.log("我知道了")}},
        })
      },
    }
  }
</script>