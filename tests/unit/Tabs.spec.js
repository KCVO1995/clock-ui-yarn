import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Vue from 'vue'
import {mount} from '@vue/test-utils'

chai.use(sinonChai)

import Tabs from '../../src/components/tabs/Tabs'
import TabsHead from '../../src/components/tabs/TabsHead'
import TabsBody from '../../src/components/tabs/TabsBody'
import TabsItem from '../../src/components/tabs/TabsItem'
import TabsPane from '../../src/components/tabs/TabsPane'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs 存在', () => {
  it('存在', () => {
    expect(Tabs).exist
  })
  it('接受 selected', (done) => {
    const Compontent = {
      template: `<g-tabs selected="Japan">
        <g-tabs-head>
          <g-tabs-item name="China">中国</g-tabs-item>
          <g-tabs-item name="Japan">日本</g-tabs-item>
          <g-tabs-item name="Europe">欧美</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="China">中国相关信息</g-tabs-pane>
          <g-tabs-pane name="Japan">日本相关信息</g-tabs-pane>
          <g-tabs-pane name="Europe">美国相关信息</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>`
    }
    const wrapper = mount(Compontent)
    wrapper.vm.$nextTick(() => {
      const Japan = wrapper.find(`.tabs-item[data-name='Japan']`)
      expect(Japan.classes('active')).to.be.true
      done()
    })
  })
})
