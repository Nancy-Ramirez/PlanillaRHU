import { Aside } from "../../Componentes/Aside"
import { Navbar } from "../../Componentes/NavBar"


export const Dashboard = () =>{

    return(
        <div className="flex">
            <Aside/>
            <div class="w-full">
                <Navbar/>
                <div>
                    
                </div>
            </div>
        </div>
    )
}