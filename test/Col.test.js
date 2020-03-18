const expect = chai.expect
import Vue from "vue"
import Col from "../src/grid/Col"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Col", () => {
  it("存在.", () => {
    expect(Col).exist
  })
  describe("props", () => {
    const Constructor = Vue.extend(Col)
    const div = document.createElement("div")
    let vm
    beforeEach(() => {
      document.body.appendChild(div)
    })
    afterEach(() => {
      vm.$el.remove()
      vm.$destroy()
    })
    it("接受 span 属性", () => {
      vm = new Constructor({propsData: {span: "12"}}).$mount(div)
      expect(vm.$el.classList.contains("col-12")).to.eq(true)
    })
    it("接受 offset 属性", () => {
      vm = new Constructor({propsData: {offset: "12"}}).$mount(div)
      expect(vm.$el.classList.contains("offset-12")).to.eq(true)
    })
    it("接受 ipad 属性", () => {
      vm = new Constructor({propsData: {ipad: {span: 12, offset: 12}}}).$mount(div)
      expect(vm.$el.classList.contains("col-ipad-12")).to.eq(true)
      expect(vm.$el.classList.contains("offset-ipad-12")).to.eq(true)
    })
    it("接受 narrow-pc 属性", () => {
      vm = new Constructor({propsData: {narrowPc: {span: 12, offset: 12}}}).$mount(div)
      expect(vm.$el.classList.contains("col-narrow-pc-12")).to.eq(true)
      expect(vm.$el.classList.contains("offset-narrow-pc-12")).to.eq(true)
    })
    it("接受 pc 属性", () => {
      vm = new Constructor({propsData: {pc: {span: 12, offset: 12}}}).$mount(div)
      expect(vm.$el.classList.contains("col-pc-12")).to.eq(true)
      expect(vm.$el.classList.contains("offset-pc-12")).to.eq(true)
    })
    it("接受 widePc 属性", () => {
      vm = new Constructor({propsData: {widePc: {span: 12, offset: 12}}}).$mount(div)
      expect(vm.$el.classList.contains("col-wide-pc-12")).to.eq(true)
      expect(vm.$el.classList.contains("offset-wide-pc-12")).to.eq(true)
    })
  })
})
