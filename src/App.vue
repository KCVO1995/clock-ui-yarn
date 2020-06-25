<template>
  <div>
    <c-button @click="showToast">xxx</c-button>
    <c-popover>
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>弹出信息</c-button>
    </c-popover>
    <c-switch v-model="switchValue" inactive-color="#999" active-color="pink" c-width="50" c-height="25" gap="4" duration="0.4" active-text="you" inactive-text="love"/>
    <c-pagination :total="total" @pageChange="onPageChange" v-model="currentPage"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedTab: 'Europe',
      selected: ['标题一'],
      switchValue: true,
      total: 10,
      currentPage: 1
    }
  },
  updated() {
    console.log('当前页', this.currentPage)
  },
  methods: {
    showToast() {
      this.$toast('我是message', {
        autoClose: 500,
        closeButton: {text: '我知道了', callback: () => {console.log('我知道了')}},
      })
    },
    onPageChange() {
      // console.log('当前页', value)
    }
  }
}
</script>

<style lang="scss">
* {margin: 0;padding: 0;box-sizing: border-box;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  height: 200px;
  color: #fff;
  font-size: 1.3em;
}

.sider, .content, .footer, .header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sider {
  width: 20%;
  background-color: #71c9ce;
}
.header, .footer {
  background-color: #1fab89;
  height: 50px;
}
</style>
