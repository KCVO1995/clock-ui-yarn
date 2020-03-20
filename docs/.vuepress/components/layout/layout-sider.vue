<template>
  <div style="padding-top: 16px;">
    <c-layout class="container">
      <c-sider class="sider">sider</c-sider>
      <c-layout>
        <c-header class="header">header</c-header>
        <c-content class="content">content</c-content>
        <c-footer class="footer">footer</c-footer>
      </c-layout>
    </c-layout>
  </div>
</template>

<script>
  import Layout from "../../../../src/components/layout/Layout"
  import Sider from "../../../../src/components/layout/Sider"
  import Header from "../../../../src/components/layout/Header"
  import Content from "../../../../src/components/layout/Content"
  import Footer from "../../../../src/components/layout/Footer"

  export default {
    components: {
      "c-layout": Layout,
      "c-sider": Sider,
      "c-header": Header,
      "c-content": Content,
      "c-footer": Footer
    }
  }
</script>

<style>
  .container {
    height: 200px;
    color: #fff;
    font-size: 1.3em;
  }

  .sider, .content, .footer, .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sider {
    width: 20%;
    background-color: #71c9ce;
  }

  .content {
    background-color: #cbf1f5;
    color: #71c9ce;
  }

  .header, .footer {
    background-color: #1fab89;
    height: 50px;
  }
</style>