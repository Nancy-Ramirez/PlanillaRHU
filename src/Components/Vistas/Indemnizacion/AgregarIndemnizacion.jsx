import React, { useEffect, useState } from "react";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export const AgregarIndemnizacion = () => {
  const [anios, setAnios] = useState(2);
  const [salario, setSalario] = useState(400);
  const [dias, setDias] = useState(260);
  const [indemnizacion, setIndemnizacion] = useState(0);

  const Suma = (total_salario_años, total_salario_dias) => {
    // Total indemnización
    const suma = total_salario_años + total_salario_dias;
    setIndemnizacion(suma);
    console.log(indemnizacion);
  };

  const calculo = (e) => {
    e.preventDefault();
    // cálculo de indemnización por años
    const total_salario_años = anios * salario;
    // cálculo de indemnización proporcional
    const total_salario_dias = (dias / 365) * salario;
    Suma(total_salario_años, total_salario_dias);
  };

  useEffect(() => {
    console.log(indemnizacion);
  }, [indemnizacion]);

  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-24 mb-8 mt-8 pt-12">
          <div className="flex justify-between">
            <Link to="/indemnizaciones" className="pl-5 text-3xl text-gray-500">
              <FiArrowLeft />
            </Link>
            <h1 className=" text-center text-2xl text-black">
              CALCULO DE INDEMNIZACIÓN
            </h1>
            <h1></h1>
          </div>
          <div className="mt-8 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gray-100 h-full py-6 px-6 rounded-xl border border-gray-200 ">
                <div className="mt-4 pt-4">
                  <form action="">
                    <div className=" mx-4 grid grid-cols-1 gap-8 md:grid-cols-3">
                      <div className="md:col-span-2 lg:col-span-2">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Empleado
                            </label>
                            <select
                              id="default"
                              class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 "
                            >
                              <option selected>Empleado</option>
                              <option value="US">Ventas</option>
                              <option value="CA">Contabilidad</option>
                              <option value="FR">Gerencia</option>
                              <option value="DE">Produccion</option>
                            </select>
                          </div>
                          <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Departamento
                            </label>
                            <select
                              id="default"
                              class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-col2 focus:border-col2 block w-full p-2.5 " disabled
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
                              class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                            >
                              Fecha Ingreso:
                            </label>
                            <input
                              name="nacimientoEditPerfil"
                              type="date"
                              id="last_name"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              disabled
                            />
                          </div>
                          <div>
                            <label
                              for="first_name"
                              class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                            >
                              Fecha Retiro:
                            </label>
                            <input
                              name="nacimientoEditPerfil"
                              type="date"
                              id="last_name"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="Doe"
                            />
                          </div>
                          <div>
                            <label
                              for="first_name"
                              class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                            >
                              Salario Mensual:
                            </label>
                            <div className="relative md:content-center">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                $
                              </div>
                              <input
                                type="text"
                                id="salario"
                                className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <a
                            type="submit"
                            onClick={calculo}
                            class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                          >
                            Calcular
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 mx-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:col-span-2 lg:col-span-3">
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-gray-100">
                <div className="mt-2 ">
                  <h2 class="text-lg font-bold text-gray-900">Calculos</h2>
                </div>
                <div className="mt-4 border-t-2 border-gray-100 pt-4">
                  <form action="">
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Años Completos:
                        </label>
                        <input
                          type="number"
                          name="#"
                          id="#"
                          class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          disabled
                        />
                      </div>
                      <div className="flex justify-start">
                        <label
                          for="first_name"
                          class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                        >
                          Indemnización:
                        </label>
                        <div className="relative md:content-center">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            $
                          </div>
                          <input
                            type="text"
                            id="pagoAños"
                            value={indemnizacion}
                            className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            disabled
                          />
                          
                        </div>
                      </div>
                    </div>
                  </form>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
