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
                    <h2 className="font-semibold text-xl">Ventas</h2>
                  </div>
                </div>
              </div>
              <div className="xl:mx-56 lg:mx-56 mx-0 place-content-center">
                <div className="px-10 w-full pb-5">
                  {/*Tipo de pago */}
                  <div className="xl:mx-48">
                    <div className="flex justify-start pt-5">
                      <div className="w-1/2">
                        <h3 className="font-bold">Tipo de pago: </h3>
                      </div>
                      <div className="w-1/2">
                        <h3>Mensual</h3>
                      </div>
                    </div>

                    {/*Salario*/}
                    <div className="flex justify-start pt-5">
                      <div className="w-1/2">
                        <h3 className="font-bold">Salario </h3>
                      </div>
                      <div className="w-1/2">
                        <h3>$ 525.26</h3>
                      </div>
                    </div>
                  </div>
                  {/*CALCULO AFP */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8 ">
                    <h2 className="text-gray-500 text-xl pb-3 xl:px-12 lg:px-12 md:px-12 sm:px-0 xl:text-start lg:text-start md:text-start text-center">AFP</h2>
                    <div className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5">
                      {/*AFP Patronal */}

                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full pt-5">
                          <h3 className="font-bold">Patronal: </h3>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                          <h3>$ 25.50</h3>
                        </div>


                      {/*AFP Empleado */}
                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                          <h3 className="font-bold">Empleado: </h3>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                          <h3>$ 12.50</h3>
                      </div>
                    </div>
                  </div>

                  {/*CALCULO ISSS */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8">
                    <h2 className="text-gray-500 text-xl pb-3 px-12 ">ISSS</h2>
                    <div className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5">
                      {/*ISSS Patronal */}

                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full pt-5">
                          <h3 className="font-bold">Patronal: </h3>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                          <h3>$ 25.50</h3>
                        </div>
                      {/*ISSS Empleado */}
                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                          <h3 className="font-bold">Empleado: </h3>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full">
                          <h3>$ 12.50</h3>
                      </div>
                    </div>
                  </div>

                  {/*DESCUENTOS */}
                  <div className="pt-5 overflow-x-auto shadow-sm p-8">
                    <h2 className="text-gray-500 text-xl pb-3 px-12 ">ISSS</h2>
                    <div className="xl:flex xl:justify-normal lg:flex lg:justify-normal md:flex md:justify-normal 
                    xl:text-base lg:text-base md:text-base text-center space-y-5">
                      <div className="xl:mx-48">
                    <div className="flex justify-start pt-5">
                      <div className="w-1/2">
                        <h3 className="font-bold">Tipo de pago: </h3>
                      </div>
                      <div className="w-1/2">
                        <h3>Mensual</h3>
                      </div>
                    </div>

                    {/*Salario*/}
                    <div className="flex justify-start pt-5">
                      <div className="w-1/2">
                        <h3 className="font-bold">Salario </h3>
                      </div>
                      <div className="w-1/2">
                        <h3>$ 525.26</h3>
                      </div>
                    </div>
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
