import { useState, useEffect } from "react";
import imgMore from "../../assets/more.png";
import { Loading, ModalWrapper } from "../../components";
import { callFamilyHome, callProductos } from "./services";
import { EmptyItem, FamilyMember, Item, ROUTES } from "../../models";
import {
  useFamilyContext,
  useSetFamilyContext,
} from "../../context/FamilyProvider";
import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
  const navigate = useNavigate();
  const family = useFamilyContext();
  const setFamily = useSetFamilyContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisibleProducts, setIsVisibleProducts] = useState<boolean>(false);
  const [familyMembers, setFamilyMembers] = useState<Array<FamilyMember>>([]);
  const [products, setProducts] = useState<Array<Item>>([EmptyItem]);

  useEffect(() => {
    queryFamily();
    queryProducts();
  }, []);

  const queryFamily = async () => {
    setLoading(true);
    await callFamilyHome()
      .then((data) => {
        setFamily({
          codigo_familiar: data.codigo_familiar,
          contrasena: family.contrasena,
          nombre: data.nombre_familia,
        });
        setFamilyMembers(data.integrantes);
      })
      .finally(() => setLoading(false));
  };

  const queryProducts = async () => {
    setLoading(true);
    await callProductos()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        setLoading(false);
        products.length != 0
          ? setIsVisibleProducts(true)
          : setIsVisibleProducts(false);
      });
  };

  return (
    <div className=" h-screen">
      <div className=" max-w-3xl mx-auto bg-sky-300 mb-12 py-16 rounded-b-full">
        <h2 className="text-center text-2xl font-medium text-cyan-900">
          Cod. Familiar
        </h2>
        <h3 className=" mt-6 text-center text-3xl font-medium text-slate-50">
          {family.codigo_familiar}
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
          <button
            className="block p-6 mx-auto bg-yellow-400/80 rounded-full shadow-xl hover:scale-110 transition-transform"
            onClick={() => navigate(ROUTES.familyRoles)}
          >
            <img src={imgMore} alt="boton mas" />
          </button>

          <h2 className=" mt-6 text-center text-4xl font-medium text-cyan-900">
            De "Click" para emprezar
          </h2>
        </div>
      ) : (
        <div className=" px-4">
          <h2 className="pb-6 text-center text-2xl font-medium text-cyan-900">
            Integrantes
          </h2>
          <div className=" p-4 max-w-xl bg-slate-100 mx-auto rounded-2xl shadow-xl">
            <table className=" mx-auto border-separate border-spacing-x-10">
              <tbody>
                {familyMembers.map((member, i) => {
                  return (
                    <tr key={i}>
                      <td className="text-xl font-medium text-cyan-900">
                        <p className=" p-2">{member.nombre}</p>
                      </td>
                      <td className="text-xl font-medium text-yellow-400">
                        <p className=" p-2">{member.roles}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <ModalWrapper
        visible={isVisibleProducts}
        onClose={() => setIsVisibleProducts(false)}
      >
        <div className=" px-4">
          <h2 className="pb-6 text-center text-2xl font-medium text-cyan-900">
            Pronto a Caducar
          </h2>
          <div className=" p-4 bg-slate-100 mx-auto rounded-2xl shadow-xl">
            <table className=" mx-auto border-separate border-spacing-x-5">
              <tbody>
                {products.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="text-xl font-medium text-cyan-900">
                        <p className=" p-2">{item.nombre}</p>
                      </td>
                      <td className="text-xl font-medium text-red-400">
                        <p className=" p-2 w-max">{item.fecha}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </ModalWrapper>
      <Loading loading={loading} />
    </div>
  );
};

export default Home;
