import widget from "./src/index.vue";
/* istanbul ignore next */
widget.install = function (Vue) {
  Vue.component(widget.name, widget);
};
export default widget;
