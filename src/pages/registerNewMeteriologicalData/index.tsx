import "./style.css"
import { useState } from "react";
import postMeteriologicalData from "../../data/services/meteriologicalData/postMeteriologicalData";

export interface RegisterNewMeteriologicalDataProps {}

export const  RegisterNewMeteriologicalData:   React.FC<
RegisterNewMeteriologicalDataProps
> = (): JSX.Element => {

    const [city, setCity] = useState("");
    const [date, setDate] = useState("");
    const [morning_wheater,setMorning_wheater] = useState("");
    const [night_wheater,setNight_wheater] = useState("");
    const [max_temperature, setMax_temperature] = useState("");
    const [min_temperature, setMin_temperature] = useState("");
    const [humidity, setHumidity] = useState("");
    const [precipitation, setPrecipitation] =useState("");
    const [wind_speed, setWind_speed] = useState("");

    const [errorMessage, setErrorMessage] = useState('');

    

    async function handleSubmit(event: React.FormEvent) {
        event?.preventDefault();

        const Body = {
              city,
              date,
              morning_wheater,
              night_wheater,
              max_temperature,
              min_temperature,
              humidity ,
              precipitation,
              wind_speed
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
                            value={date}  
                            onChange={(event) => setDate(event.target.value)}
                        ></input>
                    </div>  
                </div>
                <div className="meteriologicalBox">
                        <div className="wheatherTime">
                            <div className="wheaterBox">
                                <h3>Tempo</h3>
                                <div className="wheaterInput">
                                    <input
                                        onChange={(event) => setMorning_wheater(event.target.value)}
                                        required
                                     />
                                    <input
                                        required
                                        onChange={(event) => setNight_wheater(event.target.value)}
                                    />
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
                                    onChange={(event) => setMax_temperature(event.target.value)}
                                />
                            </div>
                            <div className="tempMin">
                                <h3>Temperatura Mínima</h3>
                                <input
                                    placeholder="ºC" 
                                    type="number"
                                    required
                                    onChange={(event) => setMin_temperature(event.target.value)}
                                />
                            </div>
                            <div className="meteriologicalBoxBottom">
                                <div className="precipitacao">
                                    <h3>Precipitação</h3>
                                    <input
                                        placeholder="%" 
                                        type="number"
                                        required
                                        onChange={(event) => setPrecipitation(event.target.value)}
                                    />
                                 </div>
                                <div className="humidade">
                                    <h3>Humidade</h3>
                                    <input
                                        placeholder="%" 
                                        type="number"
                                        required
                                        onChange={(event) => setHumidity(event.target.value)}
                                    />
                                </div>
                                <div className="velocidadeVento">
                                    <h3>Velocidade do Vento</h3>
                                    <input
                                        placeholder="km/h" 
                                        type="number"
                                        required
                                        onChange={(event) => setWind_speed(event.target.value)}
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