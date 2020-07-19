<template>
    <svg class="icon" aria-hidden="true" :style="{transform: `rotate(-${rotate}deg)`}">
      <defs>
        <mask id="Mask">
          <use :xlink:href="`#i-volume`"/>
        </mask>
      </defs>
      <use :xlink:href="`#i-volume`"/>
      <circle cy="25" :r="radius" :fill="fillColor" mask="url(#Mask)" />
    </svg>
</template>

<script>
  export default {
    props: {
      radius: {
        type: Number,
        required: true
      },
      rotate: {
        type: Number,
        default: 0
      },
      fillColor: {
        type: String,
        required: true
      }
    }

  }

</script>

<style lang='scss' scoped>
  .icon {
    width: 50px;
    height: 50px;
    vertical-align: -0.15em;
    fill: #999;
    overflow: hidden;
  }
</style>
