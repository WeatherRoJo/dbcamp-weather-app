import { useState } from "react";
import "./style.css"
import searchIcon from "../../ui/assets/genericIcons/pesquisa.svg"
import locationIcon from "../../ui/assets/genericIcons/Location.svg"

export function Home(){
    return(
    <div>
       <div className="homeTop">
         <h2>Hoje</h2>
         <div>
            <h3>Pesquise a cidade</h3>
            <div className="searchBar">
                <div className="searchInput">
                    <img src={searchIcon} />
                    <input/>
                </div>
                <img src={locationIcon}/>
            </div>

         </div>
       </div>
       <div className="weatherInfoBox">
            <div>
                <img/>
                <div>
                </div>
            </div>
            <div>
                <div className="precipitation">
                    <img/>
                    <h2></h2>
                    <p> Precipitação</p>
                </div>
                <div className="humidity">
                    <img/>
                    <h2></h2>
                    <p>Humidade</p>
                </div>
                <div className="windSpeed">
                    <img/>
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