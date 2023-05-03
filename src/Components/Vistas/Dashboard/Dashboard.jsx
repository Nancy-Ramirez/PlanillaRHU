import { Aside } from "../../Componentes/Aside"
import { Navbar } from "../../Componentes/NavBar"
import { FaAward } from "react-icons/fa";
import {
    AiTwotoneExperiment,
    AiOutlineTrophy,
    AiOutlineFieldTime,
    AiOutlineLineChart,
  } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Dashboard = () =>{

    return(
        <div className="flex">
            <Aside/>
            <div class="w-full">
                <Navbar/>
                <div className="ml-24 mb-8">
                <div className="mt-20 grid grid-cols-1 gap-4  sm:grid-cols-2  lg:grid-cols-3">
              <Link
                to="/empleado"
                class="block max-w-sm p-6 bg-dark-purple border border-col1 rounded-lg shadow hover:bg-col2 "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <AiOutlineTrophy
                    style={{ height: 30, width: 30 }}
                    className="text-dark-purpl dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 dark:text-gray-900">
                  Empleados
                </h5>
                
              </Link>
              <Link
                to="/empleado"
                class="block max-w-sm p-6 bg-dark-purple border border-col1 rounded-lg shadow hover:bg-col2 "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <AiOutlineTrophy
                    style={{ height: 30, width: 30 }}
                    className="text-dark-purpl dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 dark:text-gray-900">
                  Empleados
                </h5>
                
              </Link>
              
            </div>
                </div>
            </div>
        </div>
    )
}