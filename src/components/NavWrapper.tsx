import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../models";
import imgMenu from "../assets/menu.png";
import imgLogo from "../assets/icon-bg.png";
import imgExit from "../assets/delete.png";

const NavWrapper = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMenuActivate, setIsMenuActivate] = useState<boolean>(false);
  const activeNavLink:
    | ((props: { isActive: boolean; isPending: boolean }) => string | undefined)
    | undefined = ({ isActive }) =>
    isActive ? "text-yellow-400" : " text-slate-50";
  const exit = () => {
    localStorage.removeItem("codigo_familia");
    navigate(ROUTES.welcome);
  };

  return (
    <div className=" flex flex-col justify-between min-h-screen">
      <div className=" p-2 bg-yellow-400 flex justify-between">
        <button onClick={() => setIsMenuActivate(!isMenuActivate)}>
          <img src={imgMenu} alt="menu" className=" w-8" />
        </button>
        <h1 className=" my-auto text-center text-xl text-slate-50 font-bold">
          App Ayllu Kukuy
        </h1>
        <img src={imgLogo} alt="logo" className=" w-8 hover:scale-110 transition-transform" onClick={() => navigate(ROUTES.home)}/>
      </div>
      <div
        className={
          isMenuActivate
            ? `fixed left-0 top-0 w-screen h-screen z-40 bg-black bg-opacity-30 backdrop-blur`
            : ""
        }
      >
        <aside
          className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${
            isMenuActivate && "translate-x-0"
          }`}
        >
          <div className=" h-full px-3 py-4 overflow-y-auto dark:bg-cyan-900 ">
            <div className=" h-2/6">
              <button
                className="block w-6 mr-0 ml-auto mb-6"
                onClick={() => setIsMenuActivate(false)}
              >
                <img src={imgExit} alt="salir" className=" mt-2" />
              </button>
              <img src={imgLogo} alt="logo" className=" w-32 mx-auto" />
            </div>
            <div className=" h-4/6 flex flex-col justify-between">
              <ul className=" space-y-8 flex flex-col justify-between font-medium text-slate-50">
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.home}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.familyRoles}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    FAMILIA
                  </NavLink>
                </li>
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.myHome}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    MI HOGAR
                  </NavLink>
                </li>
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.zone}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    ZONAS DE ENCUENTRO
                  </NavLink>
                </li>
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.bag}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    MOCHILA
                  </NavLink>
                </li>
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.plan}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    PLAN
                  </NavLink>
                </li>
                <li className=" text-center">
                  <NavLink
                    to={ROUTES.resources}
                    className={activeNavLink}
                    onClick={() => setIsMenuActivate(false)}
                  >
                    RECURSOS
                  </NavLink>
                </li>
                <a
                  href="tel:+51 119"
                  className="flex flex-col text-2xl font-semibold text-slate-50 py-2 px-4 mx-auto w-max bg-red-400 rounded-2xl hover:scale-110 hover:bg-green-500 transition-all shadow-2xl"
                >
                  <p className=" mx-auto">📞 119</p>
                </a>
              </ul>
              <button
                className="block bg-red-500 w-full h-12 rounded-lg text-2xl font-medium text-slate-50"
                onClick={exit}
              >
                Salir
              </button>
            </div>
          </div>
        </aside>
      </div>
      <Outlet />

      <div className=" h-4 bg-yellow-400"></div>
    </div>
  );
};

export default NavWrapper;
