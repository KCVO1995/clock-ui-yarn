<template>
  <div style="padding-top: 16px;">
    <c-row>
      <c-col class="bg-lime"
             :pad="{span:8}"
             :narrow-pc="{span:6}"
             :pc="{span:4}"
             :wide-pc="{span:2}"
      ></c-col>
      <c-col class="bg-green"
             :pad="{span:15, offset:1}"
             :narrow-pc="{span:17,offset:1}"
             :pc="{span:18,offset:2}"
             :wide-pc="{span:19, offset:3}"
      ></c-col>
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