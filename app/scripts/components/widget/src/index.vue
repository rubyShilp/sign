<template>
  <div class="otherViewer">
    <div
      v-fa-sign-drop
      v-for="(data, index) of dataList"
      :key="data"
      :data-page="index"
      class="pdf-view-canvas"
      :style="{
        width: `${data.w}px`,
        height: `${data.h}px`,
      }"
    >
      <slot :list="data"></slot>
    </div>
  </div>
</template>
<script src="./widget.js"></script>
<style lang="less" scoped>
.otherViewer {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  margin: auto;
  z-index: 999;
  width: 100%;
}
.pdf-view-canvas {
  margin: 0 auto;
  margin-bottom: 32px;
}
</style>
