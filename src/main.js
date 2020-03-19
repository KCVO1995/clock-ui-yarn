import Vue from 'vue'
import App from './App.vue'
import Button from "./components/button/Button"
import ButtonGroup from "./components/button/ButtonGroup"
import Input from "./Input"
import Row from "./components/grid/Row"
import Col from "./components/grid/Col"
import Layout from "./components/layout/Layout"
import Header from "./components/layout/Header"
import Content from "./components/layout/Content"
import Footer from "./components/layout/Footer"
import Sider from "./components/layout/Sider"
import Tabs from "./components/tabs/Tabs"
import TabsHead from "./components/tabs/TabsHead"
import TabsBody from "./components/tabs/TabsBody"
import TabsItem from "./components/tabs/TabsItem"
import TabsPane from "./components/tabs/TabsPane"
import Popover from "./Popover"
import Collapse from "./components/collapse/Collapse"
import CollapseItem from "./components/collapse/CollapseItem"
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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
