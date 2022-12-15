<template>
  <vue-draggable-resizable
    v-if="infoImgs.p === data.p"
    :handles="[]"
    :w="data.w * infoImgs.scale"
    :h="data.h * infoImgs.scale"
    :y="data.y"
    :x="data.x"
    :disable-user-select="false"
    :parent="true"
    @dragging="mouseLeftTop"
    @dragstop="mouseDraggingTop"
  >
    <div
      :style="{
        width: data.w * infoImgs.scale + 'px',
        height: data.h * infoImgs.scale + 'px',
      }"
    ></div>
  </vue-draggable-resizable>
</template>
<script>
import vueDraggableRresizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import tips from "../../components/tips/src/index.vue";
export default {
  components: {
    "vue-draggable-resizable": vueDraggableRresizable,
    "fdd-tips": tips,
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    infoImgs: {
      type: Object,
      default: () => {
        return {};
      },
    },
    index: {
      type: Number,
      default: () => {
        return 0;
      },
    },
  },
  data() {
    return {
      isSelected: false,
    };
  },
  methods: {
    mouseLeftTop(left, top) {
      const info = {
        index: this.index,
        left: left,
        top: top,
        infoImgs: this.infoImgs,
      };
      this.$emit("mouseLeftTop", info);
    },
    mouseDraggingTop() {
      this.$emit("mouseDraggingTop");
    },
  },
};
</script>
