<template>
  <div style="padding-top: 16px;">
    <c-row gutter="20" class="row-height">
      <c-col>
        <div class="bg-blue"></div>
      </c-col>
      <c-col>
        <div class="bg-yellow"></div>
      </c-col>
      <c-col>
        <div class="bg-blue"></div>
      </c-col>
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
    height: 80px;
  }

  .bg-yellow {
    background: yellow;
    height: 80px;
  }

  .row-height {
    height: 80px;
  }
</style>