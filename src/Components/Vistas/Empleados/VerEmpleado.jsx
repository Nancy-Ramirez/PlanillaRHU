import { Link } from "react-router-dom";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";
import { VscRemove } from "react-icons/vsc";

export const VerEmpleados = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="xl:flex xl:justify-between lg:flex lg:justify-between text-center pt-24">
                <div className=" px-5 text-3xl text-gray-400 lg:flex lg:justify-start">
                  <Link to="/empleado">
                    <FiArrowLeft />
                  </Link>
                  <h1 className=" px-5 text-center text-3xl text-black">
                  Alejandro Steven Marroquin
                </h1>
                </div>
                <div className="flex justify-center pr-5 xl:pt-0 lg:pt-0 md:pt-5 sm:pt-5 ">
                    <div className="text-start">
                        <h3 className="text-sm xl:contents lg:contents md:hidden hidden">Departamento</h3>
                        <h2 className="font-semibold text-xl">
                            Ventas
                        </h2>      
                    </div>
                    <div className="xl:text-3xl lg:text-3xl text-2xl rotate-90 -mt-1">
                    <VscRemove/>
                    </div>
                    <div className="xl:pl-8 lg:pl-8 md:pl-3 pl-3 text-start">
                        <h3 className=" text-sm xl:contents lg:contents md:hidden hidden">Cargo</h3>
                        <h2 className="font-semibold text-xl">
                            Asesor
                        </h2>      
                    </div>
                </div>
                

              </div>
              <div className="xl:flex lg:flex xl:justify-between lg:justify-between ">
                <div className="px-10 pt-10 w-full xl:w-1/2 lg:w-1/2 pb-5  ">
                    <h2 className="text-gray-500 text-2xl pb-5 ">
                        Datos personales
                    </h2>
                  {/*Nombre completo*/}
                  <div className="flex justify-start">
                    <div className="w-1/3">
                      <h3 className="font-bold">Nombre completo: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>Alejandro Steven Marroquin</h3>
                    </div>
                  </div>

                  {/*DUI */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">DUI: </h3>
                    </div>
                    <div className="w-2/3">
                      <h3>05614585-2</h3>
                    </div>
                  </div>

                  {/*Teléfono */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Teléfono: </h3>
                    </div>
                    <div className="w-1/3">
                      <h3>6058-1254</h3>
                    </div>
                  </div>

                  {/*Correo electrónico */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Email: </h3>
                    </div>
                    <div className="w-2/3">
                      <h3>Alejandro@gmail.com</h3>
                    </div>
                  </div>

                  {/*Estado civil */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Estado civil: </h3>
                    </div>
                    <div className="w-1/3">
                      <h3>Casado</h3>
                    </div>
                  </div>

                  {/*Sexo */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Sexo: </h3>
                    </div>
                    <div className="w-1/3">
                      <h3>Masculino</h3>
                    </div>
                  </div>

                  {/*Dirección */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Dirección: </h3>
                    </div>
                    <div className="w-2/3">
                      <h3>Urb. Las Delicias 1, pasaje 25 poligono H #54, San Tecla</h3>
                    </div>
                  </div>

                </div>

                <div className="px-10 pt-10 w-full xl:w-1/2 lg:w-1/2 pb-10  ">
                    <h2 className="text-gray-500 text-2xl pb-5 ">
                        Datos Empleado
                    </h2>
                  {/*Salario*/}
                  <div className="flex justify-start">
                    <div className="w-1/3">
                      <h3 className="font-bold">Salario: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>$ 580.90</h3>
                    </div>
                  </div>

                  {/*Tipo de pago*/}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Tipo de pago: </h3>
                    </div>
                    <div className="w-2/3">
                      <h3>Mensual</h3>
                    </div>
                  </div>

                  {/*Tipo de contrato */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Tipo de contrato: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>Servicios profesionales</h3>
                    </div>
                  </div>

                  {/*Fecha de inicio */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Fecha de inicio: </h3>
                    </div>
                    <div className="w-1/3">
                      <h3>25 / febrero / 2022</h3>
                    </div>
                  </div>

                  {/*NIT */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">NIT: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>1106-101895-101-7</h3>
                    </div>
                  </div>

                  {/*ISSS */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">ISSS: </h3>
                    </div>
                    <div className="w-2/3">
                      <h3>015425784</h3>
                    </div>
                  </div>

                  {/*AFP */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">AFP: </h3>
                    </div>
                    <div className="w-1/3">
                      <h3>021548756387</h3>
                    </div>
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
