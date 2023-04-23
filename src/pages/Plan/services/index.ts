import axios, { AxiosResponse } from "axios";
import { Paso } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

type responseTypeCall = Array<Paso>;

export const callAllSteps = async (code: number) => {
  const response: AxiosResponse<responseTypeCall> = await axios.get(
    `${URL}/plan?codigo_familiar=${code}`
  );
  return response.data;
};

type responseTypeAdd = {
  idplan: number;
  idfamilia: number;
  plan: string;
};

export const addStep = async (code: number, detalle: string) => {
  const newZone = {
    codigo_familiar: code,
    detalle: detalle,
  };
  const response: AxiosResponse<responseTypeAdd> = await axios.post(
    `${URL}/plan/paso`,
    newZone
  );
  return response.data;
};

type responseTypeDelete = Array<Paso>;
  export const deleteStep = async (code:number, id: number) => {
    const response: AxiosResponse<responseTypeDelete> = await axios.delete(
      `${URL}/plan/paso?idPaso=${id}&codigo_familiar=${code}`
    );
    return response.data;
  };