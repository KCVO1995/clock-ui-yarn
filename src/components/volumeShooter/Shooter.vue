<template>
    <div class="shooter">
        <svg id="svg" width="100%" height="100%" version="1.1">
            <path fill="transparent" stroke="#888888" stroke-width="1" class="path"/>
        </svg>

        <div class="ball"></div>
        <div class="line"></div>
    </div>
</template>

<script>
  export default {
    name: "Shooter",
    mounted() {
      window.run1 = this.run
    },
    computed: {
      startY() {
        return 10
      },
      volume() {
        return 100
      }
    },
    methods: {
      run() {
        const svg = document.querySelector('#svg')
        const path = svg.querySelector('path')
        const ball = document.querySelector('.ball')
        const pathStr = 'M0 ' + this.startY + ' Q' + this.volume / 2 + ' 0 ' + this.volume + ' ' + '25';
        path.setAttribute('d', pathStr);
        ball.style.offsetPath = 'path("' + pathStr + '")';
        ball.classList.add('move')
      }
    }
  }
</script>

<style lang="scss" scoped>
    .shooter {
        height: 50px;
        width: 200px;
        border: 1px solid red;
        position: relative;

        > .line {
            position: absolute;
            top: 50%;
            left: 50%;
            height: 4px;
            width: 100%;
            background: blue;
            border-radius: 2px;
            transform: translate(-50%, -50%);
        }

        svg {
            display: block;
            position: absolute;
            border: 1px solid #000;
        }

        path {
            stroke-style: dotted;
        }

        .ball {
            width: 10px;
            height: 10px;
            background-color: #ff0000;
            border-radius: 50%;
        }
        .ball.move {
            animation: move-ball 2s forwards;
            animation-iteration-count: 1;
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
