<template>
  <div class="sign-main">
    <div><a href="javascript:;" @click="down()">下载</a></div>
    <pdf-viewer client-type="pc" @dataMessage="dataMessage">
      <template slot="container" slot-scope="scope">
        <controls
          v-for="(controls, $index) of controlsList"
          :key="controls.time"
          :data="controls"
          :infoImgs="scope.imgInfo"
          :index="$index"
          @mouseLeftTop="mouseLeftTop"
          @mouseDraggingTop="mouseDraggingTop"
        >
        </controls>
      </template>
    </pdf-viewer>
  </div>
</template>
<script src="./sign.js"></script>
<style lang="less" scoped>
@import url("./sign.less");
</style>
