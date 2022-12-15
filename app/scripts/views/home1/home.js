import controls from "./../controls/controls.vue";
export default {
  components: {
    controls,
  },
  data() {
    return {
      pdfCanvasList: [],
      controlsList: [
        { p: 0, w: 166, h: 166, y: 135, x: 20 },
        { p: 0, w: 166, h: 166, y: 235, x: 180 },
        { p: 1, w: 166, h: 166, y: 60, x: 30 },
        { p: 2, w: 166, h: 166, y: 90, x: 70 },
      ],
      perforationList: [
        { p: 0, w: 166, h: 166, y: 135, x: 0 },
        { p: 1, w: 166, h: 166, y: 235, x: 0 },
        { p: 2, w: 166, h: 166, y: 60, x: 0 },
        { p: 3, w: 166, h: 166, y: 90, x: 0 },
      ],
    };
  },
  beforeMount() {},
  methods: {},
};
