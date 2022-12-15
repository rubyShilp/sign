<template>
  <div class="handWritten">
    <div class="handWritten-main">
      <div class="handWritten-top"><button @click="draw">确认</button></div>
      <div
        v-fdd-canvas="{
          isSignaturePad: isSignaturePad,
          getCanvasWH: getCanvasWH,
        }"
        class="handWritten-centent"
        :class="{ tips: !isHasContent }"
      >
        <canvas ref="canvas"></canvas>
      </div>
      <div class="handWritten-right">手写板{{ isHasContent }}</div>
    </div>
  </div>
</template>
<script src="./handWritten.js"></script>
<style lang="less" scoped>
@import url("./handWritten.less");
</style>
