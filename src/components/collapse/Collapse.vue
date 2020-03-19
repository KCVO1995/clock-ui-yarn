<template>
  <div class="collapse">
    <slot/>
  </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "c-collapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {type: Array,},
    },
    data() {
      return {
        eventBus: new Vue
      }
    },
    provide() {
      return {eventBus: this.eventBus}
    },

    mounted() {
      this.eventBus.$emit("update:selected", this.selected)
      this.add()
      this.remove()
    },

    methods: {
      addSelected(title) {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if (this.single) {selectedCopy = [title]} else {selectedCopy.push(title)}
        return selectedCopy
      },

      add() {
        this.eventBus.$on("update:addSelected", (title) => {
          const selectedCopy = this.addSelected(title)
          this.emit(selectedCopy)
        })
      },

      remove() {
        this.eventBus.$on("update:removeSelected", (title) => {
          let selectedCopy = JSON.parse(JSON.stringify(this.selected))
          const index = selectedCopy.indexOf(title)
          selectedCopy.splice(index, 1)
          this.emit(selectedCopy)
        })
      },

      emit(selectedCopy) {
        this.$emit("update:selected", selectedCopy)
        this.eventBus.$emit("update:selected", selectedCopy)
      }
    },
  }
</script>

<style lang='scss' scoped>
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }

</style>