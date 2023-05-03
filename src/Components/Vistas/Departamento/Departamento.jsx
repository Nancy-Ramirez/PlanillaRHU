import { FaPlusCircle, FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Navbar } from "../../Componentes/NavBar";
import { Aside } from "../../Componentes/Aside";
import { Link } from "react-router-dom";

export const Departamento = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8 mt-8 pt-12 ">
          <main className="flex">
            <section className=" w-full relative overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-between pt-5">
                <div></div>
                <h1 className=" text-center text-3xl text-black pl-20">DEPARTAMENTOS</h1>
                <div className="">
                  <div className="flex items-center md:justify-end px-5 m-2 mr-24">
                    <a
                      href="/agregar-departamento"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                     <button className="btn btn-agregar rounded-full">
                        <span className="text-col4 text-4xl" > 
                        <FaPlusCircle /></span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-5 ">
                <div className="flex items-center md:justify-end pb-3 m-2 mr-24">
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
                      className="block p-2 pl-10 text-sm text-black border border-gray-700 rounded-lg w-80 bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ingrese el nombre del departamento"
                    />
                  </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-24">
                  <table className="w-full text-sm text-left text-black  dark:text-gray-400 ">
                    <thead className="text-xs text-black uppercase text-center bg-col2">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/*Dato 1 */}
                      <tr className="bg-gray-100 border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                        
                        <td className="px-6 py-4 font-semibold">Aseo</td>
                        
                        <td className="px-6 py-8 text-center flex justify-evenly content-center">
                          <Link
                            to="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-ver">
                              <span className="text-azul-ver text-2xl">
                                <FaRegEye/>
                              </span>
                            </button>
                          </Link>
                          <a
                            href="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-editar ">
                              <span  className="text-amarillo-editar text-2xl"> 
                              <FaRegEdit/>
                              </span>
                              
                            </button>
                          </a>
                          <button className="btn btn-eliminar ">
                            <span className="text-rojo-eliminar text-xl">
                              <FaTrashAlt/>
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/*Dato 1 */}
                      <tr className="bg-gray-100 border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                        
                        <td className="px-6 py-4 font-semibold">Aseo</td>
                        
                        <td className="px-6 py-8 text-center flex justify-evenly content-center">
                          <Link
                            to="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-ver">
                              <span className="text-azul-ver text-2xl">
                                <FaRegEye/>
                              </span>
                            </button>
                          </Link>
                          <a
                            href="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-editar ">
                              <span  className="text-amarillo-editar text-2xl"> 
                              <FaRegEdit/>
                              </span>
                              
                            </button>
                          </a>
                          <button className="btn btn-eliminar ">
                            <span className="text-rojo-eliminar text-xl">
                              <FaTrashAlt/>
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/*Dato 1 */}
                      <tr className="bg-gray-100 border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                        
                        <td className="px-6 py-4 font-semibold">Aseo</td>
                        
                        <td className="px-6 py-8 text-center flex justify-evenly content-center">
                          <Link
                            to="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-ver">
                              <span className="text-azul-ver text-2xl">
                                <FaRegEye/>
                              </span>
                            </button>
                          </Link>
                          <a
                            href="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-editar ">
                              <span  className="text-amarillo-editar text-2xl"> 
                              <FaRegEdit/>
                              </span>
                              
                            </button>
                          </a>
                          <button className="btn btn-eliminar ">
                            <span className="text-rojo-eliminar text-xl">
                              <FaTrashAlt/>
                            </span>
                          </button>
                        </td>
                      </tr>
                      {/*Dato 1 */}
                      <tr className="bg-gray-100 border-black  text-black text-center hover:bg-gray-200 hover:text-dark">
                        
                        <td className="px-6 py-4 font-semibold">Aseo</td>
                        
                        <td className="px-6 py-8 text-center flex justify-evenly content-center">
                          <Link
                            to="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-ver">
                              <span className="text-azul-ver text-2xl">
                                <FaRegEye/>
                              </span>
                            </button>
                          </Link>
                          <a
                            href="/inicio"
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <button className="btn btn-editar ">
                              <span  className="text-amarillo-editar text-2xl"> 
                              <FaRegEdit/>
                              </span>
                              
                            </button>
                          </a>
                          <button className="btn btn-eliminar ">
                            <span className="text-rojo-eliminar text-xl">
                              <FaTrashAlt/>
                            </span>
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
