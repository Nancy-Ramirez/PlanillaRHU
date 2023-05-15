import { Link, useNavigate } from "react-router-dom";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";
import "../../Styles/agregar.css";
import { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-mask-plugin";
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarEmpleados = () => {
  //Valores validos para el correo
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Llamar departamentos
  const [datosDepto, setDatosDepto] = useState([]);
  console.log(datosDepto);

  useEffect(() => {
    async function getInfoDep() {
      const url = "http://127.0.0.1:8000/empleados/departamento/";

      let config = {
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        console.log(resp.data);
        setDatosDepto(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfoDep();
  }, []);

  //Llamar cargos
  const [datosCargo, setDatosCargo] = useState([]);
  console.log(datosDepto);

  useEffect(() => {
    async function getInfoCargo() {
      const url = "http://127.0.0.1:8000/empleados/cargo/";

      let config = {
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        console.log(resp.data);
        setDatosCargo(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfoCargo();
  }, []);

  //!Validaciones de datos
  //Navegación del botón luego de validar correctamente
  const Navigate = useNavigate();

  //Estado inicial del formulario
  const datosEmpleado = {
    nombres: "",
    apellidos: "",
    fecha_nacimiento: "",
    direccion: "",
    telefono: "",
    sexo: "",
    documento_identidad: "",
    correo: "",
    estado_civil: "",
    no_isss: "",
    no_afp: "",
    salario: "",
    fecha_contratacion: "",
    tipo_contrato: "",
    cargo: "",
    id_departamento: "",
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
      { nombre: "nombres", value: formulario.nombres },
      { nombre: "apellidos", value: formulario.apellidos },
      {
        nombre: "fecha_nacimiento",
        value: formulario.fecha_nacimiento,
      },
      { nombre: "direccion", value: formulario.direccion },
      { nombre: "telefono", value: formulario.telefono },
      { nombre: "sexo", value: formulario.sexo },
      {
        nombre: "documento_identidad",
        value: formulario.documento_identidad,
      },
      { nombre: "correo", value: formulario.correo },
      { nombre: "estado_civil", value: formulario.estado_civil },
      { nombre: "no_isss", value: formulario.no_isss },
      { nombre: "no_afp", value: formulario.no_afp },
      { nombre: "salario", value: formulario.salario },
      {
        nombre: "fecha_contratacion",
        value: formulario.fecha_contratacion,
      },
      { nombre: "tipo_contrato", value: formulario.tipo_contrato },
      { nombre: "cargo", value: formulario.cargo },
      { nombre: "id_departamento", value: formulario.id_departamento },
    ];

    //Enviamos los datos a la función de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

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
    if (totalValidaciones.length >= 16) {
      console.log("Enviar al servidor");
      EnviarDatosServer();
    }
  }; //Conexión a API
  function EnviarDatosServer() {
    const url = "http://127.0.0.1:8000/empleados/empleados/";

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
      },
    };
    const setDataFormulario = {
      nombres: formulario.nombres,
      apellidos: formulario.apellidos,
      fecha_nacimiento: formulario.fecha_nacimiento,
      direccion: formulario.direccion,
      telefono: formulario.telefono,
      sexo: formulario.sexo,
      documento_identidad: formulario.documento_identidad,
      correo: formulario.correo,
      estado_civil: formulario.estado_civil,
      no_isss: formulario.no_isss,
      no_afp: formulario.no_afp,
      salario: formulario.salario,
      fecha_contratacion: formulario.fecha_contratacion,
      tipo_contrato: formulario.tipo_contrato,
      cargo: formulario.cargo,
      id_departamento: formulario.id_departamento,
    };

    axios
      .post(url, setDataFormulario, config)
      .then((response) => console.log(response.data, "Response--------------"));
    setformulario(datosEmpleado);
    Swal.fire({
      icon: "success",
      title: "Empleado registrado",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      Navigate("/empleado");
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
        case "nombres": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese los nombres del empleado",
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
        case "apellidos": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese los apellidos del empleado",
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
        case "fecha_nacimiento": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese una fecha de nacimiento valida",
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
        case "direccion": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese una dirección valida",
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
        case "telefono": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese un número de telefono valido",
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
        case "sexo": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor elija una opción",
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
        case "documento_identidad": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese un número de dui valido",
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
        case "correo": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingresa tu correo electrónico",
              estado: true,
            });
          } else if (!isValidEmail.test(valorInput.value)) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingresa un correo electrónico válido",
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
        case "estado_civil": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor elija una opción",
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
        case "no_isss": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese un número de ISSS valido",
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
        case "no_afp": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese un número de AFP valido",
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
        case "salario": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese un valor valido",
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
        case "fecha_contratacion": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Ingrese una fecha de contratación valida",
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
        case "tipo_contrato": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor elija una opción",
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
        case "cargo": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor elija una opción",
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
        case "id_departamento": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor elija una opción",
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

  {
    /*Mascaras */
  }
  useEffect(() => {
    $(document).ready(function () {
      $("#telefono").mask("00000000000");
      $("#nit").mask("0000-000000-000-0");
      $("#documento_identidad").mask("00000000-0");
      $("#no_isss").mask("000000000");
      $("#no_afp").mask("000000000000");
    });
  }, []);

  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-between pt-24 ">
                <Link to="/empleado" className="pl-5 text-3xl text-gray-500">
                  <FiArrowLeft />
                </Link>
                <h1 className=" text-center text-2xl text-black">
                  AGREGAR EMPLEADOS
                </h1>
                <h1></h1>
              </div>
              <form onSubmit={handleLoginSession} className="mx-5">
                {/*Parte 1 */}
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 1 */}
                  <div className="flex flex-wrap px-10">
                    {/*Nombres */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="nombres"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Nombres
                      </label>
                      <input
                        type="text"
                        id="nombres"
                        name="nombres"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.nombres}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "nombres" &&
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
                    {/*Apellidos */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="apellidos"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Apellidos
                      </label>
                      <input
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.apellidos}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "apellidos" &&
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

                  {/*Linea 2 */}
                  <div className="flex flex-wrap px-10">
                    {/*Fecha de Nacimiento */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="fecha_nacimiento"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        type="date"
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        min="1950-01-01"
                        max="2005-01-31"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.fecha_nacimiento}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "fecha_nacimiento" &&
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
                    {/*Telefono */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="telefono"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Teléfono
                      </label>
                      <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        inputMode="Numeric"
                        placeholder="503########"
                        value={formulario.telefono}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "telefono" &&
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

                  {/*Linea 3 */}
                  <div className="flex flex-wrap px-10">
                    {/*DUI */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="documento_identidad"
                        className="leading-7 text-sm text-gray-600"
                      >
                        DUI
                      </label>
                      <input
                        type="text"
                        id="documento_identidad"
                        name="documento_identidad"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="00000000-0 (con guión)"
                        value={formulario.documento_identidad}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "documento_identidad" &&
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
                    {/*Correo electrónico*/}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="correo"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.correo}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "correo" &&
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

                  {/*Linea 4 */}
                  <div className="flex flex-wrap px-10">
                    {/*ISSS */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="no_isss"
                        className="leading-7 text-sm text-gray-600"
                      >
                        ISSS
                      </label>
                      <input
                        type="text"
                        id="no_isss"
                        name="no_isss"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.no_isss}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "no_isss" &&
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
                    {/*AFP */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="no_afp"
                        className="leading-7 text-sm text-gray-600"
                      >
                        AFP
                      </label>
                      <input
                        type="text"
                        id="no_afp"
                        name="no_afp"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.no_afp}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "no_afp" &&
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

                  {/*Linea 5 */}
                  <div className="flex flex-wrap px-10">
                    {/*Dirección */}
                    <div className="w-full px-2">
                      <label
                        htmlFor="direccion"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Dirección
                      </label>
                      <input
                        type="address"
                        id="direccion"
                        name="direccion"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.direccion}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "direccion" &&
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

                  {/*Linea 6 */}
                  <div className="flex flex-wrap px-10">
                    {/*Sexo */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label htmlFor="sexo" className="leading-7 text-sm text-gray-600">
                        Sexo
                      </label>
                      <select
                        id="sexo"
                        name="sexo"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                        onChange={ManejarEventoDeInputs}
                        value={formulario.sexo}
                      >
                        <option
                          id=""
                          onChange={ManejarEventoDeInputs}
                          value={""}
                        >
                          Seleccione una opción
                        </option>
                        <option id="F" value="F">
                          Femenino
                        </option>
                        <option id="M" value="M">
                          Masculino
                        </option>
                      </select>
                    </div>

                    {/*Estado civil */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="estado_civil"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Estado civil
                      </label>
                      <select
                        id="estado_civil"
                        name="estado_civil"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                        value={formulario.estado_civil}
                        onChange={ManejarEventoDeInputs}
                      >
                        <option id="" value="">
                          Seleccione una opción
                        </option>
                        <option id="casado" value="casado">
                          Casado
                        </option>
                        <option id="soltero" value="soltero">
                          Soltero
                        </option>
                        <option id="viudo" value="viudo">
                          Viudo
                        </option>
                        <option id="divorciado" value="divorciado">
                          Divorciado
                        </option>
                      </select>
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "estado_civil" &&
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
                </div>

                {/*Parte 2 */}
                <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 8 */}
                  <div className="flex flex-wrap px-10">
                    {/*Salario */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="salario"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Salario
                      </label>
                      <div className="relative md:content-center">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          $
                        </div>
                        <input
                          type="number"
                          id="salario"
                          name="salario"
                          min="1"
                          max="100000000"
                          step="0.01"
                          className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          value={formulario.salario}
                          onChange={ManejarEventoDeInputs}
                        />
                        {alerta
                          .filter(
                            input =>
                              input.valorInput === "salario" &&
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
                    {/*Fecha de inicio */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="fecha_contratacion"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Fecha de inicio
                      </label>
                      <input
                        type="date"
                        id="fecha_contratacion"
                        name="fecha_contratacion"
                        min="2015-01-01"
                        max="2023-06-06"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.fecha_contratacion}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          input =>
                            input.valorInput === "fecha_contratacion" &&
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

                  {/*Linea 9 */}
                  <div className="flex flex-wrap px-10">
                    {/*Departamento*/}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="id_departamento"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Departamento
                      </label>
                      <select
                        id="id_departamento"
                        name="id_departamento"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                        value={formulario.id_departamento}
                        onChange={ManejarEventoDeInputs}
                      >
                        <option id="">**Seleccione**</option>
                        {datosDepto.map((depa, inde)=> {
                          return (
                            <option key={inde} id={depa.id} value={depa.id}>
                              {depa.nombre_departamento}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {/*Cargo */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="cargo"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Cargo
                      </label>
                      <select
                        id="cargo"
                        name="cargo"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                        value={formulario.cargo}
                        onChange={ManejarEventoDeInputs}
                      >
                        <option id="">**Seleccione**</option>
                        {datosCargo.map((carg, index) => {
                          return (
                            <option key={index} id={carg.id} value={carg.id}>
                              {carg.nombre_cargo}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  {/*Linea 10 */}
                  <div className="flex flex-wrap px-10">
                    {/*Tipo contrato*/}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        htmlFor="tipo_contrato"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Tipo de contrato
                      </label>
                      <select
                        id="tipo_contrato"
                        name="tipo_contrato"
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                        value={formulario.tipo_contrato}
                        onChange={ManejarEventoDeInputs}
                      >
                        <option id="">**Seleccione**</option>
                        <option id="Formal" value="Formal">
                          Contrato formal
                        </option>
                        <option id="Servicios" value="Servicios">
                          Servicios profesionales
                        </option>
                      </select>
                    </div>
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2"></div>
                  </div>
                  <div className="flex justify-end pt-8">
                    <button
                      type="submit"
                      className="text-white bg-col4 border-0 py-2 px-8 focus:outline-none hover:bg-col4 rounded text-lg"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
