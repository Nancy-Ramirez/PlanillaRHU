import { Aside } from "../../Componentes/Aside"
import { Navbar } from "../../Componentes/NavBar"
import { FaAward } from "react-icons/fa";
import { FaSpeakerDeck, FaUserAlt, FaCaretDown, FaHome, FaPaste, FaPrescriptionBottleAlt, FaPiggyBank, FaHospitalUser, FaUserAltSlash, FaUserTie } from "react-icons/fa";
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
                class="block max-w-sm p-6 bg-red-500  shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaUserTie
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Empleados
                </h5>
                
              </Link>
              <Link
                to="/departamento"
                class="block max-w-sm p-6 bg-orange-500 shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaPaste
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Departamentos
                </h5>
                
              </Link>
              <Link
                to="/prestaciones"
                class="block max-w-sm p-6 bg-blue-600 shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaPrescriptionBottleAlt
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Prestaciones
                </h5>
                
              </Link>
              <Link
                to="/incapacidad"
                class="block max-w-sm p-6 bg-green-800  shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaPiggyBank
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Incapacidades
                </h5>
                
              </Link>
              <Link
                to="/ausencia"
                class="block max-w-sm p-6 bg-cyan-700  shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaPiggyBank
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Ausencias
                </h5>
                
              </Link>
              <Link
                to="/indemnizaciones"
                class="block max-w-sm p-6 bg-indigo-700  shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaHospitalUser
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Indemnizaciones
                </h5>
                
              </Link>
              <Link
                to="/usuarios"
                class="block max-w-sm p-6 bg-pink-500 shadow-lg rounded-md items-center justify-between  border-b-4 border-dark-purple  text-white font-medium group "
              >
                <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <FaUserAlt
                    style={{ height: 30, width: 30 }}
                    className="text-blue-800  transform transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h5 class="mb-2  text-center text-2xl font-bold tracking-tight text-gray-50 ">
                  Usuarios
                </h5>
                
              </Link>
            </div>
          
                </div>
            </div>
        </div>
    )
}