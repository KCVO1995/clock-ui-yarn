<template>
  <div style="padding-top: 16px;">
    <c-row class="row-height">
      <c-col class="bg-blue"></c-col>
      <c-col class="bg-yellow"></c-col>
      <c-col class="bg-blue"></c-col>
      <c-col class="bg-yellow"></c-col>
      <c-col class="bg-blue"></c-col>
    </c-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Col from "../../../../src/grid/Col"
  import Row from "../../../../src/grid/Row"

  export default {
    components: {
      "c-col": Col,
      "c-row": Row
    },
    data() {
      return {
        content: `
          <c-button>默认按钮</c-button>
      `.replace(/^ {8}/gm, "").trim()
      }
    }
  }
</script>

<style>
  .bg-blue {
    background: blue;
  }

  .bg-yellow {
    background: yellow;
  }

  .row-height {
    height: 80px;
  }
</style>