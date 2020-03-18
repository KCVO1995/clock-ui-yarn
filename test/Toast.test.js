const expect = chai.expect
import Vue from "vue"
import Toast from "../src/Toast"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Toast 存在", () => {
  it("存在.", () => {
    expect(Toast).exist
  })
  describe("props", () => {
    const Constructor = Vue.extend(Toast)
    it("接受 autoClose", (done) => {
      const div = document.createElement("div")
      document.body.appendChild(div)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it("接受 enableHtml`", () => {
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ["<strong id=\"hi\">hi</strong>"]
      vm.$mount()
      const strong = vm.$el.querySelector("#hi")
      expect(strong).exist
    })
    it("接受 closeButton`", (done) => {
      const callback = sinon.fake()
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭",
            callback
          }
        }
      }).$mount()
      const close = vm.$el.querySelector(".close")
      expect(close.textContent.trim()).to.eq("关闭")
      setTimeout(() => {
        close.click()
        expect(callback).to.have.been.called
        done()
      })
    })
    it("接受 position", () => {
      const vm = new Constructor({
        propsData: {
          position: "middle"
        }
      }).$mount()
      expect(vm.$el.classList.contains("position-middle")).to.eq(true)
    })
  })

})