import React, { useEffect, useState } from "react";
import { Loading, ModalWrapper } from "../../components";
import { Paso, EmptyPaso } from "../../models";
import imgMore from "../../assets/more.png";
import imgDone from "../../assets/check.png";
import imgDelete from "../../assets/delete.png";
import { useFamilyContext } from "../../context/FamilyProvider";
import { callAllSteps, addStep, deleteStep } from "./services";

const Plan = (): JSX.Element => {
  const family = useFamilyContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [plan, setPlan] = useState<Array<Paso>>([EmptyPaso])
  const [newDetaiil, setNewDetaiil] = useState<string>("");
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  useEffect(() => {
    queryAllSteps();
  }, []);

  const queryAllSteps = async () => {
    setLoading(true);
    await callAllSteps(family.cod_familia)
      .then((data) => {
        setPlan(data);
      })
      .finally(() => setLoading(false));
  };

  const addPaso = async () => {
    setLoading(true);
    await addStep(family.cod_familia, newDetaiil, )
      .then((data) => {
        const newStep:Paso = {
          paso: plan.length + 1,
          idPaso: data.idplan,
          detalle: data.plan
        } 
        setPlan(plan.concat(newStep));
        setIsVisibleModal(false);
      })
      .finally(() => setLoading(false));
  };

  const deleteStepQuery = async (id: number) => {
    setLoading(true)
    await deleteStep(family.cod_familia, id).then(() =>{
      setPlan(plan.filter(step=>step.idPaso != id))
    }).finally(() => setLoading(false));
  }

  const handleChangeDetail = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setNewDetaiil(event.target.value);
  };
  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-medium text-cyan-900">
        Mi plan sismos
      </h2>
      <div className=" w-fit mx-auto">
        {plan.map((paso, index) => {
          return (
            <div className=" m-6 flex justify-between gap-12" key={paso.idPaso}>
              <h3 className="w-max my-auto text-center text-xl font-medium text-cyan-900">
                Paso {index + 1}
              </h3>
              <p className=" w-full max-w-lg my-auto text-lg font-normal text-cyan-900">
                {paso.detalle}
              </p>
              <button onClick={() => deleteStepQuery(paso.idPaso)}>
                  <img src={imgDelete} alt="eliminar" className=" w-6 mr-2" />
                </button>
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
            onChange={handleChangeDetail}
          />
        </div>
        <button className=" block mx-auto my-3" onClick={addPaso}>
          <img src={imgDone} alt="hecho" />
        </button>
      </ModalWrapper>
      <Loading loading={loading} />
    </div>
  );
};

export default Plan;
