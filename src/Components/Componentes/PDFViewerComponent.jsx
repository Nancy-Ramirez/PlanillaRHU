import React, { useEffect, useRef, useState } from "react";
import PDFReportComponent from "./PDFViewerComponent";
import axios from "axios";
import { PDFViewer } from "@react-pdf/renderer";
import PDFReport from "./PDFReport";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const PDFViewerContainer = () => {
  {
    const conponentPDF = useRef();
    const [userData, setUserdata] = useState([]);

    useEffect(() => {
      const registerUserdata = async () => {
        axios
          .get("http://127.0.0.1:8000/empleados/prestaciones")
          .then(res => setUserdata(res.data))
          .catch(error => console.log(error));
      };
      registerUserdata();
    }, []);

    const generatePDF = useReactToPrint({
      content: () => conponentPDF.current,
      documentTitle: "Userdata",
      onAfterPrint: () => alert("Data saved in PDF"),
    });

    return (
      <React.Fragment>     
        <div className="px-10">
          <div className="">
            <div className="">
              <div className="text-center">
                <h5 className="mt-2">PRESTACIONES</h5>
              </div>
              <div ref={conponentPDF} style={{ width: "100%" }}>
              <table class="table-fixed">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
              </div>
              <div className="d-grid d-md-flex justify-content-md-end mb-3">
                <button className="" onClick={generatePDF}>
                  PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default PDFViewerContainer;
