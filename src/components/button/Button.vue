<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <c-icon icon="loading" class="loading" v-if="loading">placeholder</c-icon>
    <c-icon :icon="icon" v-if="icon && !loading">placeholder</c-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from "../../Icon.vue"

  export default {
    name: "c-button",
    components: {"c-icon": Icon},
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(value) {
          return value === "left" || value === "right"
        }
      }
    }
  }

</script>

<style lang='scss' scoped>
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  .g-button {
    height: $button-height;
    font-size: $font-size;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {border-color: $border-color-hover;}
    &:active {background: $button-active-bg;}
    &:focus {outline: none;}
    > .content {order: 2}
    > .icon {
      order: 1;
      margin-right: .3em;
    }
    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .3em;
      }
      > .content {order: 1}
    }
    > .loading {animation: 1.2s spin linear infinite;}
  }

</style>