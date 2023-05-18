import React, { useEffect, useState } from 'react';
import PDFReportComponent from "./PDFViewerComponent";
import axios from 'axios';
import { PDFViewer } from '@react-pdf/renderer';

const PDFViewerComponent = () => {

  // Llamar API
  const [prestaciones, setPrestaciones] = useState([]);
  const totalData = prestaciones.length;
  console.log("Listar datos", prestaciones);
  useEffect(() => {
    async function getInfo() {
      const url = "http://127.0.0.1:8000/empleados/prestaciones"; // AQUI METE LA URL

      let config = {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        setPrestaciones(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, []);

  return (
    <PDFViewer width="100%" height="600px">
      <PDFReportComponent prestaciones={prestaciones} />
    </PDFViewer>
  );
};

export default PDFViewerComponent;