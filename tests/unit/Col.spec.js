import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'
import Col from '../../src/components/grid/Col'

chai.use(sinonChai)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在', () => {
    expect(Col).to.exist
  })
  it('接受 span 属性', () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {span: '12'}
    })
    expect(wrapper.classes('col-12')).to.be.true
  })
  it('接受 offset 属性', () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {offset: '12'}
    })
    expect(wrapper.classes('offset-12')).to.be.true
  })
  it('接受 ipad 属性', () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {ipad: {span: 12, offset: 12}}
    })
    expect(wrapper.classes('col-ipad-12')).to.be.true
    expect(wrapper.classes('offset-ipad-12')).to.be.true
  })
  it('接受 narrow-pc 属性', () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {narrowPc: {span: 12, offset: 12}}
    })
    expect(wrapper.classes('col-narrow-pc-12')).to.be.true
    expect(wrapper.classes('offset-narrow-pc-12')).to.be.true
  })
  it('接受 pc 属性', () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {pc: {span: 12, offset: 12}}
    })
    expect(wrapper.classes('col-pc-12')).to.be.true
    expect(wrapper.classes('offset-pc-12')).to.be.true
  })
  it('接受 wide-pc 属性', () => {
    const wrapper = mount(Col, {
      attachToDocument: true,
      propsData: {widePc: {span: 12, offset: 12}}
    })
    expect(wrapper.classes('col-wide-pc-12')).to.be.true
    expect(wrapper.classes('offset-wide-pc-12')).to.be.true
  })
})
