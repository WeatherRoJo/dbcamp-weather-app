import api, { handleAxiosError } from '../api';

export const getByCity =  async(cidade:string)=>{
    try{
        return await api.get(`meteorologicalData/${cidade}`);
    }
    catch{
        throw new Error("Cidade não encontrada");
    }
}

export default getByCity;