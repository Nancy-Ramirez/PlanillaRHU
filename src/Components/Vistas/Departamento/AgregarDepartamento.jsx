import { FiArrowLeft } from "react-icons/fi";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarDepartamento = () => {
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
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-between pt-24 ">
                <Link
                  to="/departamento"
                  className="pl-5 text-3xl text-gray-500"
                >
                  <FiArrowLeft />
                </Link>
                <h1 className=" text-center text-2xl text-black">
                  AGREGAR DEPARTAMENTO
                </h1>
                <h1></h1>
              </div>
              <div className="mx-36">
                {/*Parte 1 */}
                <form onSubmit={handleLoginSession}  class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 4 */}
                  <div className="flex flex-wrap px-10">
                    {/*Departamento */}
                    <div className="w-full px-2">
                      <label
                        for="nombre_departamento"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Departamento
                      </label>
                      <input
                        type="text"
                        id="nombre_departamento"
                        name="nombre_departamento"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={formulario.nombre_departamento}
                        onChange={ManejarEventoDeInputs}
                      />
                      {alerta
                        .filter(
                          (input) =>
                            input.valorInput === "nombre_departamento" &&
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
                  <div className="flex justify-end pt-8">
                    <button
                      type="submit"
                      class="text-white bg-col4 border-0 py-2 px-8 focus:outline-none hover:bg-col4 rounded text-lg"
                    >
                      Registrar
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
