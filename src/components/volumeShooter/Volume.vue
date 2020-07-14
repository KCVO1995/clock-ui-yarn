<template>
    <svg class="icon" id="clock-volume" aria-hidden="true"
         :style="{transform: `rotate(-${rotate}deg)`, width: size + 'px', height: size + 'px'}">
        <defs>
            <mask id="Mask">
                <use :xlink:href="`#i-volume`"/>
            </mask>
        </defs>
        <use :xlink:href="`#i-volume`"/>
        <circle :cy="size / 2" :r="radius" :fill="color" mask="url(#Mask)"/>
    </svg>
</template>

<script>
  export default {
    name: "Volume",
    props: {
      radius: {
        type: Number,
        required: true
      },
      rotate: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      size: {
        type: Number,
        required: true,
      }
    }
  }
</script>

<style scoped>
    .icon {
        vertical-align: -0.15em;
        fill: #999;
        overflow: hidden;
    }
</style>
