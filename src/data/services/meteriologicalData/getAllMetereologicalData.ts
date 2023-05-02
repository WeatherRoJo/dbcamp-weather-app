import api, { handleAxiosError } from '../api';

export const getAllMetereologicalData= async()=>{
    try{
       const response = await api.get("/meteorologicalData");
       const data = response.data;
       return data;
    }
    catch{
        throw new Error("Serviço Indisponível");
    }
}

export default getAllMetereologicalData