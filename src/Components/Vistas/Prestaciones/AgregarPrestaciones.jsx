import React, { useEffect, useState } from "react";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { AiFillPrinter } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarPrestacion = () => {

  //Mandar a llamar empleado
  const [datosEmpleado, setDatosEmpleado] = useState([]);
  const [depto, setDepto] = useState("");
  const [salari, setSalario] = useState(0);
  const [empleado_id, setEmpleado_id] = useState("");
  console.log(datosEmpleado);

  useEffect(() => {
    async function getInfoEmp() {
      const url = "http://127.0.0.1:8000/empleados/empleados/";

      let config = {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        console.log(resp.data);
        setDatosEmpleado(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfoEmp();
  }, []);

  //Obtener id de empleado

  const handlerCargarDatos = function (e) {
    const op = e.target.value;
    console.log(op);
    const depart = datosEmpleado[op - 1].id_departamento;
    setDepto(depart);

    const sala = datosEmpleado[op - 1].salario;
    setSalario(sala);

    const emp = datosEmpleado[op-1].id;
    setEmpleado_id(emp);
  };

  //obtener departamento y salario por medio del id

  //Calculos
  const [renta, setRenta] = useState(0);
  const [afpPatronal, setAfpPatronal] = useState(0);
  const [afpLaboral, setAfpLaboral] = useState(0);
  const [isssPatronal, setIsssPatronal] = useState(0);
  const [isssLaboral, setIsssLaboral] = useState(0);
  const [salarioDesc, setSalarioDesc] = useState(0);
  const [descTotal, setDescTotal] = useState(0);
  const [salLiquido, setSalLiquido] = useState(0);

  function calcRenta(salarioDesc) {
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
        const retencion = 0;
        return retencion;
        break;
      }
      case 2: {
        const porcentaje = 0.1;
        const sobreExc = 472.0;
        const cuotaFija = 17.67;

        const exceso = salarioDesc - sobreExc;
        const porcExceso = exceso * porcentaje;
        const retencion = porcExceso + cuotaFija;
        setRenta(retencion.toFixed(2));
        return retencion;
        break;
      }
      case 3: {
        const porcentaje = 0.2;
        const sobreExc = 895.24;
        const cuotaFija = 60.0;

        const exceso = salarioDesc - sobreExc;
        const porcExceso = exceso * porcentaje;
        const retencion = porcExceso + cuotaFija;
        setRenta(retencion.toFixed(2));
        return retencion;
        break;
      }
      case 4: {
        const porcentaje = 0.3;
        const sobreExc = 2038.1;
        const cuotaFija = 288.57;

        const exceso = salarioDesc - sobreExc;
        const porcExceso = exceso * porcentaje;
        const retencion = porcExceso + cuotaFija;
        setRenta(retencion.toFixed(2));
        return retencion;
        break;
      }
      default:
        break;
    }
  }

  function calcSalLiquido(salarioDesc, renta) {
    // Salario liquido
    let salLiq = salarioDesc - renta;
    setSalLiquido(salLiq.toFixed(2));
  }
  const handleCalculosClick = () => {
    let isssLab;
    let isssPat;
    let afpLab;
    let afpPat;
    let salDesc;
    let descT;
    let salLiq;

    // Cálculo del ISSS Laboral
    if (salari >= 1000) {
      isssLab = 1000 * 0.03;
      if (isssLab > 30) {
        isssLab = 30;
      }
    } else {
      isssLab = salari * 0.03;
      if (isssLab > 30) {
        isssLab = 30;
      }
    }
    setIsssLaboral(isssLab.toFixed(2));

    // Cálculo del ISSS Patronal
    if (salari >= 1000) {
      isssPat = 1000 * 0.075;

      setIsssPatronal(isssPat.toFixed(2));
    } else {
      isssPat = salari * 0.075;

      setIsssPatronal(isssPat.toFixed(2));
    }

    // Cálculo del AFP Laboral
    afpLab = salari * 0.0725;
    setAfpLaboral(afpLab.toFixed(2));

    // Cálculo del AFP Patronal
    afpPat = salari * 0.0775;
    setAfpPatronal(afpPat.toFixed(2));

    // Descuento total
    descT = afpLab + isssLab;
    setDescTotal(descT.toFixed(2));

    // Salario después de descuentos
    salDesc = salari - descT;
    setSalarioDesc(salDesc);

    calcRenta(salDesc);
    const rent = calcRenta(salDesc);

    // Salario liquido
    calcSalLiquido(salDesc, rent);
  };

  //!Guardar datos
//Navegación del botón luego de validar correctamente
const Navigate = useNavigate();

//Función encargada de validar campos
const handleLoginSession = (e) => {
  e.preventDefault(); 
  enviarDatos();
}; 
//Conexión a API
  const enviarDatos = async() => {
    try {
      const url = "http://127.0.0.1:8000/empleados/prestaciones/";
  
      // Crear un objeto con los datos a enviar
      const datos = {
        salario: salari,
        isss_laboral: isssLaboral,
        isss_patronal: isssPatronal,
        afp_laboral: afpLaboral,
        afp_patronal: afpPatronal,
        impuesto_renta: renta,
        total_descuento: descTotal,
        sueldo_liquido: salLiquido,
        empleado: empleado_id, // Corregir el nombre de la variable
        departamento: depto,
      };
  
      console.log(datos);
      // Realizar la solicitud POST a la API
      const response = await axios.post(url, datos);
  
      // Realizar las acciones necesarias después de guardar los datos
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        Navigate("/prestaciones");
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-24 mb-8 mt-8 pt-12">
          <div className="flex justify-between ">
            <Link to="/prestaciones" className="pl-5 text-3xl text-gray-500">
              <FiArrowLeft />
            </Link>
            <h1 className=" text-center text-2xl text-black">
              CÁLCULO DE PRESTACIONES
            </h1>
            <h1></h1>
          </div>
          <div className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-gray-100">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Empleado
                    </label>
                    <select
                      id="empleado"
                      name="empleado"
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5"
                      onClick={handlerCargarDatos}
                    >
                      {datosEmpleado.map((empl, index) => {
                        return (
                          <option key={index} id={empl.id} value={empl.id}>
                            {empl.nombres} {empl.apellidos}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Departamento
                    </label>
                    <input
                      type="text"
                      id="departamento"
                      value={depto}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="number"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Salario
                    </label>
                    <input
                      type="number"
                      id="number"
                      value={salari}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                      placeholder="$500.00"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      disabled
                    />
                  </div>

                  <div>
                    <a
                      onClick={handleCalculosClick}
                      class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                      Calcular
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-6 px-6 ">
                <a>
                  <AiFillPrinter className="h-16 w-16 text-azul-ver flex justify-start" />
                  <h1>Imprimir Boleta de pagoo</h1>
                </a>
              </div>
            </div>
            <form onSubmit={handleLoginSession} className="md:col-span-2 lg:col-span-3 mb-4">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-gray-100">
                <div className="mt-2 ">
                  <h2 class="text-lg font-bold text-gray-900">Calculos</h2>
                </div>
                <div class="mt-4 border-t-2 border-gray-100 pt-4">
                  <form action="">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          AFP Patronal:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          value={afpPatronal}
                          step="0.01"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                          disabled
                        />
                      </div>
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          ISSS Patronal:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          value={isssPatronal}
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                          disabled
                        />
                      </div>
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          AFP Laboral:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          value={afpLaboral}
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                          disabled
                        />
                      </div>
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          ISSS Laboral:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          value={isssLaboral}
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                          disabled
                        />
                      </div>
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-36 text-sm font-bold text-gray-900 "
                        >
                          Descuento total:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          value={descTotal}
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="mt-4 border-t-2 border-gray-100 pt-4">
                      <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Impuesto sobre la renta:
                      </label>
                      <input
                        type="number"
                        name="#"
                        id="#"
                        value={renta}
                        class="bg-gray-50 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
                        placeholder="$"
                        disabled
                      />
                    </div>
                    <div className="mt-4 border-t-2 border-gray-100 pt-4">
                      <label
                        for="text"
                        class="block mb-2 text-sm font-bold text-gray-900 "
                      >
                        Salario Liquido:
                      </label>
                      <input
                        type="number"
                        name="#"
                        id="#"
                        value={salLiquido}
                        class="bg-gray-50 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
                        placeholder="$"
                        disabled
                      />
                    </div>
                    <div className="mt-2">
                      <button
                      type="submit"
                        class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                      >
                        Guardar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
