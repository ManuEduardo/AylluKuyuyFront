import axios, { AxiosResponse } from "axios";
import { ZoneModel } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

type responseTypeCall = Array<ZoneModel>;

export const callAllZones = async (code: number) => {
  const response: AxiosResponse<responseTypeCall> = await axios.get(
    `${URL}/zona?codigo_familiar=${code}`
  );
  return response.data;
};

export const addZone = async (
  code: number,
  nombre: string,
  detalle: string,
  tipo: string
) => {
  const newZone = {
    codigo_familiar: code,
    nombre: nombre,
    detalle: detalle,
    tipo: tipo,
  };
  const response: AxiosResponse<ZoneModel> = await axios.post(
    `${URL}/zona`,
    newZone
  );
  return response.data;
};

type responseTypeDelete = {
  idzona: number;
};
export const deleteZone = async (id: number) => {
  const response: AxiosResponse<responseTypeDelete> = await axios.delete(
    `${URL}/zona?idzona=${id}`
  );
  return response.data;
};
