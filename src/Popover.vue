<template>
  <div class="popover" ref="popover">
    <div v-if="visible" class="content-wrapper" ref="contentWrapper"
         :class="{[`position-${position}`]: true, create: true}">
      <slot name="content" v-bind:close="close"/>
    </div>
    <span class="triggerWrapper" ref="toggleWrapper">
      <slot/>
    </span>
  </div>
</template>

<script>
  export default {
    name: "c-popover",
    props: {
      position: {
        type: String,
        default: "top",
        validator(value) {
          return ["top", "left", "bottom", "right"].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: "click",
        validator(value) {
          return ["click", "hover"].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        hover: false,
        visible: false,
      }
    },

    mounted() {
      if (this.trigger === "click") {
        this.$refs.popover.addEventListener("click", this.showPopover)
      } else if (this.trigger === "hover") {
        this.$refs.popover.addEventListener("mouseenter", this.open)
        this.$refs.popover.addEventListener("mouseleave", this.mouseleave)
      }
    },

    beforeDestroy() {
      if (this.trigger === "click") {
        this.$refs.popover.removeEventListener("click", this.showPopover)
      } else if (this.trigger === "hover") {
        this.$refs.popover.removeEventListener("mouseenter", this.open)
        this.$refs.popover.removeEventListener("mouseleave", this.mouseleave)
      }
    },

    methods: {
      showPopover(e) {
        if (this.$refs.toggleWrapper.contains(e.target)) {
          if (this.visible) {this.close()} else {this.open()}
        }
      },

      open() {
        this.visible = true
        this.$nextTick(() => {
          if (this.trigger === "hover") {
            this.$refs.contentWrapper.addEventListener("mouseenter", this.over)
            this.$refs.contentWrapper.addEventListener("mouseleave", this.close)
          }
          this.positionContent()
          document.addEventListener("click", this.onClickDocument)
        })
      },

      over() {this.hover = true},

      close() {
        this.$refs.contentWrapper.classList.add("destroy")
        window.setTimeout(() => {
          this.visible = false
          document.removeEventListener("click", this.onClickDocument)
        }, 200)

      },

      mouseleave() {
        setTimeout(() => {
          if (this.hover) {
            this.hover = false
            return
          }
          this.close()
        }, 100)
      },

      onClickDocument(e) {
        const {popover, contentWrapper} = this.$refs
        if (popover && popover === e.target || popover.contains(e.target)) {return}
        if (contentWrapper && contentWrapper === e.target || contentWrapper.contains(e.target)) {return}
        this.close()
      },

      positionContent() {
        const contentWrapper = this.$refs.contentWrapper
        const toggleWrapper = this.$refs.toggleWrapper
        document.body.appendChild(contentWrapper)
        const {top, left, width, height} = toggleWrapper.getBoundingClientRect()
        const {height: contentHeight} = contentWrapper.getBoundingClientRect()
        const position = {
          top: {top: top + scrollY, left: left + scrollX}, bottom: {top: top + height + scrollY, left: left + scrollX},
          left: {top: top + scrollY - (contentHeight - height) / 2, left: left + scrollX},
          right: {top: top + scrollY - (contentHeight - height) / 2, left: left + width + scrollX},
        }
        contentWrapper["style"].top = position[this.position].top + "px"
        contentWrapper["style"].left = position[this.position].left + "px"
      },
    }

  }

</script>

<style lang='scss'>
  $border-color: #333;
  $border-radius: 4px;
  $max-width: 20em;
  $popover-bg: white;
  @keyframes create {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }
  @keyframes destroy {
    from {
      opacity: 100%;
    }
    to {
      opacity: 0;
    }
  }
  .popover {
    position: relative;
    display: inline-block;
    > .triggerWrapper {
      display: inline-block;
    }
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: $popover-bg;
    padding: .5em 1em;
    max-width: $max-width;
    word-break: break-all;
    animation: create 200ms;
    &::before, &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border: 10px solid transparent;
    }
    &.destroy {
      animation: destroy 200ms;
    }
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after {
        left: 10px;
        border-bottom: none;
      }
      &::before {
        border-top-color: $border-color;
        top: 100%;
      }
      &::after {
        border-top-color: $popover-bg;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before, &::after {
        left: 10px;
        border-top: none;
      }
      &::before {
        border-bottom-color: $border-color;
        bottom: 100%;
      }
      &::after {
        border-bottom-color: $popover-bg;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
      }
      &::before {
        border-left-color: $border-color;
      }
      &::after {
        border-left-color: $popover-bg;
        left: calc(100% - 1px)
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left: none;
      }
      &::before {
        border-right-color: $border-color;
      }
      &::after {
        border-right-color: $popover-bg;
        right: calc(100% - 1px)
      }
    }
  }

</style>