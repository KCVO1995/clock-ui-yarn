<template>
  <div class="tabs-head" ref="head">
    <slot>placeholder</slot>
    <div class="container-actions">
      <slot name="actions"/>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script>
  export default {
    name: "ClockTabsHead",
    inject: ["eventBus"],
    mounted() {
      this.eventBus.$on("update:selected", (selected) => {
        this.$children.forEach((child) => {
          if (child["name"] === selected) {
            this.positionLine(child)
          }
        })
      })
    },
    methods: {
      positionLine(child) {
        this.$nextTick(() => {
          const {width, left} = child.$el.getBoundingClientRect()
          const left2 = this.$refs.head.getBoundingClientRect().left
          this.$refs.line["style"].width = `${width}px`
          this.$refs.line["style"].left = `${left - left2}px`
        })
      }
    }
  }

</script>

<style lang='scss' scoped>
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .container-actions {
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 350ms;
    }
  }
</style>