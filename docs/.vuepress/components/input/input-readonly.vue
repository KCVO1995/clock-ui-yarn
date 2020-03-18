<template>
  <div style="padding-top: 16px;">
    <c-input readonly></c-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from "../../../../src/Input"

  export default {
    components: {
      "c-input": Input
    },
    data() {
      return {
        content: `
         <c-input readonly></c-input>
      `.replace(/^ {8}/gm, "").trim()
      }
    }
  }
</script>