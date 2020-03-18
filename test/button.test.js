const expect = chai.expect;
import Vue from "vue"
import Button from "../src/button/Button"

Vue.config.productionTip = false
Vue.config.devtools = false

const iconName = "setting"

describe('Button存在', () => {
  it('存在.', () => {
    expect(Button).exist
  })
  describe('Button可用性', () => {
    const Constructor = Vue.extend(Button)
    let vm
    afterEach(() => {vm.$destroy()})
    it('可以设置icon.', () => {
      vm = new Constructor({
        propsData: {
          icon: iconName
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
    })
    it('可以设置loading.', () => {
      vm = new Constructor({
        propsData: {
          icon: iconName,
          loading: true
        }
      }).$mount()
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    })
    it('icon 默认的 order 是 1', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: iconName,
        }
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('1')
      vm.$el.remove()
    })
    it('设置 iconPosition 可以改变 order', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          icon: iconName,
          iconPosition: "right"
        }
      }).$mount(div)
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
      vm.$el.remove()
    })
    it('点击 button 触发 click 事件', () => {
      vm = new Constructor({
        propsData: {
          icon: iconName,
        }
      }).$mount()
      const callback = sinon.fake();
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.been.called
    })
  })
})