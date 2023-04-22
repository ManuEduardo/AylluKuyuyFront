import React from "react";
import { ButtonBack } from "../../components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../models";
import icon from "../../assets/icon.png";

const Register = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div>
      <ButtonBack onClick={() => navigate(ROUTES.welcome)} />
      <div className=" mx-3">
        <div className="  max-w-lg p-8 pt-6 mx-auto mb-8 mt-3 bg-yellow-400 rounded-3xl shadow-lg shadow-yellow-200">
          <h2 className=" pt-4 pb-10 text-center text-4xl text-cyan-900 font-medium">
            Registrar
          </h2>
          <input
            type="number"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Código familiar"
          />{" "}
          <input
            type="text"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Nombre familia"
          />{" "}
          <textarea
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto h-20 w-60 resize-none text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Dirección"
          />{" "}
          <input
            type="password"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Contraseña"
          />{" "}
          <input
            type="password"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Confirmar contraseña"
          />
          <button className="block mx-auto text-xl font-bold py-3 px-6 bg-cyan-900 rounded-lg hover:bg-yellow-300 text-slate-50 shadow-md shadow-cyan-700">
            Registrar
          </button>
          <button
            className=" block mx-auto mt-4"
            onClick={() => navigate(ROUTES.login)}
          >
            <p className=" text-lg text-slate-50 hover:text-xl">Ingresar</p>
          </button>
        </div>
      </div>
      <img src={icon} alt="logo" className=" w-32 mx-auto my-4" />
    </div>
  );
};

export default Register;
