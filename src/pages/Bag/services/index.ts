import axios, { AxiosResponse } from "axios";
import { Item } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

type responseTypeCall = Array<Item>;

export const callAllBag = async (code: number) => {
  const response: AxiosResponse<responseTypeCall> = await axios.get(
    `${URL}/mochila?codigo_familiar=${code}`
  );
  return response.data;
};

export const addItem = async (
    code: number,
    nombre: string,
    fecha: string,
    caduce: boolean
  ) => {
    const newItem = {
      codigo_familiar: code,
      nombre: nombre,
      fecha: fecha,
      caduce: caduce,
    };
    const response: AxiosResponse<Item> = await axios.post(
      `${URL}/mochila/item`,
      newItem
    );
    return response.data;
  };

  type responseTypeDelete = {
    id_item: number;
  };
  export const deleteItem = async (id: number) => {
    const response: AxiosResponse<responseTypeDelete> = await axios.delete(
      `${URL}/mochila/item?iditem=${id}`
    );
    return response.data;
  };

  type responseTypeCheckt = {
    id_item: number;
  };
  export const checktItem= async (id: number, value: boolean) => {
    await axios.post(
      `${URL}/mochila/item/disponible?idItem=${id}&disponible=${value}`
    );
  };