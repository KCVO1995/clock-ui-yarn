<template>
    <div class="global" @mousedown="toggle" @mouseup="toggle">
        <Volume :color="color" :volume="volume" :increasing="increasing" :size="size"/>
        <shooter :volume="value" :size="size" :color="color" :increasing="increasing"/>
    </div>
</template>

<script>
  import Volume from "./Volume";
  import Shooter from "./Shooter";

  export default {
    props: {
      color: {
        type: String,
        default: '#0091ff'
      },
      size: {
        type: String,
        default: 'normal',
        validator: function (value) {
          return ['small', 'normal', 'big'].indexOf(value) !== -1
        }
      }
    },
    watch: {
      increasing(val) {
        if(!val) this.value = this.volume
        this.setVolume(val)
      }
    },
    data() {
      return {
        volume: 0,
        value: 0,
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
        this.volume = signal ? this.volume + this.volumeSpeed : 0
        const animation = window.requestAnimationFrame(() => { this.setVolume(signal) })
        if (this.increasing && this.volume === 100 || !this.increasing && this.volume === 0 || signal !== this.increasing) window.cancelAnimationFrame(animation)
      }
    },
    components: {Shooter, Volume},
  }
</script>

<style lang='scss' scoped>
    .global {
        border: 1px solid red;
        padding: 50px;
        display: flex;
        align-items: center;
    }
</style>
