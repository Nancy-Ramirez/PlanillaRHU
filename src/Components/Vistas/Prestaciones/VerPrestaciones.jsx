import { Link } from "react-router-dom";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";
import { VscRemove } from "react-icons/vsc";

export const VerPrestaciones = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="text-center pt-24">
                <div className=" px-5 text-3xl text-gray-400 lg:flex lg:justify-between">
                  <Link to="/prestaciones">
                    <FiArrowLeft />
                  </Link>
                  <h1 className=" px-5 text-center text-3xl text-black">
                    Alejandro Steven Marroquin
                  </h1>
                  <div></div>
                </div>
                <div className="flex justify-center pr-5">
                  <div className="text-start pt-5">
                    <h2 className="font-semibold text-xl uppercase">Ventas</h2>
                  </div>
                </div>
              </div>
              <div className="xl:mx-56 lg:mx-56 mx-0 place-content-center">
                <div className="px-10 w-full pb-5">
                  {/*SALARIO */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8 ">
                    <div
                      className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5"
                    >
                      {/*Salario */}
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full pt-5">
                        <h3 className="font-bold text-gray-500">Salario: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>$ 524.50</h3>
                      </div>
                      {/*Tipo de pago*/}
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3 className="font-bold text-gray-500">Tipo de pago: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>Mensual</h3>
                      </div>
                    </div>
                  </div>
                  {/*CALCULO AFP */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8 ">
                    <h2 className="text-gray-800 font-bold text-xl pb-3 xl:px-12 lg:px-12 md:px-12 sm:px-0 xl:text-start lg:text-start md:text-start text-center">
                      AFP
                    </h2>
                    <div
                      className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5"
                    >
                      {/*AFP Patronal */}

                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full pt-5">
                        <h3 className="font-bold text-gray-500">Patronal: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>$ 25.50</h3>
                      </div>

                      {/*AFP Empleado */}
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3 className="font-bold text-gray-500">Empleado: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>$ 12.50</h3>
                      </div>
                    </div>
                  </div>

                  {/*CALCULO ISSS */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8">
                    <h2 className="text-gray-800 font-bold  text-xl pb-3 xl:px-12 lg:px-12 md:px-12 sm:px-0 xl:text-start lg:text-start md:text-start text-center ">
                      ISSS
                    </h2>
                    <div
                      className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5"
                    >
                      {/*ISSS Patronal */}

                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full pt-5">
                        <h3 className="font-bold text-gray-500">Patronal: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>$ 25.50</h3>
                      </div>
                      {/*ISSS Empleado */}
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3 className="font-bold text-gray-500">Empleado: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>$ 12.50</h3>
                      </div>
                    </div>
                  </div>
                  {/*DESCUENTOS ANTES DE RENTA */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8">
                    

                    <div
                      className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center"
                    >
                      {/*Descuento total */}
                      <div>
                      <h2 className="text-gray-800 font-bold text-xl pb-3 xl:px-12 lg:px-12 md:px-12 sm:px-0 xl:text-start lg:text-start md:text-start text-center ">
                          Pago antes de la renta
                        </h2>
                        <div className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full pt-5">
                          <h3 className="font-bold text-gray-500">Descuento total: </h3>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
                          <h3>$ 58.25</h3>
                        </div>
                      </div>
                      </div>

                      {/*Impuesto sobre la renta */}
                      <div>
                      <h2 className="text-gray-800 font-bold text-xl pb-3 xl:px-12 lg:px-12 md:px-12 sm:px-0 xl:text-start lg:text-start md:text-start text-center ">
                          Impuesto sobre la renta
                        </h2>
                        <div className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full pt-5">
                          <h3 className="font-bold text-gray-500">Descuento total: </h3>
                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
                          <h3>$ 58.25</h3>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>


                  {/*SALARIO LIQUIDO */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8">
                    <h2 className="text-gray-800 font-bold text-xl pb-3 xl:px-12 lg:px-12 md:px-12 sm:px-0 xl:text-start lg:text-start md:text-start text-center ">
                      Salario líquido
                    </h2>
                    <div
                      className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5"
                    >
                      {/*Renta */}

                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full pt-5">
                        <h3 className="font-bold text-gray-500">Salario líquido: </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3>$ 350.25</h3>
                      </div>
                      {/*ISSS Empleado */}
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3 className="font-bold"> </h3>
                      </div>
                      <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                        <h3></h3>
                      </div>
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
