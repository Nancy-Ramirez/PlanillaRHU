import { FiArrowLeft } from "react-icons/fi";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link } from "react-router-dom";

export const AgregarDepartamento = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
            <div className="flex justify-between pt-24 ">
              <Link to="/departamento" className="pl-5 text-3xl text-gray-500">
                    <FiArrowLeft />
                  </Link>
                <h1 className=" text-center text-2xl text-black">
                  AGREGAR DEPARTAMENTO
                </h1>
                <h1>

                </h1>
                
              </div>
              <div className="mx-36">
                {/*Parte 1 */}
                <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 4 */}
                  <div className="flex flex-wrap px-10">
                    {/*Departamento */}
                    <div className="w-full px-2">
                      <label
                        for="departamento"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Departamento
                      </label>
                      <input
                        type="text"
                        id="departamento"
                        name="departamento"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-8">
                    <button class="text-white bg-col4 border-0 py-2 px-8 focus:outline-none hover:bg-col4 rounded text-lg">
                      Registrar
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
