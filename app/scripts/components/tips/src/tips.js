import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
export default {
  name: "tips",
  components: {
    popper: Popper,
  },
  props: {
    trigger: {
      type: String,
      default: () => {
        return "clickToOpen";
      },
    },
    placement: {
      type: String,
      default: () => {
        return "top";
      },
    },
  },
  data() {
    return {};
  },
};
