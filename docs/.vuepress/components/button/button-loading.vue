<template>
  <div style="padding-top: 16px;">
    <p><strong>预览</strong></p>
    <c-button loading>按钮</c-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from "../../../../src/components/button/Button"

  export default {
    components: {
      "c-button": Button
    },
    data() {
      return {
        content: `
          <c-button loading>默认按钮</c-button>
      `.replace(/^ {8}/gm, "").trim()
      }
    }
  }
</script>