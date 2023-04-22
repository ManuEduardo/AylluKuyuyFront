import React from "react";
import { ButtonBack, ButtonDefault } from "../../components";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className=" px-2">
      <ButtonBack onClick={() => navigate(-1)} />
      <img src={icon} alt="logo" className=" w-40 mx-auto my-6" />
      <div className=" max-w-lg p-8 mx-auto my-8 bg-sky-300 rounded-3xl shadow-lg shadow-sky-200">
        <h2 className=" py-6 text-center text-4xl text-cyan-900">Ingresar</h2>
        <input
          type="number"
          name=""
          id=""
          className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
          placeholder="Código familiar"
        />
        <input
          type="password"
          name=""
          id=""
          className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
          placeholder="Contraseña"
        />
        <div className=" w-min mx-auto">
          <ButtonDefault className=" mx-auto">
            <p className=" text-xl">Ingresar</p>
          </ButtonDefault>
        </div>
        <button className=" block mx-auto mt-4"><p className=" text-lg text-slate-50 hover:text-xl">Registrar</p></button>
      </div>
    </div>
  );
};

export default Login;
