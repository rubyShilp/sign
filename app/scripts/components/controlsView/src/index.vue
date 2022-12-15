<template>
  <div class="pdf-page">
    <div class="fa-contract">
      <div class="fa-slear">
        <a href="javascript:;" @click="addscale()">放大</a>
        {{ pageNum + 1 }}
      </div>
      <div
        v-fdd-scroll="{ data: dataList, scrollPageNo: scrollPageNo }"
        class="viewerContainer"
        id="viewerContainer"
        ref="containerRef"
      >
        <!--正文视图显示-->
        <div class="pdfViewer" id="innerContainer"></div>
        <!--正文印章或签名--->
        <div class="viewer-v">
          <div
            class="page"
            :style="{ width: data.w + 'px', height: data.h + 'px' }"
            v-for="(data, index) of dataList"
            :key="index"
          >
            <slot name="container" :imgInfo="data"></slot>
          </div>
        </div>
        <!--骑缝章-->
        <div v-if="showCross" class="pagin-seal-box">
          <div
            v-fa-place="{ imgInfo: data }"
            v-for="(data, index) of dataList"
            class="pdf-view-canvas"
            style="width: 166px"
            :style="{ height: `${data.h}px` }"
            :key="index"
          >
            <div class="pagin-box">
              <slot name="place" :imgInfo="data"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./pdfViewer.js"></script>
<style lang="less" scoped>
@import url("./pdfViewer.less");
</style>
