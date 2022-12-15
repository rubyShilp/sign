import SignaturePad from "signature_pad";
import "./handWritten.directive";
export default {
  data() {
    return {
      signaturePad: null,
      isSignaturePad: false,
      isHasContent: false,
      canvasWidth: 0,
      canvasHeight: 0,
    };
  },
  mounted() {
    this.initHandWritten();
  },
  methods: {
    initHandWritten() {
      const options = {
        dotSize: 2,
        minWidth: 0.5,
        maxWidth: 1.5,
        throttle: 16,
        minDistance: 1,
        backgroundColor: "rgba(0,0,0,0)",
        velocityFilterWeight: 0.1,
      };
      const canvasRef = this.$refs.canvas;
      this.signaturePad = new SignaturePad(canvasRef, options);
      this.signaturePad.minWidth = 4;
      this.signaturePad.addEventListener(
        "beginStroke",
        () => {
          this.isHasContent = true;
        },
        { once: true }
      );
      this.isSignaturePad = true;
    },
    getCanvasWH(w, h) {
      this.canvasWidth = w;
      this.canvasHeight = h;
    },
    //M 80.200,127.000 C 81.827,126.758 81.800,127.000 83.400,127.000
    draw() {
      // const sceal = this.canvasWidth / 171;
      // const pointGroups = this.signaturePad._data;
      // const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      // svg.setAttribute("width", "171");
      // svg.setAttribute("height", "92");
      // svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      // svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      // svg.setAttribute(
      //   "viewBox",
      //   `0 0 ${this.canvasWidth * sceal} ${this.canvasHeight * sceal}`
      // );
      // const g = document.createElement("g");
      // g.setAttribute("transform", "rotate(-90)");
      // g.setAttribute("style", "-webkit-transform-origin: center");
      // for (let j = 0; j < pointGroups.length; j++) {
      //   const points = pointGroups[j].points;
      //   const penColor = pointGroups[j].penColor;
      //   for (let i = 0; i < points.length; i++) {
      //     if (points[i + 2]) {
      //       const x1 = points[i].x;
      //       const y1 = (points[i].y + points[i + 1].y) / 2;
      //       const x2 = points[i + 1].x;
      //       const y2 = (points[i + 1].y + points[i + 2].y) / 2;
      //       const path = document.createElement("path");
      //       const attr =
      //         `M ${(points[i].x * sceal).toFixed(3)},${(
      //           points[i].y * sceal
      //         ).toFixed(3)} ` +
      //         `C ${(x1 * sceal).toFixed(3)},${(y1 * sceal).toFixed(3)}  ` +
      //         `${(x2 * sceal).toFixed(3)},${(y2 * sceal).toFixed(3)} ` +
      //         `${(points[i + 1].x * sceal).toFixed(3)},${(
      //           points[i + 1].y * sceal
      //         ).toFixed(3)}`;
      //       path.setAttribute("d", attr);
      //       path.setAttribute("stroke-width", "9");
      //       path.setAttribute("stroke", penColor);
      //       path.setAttribute("fill", "none");
      //       path.setAttribute("stroke-linecap", "round");

      //       g.appendChild(path);
      //     }
      //   }
      // }
      // svg.appendChild(g);
      // console.log(svg);
      /*
      transform: rotate(90deg);
      transform-origin: 50% 50%;
      */
      const boblSvg = this.signaturePad.toDataURL("image/svg+xml");
      const svg = window.atob(boblSvg.split(",")[1]);
      const use = document.createElement("div");
      use.innerHTML = svg;
      const svgs = use.childNodes[0];
      const path = svgs.childNodes;
      const g = document.createElement("g");
      g.setAttribute("transform", "rotate(-90)");
      g.setAttribute("style", "transform-origin: 50% 50%");
      for (let i = 0; i < path.length; i++) {
        g.appendChild(path[i].cloneNode(true));
      }
      const newSvg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      newSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      newSvg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      newSvg.setAttribute(
        "viewBox",
        `0 0 ${this.canvasWidth} ${this.canvasHeight}`
      );
      newSvg.setAttribute("width", "171");
      newSvg.setAttribute("height", "92");
      newSvg.appendChild(g);
      console.log(newSvg);
    },
  },
};
