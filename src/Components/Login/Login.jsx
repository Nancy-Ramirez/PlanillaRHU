import "../Login/login.css";
import loginIMG from "../../Images/Login.gif";
import { Link } from "react-router-dom";

export const Login = () => {
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
              <form class="mt-6" action="#" method="POST">
                <div>
                  <label class="block text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Ingrese su correo electrónico"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                    required
                  />
                </div>

                <div class="mt-4">
                  <label class="block text-gray-700">Contraseña</label>
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Ingrese su contraseña"
                    minlength="6"
                    class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <Link to="/inicio"><button
                  type="submit"
                  class="w-full block bg-teal-700 hover:bg-teal-800 focus:bg-teal-500 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                >
                  Ingresar
                </button></Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
