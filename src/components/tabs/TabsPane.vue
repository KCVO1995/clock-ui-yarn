<template>
  <div :class="{active}" class="tabs-pane" v-if="active">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "ClockTabsPane",
    inject: ["eventBus"],
    data() {
      return {
        active: false
      }
    },
    props: {
      name: {
        type: [String, Number],
        required: true
      }
    },
    mounted() {
      this.eventBus.$on("update:selected", (selected) => {
        this.active = this.name === selected
      })
    }
  }

</script>

<style lang='scss' scoped>
  .tabs-pane {
    padding: 1em;
    &.active {
    }
  }

</style>