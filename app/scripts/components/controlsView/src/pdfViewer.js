import * as PDFJS from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
//"https://cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.worker.min.js";
import * as pdfjsViewer from "pdfjs-dist/web/pdf_viewer";
import "pdfjs-dist/web/pdf_viewer.css";
import "./controls.directive.js";
import itemComponent from "./itemComponent.vue";
import vueDraggableRresizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";
// import { RecycleScroller } from "vue-virtual-scroller";
// import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
export default {
  name: "PdfViewer",
  components: {
    itemComponent,
    vueDraggableRresizable,
  },
  props: {
    scale: {
      type: Number,
      default: () => {
        return 1;
      },
    },
    renderer: {
      type: String,
      default: () => {
        return "canvas";
      },
    },
    //是否显示骑缝章
    showCross: {
      type: Boolean,
      default: () => {
        return false;
      },
    },

    //平台
    clientType: {
      type: String,
      default: () => {
        return "pc";
      },
    },
    //
    url: {
      type: String,
      default: () => {
        return "./../../../../static/demo.pdf";
      },
    },
  },

  data() {
    return {
      dataList: [],
      pdfDom: null,
      pdfDoc: "",
      interval: null,
      pages: null,
      pageNum: 0, //显示当前页
      linkService: null,
      eventBus: null,
      newViewer: null,
      dataFileList: [],
    };
  },
  mounted() {
    if (this.clientType === "pc") {
      this.initViewer();
    } else {
      this.initPDFViewH5();
    }
  },
  methods: {
    initViewer() {
      this.eventBus = new pdfjsViewer.EventBus();
      this.linkService = new pdfjsViewer.PDFLinkService();
      const findController = new pdfjsViewer.PDFFindController({
        linkService: this.linkService,
        eventBus: this.eventBus,
      });
      // 显示文字类型 0 不显示 1 显示 2 启用增强
      const TEXT_LAYER_MODE = 0;
      // 是否通过CSS控制放大缩小 true false
      const USE_ONLY_CSS_ZOOM = false;
      this.newViewer = new pdfjsViewer.PDFViewer({
        container: this.$refs.containerRef,
        linkService: this.linkService,
        eventBus: this.eventBus,
        useOnlyCssZoom: USE_ONLY_CSS_ZOOM,
        textLayerMode: TEXT_LAYER_MODE,
        enableWebGL: true,
        renderer: this.renderer,
        findController,
      });
      this.linkService.setViewer(this.newViewer);
      this.newViewer.currentScaleValue = this.scale;
      /***
       * 读取pdf文件
       * 1、设置编码
       * 2、设置pdf编译方式
       */
      let CMAP_URL = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.11.338/cmaps";
      PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
      const loadingTask = PDFJS.getDocument({
        url: this.url,
        withCredentials: true,
        cMapPacked: true,
        cMapUrl: CMAP_URL,
      });
      loadingTask.promise.then((pdf) => {
        this.pages = pdf.numPages;
        this.pdfDoc = pdf;
        this.newViewer.setDocument(pdf);
        this.linkService.setDocument(pdf);
        //判断是否渲染完毕
        this.interval = setInterval(() => {
          this.loadPdf();
        }, 1000);
      });
    },
    //加载每页大小换算每页显示比列
    loadPdf() {
      if (this.newViewer.pageViewsReady) {
        this.pdfDom = document.getElementById("innerContainer");
        this.pdfDom.childNodes.forEach((item, index) => {
          const width = parseInt(item.style.width);
          const height = parseInt(item.style.height);
          const marginBottom = parseInt(getComputedStyle(item).marginBottom);
          this.dataList.push({
            p: index,
            w: width,
            h: height,
            bottom: marginBottom,
            scale: Math.round(width) / 800,
          });
        });
        clearInterval(this.interval);
      }
    },
    //实现h函数，生成dom
    h(tag, props, children) {
      return {
        tag,
        props,
        children,
      };
    },
    //
    //实现mount
    mount(vnode, container) {
      //将VNode生成真实节点元素
      //1.创建真实标签元素,将标签元素保留到VNode上
      const el = (vnode.el = document.createElement(vnode.tag));
      //2.处理props
      if (vnode.props) {
        //进行循环拿到key:value
        for (const key in vnode.props) {
          const value = vnode.props[key];
          //判断如果是onClick类似事件,进行截取on之后的单词进行转换为小写
          if (key.startsWith("on")) {
            el.addEventListener(key.slice(2).toLowerCase(), value);
          } else {
            //设置属性
            el.setAttribute(key, value);
          }
        }
      }
      //3.处理children
      if (vnode.children) {
        if (typeof vnode.children === "string") {
          //判断children是字符串,说明是元素的内容,直接赋值即可
          el.textContent = vnode.children;
        } else {
          //如果是数组表明是有子元素节点,进行遍历数组元素,继续调用mount函数
          vnode.children.forEach((item) => {
            mount(item, el);
          });
        }
      }
      //4.将元素挂载到contaniner
      container.appendChild(el);
    },
    //放大视图
    addscale() {
      this.dataList = [];
      this.scale = (this.scale * 10 + 0.1 * 10) / 10;
      this.newViewer.currentScaleValue = this.scale;
      this.loadPdf();
    },
    //滚动到哪一页
    scrollPageNo(pageNo) {
      this.pageNum = pageNo;
    },
    visible(info) {
      console.log(123, info);
    },
    initPDFViewH5() {
      let CMAP_URL = "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/cmaps";
      PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
      const loadingTask = PDFJS.getDocument({
        url: this.url,
        withCredentials: true,
        cMapPacked: true,
        cMapUrl: CMAP_URL,
      });
      loadingTask.promise.then((pdf) => {
        for (let i = 1; i <= pdf.numPages; i++) {
          this.dataList.push({ index: i, pdfDoc: pdf });
        }
      });
    },
    dataMessage(val) {
      this.dataFileList.push(val);
      this.$emit("dataMessage", this.dataFileList);
    },
  },
};
