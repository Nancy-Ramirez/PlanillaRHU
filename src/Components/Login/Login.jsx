import "../Login/login.css";
import loginIMG from "../../Images/Login.gif";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const datosForm = {
    correoLogin: "",
    contraLogin: ""
  };
  //Inicio de la alerta
  const initialStateInput = {
    input: "",
    message: "",
    state: false
  };
   
  const[formulario, setFormulario] = useState(datosForm);
  const[alerta, setAlerta] = useState([initialStateInput]);
  const ManejarEventoInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormulario({...formulario,[name]:value});
  };
  const handleLogin = (e) => {
     e.preventDefault();
     //orden de datos para validacion
     let verficarInputs = [
      {nombre: "correo", value: formulario.correoLogin},
      {nombre: "contra", value: formulario.contraLogin}
     ];
     const datosValidados = validarInputs(verficarInputs);
     console.log(datosValidados);
     setAlerta(datosValidados);
     const totalValidaciones = datosValidados.filter(input => input.estado === false).map
     ((estado) => {return false});
     console.log("total de validaciones", totalValidaciones.length);
     if(totalValidaciones.length >= 2){
      console.log("enivar datos al servidor");
     }
  }
//funcion para validar los datos
  const validarInputs = (data) => {
    let errors = [];
    const datosDelFormulario = data;
    datosDelFormulario.map((valorInput) => {
      switch(valorInput.nombre) {
        case 'correo' : {
          if(valorInput.value === '' || valorInput.value === null) {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: 'Campo requerido',
              estado: true
            })
          }else{
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: '',
              estado:false
            })
          }
          break;
        }
        case 'contra': {
          if(valorInput.value === '' || valorInput.value === null){
            errors.push({
              valorInput:valorInput.nombre,
              mensaje: 'Campo requerido',
              estado: true
            });
          }else {
            errors.push({
              valorInput: valorInput.nombre,
              mensaje: '',
              estado: false
            });
          }
          break;
        }
        default:{
          break;
        }
      }
    });
    return errors;
  }
  return (
    <div className="Login">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={loginIMG}
            />
            <div class="bg-gray-50 bg-opacity-30 shadow-md  lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 border rounded-lg p-5 px-10 ">
              <div className="">
                <h1 className="text-2xl pt-12 pb-5 text-center">
                  {" "}
                  ¡Bienvenido de vuelta!
                </h1>
              </div>
              <form onSubmit={handleLogin} class="mt-6" action="#" method="POST">
                <div>
                  <label class="block text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    name="correoLogin"
                    id=""
                    value={formulario.correoLogin}
                    onChange={ManejarEventoInputs}
                    placeholder="Ingrese su correo electrónico"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                   
                  />
                  {
                  alerta.filter( input => input.valorInput == 'correo' && input.estado === true).map(message => (
                    <div>
                      <span className="text-red-500">{message.mensaje}</span>
                    </div>
                  ))
                }
                </div>

                <div class="mt-4">
                  <label class="block text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    name="contraLogin"
                    id=""
                    value={formulario.contraLogin}
                    onChange={ManejarEventoInputs}
                    placeholder="Ingrese su contraseña"
                    minlength="6"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  
                  />
                   {
                  alerta.filter( input => input.valorInput == 'contra' && input.estado === true).map(message => (
                    <div>
                      <span className="text-red-500">{message.mensaje}</span>
                    </div>
                  ))
                }
                </div>

               <button
                  type="submit"
                  class="w-full block bg-teal-700 hover:bg-teal-800 focus:bg-teal-500 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
