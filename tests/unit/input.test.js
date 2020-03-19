const expect = chai.expect;
import Vue from 'vue'
import Input from '../../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
  it('存在.', () => {
    expect(Input).exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {vm.$destroy()})
    it('接受 value', () => {
      vm = new Constructor({propsData: {value: "hi"}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.value).to.eq('hi')
    })
    it('接受 placeholder', () => {
      vm = new Constructor({propsData: {placeholder: "hi"}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.placeholder).to.eq('hi')
    })
    it('接受 disabled', () => {
      vm = new Constructor({propsData: {disabled: true}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.disabled).to.eq(true)
    })
    it('接受 readonly', () => {
      vm = new Constructor({propsData: {readonly: true}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.readOnly).to.eq(true)
    })
    it('接受 error', () => {
      vm = new Constructor({propsData: {error: "error"}}).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerHTML).to.eq('error')
    })
  })
  describe('events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {vm.$destroy()})
    it('input,focus,blur,change事件', () => {
      ['input', 'focus', 'blur', 'change'].forEach(eventName => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        const input = vm.$el.querySelector('input')
        const event = new Event(eventName)
        Object.defineProperty(event, 'target', {
          value: {value: 'hi'}
        })
        vm.$on(eventName, callback)
        input.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})