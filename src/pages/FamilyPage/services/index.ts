import axios, { AxiosResponse } from "axios";
import { FamilyMember } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

type responseTypeCall = {
  integrante: Array<FamilyMember>;
};
export const callAllFamily = async (code: number) => {
  const response: AxiosResponse<responseTypeCall> = await axios.get(
    `${URL}/familia?codigo_familiar=${code}`
  );
  return response.data;
};

export const addMember = async (
  code: number,
  nombre: string,
  apellido: string,
  dni: number,
  telf: number,
  rol: string,
  disc: boolean,
  mascota: boolean,
  lider: boolean
) => {
  const newMember = {
    codigo_familiar: code,
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    telefono: telf,
    roles: rol,
    discapacidad: disc,
    lider: lider,
    mascota: mascota,
  };
  const response: AxiosResponse<FamilyMember> = await axios.post(
    `${URL}/familia`,
    newMember
  );
  return response.data;
};


type responseTypeDelete = {
    idIntegrante: number;
  };
export const deleteMember = async (id:number) =>{
    const response: AxiosResponse<responseTypeDelete> = await axios.delete(
        `${URL}/familia?idIntegrante=${id}`
      );
      return response.data
}