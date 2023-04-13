import axios from 'axios';

export const handleAxiosError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      return new Error(error.response.data);
    } else if (error.request) {
      return new Error('Serviço não disponível');
    }
  } else {
    return new Error('Algo de errado ocorreu ao realizar a requisição');
  }
};

const api = axios.create({
  baseURL: 'http://localhost:4767/',
});

export default api;
