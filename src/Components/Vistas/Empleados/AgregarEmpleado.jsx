import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";

export const AgregarEmpleados = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full relative overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-center pt-24">
                <h1 className=" text-center text-2xl text-black">
                  AGREGAR EMPLEADOS
                </h1>
              </div>
              <div className="mx-5">
                <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                  {/*Linea 1 */}
                  <div className="flex flex-row space-x-24 px-10">
                    {/*Nombres */}
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
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
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {/*Apellidos */}
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
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
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/*Linea 2 */}
                  <div className="flex flex-row space-x-24 px-10 pt-5">
                    {/*Fecha de Nacimiento */}
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="fechaNac"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        type="date"
                        id="fechaNac"
                        name="fechaNac"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {/*DUI */}
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="dui"
                        class="leading-7 text-sm text-gray-600"
                      >
                        DUI
                      </label>
                      <input
                        type="number"
                        id="dui"
                        name="dui"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/*Linea 3 */}
                  <div className="flex flex-row space-x-24 px-10 pt-5">
                    {/*NIT */}
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="nit"
                        class="leading-7 text-sm text-gray-600"
                      >
                        NIT
                      </label>
                      <input
                        type="number"
                        id="nit"
                        name="nit"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {/*Telefono */}
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="telefono"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Teléfono
                      </label>
                      <input
                        type="number"
                        id="telefono"
                        name="telefono"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/*Linea 4 */}
                  <div className="flex flex-row space-x-24 px-10 pt-5">
                    {/*Dirección */}
                    <div className="w-full">
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
                      />
                    </div>
                  </div>

                  {/*Linea 5 */}
                  <div className="flex flex-row space-x-24 px-10 pt-5">
                    {/*Correo electrónico*/}
                    <div className="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="email"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {/*Estado civil */}
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="telefono"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Teléfono
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

                  {/*Linea 5 */}
                  <div className="flex flex-row space-x-24 px-10 pt-5">
                    {/*Sexo */}
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                      <label
                        for="sexo"
                        class="leading-7 text-sm text-gray-600"
                      >
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
                    <div class="xl:w-1/2 lg:w-1/2 md:w-full sm:w-full"></div>
                  </div>







                  <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                  <p class="text-xs text-gray-500 mt-3">
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
