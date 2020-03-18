const expect = chai.expect
import Vue from "vue"
import TabsItem from "../src/tabs/TabsItem"

Vue.config.productionTip = false
Vue.config.devtools = false


describe("TabsItem", () => {
  it("存在TabsItem", () => {
    expect(TabsItem).exist
  })
  describe("props", () => {
    const Constrctor = Vue.extend(TabsItem)
    it("接受 name", () => {
      const vm = new Constrctor({
        propsData: {
          name: "hi"
        }
      }).$mount()
      expect(vm.$el.getAttribute("data-name")).to.eq("hi")
    })
    it("接受 name", () => {
      const callback = sinon.fake()
      const vm = new Constrctor({
        propsData: {
          disabled: true
        }
      }).$mount()
      expect(vm.$el.classList.contains("disabled")).to.be.true
      vm.$on("click", callback)
      vm.$el.click()
      expect(callback).to.have.been.called
    })
  })
})
