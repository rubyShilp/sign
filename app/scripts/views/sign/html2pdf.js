import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import logo from "./../../../images/logo.png";
export function downloadPdf(pdfDiv, fileName) {
  return new Promise((resolve, reject) => {
    pdfDiv.style.background = "#fff";
    html2canvas(pdfDiv, {
      useCORS: true, //开启跨域配置
      scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
      allowTaint: true, //允许跨域图片
    }).then((canvas) => {
      let contentWidth = canvas.width;
      let contentHeight = canvas.height;
      //一页PDF显示html页面生成的canvas高度
      let pageHeight = (contentWidth / 592.28) * 841.89;
      //未生成pdf的html页面高度
      let leftHeight = contentHeight;
      //页面偏移
      let position = 0;
      //a4纸尺寸[595.28,841.89],HTML页面生成的canavas在pdf中图片的宽高
      let imgWidth = 555.28; //左右边距20
      let imgHeight = (552.28 / contentWidth) * contentHeight; //左右边距20
      let pageData = canvas.toDataURL("image/png", 1);
      let pdf = new jsPDF("", "pt", "a4");
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, "png", 20, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          pdf.addImage(pageData, "png", 20, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= 841.89;
          //避免添加空白页
          if (leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      // pdf = addWaterMark(pdf);
      pdf.save(fileName + ".pdf");
      resolve();
    });
  });
}
function addWaterMark(doc) {
  let totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.addImage(logo, "png", 150, 200, 188, 48, "", "NONE", 45);
    doc.addImage(logo, "png", 250, 600, 188, 48, "", "NONE", 45);
  }
  return doc;
}
