import api, { handleAxiosError } from '../api';
import { MeteriologicalData } from '../../types/MeteriologicalData';


export const postMeteriologicalData = async (body: MeteriologicalData) =>{
    try{
        return api.post("/meteorologicalData", body);
    }
    catch{
        throw new Error("Serviço Indisponível");
    }
}
