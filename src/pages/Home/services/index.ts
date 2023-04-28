import axios, { AxiosResponse } from "axios";
import { FamilyMember, Item } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

type responseType = {
    codigo_familiar: number,
    nombre_familia: string,
    integrantes:Array<FamilyMember>
}

type responseCaducidos = Array<Item>;

const code = parseInt(localStorage.getItem("codigo_familiar") ?? "0")

export const callFamilyHome = async ()=>{
    const response:AxiosResponse<responseType> = await axios.get(`${URL}/home?codigo_familiar=${code}`);
    return response.data
}

export const callProductos =async () => {
    const response:AxiosResponse<responseCaducidos> = await axios.get(`${URL}/productos?codigo_familiar=${code}`);
    return response.data
}