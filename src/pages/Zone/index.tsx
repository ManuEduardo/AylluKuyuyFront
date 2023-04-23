import React, { useEffect, useState } from "react";
import imgMore from "../../assets/more.png";
import imgDone from "../../assets/check.png";
import imgDelete from "../../assets/delete.png";
import { callAllZones, addZone, deleteZone } from "./services";
import { ZoneModel, EmptyZone } from "../../models";
import { Loading, ModalWrapper } from "../../components";
import { useFamilyContext } from "../../context/FamilyProvider";

const Zone = (): JSX.Element => {
  const family = useFamilyContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [zones, setZones] = useState<Array<ZoneModel>>([EmptyZone]);
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const [newName, setNewName] = useState<string>("");
  const [newDetaiil, setNewDetaiil] = useState<string>("");
  const [selected, setSelected] = useState("Prioridad");

  useEffect(() => {
    queryAllZones();
  }, []);

  const queryAllZones = async () => {
    setLoading(true);
    await callAllZones(family.cod_familia)
      .then((data) => {
        setZones(data);
      })
      .finally(() => setLoading(false));
  };

  const addZoneQuery = async () => {
    setLoading(true);
    await addZone(family.cod_familia, newName, newDetaiil, selected)
      .then((data) => {
        setZones(zones.concat(data));
        setIsVisibleModal(false);
      })
      .finally(() => setLoading(false));
  };
  const deleteZoneQuery = async (id: number) => {
    setLoading(true)
    await deleteZone(id).then(() =>{
      setZones(zones.filter(zone=>zone.idruta != id))
    }).finally(() => setLoading(false));
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleChangeDetail = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setNewDetaiil(event.target.value);
  };
  const handleChangeSelected = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-medium text-cyan-900">
        Zonas de encuentro
      </h2>
      <ul
        role="list"
        className=" max-w-lg mx-auto marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400"
      >
        {zones.map((zone) => {
          return (
            <li className=" mx-4" key={zone.idruta}>
              <div className=" w-full mx-1 my-4 flex justify-between ">
                <p className=" w-24 my-auto text-cyan-900">{zone.nombre}</p>
                <p className=" w-28 my-auto text-cyan-900">{zone.detalle}</p>
                <p className=" mr-6 my-auto text-center text-yellow-600">{zone.tipo}</p>
                <button onClick={() => deleteZoneQuery(zone.idruta)}>
                  <img src={imgDelete} alt="eliminar" className=" w-6 mr-2" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h2 className=" mt-16 text-center text-xl font-medium text-cyan-900">
        Agregar piso
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
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">
              Nombre
            </p>
            <input
              type="string"
              name=""
              id=""
              className=" block p-2 my-3 w-60 text-lg text-center font-semibold rounded-2xl shadow-lg"
              placeholder="nombre"
              onChange={handleChangeName}
            />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">
              Detalle
            </p>
            <textarea
              name=""
              id=""
              className=" block p-3 h-20 w-60 resize-none text-lg text-center font-semibold rounded-2xl shadow-lg"
              placeholder="Detalle"
              onChange={handleChangeDetail}
            />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">
              Tipo
            </p>
            <select
              name="select"
              className=" w-60 p-3 my-3 text-center font-semibold rounded-2xl shadow-lg"
              value={selected}
              onChange={handleChangeSelected}
            >
              <option value="Prioridad">Prioridad</option>
              <option value="Principal">Principal</option>
              <option value="noPrioridad">No prioridad</option>
            </select>
          </div>
          <button className=" block mx-auto my-3" onClick={addZoneQuery}>
            <img src={imgDone} alt="hecho" />
          </button>
        </div>
      </ModalWrapper>
      <Loading loading={loading} />
    </div>
  );
};

export default Zone;
