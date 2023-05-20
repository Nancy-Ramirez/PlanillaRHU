import { useEffect, useState } from "react";
import { Aside } from "../../Componentes/Aside";
import { Navbar } from "../../Componentes/NavBar";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";
import $ from 'jquery';
import 'jquery-mask-plugin';
import axios from "axios";
import Swal from "sweetalert2";

export const EditarEmpleado = () => {
    {/*Mascaras */}
    useEffect(()=> {
        $("#salario").change(function() {
            var valor = $(this).val();
            if (valor.indexOf("*") !== -1){
                var punto = ".";
                valor = valor.replace("*", punto);
                $(this).val(valor);
            }
        });
        $(document).ready(function(){
            $("#telefono").mask("0000-0000");
            $("#nit").mask("0000-000000-000-0");
            $("#dui").mask("00000000-0");
            $("#isss").mask("000000000");
            $("#afp").mask("00000000000");
            $("#salario").mask("0000000.00", {reverse: true});
        });
    });
    
    //para editar
    const navigate = useNavigate();
    const {id} = useParams();
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [sexo, setSexo] = useState("");
    const [documentoIdentidad, setDocumentoIdentidad] = useState("");
    const [correo, setCorreo] = useState("");
    const [estadoCivil, setEstadoCivil] = useState("");
    const [numIsss, setNumIsss] = useState("");
    const [numAfp, setNumAfp] = useState("");
    const [salario, setSalario] = useState("");
    const [fechaCont, setFechaCont] = useState("");
    const [tipoCont, setTipoCont] = useState("");
    const [cargo, setCargo] = useState("");
    const [departamento, setDepartamento] = useState("");
//obtener datos de empleado al cargar componente
useEffect( () => {
  async function getInfoEmpleado() {
    const url = `http://127.0.0.1:8000/empleados/empleados/${id}`;
    try{
      const resp = await axios.get(url);
      setNombres(resp.data.nombres);
      setApellidos(resp.data.apellidos);
      setFechaNacimiento(resp.data.fecha_nacimiento);
      setDireccion(resp.data.direccion);
      setTelefono(resp.data.telefono);
      setSexo(resp.data.sexo);
      setDocumentoIdentidad(resp.data.documento_identidad);
      setCorreo(resp.data.correo);
      setEstadoCivil(resp.data.estado_civil);
      setNumIsss(resp.data.no_isss);
      setNumAfp(resp.data.no_afp);
      setSalario(resp.data.salario);
      setFechaCont(resp.data.fecha_contratacion);
      setTipoCont(resp.data.tipo_contrato);
      setCargo(resp.data.cargo);
      setDepartamento(resp.data.id_departamento);

    }catch (err){
      console.error(err);
    }
  }
  getInfoEmpleado();
},[]);

const handleEditar = async (e) => {
  const url = `http://127.0.0.1:8000/empleados/empleados/${id}`;
  try {
    const resp = await axios.put(url, {
      nombres: nombres,
      apellidos: apellidos,
      fecha_nacimiento: fechaNacimiento,
      direccion: direccion,
      telefono: telefono,
      sexo: sexo,
      documento_identidad: documentoIdentidad,
      correo: correo,
      estado_civil: estadoCivil,
      no_isss: numIsss,
      no_afp: numAfp,
      salario: salario,
      fecha_contratacion: fechaCont,
      tipo_contrato: tipoCont,
      cargo: cargo,
      id_departamento: departamento,
    });
   

    Swal.fire({
      icon: "success",
      title: "Empleado Modificado",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate("/empleado");
    }, 1500);
  } catch (err) {
    console.error(err);
  }
};
  return (
    <div className="flex">
      <Aside />
      <div className="w-full">
        <Navbar />
        <div className="ml-24 mb-8 mt-8 pt-12">
          <div className="flex justify-between">
            <Link to="/empleado" className="pl-5 text-3xl text-gray-500">
              <FiArrowLeft />
            </Link>
            <h1 className=" text-center text-2xl text-black">
              EDITAR EMPLEADO
            </h1>
            <h1></h1>
          </div>
          <form action="" method="get" onSubmit={handleEditar}>
            <div className="mx-5">
              {/*Parte 1 */}
              <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                {/*Linea 1 */}
                <div className="flex flex-wrap px-10">
                  {/*Nombres */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="nombres"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Nombres
                    </label>
                    <input
                      type="text"
                      id="nombres"
                      name="nombres"
                      value={nombres}
                      onChange={(e) => setNombres(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      pattern="[A-Za-z]*"
                      placeholder="Jennifer Eunice"
                    />
                  </div>
                  {/*Apellidos */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="apellidos"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      value={apellidos}
                      onChange={(e) => setApellidos(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      pattern="[A-Za-z]*"
                      placeholder="Monge Miranda"
                    />
                  </div>
                </div>

                {/*Linea 2 */}
                <div className="flex flex-wrap px-10">
                  {/*Fecha de Nacimiento */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="fechaNac"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Fecha de nacimiento
                    </label>
                    <input
                      type="date"
                      id="fechaNac"
                      name="fechaNac"
                      value={fechaNacimiento}
                      onChange={(e) => setFechaNacimiento(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  {/*Telefono */}
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="telefono"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Teléfono
                    </label>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      inputmode="Numeric"
                      placeholder="70054065"
                    />
                  </div>
                </div>

                {/*Linea 3 */}
                <div className="flex flex-wrap px-10">
                  {/*NIT */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="nit" class="leading-7 text-sm text-gray-600">
                      NIT
                    </label>
                    <input
                      type="text"
                      id="nit"
                      name="nit"
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="0614-190598-154-2"
                    />
                  </div>
                  {/*DUI */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="dui" class="leading-7 text-sm text-gray-600">
                      DUI
                    </label>
                    <input
                      type="text"
                      id="dui"
                      name="dui"
                      value={documentoIdentidad}
                      onChange={(e) => setDocumentoIdentidad(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="074609810"
                    />
                  </div>
                </div>

                {/*Linea 4 */}
                <div className="flex flex-wrap px-10">
                  {/*ISSS */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="isss" class="leading-7 text-sm text-gray-600">
                      ISSS
                    </label>
                    <input
                      type="text"
                      id="isss"
                      name="isss"
                      value={numIsss}
                      onChange={(e) => setNumIsss(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Si no posee ISSS dejar vacío"
                    />
                  </div>
                  {/*AFP */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="afp" class="leading-7 text-sm text-gray-600">
                      AFP
                    </label>
                    <input
                      type="text"
                      id="afp"
                      name="afp"
                      value={numAfp}
                      onChange={(e) => setNumAfp(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Si no posee AFP dejar vacío"
                    />
                  </div>
                </div>

                {/*Linea 5 */}
                <div className="flex flex-wrap px-10">
                  {/*Dirección */}
                  <div className="w-full px-2">
                    <label
                      for="direccion"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Dirección
                    </label>
                    <input
                      type="address"
                      id="direccion"
                      name="direccion"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="calle la mascota"
                    />
                  </div>
                </div>

                {/*Linea 6 */}
                <div className="flex flex-wrap px-10">
                  {/*Correo electrónico*/}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Jennifer@gmail.com"
                    />
                  </div>
                  {/*Estado civil */}
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="telefono"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Estado civil
                    </label>
                    <select
                      id="estadoCivil"
                      name="estadoCivil"
                      value={estadoCivil}
                      onChange={(e) => setEstadoCivil(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                    >
                      <option id="">Soltera</option>
                      <option id="casado">Casado</option>
                      <option id="soltero">Soltero</option>
                      <option id="viudo">Viudo</option>
                      <option id="divorciado">Divorciado</option>
                    </select>
                  </div>
                </div>

                {/*Linea 7 */}
                <div className="flex flex-wrap px-10">
                  {/*Sexo */}
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="sexo" class="leading-7 text-sm text-gray-600">
                      Sexo
                    </label>
                    <select
                      id="sexo"
                      name="sexo"
                      value={sexo}
                      onChange={(e) => setSexo(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                    >
                      <option id="">Femenino</option>
                      <option id="femenino">Femenino</option>
                      <option id="masculino">Masculino</option>
                    </select>
                  </div>
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2"></div>
                </div>
              </div>

              {/*Parte 2 */}
              <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10">
                {/*Linea 8 */}
                <div className="flex flex-wrap px-10">
                  {/*Salario */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="salario"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Salario
                    </label>
                    <div className="relative md:content-center">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        $
                      </div>
                      <input
                        type="text"
                        id="salario"
                        value={salario}
                        onChange={(e) => setSalario(e.target.value)}
                        className="block p-2 pl-10 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="500"
                      />
                    </div>
                  </div>
                  {/*Tipo de pago */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="tipoPago"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Tipo de pago
                    </label>
                    <select
                      id="tipoPago"
                      name="tipoPago"
                      
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                    >
                      <option id="">Mensual</option>
                      <option id="mensual">Mensual</option>
                      <option id="quincenal">Quincenal</option>
                    </select>
                  </div>
                </div>

                {/*Linea 9 */}
                <div className="flex flex-wrap px-10">
                  {/*Departamento*/}
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="departamento"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Departamento
                    </label>
                    <select
                      id="departamento"
                      name="departamento"
                      value={departamento}
                      onChange={(e) => setDepartamento(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                    >
                      <option id="">ventas</option>
                      <option id="1">Ventas</option>
                      <option id="2">Compras</option>
                    </select>
                  </div>
                  {/*Cargo */}
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label for="cargo" class="leading-7 text-sm text-gray-600">
                      Cargo
                    </label>
                    <input
                      type="text"
                      id="cargo"
                      name="cargo"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Auxiliar de ventas"
                    />
                  </div>
                </div>

                {/*Linea 10 */}
                <div className="flex flex-wrap px-10">
                  {/*Tipo contrato*/}
                  <div class="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="tipoContrato"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Tipo de contrato
                    </label>
                    <select
                      id="tipoContrato"
                      name="tipoContrato"
                      value={tipoCont}
                      onChange={(e) => setTipoCont(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-11"
                    >
                      <option id="">**Seleccione**</option>
                      <option id="formal">Contrato formal</option>
                      <option id="profesionales">
                        Servicios profesionales
                      </option>
                    </select>
                  </div>
                  {/*Fecha de inicio */}
                  <div className="xl:w-1/2 md:w-1/2 w-full px-2">
                    <label
                      for="fechaInicio"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Fecha de inicio
                    </label>
                    <input
                      type="date"
                      id="fechaInicio"
                      name="fechaInicio"
                      value={fechaCont}
                      onChange={(e) => setFechaCont(e.target.value)}
                      class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-8">
                  <button class="text-white bg-col4 border-0 py-2 px-8 focus:outline-none hover:bg-col4 rounded text-lg">
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
