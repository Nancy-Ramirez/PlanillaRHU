import { Link } from "react-router-dom";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";

export const VerEmpleados = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full  overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-start pt-24">
                <div className=" px-5 text-3xl text-gray-400">
                  <Link to="/empleado">
                    <FiArrowLeft />
                  </Link>
                </div>
                <h1 className=" px-5 text-center text-3xl text-black">
                  Alejandro Steven Marroquin
                </h1>
              </div>
              <div className="xl:flex lg:flex xl:justify-between lg:justify-between ">
                <div className="px-10 pt-10 w-full xl:w-1/2 lg:w-1/2 pb-10  ">
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
                    <div className="w-3/3">
                      <h3>05614585-2</h3>
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

                  {/*Teléfono */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Teléfono: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>6058-1254</h3>
                    </div>
                  </div>

                  {/*Correo electrónico */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Email: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>Alejandro@gmail.com</h3>
                    </div>
                  </div>

                  {/*Estado civil */}
                  <div className="flex justify-start pt-5">
                    <div className="w-1/3">
                      <h3 className="font-bold">Estado civil: </h3>
                    </div>
                    <div className="w-3/3">
                      <h3>Casado</h3>
                    </div>
                  </div>






                </div>

                <div className="w-full xl:w-1/2 lg:w-1/2">UHNO</div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
