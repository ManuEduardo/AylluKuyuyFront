import React, { useState } from "react";
import { ButtonBack, Loading } from "../../components";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../models";
import icon from "../../assets/icon.png";
import { registrar } from "./services";
import { useSetFamilyContext } from "../../context/FamilyProvider";
import useLocalStorage from "../../hooks/useLocalStorage";

const Register = (): JSX.Element => {
  const setFamily = useSetFamilyContext();
  const navigate = useNavigate();
  const [newCode, setNewCode] = useLocalStorage<number>(
    "codigo_familia",
    0
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [newName, setName] = useState<string>("");
  const [newDirection, setNewDirection] = useState<string>("");
  const [newPass1, setNewPass1] = useState<number>(0);
  const [newPass2, setNewPass2] = useState<number>(0);

  const registerQuery = async () => {
    console.log("xd");
    if (newPass1 != newPass2) {
      alert("Las contraseñas deben ser iguales");
      return;
    }
    setLoading(true);
    await registrar(newCode, newName, newDirection, newPass1)
      .then((data) => {
        if (data.error == false) {
          setFamily({
            codigo_familiar: newCode,
            contrasena: newPass1,
            nombre: "Familia",
          });
          setNewCode(newCode);
        }
      })
      .then(() => {
        navigate(ROUTES.home);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewCode(Number(event.target.value));
  };
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleChangeDirection = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setNewDirection(event.target.value);
  };
  const handleChangePass1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewPass1(Number(event.target.value));
  };
  const handleChangePass2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewPass2(Number(event.target.value));
  };

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
            onChange={handleChangeCode}
          />{" "}
          <input
            type="text"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Nombre familia"
            onChange={handleChangeName}
          />{" "}
          <textarea
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto h-20 w-60 resize-none text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Dirección"
            onChange={handleChangeDirection}
          />{" "}
          <input
            type="password"
            pattern="[0-9]*"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Contraseña"
            onChange={handleChangePass1}
          />{" "}
          <input
            type="password"
            pattern="[0-9]*"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Confirmar contraseña"
            onChange={handleChangePass2}
          />
          <button
            className="block mx-auto text-xl font-bold py-3 px-6 bg-cyan-900 rounded-lg hover:bg-yellow-300 text-slate-50 shadow-md shadow-cyan-700"
            onClick={registerQuery}
          >
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
      <Loading loading={loading} />
    </div>
  );
};

export default Register;
