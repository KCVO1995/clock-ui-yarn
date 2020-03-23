import sinon from 'sinon'
import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)
import Button from '../../src/components/button/Button'

Vue.config.productionTip = false
Vue.config.devtools = false

const iconName = 'setting'

describe('Button存在', () => {
  it('存在.', () => {
    expect(Button).exist
  })
  describe('Button可用性', () => {
    it('可以设置icon.', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: iconName
        }
      })
      const useElement = wrapper.find('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-setting')
    })
    it('可以设置loading.', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: iconName,
          loading: true
        }
      })
      const vm = wrapper.vm
      const useElements = vm.$el.querySelectorAll('use')
      expect(useElements.length).to.equal(1)
      expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    })
    it('icon 默认的 order 是 1', () => {
      const wrapper = mount(Button, {
        attachToDocument: true,
        propsData: {
          icon: iconName,
        }
      })
      const vm = wrapper.vm
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('1')
    })
    it('设置 iconPosition 可以改变 order', () => {
      const wrapper = mount(Button, {
        attachToDocument: true,
        propsData: {
          icon: iconName,
          iconPosition: 'right'
        }
      })
      const vm = wrapper.vm
      const icon = vm.$el.querySelector('svg')
      expect(getComputedStyle(icon).order).to.eq('2')
    })
    it('点击 button 触发 click 事件', () => {
      const wrapper = mount(Button, {
        propsData: {
          icon: iconName,
        }
      })
      const vm = wrapper.vm
      const callback = sinon.fake()
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).to.have.been.called
    })
  })
})