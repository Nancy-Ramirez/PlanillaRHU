import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Components/Vistas/Dashboard/Dashboard";
import { Login } from "../Components/Login/Login";
import { Empleado } from "../Components/Vistas/Empleados/Empleado";
import { Incapacidades } from "../Components/Vistas/Incapacidades/Incapacidades";
import { Ausencias } from "../Components/Vistas/Ausencias/Ausencias";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/inicio" element={<Dashboard/>} />

        {/*Empleado */}
        <Route path="/empleado" element={<Empleado/>} />

        {/*Incapacidades */}
        <Route path="/incapacidad" element={<Incapacidades/>} />

        {/*Ausencias*/}
        <Route path="/ausencia" element={<Ausencias/>} />

        </Routes>
      </BrowserRouter>
    );
  }