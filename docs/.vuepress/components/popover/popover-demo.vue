<template>
  <div style="padding-top: 16px;">
    <c-popover>
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>弹出信息</c-button>
    </c-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from "../../../../src/button/Button"
  import Popover from "../../../../src/Popover"


  export default {
    components: {
      "c-button": Button,
      "c-popover": Popover
    },
    data() {
      return {
        content: `
         <c-input></c-input>
      `.replace(/^ {8}/gm, "").trim()
      }
    }
  }
</script>