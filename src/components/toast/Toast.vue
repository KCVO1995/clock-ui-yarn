<template>
  <div class="container" ref="container" :class="`position-${position}`">
    <div class="message">
      <slot/>
    </div>
    <button class="close" ref="closeHeight" @click="onClickClose" v-if="closeButton">{{closeButton.text}}</button>
  </div>
</template>

<script>
  export default {
    name: "c-toast",
    props: {
      autoClose: {
        type: [Boolean, Number],
        default: 5,
        validator(value) {
          return value === false || typeof value === "number"
        }
      },
      closeButton: {
        type: Object,
      },
      position: {
        type: String,
        default: "top",
        validator(value) {
          return ["top", "bottom", "middle"].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      this.execAutoClose()
      if (this.closeButton) {this.updatedStyle()}
    },
    methods: {
      execAutoClose() {
        let {autoClose} = this
        if (autoClose) {
          typeof autoClose === "boolean" ? autoClose = 5 : autoClose
          setTimeout(() => {
            this.close()
          }, autoClose * 1000)
        }
      },
      updatedStyle() {
        this.$nextTick(() => {
          this.$refs.closeHeight["style"].height = `${this.$refs.container.getBoundingClientRect().height}px`
        })
      },
      onClickClose() {
        const {callback} = this.closeButton
        callback && callback(this)
        this.close()
      },
      close() {
        this.$el.remove()
        this.$emit("close")
        this.$destroy()
      }
    }
  }

</script>

<style lang='scss' scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  $animation-duration: .5s;
  @keyframes slide-down {
    from {opacity: 0; transform: translate(-50%, -100%)}
    to {opacity: 1; transform: translate(-50%, 0)}
  }
  @keyframes slide-up {
    from {opacity: 0; transform: translate(-50%, 100%)}
    to {opacity: 1; transform: translate(-50%, 0)}
  }
  @keyframes fade {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  .container {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    position: fixed; left: 50%; transform: translateX(-50%); display: flex;
    color: white;align-items: center;background: $toast-bg;border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    &.position-top {top: 0;animation: slide-down $animation-duration;}
    &.position-middle {top: 50%;transform: translate(-50%, -50%);animation: fade $animation-duration;}
    &.position-bottom {bottom: 0;animation: slide-up $animation-duration;}
    z-index: 20;
  }
  .message {padding: 0.8em 16px 0.8em 16px;}
  .close {
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    flex-shrink: 0;
    color: white;
    border: none;
    border-left: 1px solid #666;
    &:focus {
      outline: none;
    }
  }

</style>