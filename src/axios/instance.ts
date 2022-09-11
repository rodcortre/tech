import axios, { AxiosRequestConfig } from 'axios';
export const axiosInstance =(baseUrl:string ="https://reqres.in" )=>{
  const config: AxiosRequestConfig = { baseURL:baseUrl };
  return axios.create(config);
} 
