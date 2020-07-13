<template>
  <div class="global" v-if="total > pageSize" :style="{'--color': buttonColor}">
    <button :class="{'prev':true,'exceeded': exceededMin}" @click="onPrevNext('-')">{{prevText ? prevText : '上一页'}}
    </button>
    <ul class="pager-container">
      <li v-for="(page,index) in pages" :key="index">
        <div @click="skip($event,'-')" v-if="page === 'left'" class="ellipsis-container">
          <div class="arrow left">《</div>
          <div class="ellipsis">...</div>
        </div>
        <div v-if="typeof page === 'number'" :class="{'pager': true, 'selected': page === myCurrentPage}">{{page}}</div>
        <div @click="skip($event,'+')" v-if="page === 'right'" class="ellipsis-container">
          <div class="arrow right">》</div>
          <div class="ellipsis">...</div>
        </div>
      </li>
    </ul>
    <button :class="{'next': true, 'exceeded': exceededMax}" @click="onPrevNext('+')">{{nextText ? nextText : '下一页'}}
    </button>
    <label v-if="jumper" class="jumper-container">
      <span>跳至</span>
      <input type="text" @change="onChange"/>
      <span>页</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'c-pagination',
    props: {
      value: {
        type: Number,
      },
      defaultPage: {
        type: Number,
      },
      total: {
        type: Number,
        required: true
      },
      pagerCount: {
        type: Number,
        default: 7
      },
      pageSize: {
        type: [String, Number],
        default: 10
      },
      prevText: {
        type: String
      },
      nextText: {
        type: String
      },
      jumper: {
        type: Boolean,
        default: false
      },
      buttonColor: {
        type: String,
        default: '#75daad'
      }
    },
    data() {
      return {
        myCurrentPage: 1,
        exceededMin: false,
        exceededMax: false,
        pagers: 0
      }
    },
    computed: {
      pages() {
        const arr = []
        this.pagers = Math.ceil(this.total / this.pageSize)
        for (let i = 1; i <= this.pagers; i++) {arr.push(i)}
        const oneSide = (this.pagerCount - 1) / 2
        console.log(oneSide)
        if (this.pagers > this.pagerCount) {
          if (this.myCurrentPage < oneSide + 2) {
            arr.splice(this.pagerCount - 1, arr.length - this.pagerCount, 'right')
          } else if (oneSide + 2 <= this.myCurrentPage && this.myCurrentPage < this.pagers - oneSide) {
            console.log('中间', arr)
            arr.splice(1, this.myCurrentPage - oneSide - 1, 'left')
            const start = arr.indexOf(this.myCurrentPage) + oneSide
            arr.splice(start, arr.length - start - 1, 'right')
          } else {
            arr.splice(1, this.pagers - this.pagerCount, 'left')
          }
          console.log(arr)
        }
        return arr
      },
    },
    watch: {
      value(val) {
        this.myCurrentPage = val
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.initCurrentPage()
        if (this.total > this.pageSize) this.initListener()
      },
      initCurrentPage() {
        if (this.value) {
          this.myCurrentPage = this.value
        } else if (this.defaultPage) {
          this.myCurrentPage = this.defaultPage
        } else {
          throw new Error('请传入 current-page 或 default-page')
        }
        this.initButtonStatus(this.myCurrentPage)
      },
      initListener() {
        const pagerContainer = document.querySelector('.pager-container')
        pagerContainer.addEventListener('click', e => {
          // 兼容 IOS 没有 e.path
          const path = e.path || (e.composedPath && e.composedPath())
          let pager = path.find(el => el.classList && el.classList.contains('pager'))
          if (pager && !Number.isNaN(parseInt(pager.innerHTML))) {
            console.log('avx', parseInt(pager.innerHTML))
            this.changePage(parseInt(pager.innerHTML))
          }
        })
      },
      changePage(value) {
        if (value === this.myCurrentPage) return
        this.myCurrentPage = value
        this.initButtonStatus(value)
        this.$emit('input', this.myCurrentPage)
        this.$emit('pageChange', this.myCurrentPage)
      },
      onPrevNext(method) {
        const value = method === '+' ? this.myCurrentPage + 1 : this.myCurrentPage - 1
        if (value === 1 || value === this.pagers) this.changePage(value)
        this.initButtonStatus(value)
        !this.exceededMin && !this.exceededMax && this.changePage(value)
      },
      initButtonStatus(value) {
        this.exceededMin = value <= 1
        this.exceededMax = value >= this.pagers
      },
      skip(e, method) {
        // 精髓
        e.stopPropagation()
        let value = method === '+' ? this.myCurrentPage + this.pagerCount - 2 : this.myCurrentPage - this.pagerCount + 2
        if (value < 1) value = 1
        if (value > this.pagers) value = this.pagers
        if (value === 1 || value === this.pagers) this.changePage(value)
        this.initButtonStatus(value)
        !this.exceededMin && !this.exceededMax && this.changePage(value)
      },
      onChange(e) {
        let {target: {value}} = e
        value = parseInt(value)
        if (!Number.isNaN(value)) {
          console.log(!Number.isNaN(value))
          if (value < 1) value = 1
          if (value > this.pagers) value = this.pagers
          this.changePage(value)
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  $margin: 5px;
  $height: 30px;
  .global {
    border: 1px solid #ddd;
    display: inline-flex;
    border-radius: 5px;
    color: var(--color);
    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0 10px;
      color: var(--color);
      &:focus {
        border: none;
        outline: none;
      }
      &.exceeded {
        cursor: not-allowed;
        color: #ddd;
      }
    }
    > ul {
      display: flex;
      list-style: none;
      > li {
        min-width: $height;
        height: $height;
        list-style: none;
        cursor: pointer;
        border-left: 1px solid #ddd;
        &:last-child {
          border-right: 1px solid #ddd;
        }
        > .ellipsis-container {
          width: 100%;
          height: 100%;
          text-align: center;
          color: #999;
          font-weight: bolder;
          display: flex;
          justify-content: center;
          align-items: center;
          > .ellipsis {
            display: block;
          }
          > .arrow {
            display: none;
          }
          &:hover {
            > .ellipsis {
              display: none;
            }
            > .arrow {
              display: block;
              &.right {
                transform: translateX(5px);
              }
              &.left {
                transform: translateX(-5px);
              }
            }
          }
        }
        > .pager {
          padding: 0 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          &.selected {
            background: var(--color);
            color: white;
          }
        }
      }
    }
    > .jumper-container {
      margin-left: 20px;
      display: flex;
      align-items: center;
      height: $height;
      > input {
        margin: 0 15px;
        padding: 5px;
        height: 100%;
        width: 40px;
      }
    }
  }

</style>
