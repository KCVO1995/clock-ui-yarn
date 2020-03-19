<template>
  <div style="padding-top: 16px;">
    <c-button-group>
      <c-button>按钮</c-button>
      <c-button>按钮</c-button>
      <c-button>按钮</c-button>
    </c-button-group>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from "../../../../src/components/button/Button"
  import ButtonGroup from "../../../../src/components/button/ButtonGroup"

  export default {
    components: {
      "c-button": Button,
      "c-button-group": ButtonGroup
    },
    data() {
      return {
        content: `
          <c-button>按钮</c-button>
          <c-button>按钮</c-button>
          <c-button>按钮</c-button>
      `.replace(/^ {8}/gm, "").trim()
      }
    }
  }
</script>