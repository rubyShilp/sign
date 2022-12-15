import PdfViewer from "./src/index.vue";
/* istanbul ignore next */
PdfViewer.install = function (Vue) {
  Vue.component(PdfViewer.name, PdfViewer);
};
export default PdfViewer;
