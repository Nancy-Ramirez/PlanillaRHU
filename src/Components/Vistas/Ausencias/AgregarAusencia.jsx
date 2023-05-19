import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarAusencia = () => {

  const [datosEmpleado, setDatosEmpleado] = useState([]);
  const [depto, setDepto] = useState(0);
  const [emplead, setEmpleado] = useState();
  const [fecha_ingreso, setFecha_ingreso] = useState();
  const [fechafinal, setFechaFin] = useState();


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
  const empp =datosEmpleado[op-1].id;
  setEmpleado(empp);
  const fech = datosEmpleado[op-1].fecha_contratacion;
  setFecha_ingreso(fech);
};

//!Validaciones de datos
  //Navegación del botón luego de validar correctamente
  const Navigate = useNavigate();

  //Estado inicial del formulario
  const datosIncapacidad = {
cantidad_dias: "",
motivo: "",
fecha_inicio: "",
fecha_final: "",
  };

  //Estado inicial de la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setformulario] = useState(datosEmpleado);

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

    //Ordenamos los datos para enviarlos a la validación
    let verificarInputs = [
      { nombre: "cantidad_dias", value: formulario.cantidad_dias},  
      { nombre: "fecha_inicio", value: formulario.fecha_inicio},    
      { nombre: "fecha_final", value: formulario.fecha_final},    
    ];

    //Enviamos los datos a la función de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtener el total de validación
    const totalValidaciones = datosValidados
      .filter((input) => input.estado === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validaciones", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 3) {
      console.log("Enviar al servidor");
      EnviarDatosServer();
    }
  }; //Conexión a API
  function EnviarDatosServer() {
    const url = "http://127.0.0.1:8000/empleados/ausencia/";

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
      },
    };
    setFechaFin(formulario.fecha_fin);
    const setDataFormulario = {
      id_empleado: emplead,
      cantidad_dias: formulario.cantidad_dias,
      fecha_inicio: formulario.fecha_inicio,
      fecha_final: formulario.fecha_final,
      departamento: depto,
    };
    console.log("datos",setDataFormulario);

    axios
      .post(url, setDataFormulario, config)
      .then((response) => console.log(response.data, "Response--------------"));
    Swal.fire({
      icon: "success",
      title: "Ausencia registrada",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      Navigate("/ausencia");
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
        case "cantidad_dias": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese un numero valido",
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
        case "fecha_inicio": {
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
        case "fecha_final": {
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

return (
  <div className="flex">
    <Aside />
    <div className="w-full">
      <Navbar />
      <div className="ml-24 mb-8 mt-8 pt-12">
        <div className="flex">
          <Link to="/ausencia" className="pl-5 text-3xl text-gray-500">
            <FiArrowLeft />
          </Link>

          <h1 className="ml-80 text-center text-2xl text-black">
            AGREGAR AUSENCIA
          </h1>
        </div>
        <div className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-2 lg:col-span-3">
            <div className="bg-gray-100 h-full py-6 px-6 rounded-xl border border-gray-200">
              <div className="mt-4 pt-4">
                <form onSubmit={handleLoginSession}>
                  <div className="grid gap-6 mb-6 ">
                    {/*Empleado */}
                    <div>
                      <label
                        for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                     Empleado
                      </label>
                      <select
                        id="default"
                        class="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 "
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
                    {/*Departamento */}
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
                    {/*Días */}
                    <div>
                      <label
                        for="cantidad_dias"
                        class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                      >
                        Numero de Dias:
                      </label>
                      <input
                        type="number"
                        id="cantidad_dias"
                        name="cantidad_dias"
                        className="block p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.cantidad_dias}
                      onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                      .filter(
                        input =>
                          input.valorInput === "cantidad_dias" &&
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
                    {/*Fecha inicio */}
                    <div>
                      <label
                        for="fecha_inicio"
                        class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                      >
                        Fecha Inicio:
                      </label>
                      <input
                        name="fecha_inicio"
                        type="date"
                        id="fecha_inicio"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formulario.fecha_inicio}
                      onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                      .filter(
                        input =>
                          input.valorInput === "fecha_inicio" &&
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
                    {/*Fecha final */}
                    <div>
                      <label
                        for="fecha_final"
                        class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                      >
                        Fecha Fin:
                      </label>
                      <input
                        name="fecha_final"
                        type="date"
                        id="fecha_final"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        value={formulario.fecha_final}
                      onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                      .filter(
                        input =>
                          input.valorInput === "fecha_final" &&
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
                  </div>
                  <div className="mt-6">
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
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
