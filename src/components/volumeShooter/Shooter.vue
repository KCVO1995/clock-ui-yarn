<template>
    <div class="shooter" :style="{width: sizeToLength[size] + 'px',height: sizeToHeight[size] + 'px', marginLeft: sizeToOffset[size] + 'px'}">
        <svg id="svg" width="100%" height="100%" version="1.1">
            <path fill="transparent" stroke="transparent" stroke-width="1" class="path"/>
        </svg>

        <div class="ball" :style="{width: sizeToShake[size] + 'px', height: sizeToShake[size] + 'px', background: color}"></div>
        <div class="line" :style="{height: sizeToThickness[size] + 'px'}"></div>
    </div>
</template>

<script>
  export default {
    name: "Shooter",
    props: {
      volume: {
        type: Number,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      color: {
        type: String,
        required: true
      },
      increasing: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      startY() {
        const angle = 0.45 * this.volume
        return this.sizeToOffset[this.size] - Math.tan(angle * Math.PI/180) * this.sizeToOffset[this.size]
      },
      endX() {
        return this.volume * this.sizeToLength[this.size] / 100
      },
      endY() {
        return this.sizeToHeight[this.size] / 2
      },
      middleX() {
        console.log(this.endX / 2)
        return this.endX / 2
      },
      middleY() {
        const modulus = this.volume / 100
        return (this.sizeToOffset[this.size] - this.startY) * modulus * -3
      }
    },
    watch: {
      volume() {
        this.run()
      },
      increasing(val) {
        const ball = document.querySelector('.ball')
        if(val) {
          ball.classList.add('hide')
        } else {
          ball.classList.remove('hide')
        }
      }
    },
    data() {
      return {
        sizeToLength: {
          small: 100,
          normal: 200,
          big: 300
        },
        sizeToThickness: {
          small: 1,
          normal: 2,
          big: 4
        },
        sizeToHeight: {
          small: 20,
          normal: 35,
          big: 50
        },
        sizeToOffset: {
          small: 10,
          normal: 15,
          big: 20
        },
        sizeToShake: {
          small: 6,
          normal: 8,
          big: 12
        },
      }
    },
    methods: {
      run() {
        const svg = document.querySelector('#svg')
        const path = svg.querySelector('path')
        const ball = document.querySelector('.ball')
        // console.log(this.startY, 'startY', this.endX,'endX', this.endY, 'endY' ,this.middleX, 'middleX' ,this.middleY, 'middleY')
        const pathStr = `M0 ${this.startY} Q ${this.middleX} ${this.middleY} ${this.endX} ${this.endY}`;
        path.setAttribute('d', pathStr);
        ball.style.offsetPath = 'path("' + pathStr + '")';
        ball.classList.remove('move')
        setTimeout(() => {
          ball.classList.add('move')
        }, 10)
      },
    }
  }
</script>

<style lang="scss" scoped>
    .shooter {
        position: relative;
        > .line {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 4px;
            width: 100%;
            background: #ccc;
            border-radius: 2px;
            z-index: -1;
            transform: translate(-50%, -50%);
        }

        svg {
            display: block;
            position: absolute;
        }

        path {
            stroke-style: dotted;
        }

        .ball {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            z-index: 9999;
        }

        .ball.move {
            animation: move-ball .5s forwards;
            animation-iteration-count: 1;
        }
        .ball.hide {
            opacity: 0;
        }

        @keyframes move-ball {
            from {
                offset-distance: 0;
            }
            to {
                offset-distance: 100%;
            }
        }
    }
</style>
