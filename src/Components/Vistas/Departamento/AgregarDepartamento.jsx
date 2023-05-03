import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";

export const AgregarDepartamento = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-center pt-24">
                <h1 className=" text-center text-2xl text-black">
                  AGREGAR DEPARTAMENTO
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
