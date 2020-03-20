<template>
  <div style="padding-top: 16px;">
    <c-row gutter="20">
      <c-col>
        <div class="bg-lime"></div>
      </c-col>
      <c-col>
        <div class="bg-green"></div>
      </c-col>
      <c-col>
        <div class="bg-lime"></div>
      </c-col>
    </c-row>
  </div>
</template>
<script>
  import Col from "../../../../src/components/grid/Col"
  import Row from "../../../../src/components/grid/Row"

  export default {
    components: {
      "c-col": Col,
      "c-row": Row
    }
  }
</script>

<style scoped>
  .bg-lime {
    background: #EDFFEA;
    height: 60px;
  }

  .bg-green {
    background: #75DAAD;
    height: 60px;
  }
</style>