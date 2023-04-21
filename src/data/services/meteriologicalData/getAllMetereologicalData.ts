import api, { handleAxiosError } from '../api';

export const getAllMetereologicalData= async(cidade:string)=>{
    try{
        return api.get(`meteorologicalData?city=${cidade}`);
    }
    catch{
        throw new Error("Serviço Indisponível");
    }
}

export default getAllMetereologicalData;