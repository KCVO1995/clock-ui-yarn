<template>
  <div>
    <!--  <div style="margin: 100px">-->
    <!--    <g-collapse :selected-array.sync="selected" single>-->
    <!--      <g-collapse-item title="标题一">我是可爱的内容一</g-collapse-item>-->
    <!--      <g-collapse-item title="标题二">我是性感的内容二</g-collapse-item>-->
    <!--      <g-collapse-item title="标题三">我是妩媚的内容三</g-collapse-item>-->
    <!--    </g-collapse>-->
    <!--  </div>-->
    <c-layout class="container">
      <c-sider class="sider">sider</c-sider>
      <c-layout>
        <c-header class="header">header</c-header>
        <c-content class="content">content</c-content>
        <c-footer class="footer">footer</c-footer>
      </c-layout>
    </c-layout>
    <c-button @click="showToast">xxx</c-button>
    <c-popover>
      <template v-slot:content>
        <div>这是气泡卡片的内容</div>
      </template>
      <c-button>弹出信息</c-button>
    </c-popover>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selectedTab: "Europe",
      selected: ["标题一"]
    }
  },
  methods: {
    showToast() {
      this.$toast("我是message", {
        autoClose: 500,
        closeButton: {text: "我知道了", callback: () => {console.log("我知道了")}},
      })
    },
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
