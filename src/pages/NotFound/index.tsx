import React from "react";
import { ButtonDefault } from "../../components";
import { ROUTES } from "../../models";
import icon from "../../assets/icon.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={icon} alt="logo" className=" w-60 mx-auto my-20" />
      <h2 className=" mt-12 mb-16 text-center text-5xl font-bold text-cyan-900">
        404
      </h2>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-bold text-cyan-900">
        Página no encontrada
      </h2>
      <div className=" w-max mx-auto">
        <ButtonDefault onClick={() => navigate(ROUTES.home)}>
          <p className=" text-2xl">Inicio</p>
        </ButtonDefault>
      </div>
    </div>
  );
};

export default NotFound;
