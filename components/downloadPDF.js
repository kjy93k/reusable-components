import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function downloadPDF() {
  // A4 in 96dpi
  // 29.7cm x 21cm
  const pageWidth = 1123;
  const pageHeight = 794;

  const doc = new jsPDF({
    orientation: 'l',
    unit: 'px',
    hotfixes: ['px_scaling'],
    format: [pageWidth, pageHeight],
    compressPdf: true,
  });

  // Slower, Larger, But maintain the html elements
  // doc.html(document.getElementById('content'), {
  //   callback: async doc => {
  //     const pageCount = doc.internal.getNumberOfPages();
  //     doc.deletePage(pageCount);
  //     await doc.save("favorites.pdf");
  //     this.working = false;
  //   },
  // });

  // Faster, Smaller, Flatten all elements
  const canvas = await html2canvas(document.getElementById('pdf'), {
    allowTaint: true,
    useCORS: true,
    width: pageWidth,
    scale: 3, // 줌 비율, 기본값으로 1 이미지 선명도에 영향을 주는 값
    y: 0,
  });
  const img = canvas.toDataURL('image/jpeg', 0.8);
  const totalPage = 5;
  const totalHeight = pageHeight * totalPage;
  [...Array(totalPage)].map((page, index) => {
    doc.addImage(img, 'JPEG', 0, -pageHeight * index, pageWidth, totalHeight, undefined, 'FAST');
    if (index < totalPage - 1) {
      doc.addPage();
    }
  });

  await doc.save('favorites.pdf');
}
