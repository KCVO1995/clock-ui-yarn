<template>
  <div class="layout" :class="{hasSide}">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "c-layout",
    data() {
      return {
        hasSide: false
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if (vm.$options.name === "c-sider") {this.hasSide = true}
      })
    }
  }
</script>

<style lang='scss' scoped>
  .layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .hasSide {flex-direction: row;}
</style>