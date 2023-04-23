import React, { useState } from "react";
import { Family, FamilyMember, ROUTES, FakeFamilyMember } from "../../models";
import { ModalWrapper } from "../../components";
import { useFamilyContext } from "../../context/FamilyProvider";
import imgDelete from "../../assets/delete.png";
import imgMore from "../../assets/more.png";

const FamilyPage = (): JSX.Element => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const family = useFamilyContext();
  const familyMembers: Array<FamilyMember> = [FakeFamilyMember];
  const deleteFamily = () => {};
  const addMember = () =>{
    setIsVisibleModal(false)
  }

  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-4xl font-medium text-cyan-900">
        Familia
      </h2>

      <table className=" mx-auto rounded-3xl overflow-hidden">
        <thead className=" bg-cyan-900">
          <tr>
            <th>
              <p className=" px-2 py-3 text-center text-sm text-slate-50">
                Dni
              </p>
            </th>
            <th>
              <p className=" px-2 py-3 text-center text-sm text-slate-50">
                Nombre
              </p>
            </th>
            <th>
              <p className=" px-2 py-3 text-center text-sm text-slate-50">
                Teléfono
              </p>
            </th>
            <th>
              <p className=" px-2 py-3 text-center text-sm text-slate-50">
                Rol
              </p>
            </th>
            <th>
              <p className=" px-2 py-3 text-center text-sm text-slate-50">
                Discapacidad
              </p>
            </th>
          </tr>
        </thead>

        <tbody className=" bg-sky-300">
          {familyMembers.map((member) => {
            //<td><button><img src={imgDelete} alt="" /></button></td>
            const discapacitado = member.discapacidad ? "Si" : "No";
            return (
              <tr key={member.dni}>
                <td>
                  <p className=" px-2 py-3 text-center text-xs">{member.dni}</p>
                </td>
                <td>
                  <p className=" px-2 py-3 text-center text-xs">
                    {member.nombre}
                  </p>
                </td>
                <td>
                  <p className=" px-2 py-3 text-center text-xs">
                    {member.telefono}
                  </p>
                </td>
                <td>
                  <p className=" px-2 py-3 text-center text-xs">{member.rol}</p>
                </td>
                <td className="pt-2 flex justify-between p-1">
                  <p className=" pl-5 my-auto text-center text-xs">
                    {discapacitado}{" "}
                  </p>
                  <button onClick={deleteFamily}>
                    <img src={imgDelete} alt="eliminar" className=" w-6 mr-2" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        className="block p-4 mx-auto mt-16 bg-yellow-400/80 rounded-full shadow-xl hover:scale-110 transition-transform"
        onClick={() => null}
      >
        <img
          src={imgMore}
          alt="boton mas"
          className=" w-4"
          onClick={() => setIsVisibleModal(true)}
        />
      </button>
      <h2 className=" mt-6 text-center text-xl font-medium text-cyan-900">
        "Click" para agregar a un familiar
      </h2>
      
      <ModalWrapper
        visible={isVisibleModal}
        onClose={() => setIsVisibleModal(false)}
        title=""
      >
        <div>
          <h3 className=" mt-6 mb-12 text-center text-4xl font-medium text-cyan-900">
            Nuevo familiar
          </h3>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Nombre</p>
            <input
            type="string"
            name=""
            id=""
            className=" block p-2 my-3 text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="nombre"
          />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Apellido</p>
            <input
            type="string"
            name=""
            id=""
            className=" block p-2 my-3 text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="apellido"
          />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Dni</p>
            <input
            type="number"
            name=""
            id=""
            className=" block p-2 my-3 text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="dni"
          />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Teléfono</p>
            <input
            type="string"
            name=""
            id=""
            className=" block p-2 my-3 text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="telefono"
          />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Rol</p>
            <input
            type="string"
            name=""
            id=""
            className=" block p-2 my-3 text-lg text-center font-semibold rounded-2xl shadow-lg"
            placeholder="rol"
          />
          </div>
          <div className=" flex mx-auto justify-between">
            <p className=" my-auto text-center text-lg font-medium text-cyan-900">Discapacidad</p>
            <input
            type="checkbox"
            name=""
            id=""
            className=" block my-3 mr-28 rounded-full shadow-xl w-5 h-5 bg-gray-100 border-gray-300 focus:ring-blue-500"
            placeholder="rol"
          />
          </div>
          <button className="block my-6 mx-auto text-lg font-bold py-3 px-6 bg-cyan-900 rounded-lg hover:bg-yellow-300 text-slate-50 shadow-md shadow-cyan-700" onClick={addMember}>
            Agregar
          </button>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default FamilyPage;
