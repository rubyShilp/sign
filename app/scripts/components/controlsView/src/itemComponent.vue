<template>
  <div
    class="pdf-page-content"
    :style="{
      width: imgInfo.w + 'px',
      height: imgInfo.h + 'px',
    }"
  >
    <canvas
      v-fdd-view="{
        pdfDoc: source.pdfDoc,
        num: source.index,
        dataPages: dataPages,
      }"
    ></canvas>
    <div
      class="pdf-controls"
      :style="{
        width: imgInfo.w + 'px',
        height: imgInfo.h + 'px',
      }"
    >
      <slot name="itemControls" :imgInfo="imgInfo"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "itemComponent",
  props: {
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      imgInfo: {},
    };
  },
  methods: {
    dataPages(info) {
      this.imgInfo = info;
      this.$emit("dataMessage", info);
    },
  },
};
</script>
<style lang="less" scoped>
.pdf-page-content {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 10px 0;
}
.pdf-controls {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 12;
}
</style>
