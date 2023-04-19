import "./style.css"
import { useState } from "react";
import postMeteriologicalData from "../../data/services/meteriologicalData/postMeteriologicalData";

export interface RegisterNewMeteriologicalDataProps {}

export const  RegisterNewMeteriologicalData:   React.FC<
RegisterNewMeteriologicalDataProps
> = (): JSX.Element => {

    const [city, setCity] = useState("");
    const [weatherDate, setWeatherDate] = useState("");
    const [morningWeather,setMorningWeather] = useState("");
    const [nightWeather,setNightWeather] = useState("");
    const [maxTemperature, setMaxTemperature] = useState(0);
    const [minTemperature, setMinTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [precipitation, setPrecipitation] =useState(0);
    const [windSpeed, setWindSpeed] = useState(0);

    const [errorMessage, setErrorMessage] = useState('');

    

    async function handleSubmit(event: React.FormEvent) {
        event?.preventDefault();

        const Body = {
              city,
              weatherDate,
              morningWeather,
              nightWeather,
              maxTemperature,
              minTemperature,
              humidity ,
              precipitation,
              windSpeed
            } 
            
        try {
            await  postMeteriologicalData(Body)
        } catch (error: any) {
            setErrorMessage("Desculpe, ocorreu um erro ao realizar o cadastro");
        }
      }

    return(
        <div className= "registro">
            <h2>Cadastro Metereológico</h2>
            <form  onSubmit={handleSubmit} >
                <div className="cityAndDate">
                    <div className="cityBox">
                        <h3>Cidade</h3>
                        <input
                            required 
                            className='cityinput' 
                            value={city} 
                            onChange={(event) => setCity(event.target.value)}
                        ></input>
                    </div>  
                    <div className="dateBox">
                        <h3 className="date">Data</h3>
                        <input 
                            required 
                            type='date' 
                            className="dateInput"
                            value={weatherDate}  
                            onChange={(event) => setWeatherDate(event.target.value)}
                        ></input>
                    </div>  
                </div>
                <div className="meteriologicalBox">
                        <div className="wheatherTime">
                            <div className="wheaterBox">
                                <h3>Tempo</h3>
                                <div className="wheaterSelect">
                                    <select onChange={(event) => setMorningWeather(event.target.value)}>
                                        <option value=""> Selecione </option>
                                        <option value="SUN"> Ensolarado </option>
                                        <option value="SUN_WITH_CLOUDS">Sol com nuvens </option>
                                        <option value="CLOUDY">Nublado</option>
                                        <option value="RAIN" > Chuvoso </option>
                                        <option value="STORM" > Tempestade </option>
                                    </select>
                                    <select onChange={(event) => setNightWeather(event.target.value)}>
                                        <option value="" > Selecione </option>
                                        <option value="SUN"> Ensolarado </option>
                                        <option value="SUN_WITH_CLOUDS"> Sol com nuvens </option>
                                        <option value="CLOUDY"> Nublado</option>
                                        <option value="RAIN" > Chuvoso </option>
                                        <option value="STORM" > Tempestade </option>
                                    </select>
                                </div>
                            </div>
                            <div className="turnBox">
                                <h3> Turno </h3>
                                <div className="turnInput">
                                    <input  disabled placeholder="Manhã"/>
                                    <input  disabled placeholder="Tarde"/>
                                </div>
                            </div>
                        </div>
                        <div className="wheatherInformation">
                            <div className="tempMax">
                                <h3>Temperatura Máxima</h3>
                                <input
                                    placeholder="ºC" 
                                    type="number"
                                    required 
                                    onChange={(event) => setMaxTemperature(parseInt(event.target.value))}
                                />
                            </div>
                            <div className="tempMin">
                                <h3>Temperatura Mínima</h3>
                                <input
                                    placeholder="ºC" 
                                    type="number"
                                    required
                                    onChange={(event) => setMinTemperature(parseInt(event.target.value))}
                                />
                            </div>
                            <div className="meteriologicalBoxBottom">
                                <div className="precipitacao">
                                    <h3>Precipitação</h3>
                                    <input
                                        placeholder="%" 
                                        type="number"
                                        required
                                        onChange={(event) => setPrecipitation(parseInt(event.target.value))}
                                    />
                                 </div>
                                <div className="humidade">
                                    <h3>Humidade</h3>
                                    <input
                                        placeholder="%" 
                                        type="number"
                                        required
                                        onChange={(event) => setHumidity(parseInt(event.target.value))}
                                    />
                                </div>
                                <div className="velocidadeVento">
                                    <h3>Velocidade do Vento</h3>
                                    <input
                                        placeholder="km/h" 
                                        type="number"
                                        required
                                        onChange={(event) => setWindSpeed(parseInt(event.target.value))}
                                    />
                                </div>
                            </div>
                        </div>
                </div>
                <div className="buttonBox">
                    <button type="reset"> Cancelar </button>
                    <button type="submit"> Salvar
                    </button>
                </div>
            </form>
            {errorMessage != "" && (
                <p className="errorMessage">{errorMessage}</p>
              )}
        </div>
    )
}
export default RegisterNewMeteriologicalData;