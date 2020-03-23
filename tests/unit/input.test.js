import sinon from 'sinon'
import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)
import Input from '../../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
  it('存在.', () => {
    expect(Input).exist
  })
  describe('props', () => {
    it('接受 value', () => {
      const wrapper = mount(Input, {propsData: {value: 'hi'}})
      const input = wrapper.find('input')
      expect(input.value).to.eq('hi')
    })
    it('接受 placeholder', () => {
      const wrapper = mount(Input, {propsData: {placeholder: 'hi'}})
      const input = wrapper.find('input')
      expect(input.placeholder).to.eq('hi')
    })
    it('接受 disabled', () => {
      const wrapper = mount(Input, {propsData: {disabled: true}})
      const input = wrapper.find('input')
      expect(input.disabled).to.eq(true)
    })
    it('接受 readonly', () => {
      const wrapper = mount(Input, {propsData: {readonly: true}})
      const input = wrapper.find('input')
      expect(input.readOnly).to.eq(true)
    })
    it('接受 error', () => {
      const wrapper = mount(Input, {propsData: {error: 'error'}})
      const errorMessage = wrapper.find('.errorMessage')
      expect(errorMessage.innerHTML).to.eq('error')
    })
  })
  describe('events', () => {
    it('input,focus,blur,change事件', () => {
      ['input', 'focus', 'blur', 'change'].forEach(eventName => {
        const wrapper = mount(Input, {})
        const callback = sinon.fake()
        const input = wrapper.find('input')
        const event = new Event(eventName)
        Object.defineProperty(event, 'target', {
          value: {value: 'hi'}
        })
        const vm = wrapper.vm
        vm.$on(input, callback)
        wrapper.find('input').trigger('input')
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})