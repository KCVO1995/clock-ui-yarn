<template>
  <div class="row" :style="gutterStyle" :class="{['align-'+align]: align}">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "c-row",
    props: {
      gutter: {type: [String, Number]},
      align: {
        type: String,
        default: "left",
        validate(value) {
          return ["left", "center", "right"].indexOf(value) !== -1
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {vm["gutter"] = this.gutter})
    },
    computed: {
      gutterStyle() {
        const {gutter} = this
        return {marginRight: -gutter / 2 + "px", marginLeft: -gutter / 2 + "px"}
      }
    }
  }
</script>

<style lang='scss' scoped>
  .row {
    display: flex;
    &.align-left {justify-content: flex-start;}
    &.align-center {justify-content: center;}
    &.align-right {justify-content: flex-end;}
  }
</style>