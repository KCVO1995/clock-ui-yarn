<template>
  <div @click="onClick" class="tabs-item" :class="{active, disabled}" :data-name="name">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "c-tabs-item",
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
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    created() {
      if (this.eventBus) {
        this.eventBus.$on("update:selected", (selected) => {
          this.active = this.name === selected
        })
      }
    },
    methods: {
      onClick() {
        this.$emit("click")
        if (this.disabled === true) {return}
        this.eventBus && this.eventBus.$emit("update:selected", this.name)
      }
    }
  }
</script>

<style lang='scss' scoped>
  $blue: blue;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>