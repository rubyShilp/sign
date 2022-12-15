import controlsView from "../../components/controlsView/src/index.vue";
import selectFileView from "../../components/selectFileView/src/index.vue";
import controls from "./../controls/controls.vue";
import { downloadPdf } from "./html2pdf";
export default {
  components: {
    controlsView,
    selectFileView,
    controls,
  },
  data() {
    return {
      controlsList: [
        { p: 0, w: 166, h: 166, y: 135, x: 20, time: +new Date() },
        { p: 0, w: 166, h: 166, y: 235, x: 180, time: +new Date() + 1 },
        { p: 1, w: 166, h: 166, y: 60, x: 30, time: +new Date() + 2 },
        { p: 2, w: 166, h: 166, y: 90, x: 70, time: +new Date() + 3 },
        { p: 3, w: 166, h: 166, y: 90, x: 70, time: +new Date() + 4 },
      ],
      info: {},
      dataFileList: [],
      options: "124",
    };
  },
  methods: {
    changeName(n, info) {
      console.log(n, info);
    },
    dataMessage(list) {
      this.dataFileList = list;
    },
    mouseLeftTop(info) {
      this.info = info;
    },
    mouseDraggingTop() {
      const index = this.info.index;
      const controls = this.controlsList[index];
      if (this.info.top < 0) {
        let top = 0;
        let p = controls.p - 1;
        if (p < 0) {
          controls.p = 0;
          controls.y = 0;
          const w = controls.w * this.dataFileList[controls.p].scale;
          if (this.info.left < 0) {
            controls.x = 0;
          } else {
            if (this.info.left + w > this.dataFileList[controls.p].w) {
              controls.x = this.dataFileList[controls.p].w - w;
            } else {
              controls.x = this.info.left;
            }
          }
          controls.time = +new Date() + index;
          return;
        }
        for (let i = controls.p - 1; i > -1; i--) {
          top += this.dataFileList[i].h;
          if (Math.abs(this.info.top) > top) {
            p--;
          } else {
            break;
          }
        }
        controls.p = p;
        const h = controls.h * this.dataFileList[controls.p].scale;
        if (Math.abs(this.info.top) < h) {
          controls.y = this.dataFileList[controls.p].h - h;
        } else {
          const ytop = top - Math.abs(this.info.top);
          controls.y = ytop < 0 ? this.dataFileList[controls.p].h - h : ytop;
        }
      } else {
        let top = 0;
        let p = controls.p;
        const h = controls.h * this.dataFileList[controls.p].scale;
        for (let i = controls.p; i < this.dataFileList.length; i++) {
          top += this.dataFileList[i].h;
          if (this.info.top + h > top) {
            p++;
          } else {
            break;
          }
        }
        if (p === controls.p) {
          controls.y = this.info.top;
        } else {
          controls.p = p;
          const toph = this.dataFileList[p].h - (top - this.info.top);
          controls.y = toph < 0 ? 0 : toph;
        }
      }
      const w = controls.w * this.dataFileList[controls.p].scale;
      if (this.info.left < 0) {
        controls.x = 0;
      } else {
        if (this.info.left + w > this.dataFileList[controls.p].w) {
          controls.x = this.dataFileList[controls.p].w - w;
        } else {
          controls.x = this.info.left;
        }
      }
      controls.time = +new Date() + index;
    },
    //下载pdf
    down() {
      let div = document.getElementById("viewerContainer");
      downloadPdf(div).then((res) => {});
    },
  },
};
