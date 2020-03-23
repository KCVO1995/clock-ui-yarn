import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)
import Popover from '../../src/Popover'

Vue.component('c-popover', Popover)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在', () => {
    expect(Popover).to.exist
  })
  it('接受 position 属性', (done) => {
    const Component = {
      template: `
      <c-popover position="bottom" ref="popover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </c-popover>   
      `
    }
    const wrapper = mount(Component)
    wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick(() => {
      const {contentWrapper} = wrapper.vm.$refs.popover.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })
  it('接受 trigger 属性', (done) => {
    const Component = {
      template: `
      <c-popover position="bottom" trigger="hover" ref="popover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </c-popover>   
      `
    }
    const wrapper = mount(Component)
    wrapper.trigger('mouseenter')
    wrapper.vm.$nextTick(() => {
      const {contentWrapper} = wrapper.vm.$refs.popover.$refs
      expect(contentWrapper).to.exist
      done()
    })
  })
})