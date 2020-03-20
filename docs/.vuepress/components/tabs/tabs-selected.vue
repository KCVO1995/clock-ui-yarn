<template>
  <div class="global">
    <c-tabs :selected.sync="selectedTab" class="tab">
      <c-tabs-head>
        <template v-slot:actions>
          <c-button>设置</c-button>
        </template>
        <c-tabs-item name="chinese">
          <c-icon icon="like" style="padding-right: 2px;"/>
          语文
        </c-tabs-item>
        <c-tabs-item name="math">数学</c-tabs-item>
        <c-tabs-item name="english">英语</c-tabs-item>
      </c-tabs-head>

      <c-tabs-body>
        <c-tabs-pane name="chinese">语文相关资讯</c-tabs-pane>
        <c-tabs-pane name="math">数学相关资讯</c-tabs-pane>
        <c-tabs-pane name="english">英语相关资讯</c-tabs-pane>
      </c-tabs-body>
      <p>selectedTab: {{selectedTab}}</p>
    </c-tabs>
  </div>
</template>
<script>
  import Tabs from "../../../../src/components/tabs/Tabs"
  import TabsHead from "../../../../src/components/tabs/TabsHead"
  import TabsBody from "../../../../src/components/tabs/TabsBody"
  import TabsItem from "../../../../src/components/tabs/TabsItem"
  import TabsPane from "../../../../src/components/tabs/TabsPane"
  import Button from "../../../../src/components/button/Button"
  import Icon from "../../../../src/Icon"


  export default {
    components: {
      "c-tabs": Tabs,
      "c-tabs-head": TabsHead,
      "c-tabs-body": TabsBody,
      "c-tabs-item": TabsItem,
      "c-tabs-pane": TabsPane,
      "c-button": Button,
      "c-icon": Icon
    },
    data() {
      return {
        selectedTab: "chinese"
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/helper";
  .global {
    @extend %box;
    > .tab {
      width: 100%;
    }
  }
</style>
