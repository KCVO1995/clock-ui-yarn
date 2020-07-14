<template>
    <div class="global" @mousedown="toggle" @mouseup="toggle">
        <Volume :color="volumeColor" :volume="volume" :increasing="increasing" :size="volumeSize"/>
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
        validator: function (value) {
          return ['small', 'normal', 'big'].indexOf(value) !== -1
        }
      }
    },
    watch: {
      increasing(val) {
        this.setVolume(val)
      }
    },
    data() {
      return {
        volume: 0,
        volumeSpeed: 1,
        increasing: false
      }
    },
    methods: {
      toggle(e) {
        let clickVolume = false
        e.path.forEach(node => { if (node.id === 'clock-volume') clickVolume = true })
        if (!clickVolume) return
        this.increasing = !this.increasing
      },
      setVolume(signal) {
        this.volume = signal ? this.volume + this.volumeSpeed : this.volume - this.volumeSpeed
        const animation = window.requestAnimationFrame(() => { this.setVolume(signal) })
        if (this.increasing && this.volume === 100 || !this.increasing && this.volume === 0 || signal !== this.increasing) window.cancelAnimationFrame(animation)
      }
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
