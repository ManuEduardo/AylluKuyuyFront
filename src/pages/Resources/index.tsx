import React from "react";
import icon from "../../assets/icon.png";

function Resources(): JSX.Element {
  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-medium text-cyan-900">
        Recursos
      </h2>
      <div className=" flex flex-col max-w-lg m-auto">
        <a
          href="https://drive.google.com/file/d/15fMge6UkkN58IvC3RoIUEvrCngCQ2CWZ/view?usp=share_link "
          target="_blank"
          className=" underline decoration-solid font-light text-yellow-400"
        >
          Imagenes para Mapa
        </a>
        <a
          href="https://drive.google.com/file/d/1rhMO7ffsvVAGwfij40C3lQ0tI8rbkoRH/view?usp=share_link "
          target="_blank"
          className=" underline decoration-solid font-light text-yellow-400"
        >
          Imagenes señales casa
        </a>
      </div>
      <img src={icon} alt="logo" className=" w-60 mx-auto mt-16" />

    </div>
  );
}

export default Resources;
