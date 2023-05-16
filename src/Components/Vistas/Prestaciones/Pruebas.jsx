import React, { useState, useEffect } from "react";

export const Prueba = () => {
  const [renta, setRenta] = useState(0);
  const [salario, setSalario] = useState(1000);
  const [afpPatronal, setAfpPatronal] = useState(0);
  const [afpLaboral, setAfpLaboral] = useState(0);
  const [isssPatronal, setIsssPatronal] = useState(0);
  const [isssLaboral, setIsssLaboral] = useState(0);
  const [salarioDesc, setSalarioDesc] = useState(0);

  useEffect(() => {
    // Cálculo del ISSS Laboral
    if (salario >= 1000) {
      const isssLab = 1000 * 0.03;
      setIsssLaboral(isssLab);
    } else {
      const isssLab = salario * 0.03;
      setIsssLaboral(isssLab);
    }

    // Cálculo del ISSS Patronal
    if (salario >= 1000) {
      const isssPat = 1000 * 0.075;
      setIsssPatronal(isssPat);
    } else {
      const isssPat = salario * 0.075;
      setIsssPatronal(isssPat);
    }

    // Cálculo del AFP Laboral
    const afpLab = salario * 0.0725;
    setAfpLaboral(afpLab);

    // Cálculo del AFP Patrono
    const afpPat = salario * 0.0775;
    setAfpPatronal(afpPat);

    // Salario después de descuentos
    const salDesc = salario - afpLaboral - isssLaboral;
    setSalarioDesc(salDesc);

  }, [salarioDesc]);

  const handleCalculosClick = (e) => {
    e.preventDefault();

    // Cálculo de la renta
    let tramo = 0;
    if (salarioDesc >= 2038.11) {
      tramo = 4;
    } else if (salarioDesc >= 895.24) {
      tramo = 3;
    } else if (salarioDesc >= 472) {
      tramo = 2;
    } else if (salarioDesc >= 0.01) {
      tramo = 1;
    }
    console.log(tramo);

    switch (tramo) {
        case 1: {
          setRenta(0);
          break;
        }
        case 2: {
          const porcentaje = 0.1;
          const sobreExc = 472.0;
          const cuotaFija = 17.67;
  
          const exceso = salarioDesc - sobreExc;
          const porcExceso = exceso * porcentaje;
          const retencion = porcExceso + cuotaFija;
          setRenta(retencion);
          break;
        }
        case 3: {
          const porcentaje = 0.2;
          const sobreExc = 895.24;
          const cuotaFija = 60.0;
  
          const exceso = salarioDesc - sobreExc;
          const porcExceso = exceso * porcentaje;
          const retencion = porcExceso + cuotaFija;
          setRenta(retencion);
          break;
        }
        case 4: {
          const porcentaje = 0.3;
          const sobreExc = 2038.1;
          const cuotaFija = 288.57;
  
          const exceso = salarioDesc - sobreExc;
          const porcExceso = exceso * porcentaje;
          const retencion = porcExceso + cuotaFija;
          setRenta(retencion);
          break;
        }
        default:
          break;
      }
  };

  return (
    <div>
      <a
        type="button"
        className="p-10 border-spacing-3"
        onClick={handleCalculosClick}
      >
        Calcular
      </a>
      <input type="text" value={renta} readOnly />
    </div>
  );
};

/*const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [suma, setSuma] = useState('');

  const handleNumero1Change = (event) => {
    setNumero1(event.target.value);
  };

  const handleNumero2Change = (event) => {
    setNumero2(event.target.value);
  };

  const handleSumarClick = () => {
    const resultado = parseInt(numero1) + parseInt(numero2);
    setSuma(resultado);
  };

  return (
    <div>
      <input type="number" value={numero1} onChange={handleNumero1Change} />
      <input type="number" value={numero2} onChange={handleNumero2Change} />
      <button onClick={handleSumarClick}>Sumar</button>
      <input type="text" value={suma} readOnly />
    </div>
  );*/
