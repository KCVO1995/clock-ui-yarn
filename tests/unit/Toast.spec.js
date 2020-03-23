import sinon from 'sinon'
import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)
import Toast from '../../src/components/toast/Toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).exist
  })
  it('接受 autoClose 属性', (done) => {
    const wrapper = mount(Toast, {
      attachToDocument: true,
      propsData: {
        autoClose: 1
      }
    })
    const vm = wrapper.vm
    vm.$on('close', () => {
      expect(document.body.contains(vm.$el)).to.eq(false)
      done()
    })
  })
  it('接受 closeButton 属性', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Toast, {
      propsData: {
        closeButton: {
          text: '关闭',
          callback
        }
      }
    })
    const close = wrapper.find('.close')
    expect(close.text()).to.eq('关闭')
    setTimeout(() => {
      close.trigger('click')
      expect(callback).to.have.been.called
      done()
    })
  })
  it('接受 position 属性', () => {
    const wrapper = mount(Toast, {
      propsData: {
        position: 'middle'
      }
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('position-middle')).to.eq(true)
  })
})

