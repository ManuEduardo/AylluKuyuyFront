import axios, { AxiosResponse } from "axios";
import { Croquis, Home } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

export const callInfoHouse: any = async (code: number) => {
  const response: AxiosResponse<Home> = await axios.get(
    `${URL}/hogar?codigo_familiar=${code}`
  );
  return response.data;
};


export const callImage = async (code: number) => {
  const response: AxiosResponse<Blob> = await axios.get(
    `${URL}/piso?codigo_familiar=${code}`, {responseType: "blob"}
  );
  return response.data;
};

export const sendCroquis = async (code: number, file: File) => {
  const form = new FormData();
  form.append("codigo_familiar", code.toString())
  form.append("file", file)


  const response: AxiosResponse<Blob> = await axios.post(
    `${URL}/piso`,
    form,
    {responseType: "blob"}
  )
  return response.data;
}