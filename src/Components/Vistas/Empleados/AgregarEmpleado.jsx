import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";

export const AgregarEmpleados = () => {
  return (
    <div className="flex">
      <Aside />
      <div class="w-full">
        <Navbar />
        <div className="ml-24 mb-8">
          <main className="flex">
            <section className=" w-full relative overflow-x-auto shadow-md sm:rounded-lg pb-8">
              <div className="flex justify-center pt-24">
                <h1 className=" text-center text-2xl text-black">AGREGAR EMPLEADOS</h1>
              </div>
              <div className="mx-5">

              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
