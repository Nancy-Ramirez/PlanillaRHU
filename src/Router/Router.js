import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Components/Vistas/Dashboard/Dashboard";
import { Login } from "../Components/Login/Login";
import { Empleado } from "../Components/Vistas/Empleados/Empleado";
import { Incapacidades } from "../Components/Vistas/Incapacidades/Incapacidades";
import { Ausencias } from "../Components/Vistas/Ausencias/Ausencias";
import { Usuarios } from "../Components/Vistas/Usuarios/Usuarios";
import { Indemnizacion } from "../Components/Vistas/Indemnizacion/Indemnizacion";
import { Prestaciones } from "../Components/Vistas/Prestaciones/Prestaciones";
import { Departamento } from "../Components/Vistas/Departamento/Departamento";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Dashboard />} />

        {/*Empleado */}
        <Route path="/empleado" element={<Empleado />} />

        {/*Incapacidades */}
        <Route path="/incapacidad" element={<Incapacidades />} />

        {/*Ausencias*/}
        <Route path="/ausencia" element={<Ausencias />} />

        {/*Usuarios */}
        <Route path="/usuarios" element={<Usuarios />} />

        {/*Indeminizacion*/}
        <Route path="/indemnizaciones" element={<Indemnizacion />} />

        {/*Prestaciones*/}
        <Route path="/prestaciones" element={<Prestaciones />} />

        {/*Departamentos*/}
        <Route path="/departamento" element={<Departamento />} />
      </Routes>
    </BrowserRouter>
  );
}
