const expect = chai.expect

import Vue from "vue"
import Tabs from "../src/tabs/Tabs"
import TabsHead from "../src/tabs/TabsHead"
import TabsBody from "../src/tabs/TabsBody"
import TabsItem from "../src/tabs/TabsItem"
import TabsPane from "../src/tabs/TabsPane"

Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-head", TabsHead)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-item", TabsItem)
Vue.component("g-tabs-pane", TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe("Tabs 存在", () => {
  it("Tabs 存在", () => {
    expect(Tabs).exist
  })
  describe("props", () => {
    it("接受 selected", (done) => {
      const div = document.createElement("div")
      document.body.appendChild(div)
      div.innerHTML = `
      <g-tabs selected="Japan">
        <g-tabs-head>
          <g-tabs-item name="China">中国</g-tabs-item>
          <g-tabs-item name="Japan">日本</g-tabs-item>
          <g-tabs-item name="Europe">欧美</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="China">中国相关信息</g-tabs-pane>
          <g-tabs-pane name="Japan">日本相关信息</g-tabs-pane>
          <g-tabs-pane name="Europe">美国相关信息</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>`
      const vm = new Vue({
        el: div
      })
      vm.$nextTick(() => {
        const Japan = vm.$el.querySelector(`.tabs-item[data-name='Japan']`)
        expect(Japan.classList.contains("active")).to.be.true
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })
  })
})
