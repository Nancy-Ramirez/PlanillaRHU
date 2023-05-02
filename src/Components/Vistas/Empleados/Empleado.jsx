import ver from "../../../Images/iconos/ver.png";
import eliminar from "../../../Images/iconos/eliminar.png";
import { Navbar } from "../../Componentes/NavBar";
import { Aside } from "../../Componentes/Aside";
import { Link } from "react-router-dom";

export const Empleado = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div>
          <main className="flex">
            <section className=" w-full relative overflow-x-auto shadow-md sm:rounded-lg p-25">
              <h1 className="pt-24 text-center text-3xl text-black">
                ESTUDIANTES
              </h1>

              <div className="m-5">
                <div className="flex items-center md:justify-end pb-4 m-2">
                  <label htmlFor="table-search" className="sr-only">
                    Buscar
                  </label>
                  <div className="relative md:content-center">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-black dark:text-black"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search-users"
                      className="block p-2 pl-10 text-sm text-black border border-gray-700 rounded-lg w-80 bg-green-100 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Buscar estudiante"
                    />
                  </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-black dark:text-gray-400 ">
                    <thead className="text-xs text-black uppercase bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                          DUI
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Departamento
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Cargo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-green-200 border-b dark:bg-gray-800 dark:border-gray-700  hover:bg-coll6 hover:text-white dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="pl-3">
                            <div className="text-base font-semibold">
                              Alejandro Steven Marroquin
                            </div>
                            <div className="font-normal text-gray-500 hover:text-white">
                              Alejandro@gmail.com
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">05614585-2</td>
                        <td className="px-6 py-4">Ventas</td>
                        <td className="px-6 py-4">Asesor</td>
                        <td className="px-6 py-8 flex justify-between content-center">
                          <Link
                            to="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-verEstudiante ">
                              <img src={ver} alt="" width="30px" />
                            </button>
                          </Link>
                          <button className="btn btn-eliminarCuestionario ">
                            <img src={eliminar} alt="" width="25px" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
