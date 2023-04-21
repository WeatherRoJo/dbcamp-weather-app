import api, { handleAxiosError } from '../api';

export const getByCity =  async()=>{
    try{
        return api.get("/meteorologicalData");
    }
    catch{
        throw new Error("Serviço Indisponível");
    }
}

export default getByCity;