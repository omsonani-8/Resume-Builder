import React from 'react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from "jspdf";
import About from './About';

function Export() {
 const downloadPdf = () => {
    const input = document.getElementById('myPage');
    htmlToImage.toPng(input, { quality: 0.95 })
      .then((dataUrl) => {
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
      });
 };

 return (
    <div className=' mt-[250px]'>
      <button onClick={downloadPdf}>Download PDF</button>
      <div id="myPage" >
        <About></About>     
      </div>
    </div>
 );
}

export default Export;
