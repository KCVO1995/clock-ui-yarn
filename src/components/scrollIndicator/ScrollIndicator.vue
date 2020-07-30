<template>
  <div class="scroll-indicator"/>
</template>

<script>
  export default {
    name: 'ScrollIndicator',
    data() {
      return {
        scrollNode: {},
        timer: null,
        currentScroll: 0
      }
    },
    props: {
      colors: {
        type: Array | String,
        default: '#75daad'
      },
      scrollElementId: {
        type: String,
      },
      delay: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      node() {
        return this.scrollElementId ? document.querySelector(`#${this.scrollElementId}`) : document.scrollingElement
      },
      eventNode() {
        return this.scrollElementId ? document.querySelector(`#${this.scrollElementId}`) : window
      }
    },
    mounted() {
      this.scrollNode = document.querySelector('.scroll-indicator')
      this.scroll()
      this.paintColor()
      if (!this.delay) {
        return this.eventNode.addEventListener('scroll', this.scroll)
      }
      this.eventNode.addEventListener('scroll', () => {
        if (this.timer !== null) clearTimeout(this.timer)
        this.timer = setTimeout(this.scroll, 300)
      })
    },
    methods: {
      scroll() {
        const height = this.node.scrollHeight - this.node.clientHeight
        const result = this.node.scrollTop / height * 100
        this.delay ? this.smoothMove(result) : this.scrollNode.style.width = Math.round(result) + '%'
      },
      paintColor() {
        if (typeof this.colors === 'string') {
          this.scrollNode.style.background = `linear-gradient(to right,${this.colors}, ${this.colors})`
        } else if (this.colors instanceof Array) {
          let string = 'linear-gradient(to right'
          for (const color of this.colors) {
            string += `,${color}`
          }
          this.scrollNode.style.background = string + ')'
        }
      },
      smoothMove(Val) {
        const stop = this.currentScroll === Math.round(Val)
        Math.round(Val) > this.currentScroll ? this.currentScroll += 0.5 : this.currentScroll -= 0.5
        this.scrollNode.style.width = this.currentScroll + '%'
        const animation = window.requestAnimationFrame(this.smoothMove.bind(null, Val))
        if (stop) window.cancelAnimationFrame(animation)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-indicator {
    position: fixed;
    top: 0;
    left: 0;
    height: 4px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

</style>