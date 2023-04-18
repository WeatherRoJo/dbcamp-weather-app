import api, { handleAxiosError } from '../api';
import { MeteriologicalData } from '../../types/MeteriologicalData';

export const postMeteriologicalData = async (Body: MeteriologicalData) =>{
    try{
        return api.post("/meteorologicalData", Body);
    }
    catch{
        throw new Error("Serviço Indisponível");
    }
}


export default postMeteriologicalData;