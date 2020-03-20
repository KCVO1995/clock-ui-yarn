<template>
  <div style="padding-top: 16px;">
    <c-row>
      <c-col span="8" class="bg-lime"></c-col>
      <c-col span="6" offset="5" class="bg-green"></c-col>
      <c-col span="3" offset="2" class="bg-lime"></c-col>
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
    },
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