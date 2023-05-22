import { useState, useEffect } from "react";
import "./style.css";
import searchIcon from "../../ui/assets/genericIcons/pesquisa.svg";
import locationIcon from "../../ui/assets/genericIcons/Location.svg";
import Umbrella from "../../ui/assets/weatherIcons/weatherStatitics/umbrella.svg";
import Wind from "../../ui/assets/weatherIcons/weatherStatitics/vento.svg";
import Water from "../../ui/assets/weatherIcons/weatherStatitics/gotaAgua.svg";
import Sun from "../../ui/assets/weatherIcons/sol.svg";
import Cloudy from "../../ui/assets/weatherIcons/nubaldoDia.svg";
import SunAndClouds from "../../ui/assets/weatherIcons/solNuvens.svg";
import Storm from "../../ui/assets/weatherIcons/tempestade.svg";
import Rain from "../../ui/assets/weatherIcons/chuvaDia.svg";
import Search from "../../ui/assets/weatherIcons/search.png"
import api from "../../data/services/api";
import getAllMetereologicalData from "../../data/services/meteriologicalData/getAllMetereologicalData";
import { all } from "axios";
import { MeteriologicalData } from "../../data/types/MeteriologicalData";
import { stringify } from "querystring";

export function Home(){
    const [allCitys, setAllCitys] = useState<MeteriologicalData[]>([]);
    const [selectedMetereologicalData, setSelectedMetereologicalData] = useState<MeteriologicalData>();
    const [searchCity,setSearchCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [todayDate,setTodayDate] = useState('');
    const [todayWheatherIcon,setTodayWheatherIcon] = useState(Storm);
    const [dado,setDado] = useState('humity');

   async function getAllCitys() {
        try{
            const data = await getAllMetereologicalData();
            setAllCitys(data.content);
            console.log(allCitys)
        }catch (error: any) {
            setErrorMessage("Desculpe, ocorreu um erro ao encontrar as cidades");
        }
   }

    const searchLowerCase = searchCity.toLowerCase();
    const dadoMeteorologicoHoje = allCitys.filter((metereologicalData)=>{
            return metereologicalData.city.toLowerCase().includes(searchLowerCase);
        });
    const dadoLength = dadoMeteorologicoHoje.length;
    
    function changeIconTodayWeather(){
        let clima = "";
        dadoMeteorologicoHoje.map((e)=>{ if(dadoLength > 1){clima = ""}else{clima = e.morningWeather}})
        switch(clima){
            case "":
                return Search;
            case "SUN": 
                return Sun;
            case "STORM":
                return Storm;
            case "RAIN":
                return Rain;
            case "SUN_WITH_CLOUDS":
                return SunAndClouds;
            case "CLOUDY":
                return Cloudy;
        }
    }

    function todayDateSearch(){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    setTodayDate(dia + '-' + mes + '-' + ano);
    }

    useEffect(() => {
        getAllCitys()
        todayDateSearch();
    },[]);

    return(
    <div>
       <div className="homeTop">
         <h2 >Hoje</h2>
         <div>
            <h3>Pesquise a cidade</h3>
            <div className="searchBar">
                <div className="searchInput">
                    <img alt="Icone de Pesquisa"  src={searchIcon}/> 
                    <input
                        placeholder="Digite a cidade" 
                        value ={searchCity} 
                        onChange={(event) => {(setSearchCity(event.target.value))}} 
                    />
                </div>
                <img alt="Icone de localização" src={locationIcon}/>
            </div>

         </div>
       </div>
       <div className="weatherInfoBox">
            <div className="todayWeather">
                <img  
                    alt="Imagem com clima atual do dia" 
                    src={changeIconTodayWeather()}/>
                <div className="MinAndMaxTemperature">
                    <h1>
                    {dadoMeteorologicoHoje.map((e)=>{ if(dadoLength > 1){return null}else{return e.maxTemperature}})}º
                    </h1>
                    <h3>/</h3>
                    <h2>{dadoMeteorologicoHoje.map((e)=>{ if(dadoLength > 1){return null}else{return e.minTemperature}})}º</h2>
                </div>
            </div>
            <div className="wheatherStatistics">
                <div className="precipitation">
                    <img 
                        alt="Sobrinha que representa a Precipitação"
                        src={Umbrella}
                    />
                    <h4>{dadoMeteorologicoHoje.map((e)=>{ if(dadoLength > 1){return null}else{return e.precipitation}})}%</h4>
                    <p> Precipitação</p>
                </div>
                <div className="humidity">
                    <img
                        alt="Gota de água que representa a Umidade"
                        src={Water}
                    />
                    <h4>{dadoMeteorologicoHoje.map((e)=>{ if(dadoLength > 1){return null}else{return e.humidity}})}%</h4>
                    <p>Humidade</p>
                </div>
                <div className="windSpeed">
                    <img
                        alt="Representação da velocidade do vento"
                        src={Wind}
                    />
                    <h4>
                    {dadoMeteorologicoHoje.map((e)=>{ if(dadoLength > 1){return null}else{return e.windSpeed}})} km/h
                    </h4>
                    <p>Velocidade do Vento</p>
                </div>
            </div>
       </div>
       <div className="weatherDays">
       </div>
    </div>
    )
}

export default Home ;