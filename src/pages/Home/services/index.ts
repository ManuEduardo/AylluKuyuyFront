import axios, { AxiosResponse } from "axios";
import { FamilyMember } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

type responseType = {
    codigo_familiar: number,
    nombre_familia: string,
    integrantes:Array<FamilyMember>
}

export const callFamilyHome = async ()=>{
    const code = parseInt(localStorage.getItem("codigo_familiar") ?? "0")
    const response:AxiosResponse<responseType> = await axios.get(`${URL}/home?codigo_familiar=${code}`);
    return response.data
}