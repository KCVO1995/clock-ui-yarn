<template>
  <svg class="icon" id="clock-volume" aria-hidden="true"
    :style="{transform: `rotate(-${rotate}deg)`, width: sizeToWidth[size] + 'px', height: sizeToWidth[size] + 'px'}">
    <defs>
      <mask id="Mask">
        <use :xlink:href="`#i-volume`" />
      </mask>
    </defs>
    <use :xlink:href="`#i-volume`" />
    <circle :cy="sizeToWidth[size] / 2" :r="radius" :fill="color" mask="url(#Mask)" />
  </svg>
</template>

<script>
export default {
  name: "Volume",
  props: {
    volume: {
      type: Number,
      required: true
    },
    increasing: {
      type: Boolean,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      sizeToWidth: {
        small: 20,
        normal: 35,
        big: 50
      },
    }
  },
  computed: {
    rotate() { return this.volume / 100 * 45 },
    radius() { return this.volume / 100 * this.sizeToWidth[this.size] }
  }
}
</script>

<style scoped>
.icon {
  vertical-align: -0.15em;
  fill: #ccc;
  cursor: pointer;
  overflow: hidden;
}
</style>
