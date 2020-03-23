import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)

import Row from '../../src/components/grid/Row'
import Col from '../../src/components/grid/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('c-col', Col)
Vue.component('c-row', Row)

describe('Row', () => {
  it('存在', () => {
    expect(Row).exist
  })
  it('接受 gutter 属性', (done) => {
    const Component = {
      template: `<c-row gutter="20">
          <c-col span="12"></c-col>
          <c-col span="12"></c-col>
        </c-row>`
    }
    const wrapper = mount(Component)

    setTimeout(() => {
      const row = wrapper.find('.row').element
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = wrapper.findAll('.col')
      expect(getComputedStyle(cols.wrappers[0].element).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols.wrappers[1].element).paddingLeft).to.eq('10px')
      done()
    })
  })
  it('接受 align 属性', () => {
    const wrapper = mount(Row, {propsData: {align: 'right'}})
    expect(wrapper.classes('align-right')).to.be.true
  })
})