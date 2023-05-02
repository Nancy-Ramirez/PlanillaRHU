import { Aside } from "../../Componentes/Aside"
import { Navbar } from "../../Componentes/NavBar"


export const Dashboard = () =>{

    return(
        <div className="flex">
            <Aside/>
            <div class="w-full">
                <Navbar/>
                <div className="ml-24 mb-8">
                    AQUI VA EL CONTENIDO
                </div>
            </div>
        </div>
    )
}