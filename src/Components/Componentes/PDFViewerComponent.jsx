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
              <div className="px-5" ref={conponentPDF} style={{ width: "50%" }}>
                <table className="w-full text-sm text-left text-black  dark:text-gray-400 pt-10 ">
                  <thead className="text-xs text-black uppercase text-center">
                    <tr className="w-auto space-x-5">
                      <th></th>
                      <th scope="col" className="px-6 py-3">Nombre</th>
                      <th scope="col" className="px-6 py-3">Departamento</th>
                      <th scope="col" className="px-6 py-3">Salario</th>
                      <th scope="col" className="px-6 py-3">ISSS Laboral</th>
                      <th scope="col" className="px-6 py-3">ISSS Patronal</th>
                      <th scope="col" className="px-6 py-3">AFP Laboral</th>
                      <th scope="col" className="px-6 py-3">AFP Patronal</th>
                      <th scope="col" className="px-6 py-3">Total descuento</th>
                      <th scope="col" className="px-6 py-3">Renta</th>
                      <th scope="col" className="px-6 py-3">Salario liquido</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((uData, index) => (
                      <tr key={index}>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{index + 1}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.empleado}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.departamento}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.salario}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.isss_laboral}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.isss_patronal}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.afp_laboral}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.afp_patronal}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.total_descuento}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.impuesto_renta}</td>
                        <td className="px-6 py-8 text-center flex justify-center space-x-11 content-center">{uData.sueldo_liquido}</td>
                      </tr>
                    ))}
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
