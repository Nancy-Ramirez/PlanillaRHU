import { Link, useNavigate } from "react-router-dom";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";
import "../../Styles/agregar.css";
import { useEffect, useState } from "react";
import $ from 'jquery';
import 'jquery-mask-plugin';
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarEmpleados = () => {

 //!Validaciones de datos
  //Navegación del botón luego de validar correctamente
  const Navigate = useNavigate();

  //Estado inicial del formulario
  const datosDepartamento = {
    nombre_departamento: "",
  };

  //Estado inicial de la alerta
  const initialStateInput = {
    valorInput: "",
    mensaje: "",
    estado: false,
  };

  //Estado para manejar los valores del formulario
  const [formulario, setformulario] = useState(datosDepartamento);

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
      { nombre: "nombre_departamento", value: formulario.nombre_departamento },
    ];

    //Enviamos los datos a la función de validación y recibimos las validaciones
    const datosValidados = ValidarInputs(verificarInputs);
    console.log(datosValidados);

    //Enviamos las validaciones al estado que se va a encargar de mostrarlas en el formulario
    setAlerta(datosValidados);

    //Obtener el total de validación
    const totalValidaciones = datosValidados
      .filter((input )=> input.estado === false)
      .map((estado) => {
        return false;
      });

    console.log("Total de validaciones", totalValidaciones.length);

    //Validación para enviar los datos al servidor
    if (totalValidaciones.length >= 1) {
      console.log("Enviar al servidor");
      EnviarDatosServer();
    }
  }; //Conexión a API
  function EnviarDatosServer() {
    const url = "http://127.0.0.1:8000/empleados/departamento/";

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        'Accept': "application/json",
      },
    };
    const setDataFormulario = {
      nombre_departamento: formulario.nombre_departamento,
    };

    axios
      .post(url, setDataFormulario, config)
      .then((response) => 
      console.log(response.data, "Response--------------")
      );
    setformulario(datosDepartamento);
    Swal.fire({
      icon: "success",
      title: "Departamento agregado",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      Navigate("/departamento");
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
        case "nombre_departamento": {
          if (valorInput.value === "" || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: "Por favor ingrese el nombre del departamento",
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

  {/*Mascaras */}
  useEffect(() => {

    $("#salario").change(function() {
      var valor = $(this).val();
      if (valor.indexOf("*") !== -1) {
        var punto = ".";
        valor = valor.replace("*", punto);
        $(this).val(valor);
      }
    });

    $(document).ready(function() {
      $("#telefono").mask("0000-0000");
      $("#nit").mask("0000-000000-000-0");
      $("#dui").mask("00000000-0");
      $("#isss").mask("000000000");
      $("#afp").mask("00000000000");
      $("#salario").mask("0000000.00", {reverse: true});
    });
  }, []);

  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
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
                <h1>

                </h1>
                
              </div>
              <form onSubmit={handleLoginSession}  className="mx-5">
                {/*Parte 1 */}
                <div  
                 class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 1 */}
                  <div className="flex flex-wrap px-10">
                    {/*Nombres */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="nombres"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Nombres
                      </label>
                      <input
                        type="text"
                        id="nombres"
                        name="nombres"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  pattern="[A-Za-z]*"
                        value={formulario.nombres}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "nombres" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                        for="apellidos"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Apellidos
                      </label>
                      <input
                        type="text"
                        id="apellidos"
                        name="apellidos"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" pattern="[A-Za-z]*"
                        value={formulario.apellidos}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "apellidos" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                        for="fecha_nacimiento"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        type="date"
                        id="fecha_nacimiento"
                        name="fecha_nacimiento"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.fecha_nacimiento}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "fecha_nacimiento" &&
                            input.estado === true
                        )
                        .map((message )=> (
                          <div className="py-2">
                            <span className="text-red-500 mt-2">
                              {message.mensaje}
                            </span>
                          </div>
                        ))}
                    </div>
                    {/*Telefono */}
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="telefono"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Teléfono
                      </label>
                      <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" inputmode="Numeric" 
                        value={formulario.telefono}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "telefono" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                      <label for="documento_identidad" class="leading-7 text-sm text-gray-600">
                        DUI
                      </label>
                      <input
                        type="text"
                        id="documento_identidad"
                        name="dui"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.documento_identidad}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "documento_identidad" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                        for="correo"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="correo"
                        name="correo"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.correo}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "correo" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                      <label for="no_isss" class="leading-7 text-sm text-gray-600">
                        ISSS
                      </label>
                      <input
                        type="text"
                        id="no_isss"
                        name="no_isss"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.no_isss}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "no_isss" &&
                            input.estado === true
                        )
                        .map((message )=> (
                          <div className="py-2">
                            <span className="text-red-500 mt-2">
                              {message.mensaje}
                            </span>
                          </div>
                        ))}
                    </div>
                    {/*AFP */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label for="no_afp" class="leading-7 text-sm text-gray-600">
                        AFP
                      </label>
                      <input
                        type="text"
                        id="no_afp"
                        name="no_afp"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.no_afp}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "no_afp" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                        for="direccion"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Dirección
                      </label>
                      <input
                        type="address"
                        id="direccion"
                        name="direccion"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.direccion}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "direccion" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label for="sexo" class="leading-7 text-sm text-gray-600">
                        Sexo
                      </label>
                      <select
                        id="sexo"
                        name="sexo"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                      >
                        <option id="">**Seleccione**</option>
                        <option id="femenino">Femenino</option>
                        <option id="masculino">Masculino</option>
                      </select>
                    </div>
                    {/*Estado civil */}
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="telefono"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Estado civil
                      </label>
                      <select
                        id="estadoCivil"
                        name="estadoCivil"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                      >
                        <option id="">**Seleccione**</option>
                        <option id="casado">Casado</option>
                        <option id="soltero">Soltero</option>
                        <option id="viudo">Viudo</option>
                        <option id="divorciado">Divorciado</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/*Parte 2 */}
                <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 8 */}
                  <div className="flex flex-wrap px-10">
                    {/*Salario */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="salario"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Salario
                      </label>
                      <div className="relative md:content-center">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      $
                    </div>
                    <input
                      type="text"
                      id="salario"
                      className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={formulario.salario}
                      onChange={ManejarEventoDeInputs}
                    />
                    {alerta
                      .filter(
                        (input) =>
                          input.valorInput === "salario" &&
                          input.estado === true
                      )
                      .map((message )=> (
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
                        for="fecha_contratacion"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Fecha de inicio
                      </label>
                      <input
                        type="date"
                        id="fecha_contratacion"
                        name="fecha_contratacion"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.fecha_contratacion}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "fecha_contratacion" &&
                            input.estado === true
                        )
                        .map((message )=> (
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
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="departamento"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Departamento
                      </label>
                      <select
                        id="departamento"
                        name="departamento"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                      >
                        <option id="">**Seleccione**</option>
                        <option id="1">Ventas</option>
                        <option id="2">Compras</option>
                      </select>
                    </div>
                    {/*Cargo */}
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label for="cargo" class="leading-7 text-sm text-gray-600">
                        Cargo
                      </label>
                      <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/*Linea 10 */}
                  <div className="flex flex-wrap px-10">
                    {/*Tipo contrato*/}
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="tipoContrato"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Tipo de contrato
                      </label>
                      <select
                        id="tipoContrato"
                        name="tipoContrato"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                      >
                        <option id="">**Seleccione**</option>
                        <option id="formal">Contrato formal</option>
                        <option id="profesionales">Servicios profesionales</option>
                      </select>
                    </div>
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2"></div>
                    
                  </div>
                  <div className="flex justify-end pt-8">
                  <button class="text-white bg-col4 border-0 py-2 px-8 focus:outline-none hover:bg-col4 rounded text-lg">
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
