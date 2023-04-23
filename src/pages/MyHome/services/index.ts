import axios, { AxiosResponse } from "axios";
import { Home } from "../../../models";

const URL = import.meta.env.VITE_URL_API;

export const callInfoHouse = async (code: number) => {
  const response: AxiosResponse<Home> = await axios.get(
    `${URL}/hogar?codigo_familiar=${code}`
  );
  return response.data;
};