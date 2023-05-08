import { Link } from "react-router-dom";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";

export const AgregarEmpleados = () => {
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
              <div className="mx-5">
                {/*Parte 1 */}
                <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
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
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
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
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>

                  {/*Linea 2 */}
                  <div className="flex flex-wrap px-10">
                    {/*Fecha de Nacimiento */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
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
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label for="dui" class="leading-7 text-sm text-gray-600">
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
                  <div className="flex flex-wrap px-10">
                    {/*NIT */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label for="nit" class="leading-7 text-sm text-gray-600">
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
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2">
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
                      />
                    </div>
                  </div>

                  {/*Linea 5 */}
                  <div className="flex flex-wrap px-10">
                    {/*Correo electrónico*/}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
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
                    <div class="xl:w-1/2 md:w-1/2 w-full px-2"></div>
                  </div>
                </div>

                {/*Parte 2 */}
                <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                  {/*Linea 7 */}
                  <div className="flex flex-wrap px-10">
                    {/*Salario */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="salario"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Nombres
                      </label>
                      <input
                        type=""
                        id="salario"
                        name="salario"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="$"
                      />
                    </div>
                    {/*Tipo de pago */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="tipoPago"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Tipo de pago
                      </label>
                      <select
                        id="tipoPago"
                        name="tipoPago"
                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                      >
                        <option id="">**Seleccione**</option>
                        <option id="mensual">Mensual</option>
                        <option id="quincenal">Quincenal</option>
                      </select>
                    </div>
                  </div>

                  {/*Linea 8 */}
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

                  {/*Linea 9 */}
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
                    {/*Fecha de inicio */}
                    <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                      <label
                        for="fechaInicio"
                        class="leading-7 text-sm text-gray-600"
                      >
                        Fecha de inicio
                      </label>
                      <input
                        type="date"
                        id="fechaInicio"
                        name="fechaInicio"
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
