import Vue from "vue";
//视图显示数据
Vue.directive("fdd-view", {
  bind: (el, binding, vnode) => {
    const pdfDoc = binding.value.pdfDoc;
    const num = binding.value.num;
    pdfDoc.getPage(num).then((page) => {
      const scale =
        (screen.availWidth - 32) / page.getViewport({ scale: 1.5 }).width;
      const viewport = page.getViewport({ scale: 1.5 });
      const canvas = el;
      const context = canvas.getContext("2d");
      canvas.width = Math.floor(viewport.width * 1);
      canvas.height = Math.floor(viewport.height * 1);
      canvas.style.width = Math.floor(canvas.width * scale) + "px";
      canvas.style.height = Math.floor(canvas.height * scale) + "px";
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
      binding.value.dataPages({
        p: num - 1,
        w: parseFloat(canvas.style.width),
        h: parseFloat(canvas.style.height),
        _w: canvas.width,
        _h: canvas.height,
        scale: scale,
      });
    });
  },
});
//滚动事件
Vue.directive("fdd-scroll", {
  update: (el, binding, vnode) => {
    el.onscroll = (e) => {
      e.stopPropagation();
      let top = 0;
      let no = 0;
      const imgInfo = binding.value.data;
      for (let i = 0; i < imgInfo.length; i++) {
        top += imgInfo[i].h + imgInfo[i].bottom;
        if (el.scrollTop + (imgInfo[i].h / 3) * 2 > top) {
          no++;
        }
      }
      binding.value.scrollPageNo(no);
    };
  },
});
/**
 * 放大显示视图
 * 骑缝章显示位置调整
 * 动态改变显示位置
 */
const containerW = (el, binding, vnode) => {
  //获取当前主体页面总宽度
  const mianW =
    document.getElementsByClassName("viewerContainer")[0].clientWidth;
  //获取当前页面显示宽度等数据
  const imgInfo = binding.value.imgInfo;
  //计算间距
  const _w = mianW - imgInfo.w;
  let w = 0;
  if (_w > 0) {
    w = _w / 2;
  } else {
    w = 0;
  }
  el.style["margin-left"] = imgInfo.w + w + "px";
  el.style["width"] = 166 * imgInfo.scale + "px";
};
Vue.directive("fa-place", {
  bind: (el, binding, vnode) => {
    containerW(el, binding, vnode);
  },
  update: (el, binding, vnode) => {
    containerW(el, binding, vnode);
  },
});

//拖动控件显示
Vue.directive("fa-sign-drap", {
  bind: (el, binding, vnode) => {
    el.ondragstart = (e) => {
      console.log(123);
    };
    el.ondragend = () => {
      console.log("---");
    };
  },
});
//拖放
Vue.directive("fa-sign-drop", {
  bind: (el, binding, vnode) => {
    el.ondragover = (e) => {
      e.preventDefault();
    };
    el.ondrop = (e) => {
      e.preventDefault();
    };
  },
});
