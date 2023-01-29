import {useState, useRef } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from './ReportTemplate';

function App() {
	const reportTemplateRef = useRef(null);

  const [prt, setPrt] = useState(true)



	const handleGeneratePdf = () => {
    setPrt(false);
    setTimeout(() => {
      setPrt(true);
    }, 3000);
    
    setTimeout(() => {
      window.print();
    }, 1000);
	};

	return (
		<div>
      {/* <div id="ignorePDF"></div> */}
      {
        prt
        ?
        <button className="button" onClick={()=>handleGeneratePdf()}>
          Generate PDF
        </button>
        :
        null
      }
			<div ref={reportTemplateRef}>
				<ReportTemplate />
			</div>
		</div>
	);
}

export default App;