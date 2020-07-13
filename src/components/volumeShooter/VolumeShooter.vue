<template>
  <div class="global">
    <svg class="icon" aria-hidden="true">
      <defs>
        <mask id="Mask">
          <use :xlink:href="`#i-volume`"/>
        </mask>
      </defs>
      <use :xlink:href="`#i-volume`"/>
      <circle cy="25" r="30" fill="pink" mask="url(#Mask)"/>
    </svg>
  </div>
</template>

<script>
  export default {}
</script>

<style lang='scss' scoped>
  .global {
    border: 1px solid red;
    padding: 50px;
    .icon {
      width: 50px;
      height: 50px;
      vertical-align: -0.15em;
      fill: #999;
      overflow: hidden;
    }
  }

</style>
