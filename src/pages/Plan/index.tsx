import React, { useState } from "react";
import { ModalWrapper } from "../../components";
import { Paso, FakePaso } from "../../models";
import imgMore from "../../assets/more.png";
import imgDone from "../../assets/check.png";

const Plan = (): JSX.Element => {
  const plan: Array<Paso> = [FakePaso, FakePaso];
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const addPaso = () => {
    setIsVisibleModal(false);
  };
  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-medium text-cyan-900">
        Mi plan sismos
      </h2>
      <div className=" w-fit mx-auto">
        {plan.map((paso, index) => {
          return (
            <div className=" m-6 flex justify-between gap-12">
              <h3 className="w-max my-auto text-center text-xl font-medium text-cyan-900">
                Paso {index + 1}
              </h3>
              <p className=" w-full max-w-lg my-auto text-lg font-normal text-cyan-900">
                {paso.detalle}
              </p>
            </div>
          );
        })}
      </div>
      <h2 className=" mt-16 text-center text-xl font-medium text-cyan-900">
        Agregar paso
      </h2>
      <button
        className="block p-4 mx-auto mt-6 bg-yellow-400/80 rounded-full shadow-xl hover:scale-110 transition-transform"
        onClick={() => setIsVisibleModal(true)}
      >
        <img src={imgMore} alt="boton mas" className=" w-4" />
      </button>

      <ModalWrapper
        visible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
      >
        <div>
          <p className=" my-auto text-center text-2xl font-medium text-cyan-900">
            Paso {plan.length + 1}
          </p>
          <textarea
            name=""
            id=""
            className=" block p-3 h-32 w-60 mx-auto my-6 resize-none text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="Detalle"
          />
        </div>
        <button className=" block mx-auto my-3" onClick={addPaso}>
          <img src={imgDone} alt="hecho" />
        </button>
      </ModalWrapper>
    </div>
  );
};

export default Plan;
