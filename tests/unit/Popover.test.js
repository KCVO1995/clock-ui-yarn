const expect = chai.expect
import Vue from "vue"
import Popover from "../../src/Popover"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Popover", () => {
  it("存在.", () => {
    expect(Popover).exist
  })
  it("接受position  属性", (done) => {
    Vue.component("g-popover", Popover)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="bottom">
      <template #content>
        我是一个可爱的popover
      </template>
      <template v-slot:default>
        <button>按钮</button>
      </template>
    </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector("button").click()
    vm.$nextTick(() => {
      const contentWrapper = document.body.querySelector(".contentWrapper")
      expect(contentWrapper.classList.contains("position-bottom")).to.be.true
      vm.$el.querySelector("button").click()
      done()
    })

  })
  it("接受trigger  属性", (done) => {
    Vue.component("g-popover", Popover)
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover trigger="hover">
      <template #content>
        我是一个可爱的popover
      </template>
      <template v-slot:default>
        <button>按钮</button>
      </template>
    </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    const event = new Event("mouseenter")
    vm.$el.querySelector("button").dispatchEvent(event)
    vm.$nextTick(() => {
      const contentWrapper = document.body.querySelector(".contentWrapper")
      done()
    })
  })
})