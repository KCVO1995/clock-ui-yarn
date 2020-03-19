<template>
  <div class="tabs">
    <slot/>
  </div>
</template>

<script>
  import Vue from "vue"

  export default {
    name: "c-tabs",
    props: {
      selected: {
        type: [String, Number],
        required: true
      },
    },
    data() {
      return {eventBus: new Vue()}
    },
    provide() {
      return {eventBus: this.eventBus}
    },
    mounted() {
      this.checkChildren()
      this.eventBus.$emit("update:selected", this.selected)
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn("tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件")
        }
      },
    }
  }
</script>

<style lang='scss' scoped>
  .tabs {
    display: flex;
    flex-direction: column;
  }
</style>