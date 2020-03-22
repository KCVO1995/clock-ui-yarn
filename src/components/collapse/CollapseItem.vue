<template>
  <div class="collapse-item">
    <div class="title" :class="{itemOpen: open}" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-collapse-item',
    inject: ["eventBus"],
    props: {
      title: {
        type: String,
        require: true
      }
    },
    data() {
      return {
        open: false
      }
    },

    mounted() {
      this.eventBus.$on("update:selected", selected => {
        this.open = selected.indexOf(this.title) >= 0
      })
    },

    methods: {
      toggle() {
        if (this.open) {
          this.eventBus && this.eventBus.$emit("update:removeSelected", this.title)
        } else {
          this.eventBus && this.eventBus.$emit("update:addSelected", this.title)
        }
      }
    }
  }

</script>

<style lang='scss' scoped>
  $grey: #ddd;
  .collapse-item {
    > .title {
      border-top: 1px solid $grey;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      font-weight: bold;
      &.itemOpen {
        border-bottom: 1px solid $grey;
      }
    }
    > .content {
      padding: 8px;
    }
    &:first-child {
      > .title {border-top: none;}
    }
  }

</style>