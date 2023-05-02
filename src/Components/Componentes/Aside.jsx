import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaSpeakerDeck, FaUserAlt, FaCaretDown, FaHome, FaPaste, FaPrescriptionBottleAlt, FaPiggyBank, FaHospitalUser, FaUserAltSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Aside = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(true);
  const [submenuOpenP, setSubmenuOpenP] = useState(true);

  return (
    <nav className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-60" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <FaSpeakerDeck
            className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-lg duration-300 ${
              !open && "scale-0"
            }`}
          >
            SisCont
          </h1>
        </div>
        <ul className="pt-2">
          {/*Inicio */}
          <Link to="/"><li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaHome />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Inicio
            </span>
          </li></Link>

          {/*Empleado */}
          <Link to="/"><li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaUserAlt />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Empleados
            </span>
          </li></Link>

          {/*Departamentos */}
          <Link to="/"><li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaPaste />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Departamentos
            </span>
          </li></Link>

          {/*Prestaciones */}
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaPrescriptionBottleAlt />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Prestaciones
            </span>
            <span>
              <FaCaretDown
                className={`duration-500 ${!open && "hidden"} ${!submenuOpenP && "rotate-180"}`}
                onClick={() => setSubmenuOpenP(!submenuOpenP)}
              />
            </span>
          </li>
          <ul className={`duration-500 ${submenuOpenP && "hidden"}`}>
            {/*ISSS-Patrono */}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                ISSS - Patrono
              </li>
            </Link>

            {/*ISSS-Empleado*/}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                ISSS - Empleado
              </li>
            </Link>

            {/*AFP-Patrono*/}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                AFP - Patrono
              </li>
            </Link>

            {/*AFP-Empleado*/}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                AFP - Empleado
              </li>
            </Link>

            {/*Renta*/}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                Renta
              </li>
            </Link>
          </ul>
          {/*Faltas */}
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaPiggyBank  />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Faltas
            </span>
            <span>
              <FaCaretDown
                 className={`duration-500 ${!open && "hidden"} ${!submenuOpen && "rotate-180"}`}
                onClick={() => setSubmenuOpen(!submenuOpen)}
              />
            </span>
          </li>
          <ul className={`${submenuOpen && "hidden"}`}>
            {/*Incapacidades */}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                Incapacidades
              </li>
            </Link>

            {/*Ausencias*/}
            <Link to="/">
              <li
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md mt-2 mx-5
                }`}
              >
                Ausencias
              </li>
            </Link>

          </ul>

          {/*Indemnizaciones */}
          <Link to="/"><li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaHospitalUser />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Indemnizaciones
            </span>
          </li></Link>

          {/*Salir*/}
          <Link to="/"><li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 py-1 hover:bg-light-white rounded-md  mt-3
                }`}
          >
            <span className="text-xl block float-left">
              <FaUserAltSlash />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Salir
            </span>
          </li></Link>
        </ul>
      </div>
    </nav>
  );
};
