<template>
  <div class="global">
    <button :class="{'prev':true,'exceeded': exceededMin}" @click="onPrevNext('-')">{{prevText ? prevText : '上一页'}}
    </button>
    <ul class="pager-container">
      <li class="pager" v-for="page in pages" :key="page" :class="{'selected': page === myCurrentPage}">{{page}}</li>
    </ul>
    <button :class="{'next': true, 'exceeded': exceededMax}" @click="onPrevNext('+')">{{nextText ? nextText : '下一页'}}
    </button>
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
      }
    },
    data() {
      return {
        myCurrentPage: 1,
        exceededMin: false,
        exceededMax: false
      }
    },
    computed: {
      pages() {
        const arr = []
        for (let i = 1; i <= Math.ceil(this.total / parseInt(this.pageSize)); i++) {arr.push(i)}
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
        this.initListener()
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
          if (pager) {
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
        if (value === 1 || value === this.total) this.changePage(value)
        this.initButtonStatus(value)
        !this.exceededMin && !this.exceededMax && this.changePage(value)
      },
      initButtonStatus(value) {
        this.exceededMin = value <= 1
        this.exceededMax = value >= this.total
      }
    }
  }
</script>

<style lang='scss' scoped>
  $margin: 5px;
  .global {
    display: flex;
    button {
      background: none;
      border: none;
      cursor: pointer;
      &.exceeded {
        cursor: not-allowed;
        color: #ddd;
      }
    }
    > ul {
      display: flex;
      list-style: none;
      > li {
        border: 1px solid #333;
        width: 30px;
        height: 30px;
        margin-right: $margin;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        cursor: pointer;
        &:first-child {
          margin-left: $margin;
        }
        &.selected {
          border: 1px solid red;
        }
      }
    }
  }

</style>
