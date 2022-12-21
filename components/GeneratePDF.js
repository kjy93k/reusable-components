import { renderToString } from 'react-dom/server';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import autoTable from 'jspdf-autotable';
import { SpoqaHanSansNeoLight } from '../public/asset/font/SpoqaHanSansNeo/SpoqaHanSansNeoLight';

export default function GeneratePDF({ person }) {
  function generate() {
    const pdf = new jsPDF();
    const tableHeader = Object.keys(person[0]);
    const tableBody = person.map((personData) => {
      return Object.values(personData);
    });
    pdf.addFileToVFS('SpoqaHanSansNeoLight.ttf', SpoqaHanSansNeoLight);
    pdf.addFont('SpoqaHanSansNeoLight.ttf', 'SpoqaHanSansNeoLight', 'normal');
    pdf.setFont('SpoqaHanSansNeoLight');
    const Prints = () => (
      <div id="content">
        <h3>Time & Materials Statement of Work (SOW)</h3>
        <h4>General Information</h4>
        <table id="tab_customers" className="table table-striped">
          <colgroup>
            <col span="1" />
            <col span="1" />
          </colgroup>
          <thead>
            <tr className="warning">
              <th>SOW Creation Date</th>
              <th>SOW Start Date</th>
              <th>Project</th>
              <th>Last Updated</th>
              <th>SOW End Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dec 13, 2017</td>
              <td>Jan 1, 2018</td>
              <td>NM Connect - NMETNMCM</td>
              <td>Dec 13, 2017</td>
              <td>Dec 31, 2018</td>
            </tr>
          </tbody>
        </table>
        <p>
          This is a Time and Materials Statement of Work between Northwestern Mutual Life Insurance Company and Infosys
          with all general terms and conditions as described in the current Master Agreement and its related documents
        </p>
      </div>
    );

    const html = renderToString(<Prints />);
    pdf.setFontSize(16).text('hello world 헬로 월드', 15, 20);
    pdf.setLineWidth(0.01).line(15, 24, 195, 24);

    const columns = [
      { title: '이름', dataKey: 'name' },
      { title: '나이', dataKey: 'age' },
      { title: '국적', dataKey: 'country' },
    ];
    pdf.autoTable({
      style: {
        font: 'SpoqaHanSansNeoLight',
        fontSize: 20,
        cellWidth: 'wrap',
      },
      headStyles: {
        font: 'SpoqaHanSansNeoLight',
      },
      columns,
      body: tableBody,
      margin: { left: 15, top: 30 },
    });
    pdf
      .setFontSize(12)
      .text(
        [
          'This is another few sentences of text to look at it.',
          'Just testing the paragraphs to see how they format.',
          'jsPDF likes arrays for sentences.',
          'Do paragraphs wrap properly?',
          'Yes, they do!',
          'What does it look like?',
          'Not bad at all.',
        ],
        15,
        80,
        { align: 'left', maxWidth: 195 },
      );
    pdf.save('table.pdf');

    // TODO: 이전에 작업하던 것 주석처리
    // pdf.html(html, {
    //   callback: function (pdf) {
    //     html2canvas(document.getElementById('content'), {
    //       allowTaint: true,
    //       useCORS: true,
    //       logging: true,
    //       scale: 2, // 기본 96dpi에서 해상도를 두 배로 증가
    //       // height: window.outerHeight + window.innerHeight,
    //       // windowHeight: window.outerHeight + window.innerHeight,
    //     }).then((canvas) => {
    //       const imgData = canvas.toDataURL('image/png');
    //       const imgWidth = 210 - 30; // a4 너비 - 양쪽 여백
    //       const pageHeight = imgWidth * 1.414;
    //       const imgHeight = (canvas.height * imgWidth) / canvas.width;
    //       let heightLeft = imgHeight;
    //       let position = 0;

    //       pdf.addImage(imgData, 'PNG', 15, position, imgWidth, imgHeight);
    //       heightLeft -= pageHeight;

    //       while (heightLeft >= 20) {
    //         position = heightLeft = imgHeight;
    //         pdf.addPage();
    //         pdf.addImage(imgData, 'PNG', 15, position, imgWidth, imgHeight);
    //         heightLeft -= pageHeight;
    //       }

    //       console.log(canvas, pdf);
    //       const columns = [
    //         { title: '이름', dataKey: 'name' },
    //         { title: '나이', dataKey: 'age' },
    //         { title: '국적', dataKey: 'country' },
    //       ];
    //       pdf.autoTable({
    //         style: {
    //           font: 'SpoqaHanSansNeoLight',
    //           fontSize: 20,
    //           cellWidth: 'wrap',
    //         },
    //         headStyles: {
    //           font: 'SpoqaHanSansNeoLight',
    //         },
    //         columns,
    //         body: tableBody,
    //         margin: { left: 15, top: 30 },
    //       });
    //       pdf
    //         .setFontSize(12)
    //         .text(
    //           [
    //             'This is another few sentences of text to look at it.',
    //             'Just testing the paragraphs to see how they format.',
    //             'jsPDF likes arrays for sentences.',
    //             'Do paragraphs wrap properly?',
    //             'Yes, they do!',
    //             'What does it look like?',
    //             'Not bad at all.',
    //           ],
    //           15,
    //           80,
    //           { align: 'left', maxWidth: 195 },
    //         );
    //       pdf.save('table.pdf');
    //     });
    //   },
    //   x: 15,
    //   y: 15,
    //   // width: 500, //target width in the PDF document
    //   // windowWidth: 600, //window width in CSS pixels
    // });
  }

  return (
    <div>
      <button type="primary" onClick={generate}>
        Download PDF
      </button>
    </div>
  );
}
