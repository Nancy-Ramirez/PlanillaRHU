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
import { AgregarPrestacion } from "../Components/Vistas/Prestaciones/AgregarPrestaciones";
import { AgregarEmpleados } from "../Components/Vistas/Empleados/AgregarEmpleado";
import {AgregarIndemnizacion} from "../Components/Vistas/Indemnizacion/AgregarIndemnizacion";
import { AgregarDepartamento } from "../Components/Vistas/Departamento/AgregarDepartamento";
import { AgregarUsuario } from "../Components/Vistas/Usuarios/AgregarUsuarios";
import { EditarDepartamento } from "../Components/Vistas/Departamento/EditarDepartamento";
import { VerEmpleados } from "../Components/Vistas/Empleados/VerEmpleado";
import { VerPrestaciones } from "../Components/Vistas/Prestaciones/VerPrestaciones";
import { AgregarIncapacidades } from "../Components/Vistas/Incapacidades/AgregarIncapacidad";
import { AgregarAusencia } from "../Components/Vistas/Ausencias/AgregarAusencia";
import { EditarEmpleado } from "../Components/Vistas/Empleados/EditarEmpleado";
import {Prueba} from "../Components/Vistas/Prestaciones/Pruebas";
import PDFViewerComponent from "../Components/Componentes/PDFViewerComponent";
import { EditarAusencia } from "../Components/Vistas/Ausencias/EditarAusencia";
import { EditarIncapacidad } from "../Components/Vistas/Incapacidades/EditarIncapaciad";
import { EditarUsuarios } from "../Components/Vistas/Usuarios/EditarUsuarios";
import { VerAusencia } from "../Components/Vistas/Ausencias/VerAusencia";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<Dashboard />} />
        
        {/*Empleado */}
        <Route path="/empleado" element={<Empleado />} />
        <Route path="/agregar-empleado" element={<AgregarEmpleados/>} />
        <Route path="/ver-empleado/:id" element={<VerEmpleados/>} />
        <Route path="/editar-empleado/:id" element={<EditarEmpleado/>} />

        

        {/*Incapacidades */}
        <Route path="/incapacidad" element={<Incapacidades />} />
        <Route path="/agregar-incapacidad" element={<AgregarIncapacidades/>} />
        <Route path="/editar-incapacidad/:id" element={<EditarIncapacidad/>} />

        {/*Ausencias*/}
        <Route path="/ausencia" element={<Ausencias />} />
        <Route path="/agregar-ausencia" element={<AgregarAusencia/>} />
        <Route path="/editar-ausencia/:id" element={<EditarAusencia/>} />
        <Route path="/ver-ausencia/:id" element={<VerAusencia/>} />

        {/*Usuarios */}
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/agregar-usuarios" element={<AgregarUsuario/>} />
        <Route path="/editar-usuarios/:id" element={<EditarUsuarios/>} />

        {/*Indeminizacion*/}
        <Route path="/indemnizaciones" element={<Indemnizacion />} />
        <Route path="/agregar-indemnizacion" element={<AgregarIndemnizacion/>}/>
        <Route path="/ver-indemnizacion/:id" element={<AgregarIndemnizacion/>}/>

        {/*Prestaciones*/}
        <Route path="/prestaciones" element={<Prestaciones />} />
        <Route path="/agregar-prestaciones" element={<AgregarPrestacion />} />
        <Route path="/PDF-Prestaciones" element={<PDFViewerComponent />} />

        {/*Departamentos*/}
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/agregar-departamento" element={<AgregarDepartamento />} />
        <Route path="/editar-departamento/:id" element={<EditarDepartamento/>} />
      </Routes>
    </BrowserRouter>
  );
}
