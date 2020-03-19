<template>
  <div class="global">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "FanButtonGroup",
    mounted() {
      for (let node of this.$el.children) {
        const name = node.nodeName.toLocaleLowerCase()
        if (name !== "button") {
          console.warn(`g-button-group 的子元素只允许是 g-button，而你使用了${name}`)
        }
      }
    }
  }

</script>

<style lang='scss' scoped>
  $border-radius: 4px;
  .global {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(first-child) {margin-left: -1px}
    ;
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        z-index: 1;
      }
    }
  }

</style>