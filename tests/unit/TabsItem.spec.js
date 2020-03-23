import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)
import TabsItem from '../../src/components/tabs/TabsItem'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).exist
  })
  it('接受 name 属性', () => {
    const wrapper = mount(TabsItem, {
      propsData: {
        name: 'hi'
      }
    })
    expect(wrapper.vm.$el.getAttribute('data-name')).to.eq('hi')
  })
  it('接受 disabled 属性', () => {
    const callback = sinon.fake()
    const wrapper = mount(TabsItem, {
      propsData: {
        name: 'hi',
        disabled: true
      }
    })
    expect(wrapper.classes('disabled')).to.be.true
    wrapper.vm.$on('click', callback)
    wrapper.find('.tabs-item').trigger('click')
    expect(callback).to.have.been.called
  })
})
