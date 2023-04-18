import { useState } from "react";
import "./style.css"

export function Home(){


    const [primeiroHook,setPrimeiroHook] = useState("Olá meu primeiro hook!")
    return(
        <div className="home">
            {primeiroHook}
            <button onClick={()=>setPrimeiroHook('Você alterou seu primeiro hook')}> Alterar</button>
            <button onClick={()=>setPrimeiroHook('Voltar para o inicio')}> Valor inicial </button>
            <h2>Você está na Home</h2>
        </div>
    )
}

export default Home ;