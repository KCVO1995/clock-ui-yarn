<template>
  <div style="padding-top: 16px;">
    <c-row align="left" class="global">
      <c-col span="5" class="bg-green"></c-col>
      <c-col span="5" class="bg-lime"></c-col>
      <c-col span="5" class="bg-green"></c-col>
    </c-row>
    <c-row align="right" class="global">
      <c-col span="5" class="bg-green"></c-col>
      <c-col span="5" class="bg-lime"></c-col>
      <c-col span="5" class="bg-green"></c-col>
    </c-row>
    <c-row align="center" class="global">
      <c-col span="5" class="bg-green"></c-col>
      <c-col span="5" class="bg-lime"></c-col>
      <c-col span="5" class="bg-green"></c-col>
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

<style scoped lang="scss">
  @import "../../styles/helper.scss";
  .bg-lime {
    background: #EDFFEA;
    height: 60px;
  }
  .global {
    @extend %box
  }

  .bg-green {
    background: #75DAAD;
    height: 60px;
  }

</style>