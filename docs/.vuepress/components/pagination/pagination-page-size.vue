<template>
  <div class="global-container">
    <c-pagination :total="100" page-size="5" v-model="currentPage"/>
  </div>
</template>

<script>
  import Pagination from '../../../../src/components/pagination/Pagination'

  export default {
    name: 'pagination-base',
    data() {
      return {
        currentPage: 1
      }
    },
    components: {
      'c-pagination': Pagination
    }
  }
</script>

<style lang="scss">
  @import "../../styles/helper";
  .global-container {
    @extend %box;
    .pager-container {
      margin: 0;
      padding: 0;
    }
  }


</style>