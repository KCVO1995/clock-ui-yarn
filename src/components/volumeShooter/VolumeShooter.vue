<template>
    <div class="global" @mousedown="toggle" @mouseup="toggle">
        <Volume :radius="volumeRadius" :color="volumeColor" :rotate="volumeRotate" :size="volumeWidth" />
    </div>
</template>

<script>
  import Volume from "./Volume";

  export default {
    props: {
      volumeColor: {
        type: String,
        default: 'red'
      },
      volumeSize: {
        type: String,
        default: 'big',
        validator: function (value) { return ['small', 'normal', 'big'].indexOf(value) !== -1 }
      }
    },
    computed: {
      volumeWidth() { return this.sizeToWidth[this.volumeSize] }
    },
    watch: {
      increasing(val) { this.setVolumeRotate(val) }
    },
    data() {
      return {
        volumeRadius: 0,
        volumeRotate: 0,
        volumeSpeed: 1,
        sizeToWidth: {
          small: 20,
          normal: 35,
          big: 50
        },
        increasing: false
      }
    },
    methods: {
      toggle(e) {
        let clickVolume = false
        e.path.forEach(node => {
          if (node.id === 'clock-volume') clickVolume = true
        })
        if (!clickVolume) return
        this.increasing = !this.increasing
      },
      setVolumeRotate(signal) {
        this.volumeRotate = signal ? this.volumeRotate + this.volumeSpeed : this.volumeRotate - this.volumeSpeed
        const animation = window.requestAnimationFrame(() => {
          this.setVolumeRotate(signal)
          this.setVolumeRadius()
        })
        if (this.increasing && this.volumeRotate === 45 || !this.increasing && this.volumeRotate === 0 || signal !== this.increasing) window.cancelAnimationFrame(animation)
      },
      setVolumeRadius() { this.volumeRadius = this.volumeRotate / 45 * this.volumeWidth }
    },
    components: {Volume},
  }
</script>

<style lang='scss' scoped>
    .global {
        border: 1px solid red;
        padding: 50px;
    }

</style>
