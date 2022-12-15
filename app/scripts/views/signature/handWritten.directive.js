import Vue from "vue";
Vue.directive("fdd-canvas", {
  update: (el, binding, vnode) => {
    if (!binding.value.isSignaturePad) {
      return false;
    }
    const canvasRef = el.childNodes[0];
    const canvasWidth = el.clientWidth;
    const canvasHeight = el.clientHeight;
    canvasRef.height = canvasHeight;
    canvasRef.width = canvasWidth;
    binding.value.getCanvasWH(canvasRef.width, canvasRef.height);
  },
});
