import React, { useState} from "react";
import { ButtonBack, ButtonDefault, Loading } from "../../components";
import { useSetFamilyContext } from "../../context/FamilyProvider";
import useLocalStorage from "../../hooks/useLocalStorage";
import { loguear } from "./services";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../models";
import icon from "../../assets/icon.png";

const Login = (): JSX.Element => {
  const [codigo_familia, setCodigo_familia] = useLocalStorage<number>(
    "codigo_familiar",
    0
  );
  const navigate = useNavigate();
  const setFamily = useSetFamilyContext();
  //const [codigo_familia, setCodigo_familia] = useState<number>(0);
  const [password, setPassword] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const ingresar = async () => {
    setLoading(true);
    await loguear(codigo_familia, password)
      .then((data) => {
        if (data.error == false) {
          setFamily({
            codigo_familiar: codigo_familia,
            contrasena: password,
            nombre: "Familia",
          });
        }
      })
      .then(() => {
        setLoading(false);
        navigate(ROUTES.home);
      })
      .finally(() => {
        setLoading(false);
        console.log(codigo_familia)
      });
  };

  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCodigo_familia(Number(event.target.value));
  };
  const handleChangepassw = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(Number(event.target.value));
  };
  return (
    <div>
      <ButtonBack onClick={() => navigate(ROUTES.welcome)} />
      <img src={icon} alt="logo" className=" w-40 mx-auto my-6" />
      <div className=" mx-3">
        <div className=" max-w-lg p-8 mx-auto my-8 bg-sky-300 rounded-3xl shadow-lg shadow-sky-200">
          <h2 className=" pt-6 pb-10 text-center text-4xl text-cyan-900 font-medium">
            Ingresar
          </h2>
          <input
            type="number"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Código familiar"
            onChange={handleChangeCode}
          />
          <input
            type="password"
            pattern="[0-9]*"
            name=""
            id=""
            className=" block p-3 mb-8 mx-auto text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Contraseña"
            onChange={handleChangepassw}
          />
          <div className=" w-min mx-auto">
            <ButtonDefault className=" mx-auto" onClick={ingresar}>
              <p className=" text-xl">Ingresar</p>
            </ButtonDefault>
          </div>
          <button
            className=" block mx-auto mt-4"
            onClick={() => navigate(ROUTES.register)}
          >
            <p className=" text-lg text-slate-50 hover:text-xl">Registrar</p>
          </button>
        </div>
      </div>
      <Loading loading={loading} />
    </div>
  );
};

export default Login;
