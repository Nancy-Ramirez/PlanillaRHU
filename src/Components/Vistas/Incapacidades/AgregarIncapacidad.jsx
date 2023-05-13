import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const AgregarIncapacidades = () => {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-24 mb-8 mt-8 pt-12">
          <div className="flex">
            <Link to="/incapacidad" className="pl-5 text-3xl text-gray-500">
              <FiArrowLeft />
            </Link>

            <h1 className="ml-80 text-center text-2xl text-black">
              AGREGAR INCAPACIDAD
            </h1>
          </div>
          <div className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gray-100 h-full py-6 px-6 rounded-xl border border-gray-200">
                <div className="mt-4 pt-4">
                  <form action="">
                    <div className="grid gap-6 mb-6 ">
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Departamento
                        </label>
                        <select
                          id="default"
                          class="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 "
                        >
                          <option selected>Departamento</option>
                          <option value="US">Ventas</option>
                          <option value="CA">Contabilidad</option>
                          <option value="FR">Gerencia</option>
                          <option value="DE">Produccion</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Numero de Dias:
                        </label>
                        <input
                          type="number"
                          id="dias"
                          className="block p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Fecha Inicio:
                        </label>
                        <input
                          name="nacimientoEditPerfil"
                          type="date"
                          id="last_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        />
                      </div>
                      <div>
                        <label
                          for="first_name"
                          class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Fecha Fin:
                        </label>
                        <input
                          name="nacimientoEditPerfil"
                          type="date"
                          id="last_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                          <button
                            type="submit"
                            class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center " disabled
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
