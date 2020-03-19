<template>
  <div style="padding-top: 16px;">
    <c-row class="row-height">
      <c-col span="10" class="bg-blue"></c-col>
      <c-col span="8" offset="5" class="bg-yellow"></c-col>
      <c-col span="6" offset="10" class="bg-blue"></c-col>
    </c-row>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Col from "../../../../src/components/grid/Col"
  import Row from "../../../../src/components/grid/Row"

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