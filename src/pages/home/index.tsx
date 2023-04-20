import { useState } from "react";
import "./style.css"

export function Home(){


    const [primeiroHook,setPrimeiroHook] = useState("Olá meu primeiro hook!")
    return(
        <div className="home">
           
            <h2>Você está na Home</h2>
        </div>
    )
}

export default Home ;