import { Aside } from "../Componentes/Aside"
import { Navbar } from "../Componentes/NavBar"


export const Dashboard = () =>{

    return(
        <div className="flex">
            <Aside/>
            <div class="ml-16 w-full">
                
                <Navbar/>
            </div>
        </div>
    )
}