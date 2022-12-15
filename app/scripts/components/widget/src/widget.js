export default {
  name: "widget",
  data() {
    return {};
  },
  props: {
    dataList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
