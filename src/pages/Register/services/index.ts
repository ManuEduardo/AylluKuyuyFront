import axios, { AxiosResponse } from "axios";

const URL = import.meta.env.VITE_URL_API;

type responseTypeCall = {
    detalles: string,
    error: boolean,
}

export const registrar = async (
    code: number,
    nombre: string,
    dir: string,
    cont: number
  ) => {
    const newFamily = {
      cantidad: 3,
      codigo_familiar: code,
      nombre_familiar: nombre,
      direccion: dir,
      contrasena: cont,
    };
    const response: AxiosResponse<responseTypeCall> = await axios.post(
      `${URL}/registrar`,
      newFamily
    );
    return response.data;
  };