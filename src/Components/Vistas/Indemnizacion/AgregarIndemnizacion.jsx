import React, { useEffect, useState } from "react";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarIndemnizacion = () => {
  const [datosEmpleado, setDatosEmpleado] = useState([]);
  const [depto, setDepto] = useState();
  const [salari, setSalario] = useState();
  const [emplead, setEmpleado] = useState();
  const [fechaInicial, setFechaInicial] = useState();
  const [fechaFinal, setFechaFinal] = useState();
  console.log(datosEmpleado);
  const [anios, setAnios] = useState(0);
  const [dias, setDias] = useState(0);
  const [indemnizacion, setIndemnizacion] = useState(0);
  const [añosTotal, setAñosTotal] = useState(0);
  const [tiempototal, setTiempoTotal] = useState("");

//Llamar empleado
useEffect(() => {
  async function getInfoEmp() {
    const url = "http://127.0.0.1:8000/empleados/empleados/";

    let config = {
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
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

  const empp =datosEmpleado[op-1].id;
  setEmpleado(empp);

  const fecha = datosEmpleado[op-1].fecha_contratacion;
  setFechaInicial(fecha);
};

   //!Validaciones de datos
  //Navegación del botón luego de validar correctamente
  const Navigate = useNavigate();

  //Estado inicial del formulario
  const datosUsuario = {
    fecha_retiro: "",
  };

  //Estado inicial de la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setformulario] = useState(datosUsuario);

  //Estado para manejar las alertas de validación
  const [alerta, setAlerta] = useState([initialStateInput]);

  //Funcion para obtener la información a los inputs
  const ManejarEventoDeInputs = (event) => {
    //La propiedad target del event nos permitirá obtener los valores
    const name = event.target.name;
    const value = event.target.value;

    //Actualizamos los valores capturados a nuestro estado de formulario
    setformulario({ ...formulario, [name]: value });
  };

  //Función encargada de validar campos
  const handleLoginSession = (e) => {
    e.preventDefault();
    EnviarDatosServer()
   
  }; //Conexión a API
  function EnviarDatosServer() {
    const url = "http://127.0.0.1:8000/empleados/indemnizacion/";

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
      },
    };
    const setDataFormulario = {
      fecha_retiro: formulario.fecha_retiro,
      fecha_ingreso: fechaInicial,
      salario: salari,
      años_completos: anios,
      dias: dias,
      pago: indemnizacion,
      empleado: emplead,
      departamento: depto,
    };

    console.log(setDataFormulario);

    axios
      .post(url, setDataFormulario, config)
      .then((response) => 
      console.log(response.data, "Response--------------")
      );
    setformulario(datosUsuario);
    Swal.fire({
      icon: "success",
      title: "Indemnización guardada",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      Navigate("/indemnizaciones");
    }, 1500);
  }

  const ValidarInputs = (data) => {
    console.log(data);

    //Declaramos un arreglo el cual se va a encargar de guardar las validaciones
    let errors = [];

    //Recibidos los datos a validar
    const datosDelFormulario = data;

    //Proceso de validación
    datosDelFormulario.map((valorInput) => {
      //eslint-disable-next-line default-case
      switch (valorInput.nombre) {

        case "fecha_retiro": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese una fecha valida",
              estado: true,
            });
          } else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "",
              estado: false,
            });
          }
          break;
        }
      }
    });
    //retornamos el total de validaciones
    return errors;
  };
  console.log(formulario);

  const calculo = () => {
    // Calcular dias y años
    const fecha1 = new Date(fechaInicial);
    const fecha2 = new Date(formulario.fecha_retiro);
    const unDiaEnMilisegundos = 24 * 60 * 60 * 1000;
    const diasT = Math.floor(Math.abs(fecha2 - fecha1) / unDiaEnMilisegundos);
    const anios = Math.floor(diasT / 365);
    const dias = diasT - anios * 365;

    // Actualizar los estados de años y días
    setAnios(anios);
    setDias(dias);

    // Cálculo de indemnización por años
    const total_salario_años = anios * salari;
    // Cálculo de indemnización proporcional
    const total_salario_dias = (dias / 365) * salari;

    // Calcular la indemnización total
    const suma = total_salario_años + total_salario_dias;
    setIndemnizacion((suma.toFixed(2)));
    console.log(indemnizacion);
    const value = `${anios} años y ${dias} días`;
    setTiempoTotal(value);
    console.log(tiempototal);
  };

  useEffect(() => {
    console.log(anios);
    console.log(dias);
  }, [anios, dias]);

  useEffect(() => {
    console.log(indemnizacion);
  }, [indemnizacion]);
  
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-24 mb-8 mt-8 pt-12">
          <div className="flex justify-between">
            <Link to="/indemnizaciones" className="pl-5 text-3xl text-gray-500">
              <FiArrowLeft />
            </Link>
            <h1 className=" text-center text-2xl text-black">
              CALCULO DE INDEMNIZACIÓN
            </h1>
            <h1></h1>
          </div>
          <form onSubmit={handleLoginSession}  className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gray-100 h-full py-6 px-6 rounded-xl border border-gray-200 ">
                <div className="mt-4 pt-4">
                  <form action="">
                    <div className=" mx-4 grid grid-cols-1 gap-8 md:grid-cols-3">
                      <div className="md:col-span-2 lg:col-span-2">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Empleado
                            </label>
                            <select
                              id="default"
                              class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 "
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
                              for="first_name"
                              class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                            >
                              Fecha Ingreso:
                            </label>
                            <input
                              name="nacimientoEditPerfil"
                              type="date"
                              id="last_name"
                              value={fechaInicial}
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              disabled
                            />
                          </div>
                          <div>
                            <label
                              for="fecha_retiro"
                              class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                            >
                              Fecha Retiro:
                            </label>
                            <input
                              name="fecha_retiro"
                              type="date"
                              id="fecha_retiro"
                              min={fechaInicial}
                              max="2023-05-19"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              value={formulario.fecha_retiro}
                              onChange={ManejarEventoDeInputs}
                            />
                            {alerta
                              .filter(
                                input =>
                                  input.valorInput === "fecha_retiro" &&
                                  input.estado === true
                              )
                              .map(message => (
                                <div className="py-2">
                                  <span className="text-red-500 mt-2">
                                    {message.mensaje}
                                  </span>
                                </div>
                              ))}
                          </div>
                          <div>
                            <label
                              for="first_name"
                              class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                            >
                              Salario Mensual:
                            </label>
                            <div className="relative md:content-center">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                $
                              </div>
                              <input
                                type="text"
                                id="salario"
                                value={salari}
                                className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <a
                            type="submit"
                            onClick={calculo}
                            class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                          >
                            Calcular
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </form>
          <div className="mt-4 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-gray-100">
                <div className="mt-2 ">
                  <h2 class="text-lg font-bold text-gray-900">Calculos</h2>
                </div>
                <div className="mt-4 border-t-2 border-gray-100 pt-4">
                  <form action="">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Tiempo trabajado
                        </label>
                        <input
                          type="text"
                          name="#"
                          id="#"
                          value={tiempototal}
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          disabled
                        />
                      </div>
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Indemnización:
                        </label>
                        <div className="relative md:content-center">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            $
                          </div>
                          <input
                            type="text"
                            id="pagoAños"
                            value={indemnizacion}
                            className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            disabled
                          />
                          
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mt-2">
                  <button
                  onClick={EnviarDatosServer}
                    type="submit"
                    class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
