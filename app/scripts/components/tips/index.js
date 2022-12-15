import tips from "./src/index.vue";
/* istanbul ignore next */
tips.install = function (Vue) {
  Vue.component(tips.name, tips);
};
export default tips;
