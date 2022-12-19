import { KeyObject } from 'crypto';
import jsPDF from 'jspdf';
export default function GeneratePDF({ person }) {
  function generate() {
    const pdf = new jsPDF();
    console.log(person);

    // TODO number values
    pdf.table(20, 30, person, Object.keys(person[0]));
    pdf.save('table.pdf');
  }

  return (
    <div>
      <button type="primary" onClick={generate}>
        Download PDF
      </button>
    </div>
  );
}
