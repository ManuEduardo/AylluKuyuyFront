import axios, { AxiosResponse } from "axios";

const URL = import.meta.env.VITE_URL_API;

type responseType = {
    detalles: string,
    error: boolean
}

export const loguear = async (code:number, passw: number)=>{
    const response:AxiosResponse<responseType> = await axios.post(`${URL}/ingresar`, { codigo_familiar: code, contrasena: passw });
    return response.data
}