import React from "react";
import imgMore from "../../assets/more.png";
import { Family, FamilyMember, ROUTES, FakeFamilyMember } from "../../models";
import { useFamilyContext } from "../../context/FamilyProvider";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
    const navigate = useNavigate()
  const family = useFamilyContext();
  const familyMembers: Array<FamilyMember> = [];
  return (
    <div className=" h-screen">
      <div className=" max-w-3xl mx-auto bg-sky-300 mb-12 py-16 rounded-b-full">
        <h2 className="text-center text-2xl font-medium text-cyan-900">
          Cod. Familiar
        </h2>
        <h3 className=" mt-6 text-center text-3xl font-medium text-slate-50">
          {family.cod_familia}
        </h3>
      </div>
      <div className=" flex mx-auto w-max mb-16">
        <p className="text-xl font-medium text-cyan-900 mr-3">
          Nombre Familia:
        </p>
        <p className="text-xl font-medium text-cyan-900">{family.nombre}</p>
      </div>
      {familyMembers.length == 0 ? (
        <div>

          <button className="block p-6 mx-auto bg-yellow-400/80 rounded-full shadow-xl hover:scale-110 transition-transform"
          onClick={()=>navigate(ROUTES.familyRoles)}>
            <img src={imgMore} alt="boton mas" />
          </button>

          <h2 className=" mt-6 text-center text-4xl font-medium text-cyan-900">
            De "Click" para emprezar
          </h2>
        </div>
      ) : (
        <div className=" px-4">
          <h2 className="pb-6 text-center text-2xl font-medium text-cyan-900">Integrantes</h2>
          <div className=" p-4 bg-slate-100 mx-auto rounded-2xl shadow-xl">
            <table className=" mx-auto border-separate border-spacing-x-20">
              <tbody>
                {familyMembers.map(member=>{
                    return(
                        <tr>
                            <td className="text-xl font-medium text-cyan-900">{member.nombre}</td>
                            <td className="text-xl font-medium text-yellow-400">{member.rol}</td>
                        </tr>
                    )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
