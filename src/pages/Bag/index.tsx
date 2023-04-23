import React, { useEffect, useState } from "react";
import imgDelete from "../../assets/delete.png";
import imgMore from "../../assets/more.png";
import imgDone from "../../assets/check.png";
import { useFamilyContext } from "../../context/FamilyProvider";
import { Item, EmptyItem } from "../../models";
import { ModalWrapper, Loading } from "../../components";
import { addItem, callAllBag } from "./services";

const Bag = (): JSX.Element => {
  const family = useFamilyContext();
  const [items, setItems] = useState<Array<Item>>([EmptyItem])
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>("");
  const [newCaducable, setCaducable] = useState<boolean>(false);
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    queryAllBag();
  }, []);

  const queryAllBag = async () => {
    setLoading(true);
    await callAllBag(family.cod_familia)
      .then((data) => {
        setItems(data);
      })
      .finally(() => setLoading(false));
  };

  const deleteItem = () => {

  };
  const addItemQuery = async () => {
    setLoading(true);
    await addItem(family.cod_familia, newName, newDate, newCaducable)
      .then((data) => {
        setItems(items.concat(data));
        setIsVisibleModal(false);
      })
      .finally(() => setLoading(false));
  };
  const checkItemQuery = async () => {
    
  }
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const handleChangeCaduce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaducable(event.target.checked);
  };
  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewDate(event.target.value.slice(0, 10));
  };
  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-5xl font-medium text-cyan-900">
        Mochila
      </h2>
      <div className=" mx-2">
      <ul
        role="list"
        className=" max-w-lg mx-auto marker:text-sky-400 list-disc py-1 pl-5 space-y-3 text-slate-400 bg-slate-300 rounded-3xl"
      >
        {items.map((item) => {
          return (
            <li className=" mx-4" key={item.id_item}>
              <div className=" w-full mx-3 my-5 flex justify-between ">
                <p className=" w-24 my-auto font-bold text-cyan-900">{item.nombre}</p>
                <p
                  className={`w-28 my-auto text-center font-medium ${
                    item.caduco ? "text-red-600" : "text-cyan-900"
                  }`}
                >
                  {item.fecha=="null"?"-":item.fecha}
                </p>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className=" block my-3 rounded-full shadow-xl w-5 h-5 bg-gray-100 border-gray-600 focus:ring-blue-500"
                  disabled={false}
                />
                <button onClick={deleteItem}>
                  <img src={imgDelete} alt="eliminar" className=" w-6 mr-2" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
      <h2 className=" mt-16 text-center text-xl font-medium text-cyan-900">
        Agregar objeto
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
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Caducable</p>
            <input
            type="checkbox"
            name=""
            id=""
            className=" block my-3 mx-auto rounded-full shadow-xl w-5 h-5 bg-gray-100 border-gray-300 focus:ring-blue-500"
            placeholder="rol"
            onChange={handleChangeCaduce}
          />
          </div>
          {newCaducable ? <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">
              Fecha
            </p>
            <input
              type="datetime-local"
              name=""
              id=""
              className=" block p-2 my-3 w-60 text-lg text-center font-semibold rounded-2xl shadow-lg"
              placeholder="nombre"
              onChange={handleChangeDate}
            />
          </div>:<></>}
          <button className=" block mx-auto my-3" onClick={addItemQuery}>
            <img src={imgDone} alt="hecho"/>
          </button>
        </div>
      </ModalWrapper>
      <Loading loading={loading} />
    </div>
  );
};

export default Bag;
