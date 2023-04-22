import React from "react";
import { ButtonDefault } from "../../components";
import { ROUTES } from "../../models";
import icon from "../../assets/icon.png"
import { useNavigate } from "react-router-dom";
const Welcome = (): JSX.Element => {
    const navigate = useNavigate()
  return (
    <div className="">
      <div className=" m-6 flex justify-between">
        <ButtonDefault onClick={() => navigate(ROUTES.register)}><p className=" text-lg">Registrar</p></ButtonDefault>
        <ButtonDefault onClick={() => navigate(ROUTES.login)}><p className=" text-lg">Ingresar</p></ButtonDefault>
      </div>
      <img src={icon} alt="logo" className=" w-60 mx-auto mt-16" />
      <div className=" mt-12 pb-12 h-full bg-cyan-900 rounded-t-3xl">
        <h1 className=" py-6 mx-4 text-center text-3xl font-bold text-slate-50">PLAN DE SEGURIDAD ANTE UN SISMO</h1>
        <h2 className=" py-6 mx-4 text-center text-2xl font-semibold text-slate-50">"LA FAMILIAS SON UNIDAS POR UN MEJOR PAIS"</h2>
        <img src="./img1.png" alt="imagen familia" className=" max-w-lg w-11/12 mx-auto rounded-2xl" />
      </div>
    </div>
  );
};

export default Welcome;
