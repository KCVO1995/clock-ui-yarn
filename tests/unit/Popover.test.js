import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)
import Popover from '../../src/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('接受position  属性', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>按钮</button>`},
        content: '<div>我是一个可爱的popover</div>',
      },
      propsData: {position: 'bottom'}
    })
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      let classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.included('position-bottom')
    })
  })
  it('接受trigger  属性', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>按钮</button>`},
        content: `<div>我是一个可爱的popover</div>`
      },
      propsData: {trigger: 'hover'}
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('button').trigger('mouseenter')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.content-wrapper').element).to.exist
    })
  })
})