import vueDraggableRresizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
import * as PDFJS from "pdfjs-dist";
export default {
  components: {
    "vue-draggable-resizable": vueDraggableRresizable,
  },
  data() {
    return {
      dataList: [],
      pdfDoc: "",
      pages: null,
      scale: 1,
      isShowControls: false,
    };
  },
  props: {
    //视图数据
    viewData: {
      type: Array,
      default: [],
    },
    //控件信息列表
    controlsList: {
      type: Array,
      default: [
        { p: 1, w: 166, h: 166, y: 120, x: 20 },
        { p: 3, w: 166, h: 166, y: 120, x: 20 },
        { p: 5, w: 166, h: 166, y: 120, x: 20 },
      ],
    },
  },
  render(h) {
    return (
      <div class="pdf-page">
        <div onClick={this.addscale}>放大</div>
        {this._l(this.pages, (row, $index) => {
          return (
            <div class="pdf-page-content">
              {/* <div id={"the-canvas" + ($index + 1)}></div> */}
              <canvas id={"the-canvas" + ($index + 1)}></canvas>
              <div class="pdf-comp-cover" id={"the-cover" + ($index + 1)}>
                {this.isShowControls
                  ? this._l(this.controlsList, (controls, controlsIndex) => {
                      if (controls.p === row.p) {
                        return (
                          <vue-draggable-resizable
                            w={controls.w * this.dataList[$index].scale}
                            h={controls.h * this.dataList[$index].scale}
                            y={controls.y * this.dataList[$index].scale}
                            x={controls.x * this.dataList[$index].scale}
                            parent="true"
                          ></vue-draggable-resizable>
                        );
                      }
                    })
                  : ""}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
  beforeMount() {
    this.pdfShow();
  },
  methods: {
    pdfShow() {
      let CMAP_URL = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.10.377/cmaps";
      let url = "./../../../../static/demo.pdf";
      PDFJS.GlobalWorkerOptions.workerSrc =
        "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.10.377/build/pdf.worker.min.js";
      PDFJS.getDocument({
        url: url,
        cMapUrl: CMAP_URL,
        withCredentials: true,
        cMapPacked: true,
        rangeChunkSize: 65536 * 16,
      }).promise.then((pdf) => {
        this.pdfDoc = pdf;
        this.pages = pdf.numPages;
        this.$nextTick(() => {
          this.reandPage(1);
        });
      });
    },
    reandPage(num) {
      this.$nextTick(() => {
        this.pdfDoc.getPage(num).then((page) => {
          // const scale =
          //   screen.availWidth / page.getViewport({ scale: 2 }).width;
          let viewport = page.getViewport({ scale: this.scale });
          let divControls = document.getElementById("the-cover" + num);
          let canvas = document.getElementById("the-canvas" + num);
          let context = canvas.getContext("2d");
          let ratio = window.devicePixelRatio || 1;
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          //context.setTransform(ratio, 0, 0, ratio, 0, 0);
          let renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          this.dataList.push({
            p: num,
            w: Math.round(viewport.width),
            h: Math.round(viewport.height),
            scale: 800 / Math.round(viewport.width),
          });
          page.render(renderContext);
          divControls.style.width = viewport.width + "px";
          divControls.style.height = viewport.height + "px";
          this.isShowControls = true;
          if (this.pages > num) {
            this.isShowControls = false;
            this.reandPage(num + 1);
          }
        });
      });
    },

    addscale() {
      this.scale += 0.1;
      this.dataList = [];
      this.reandPage(1);
      console.log("你好PDFJS");
    },
  },
};
