import Vue from "vue"
import Button from "./button/Button"
import ButtonGroup from "./button/ButtonGroup"
import Input from "./Input"
import Row from "./grid/Row"
import Col from "./grid/Col"
import Layout from "./layout/Layout"
import Header from "./layout/Header"
import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Sider from "./layout/Sider"
import Tabs from "./tabs/Tabs"
import TabsHead from "./tabs/TabsHead"
import TabsBody from "./tabs/TabsBody"
import TabsItem from "./tabs/TabsItem"
import TabsPane from "./tabs/TabsPane"
import Popover from "./Popover"
import Collapse from "./collapse/Collapse"
import CollapseItem from "./collapse/CollapseItem"
import plugin from "./plugin"

Vue.component("c-button", Button)
Vue.component("c-button-group", ButtonGroup)
Vue.component("c-input", Input)
Vue.component("c-row", Row)
Vue.component("c-col", Col)
Vue.component("c-layout", Layout)
Vue.component("c-header", Header)
Vue.component("c-content", Content)
Vue.component("c-sider", Sider)
Vue.component("c-footer", Footer)
Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-head", TabsHead)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-item", TabsItem)
Vue.component("g-tabs-pane", TabsPane)
Vue.component("c-popover", Popover)
Vue.component("g-collapse", Collapse)
Vue.component("g-collapse-item", CollapseItem)
Vue.use(plugin)
new Vue({
  el: "#app",
  data() {
    return {
      selectedTab: "Europe",
      selected: ["标题一"]
    }
  },
  methods: {
    input(value) {console.log(value)},
    change(value) {console.log(value)},
    focus(value) {console.log(value)},
    showToast() {
      this.$toast("我是message", {
        autoClose: 500,
        closeButton: {text: "我知道了", callback: () => {console.log("我知道了")}},
      })
    },
    click() {
      console.log("用户的傻逼事件")
    }
  }
})

