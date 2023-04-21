import { useState } from "react";
import "./style.css"
import searchIcon from "../../ui/assets/genericIcons/pesquisa.svg"
import locationIcon from "../../ui/assets/genericIcons/Location.svg"
import todayWheatherIcon from "../../ui/assets/weatherIcons/tempestade.svg"
import Umbrella from "../../ui/assets/weatherIcons/weatherStatitics/umbrella.svg"
import Wind from "../../ui/assets/weatherIcons/weatherStatitics/vento.svg"
import Water from "../../ui/assets/weatherIcons/weatherStatitics/gotaAgua.svg"

export function Home(){
    return(
    <div>
       <div className="homeTop">
         <h2>Hoje</h2>
         <div>
            <h3>Pesquise a cidade</h3>
            <div className="searchBar">
                <div className="searchInput">
                    <img alt="Icone de Pesquisa"  src={searchIcon} />
                    <input/>
                </div>
                <img alt="Icone de localização" src={locationIcon}/>
            </div>

         </div>
       </div>
       <div className="weatherInfoBox">
            <div className="todayWeather">
                <img  alt="Imagem com clima atual do dia"  /*essa imagem deve ser um componente que altera*/ src={todayWheatherIcon}/>
                <div className="MinAndMaxTemperature">
                    <h1 /*Esses 3 textos também devem ser componentes*/>23º</h1>
                    <h3>/</h3>
                    <h2>17º</h2>
                </div>
            </div>
            <div className="wheatherStatistics">
                <div className="precipitation">
                    <img 
                        alt="Sobrinha que representa a Precipitação"
                        src={Umbrella}
                    />
                    <h2></h2>
                    <p> Precipitação</p>
                </div>
                <div className="humidity">
                    <img
                        alt="Gota de água que representa a Umidade"
                        src={Water}
                    />
                    <h2></h2>
                    <p>Humidade</p>
                </div>
                <div className="windSpeed">
                    <img
                        alt="Vento que representa a velocidade do vento"
                        src={Wind}
                    />
                    <h2></h2>
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