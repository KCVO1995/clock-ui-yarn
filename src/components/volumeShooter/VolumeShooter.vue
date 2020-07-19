<template>
  <div class="global" @mousedown="toggle" @click="toggle">
    <Volume id="clock-volume" :rotate="volumeRotate" :radius="volumeRadius" :fill-color="volumeColor"/>
  </div>
</template>

<script>
  import Volume from './Volume'
  export default {
    props: {
      volumeColor: {
        type: String,
        default: 'pink'
      }
    },
    data() {
      return {
        volumeRadius: 30,
        volumeRotate: 0,
        volumeSpeed: 1,
        increasing: false
      }
    },
    watch: {
      volumeRotate() {

      }
    },
    methods: {
      toggle(e) {
        let volumeTarget = false
        e.path.forEach(node => { if(node.id === 'clock-volume') volumeTarget = true })
        if(!volumeTarget) return
        this.increasing = !this.increasing
        console.log('increasing', this.increasing)
        if(this.increasing) {
          this.setVolume('+')
        } else {
          this.setVolume('-')

        }
      },
      setVolume(target) {
        console.log('TARGET',target)
        this.volumeRotate = target ? this.volumeRotate + this.volumeSpeed : this.volumeRotate - this.volumeSpeed
        window.requestAnimationFrame(() => {
            if(this.volumeRotate < 45) this.setVolume(target)
        })
      }
    },
    components: {
      Volume
    }
  }
</script>

<style lang='scss' scoped>
  .global {
    border: 1px solid red;
    padding: 50px;

  }

</style>
