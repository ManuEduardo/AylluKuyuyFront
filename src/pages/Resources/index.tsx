import icon from "../../assets/icon.png";

function Resources(): JSX.Element {
  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-medium text-cyan-900">
        Recursos
      </h2>
      <div className=" flex flex-col max-w-lg m-auto">
        <a
          href="https://drive.google.com/file/d/1nHyqYumM8wuHx3K84S1FMQMWAbqH6AH-/view?usp=sharing "
          target="_blank"
          className=" underline decoration-solid font-medium text-yellow-400 m-6"
        >
          Imagenes para Mapa
        </a>
        <a
          href="https://drive.google.com/file/d/1KjrsoN1dAWFDFDDbYpLasZvz5Kd8Kwf-/view?usp=sharing "
          target="_blank"
          className=" underline decoration-solid font-medium text-yellow-400 m-6"
        >
          Imagenes señales casa y Mapa
        </a>
        <a
          href="https://drive.google.com/file/d/1-nJERmyd8T0_xNilon8u5RJIJXCf9JHv/view?usp=sharing "
          target="_blank"
          className=" underline decoration-solid font-medium text-yellow-400 m-6"
        >
          Manual de usuario 119
        </a>
      </div>
      <img src={icon} alt="logo" className=" w-60 mx-auto mt-16" />

    </div>
  );
}

export default Resources;
