import React from "react";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { AiFillPrinter } from "react-icons/ai";

export const AgregarPrestacion = ()  => {
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-20 mt-14">
          <div className="w-full mx-auto mt-4 max-w-lg text-center ">
            <h1 className="text-3xl  sm:text-4xl text-black">
              CALCULO DE PRESTACIONES
            </h1>
          </div>
          <div className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Departamento
                    </label>
                    <select
                      id="default"
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 "
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
                      class="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Empleado
                    </label>
                    <select
                      id="default"
                      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 "
                    >
                      <option selected>Empleado</option>
                      <option value="US">Luis Ramirez</option>
                      <option value="CA">Sonia Delgado</option>
                      <option value="FR">Maria Rodriguez</option>
                      <option value="DE">Henry Hernandez</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="number"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Salario
                    </label>
                    <input
                      type="number"
                      id="number"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="$500.00"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      disabled
                    />
                  </div>
                  <div>
                    <label
                      for="text"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Salario
                    </label>
                    <input
                      type="text"
                      id="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Mensual"
                      pattern=""
                      disabled
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                      Calcular
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-6 px-6 ">
                <a>
                <AiFillPrinter className="h-16 w-16 text-azul-ver flex justify-start"/>
                <h1>Imprimir Boleta de pagoo</h1>
                </a>
                
              </div>
            </div>
            <div className="md:col-span-2 lg:col-span-3 mb-4">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <div className="mt-2 ">
                  <h2 class="text-lg font-bold text-gray-900">Calculos</h2>
                </div>
                <div class="mt-4 border-t-2 border-gray-100 pt-4">
                  <form action="">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          AFP Patronal:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                        />
                       
                    </div>
                    <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          ISSS Patronal:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                        />
                       
                    </div>
                    <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          AFP Laboral:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                        />
                       
                    </div>
                    <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          ISSS Laboral:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                        />
                       
                    </div>
                    <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-36 text-sm font-bold text-gray-900 "
                        >
                          Descuento total:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          placeholder="$"
                        />
                       
                    </div>
                    </div>
                    <div className="mt-4 border-t-2 border-gray-100 pt-4">
                    <label
                        for="text"
                        class="block mb-2 text-sm font-medium text-gray-900 "
                      >
                        Impuesto sobre la renta:
                      </label>
                      <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
                          placeholder="$"
                        />
                    </div>
                    <div className="mt-4 border-t-2 border-gray-100 pt-4">
                    <label
                        for="text"
                        class="block mb-2 text-sm font-bold text-gray-900 "
                      >
                        Salario Liquido:
                      </label>
                      <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5"
                          placeholder="$"
                        />
                    </div>
                    <div className="mt-2">
                    <button
                      type="submit"
                      class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                      Guardar
                    </button>
                    <button
                      type="submit"
                      class="text-gray-900 ml-2 bg-gray-300 border border-teal-800  hover:bg-teal-800  focus:ring-4 focus:outline-none focus:bg-teal-500font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Cancelar
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
}
