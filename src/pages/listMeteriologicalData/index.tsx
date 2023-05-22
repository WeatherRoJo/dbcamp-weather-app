import "./style.css";
import getAllMetereologicalData from "../../data/services/meteriologicalData/getAllMetereologicalData";
import { useEffect, useState } from "react";
import { MeteriologicalData } from "../../data/types/MeteriologicalData";

function ListMeteriologicalData(){
    const [errorMessage, setErrorMessage] = useState('');
    const [allCitys, setAllCitys] = useState<MeteriologicalData[]>([]);

    async function getAllCitys() {
        try{
            const data = await getAllMetereologicalData();
            setAllCitys(data.content);
            console.log(allCitys)
        }catch (error: any) {
            setErrorMessage("Desculpe, ocorreu um erro ao encontrar as cidades");
        }
    }

    useEffect(() => {
        getAllCitys()
    },[]);



    return(
        <div className="listMeteriogicalData">
            <h2>Você está na Lista de Previsões Meteriologicas</h2>
            <ol>
                {allCitys.map((e)=>{
                    return(<li>{e.city}: {e.weatherDate}</li>)
                })}
            </ol>
        </div>
    )   
}

export default ListMeteriologicalData;