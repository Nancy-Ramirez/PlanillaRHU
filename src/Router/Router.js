import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../Components/Vistas/Dashboard/Dashboard";
import { Login } from "../Components/Login/Login";
import { Empleado } from "../Components/Vistas/Empleados/Empleado";

export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/inicio" element={<Dashboard/>} />

        {/*Empleado */}
        <Route path="/empleado" element={<Empleado/>} />

        </Routes>
      </BrowserRouter>
    );
  }