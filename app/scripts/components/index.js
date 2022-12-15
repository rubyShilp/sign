import PdfViewer from "./controlsView/index.js";
import widget from "./widget/index.js";
import tips from "./tips/index.js";
const components = {
  PdfViewer,
  widget,
  tips,
};
const install = function (Vue, opts = {}) {
  for (const name in components) {
    Vue.component(name, components[name]);
  }
};
/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
const fddUI = {
  version: "1.0.1",
  install,
  ...components,
};
export default fddUI;
