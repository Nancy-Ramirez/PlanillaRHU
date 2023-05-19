import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const EditarIncapacidad = () => {
    const navigate = useNavigate();  
    const { id } = useParams();
    const [datosIncapacidad, setDatosIncapacidad] = useState({});
    const [motivoIncapacidad, setMotivoIncapacidad] = useState("");
    const [cantDias, setCantDias] = useState(0);
    const [fechaInicio, setFechaInicio] = useState(0);
    const [fechaFinal, setFechaFinal] = useState(0);
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
                    <form>
                      <div className="grid gap-6 mb-6 ">
                        {/*Empleado */}
                        <div>
                        <label
                          htmlFor="id_empleado"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Empleado
                        </label>
                        <input
                          type="text"
                          id="id_empleado"
                          name="id_empleado"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          disabled
                        />
                      </div>
                        {/*Departamento */}
                        <div>
                        <label
                          htmlFor="departamento"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Departamento
                        </label>
                        <input
                          type="text"
                          id="departamento"
                          name="departamento"
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          
                          disabled
                        />
                      </div>
                        {/*Motivo*/}
                        <div>
                          <label
                            for="motivo"
                            class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                          >
                            Motivo:
                          </label>
                          <input
                            type="text"
                            id="motivo"
                            name="motivo"
                            className="block p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                           
                          />
                          
                        </div>
                        {/*Días */}
                        <div>
                          <label
                            for="cantidad_dias"
                            class="flex mb-2 w-32 text-sm font-medium text-gray-900 "
                          >
                            Numero de Dias:
                          </label>
                          <input
                            type="number"
                            id="cantidad_dias"
                            name="cantidad_dias"
                            className="block p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                           
                          />
                        </div>
                        {/*Fecha inicio */}
                        <div>
                          <label
                            for="fecha_inicio"
                            class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                          >
                            Fecha Inicio:
                          </label>
                          <input
                            name="fecha_inicio"
                            type="date"
                            id="fecha_inicio"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          />
                        
                        
                        </div>
                        {/*Fecha final */}
                        <div>
                          <label
                            for="fecha_final"
                            class="block mb-2 w-32 text-sm font-medium text-gray-900 "
                          >
                            Fecha Fin:
                          </label>
                          <input
                            name="fecha_final"
                            type="date"
                            id="fecha_final"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                           
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                            <button
                              type="submit"
                              class="text-white  align-middle bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:bg-teal-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
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
}