import { useEffect, useState } from "react";
import { Home, EmptyHome, ImageType, Croquis, EmptyCroquis } from "../../models";
import imgMore from "../../assets/more.png";
import imgDone from "../../assets/check.png";
import imgCamera from "../../assets/camara.png";
import { callImage, callInfoHouse, sendCroquis } from "./services";
import { useFamilyContext } from "../../context/FamilyProvider";
import { ModalWrapper, Loading } from "../../components";

const MyHome = (): JSX.Element => {
  const [myHome, setMyHome] = useState<Home>(EmptyHome)
  const [isVisibleUpPhoto, setIsVisibleUpPhoto] = useState<boolean>(false);
  const [isVisibleConfirmPhoto, setIsVisibleConfirmPhoto] = useState<boolean>(false);
  const [isVisibleExample, setIsVisibleExample] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [mapa, setMapa] = useState<File>();
  const [imageType, setImageType] = useState<ImageType>();
  const [croquis, setCroquis] = useState("");
  const [existPhoto, setExistPhoto] = useState<boolean>(false);

  const family = useFamilyContext();
  useEffect(() => {
    queryAllHomeInfo();
    queryImage();
  }, []);


  const queryImage = async () => {
    await callImage(family.codigo_familiar)
      .then((data) => {
        if (data.size !== 0){
          setExistPhoto(true)
          setCroquis(URL.createObjectURL(data));
        }
      })
  }

  const queryAllHomeInfo = async () => {
    setLoading(true);
    await callInfoHouse(family.codigo_familiar)
      .then((data: Home) => {
        setMyHome(data);
      })
      .finally(() => setLoading(false));
  };

  const addCroquisQuery = async () => {
    setLoading(true);
    await sendCroquis(family.codigo_familiar, mapa)
      .then((data) => {
        setCroquis(URL.createObjectURL(data));
        setExistPhoto(true)
        setIsVisibleConfirmPhoto(false)
        setIsVisibleUpPhoto(false)
      })
      .finally(() => setLoading(false));
  }

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files?.[0])
    const file = event.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      setMapa(event.target.files?.[0])
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageType({ file, preview: reader.result as string });

      }
    }
    setIsVisibleConfirmPhoto(true)

  }

  const closeModal = () => {
    setIsVisibleUpPhoto(false);
  };
  return (
    <div>
      <h2 className=" mt-6 mb-12 text-center text-4xl font-medium text-cyan-900">
        Mi Hogar
      </h2>
      <div className=" px-4">
        <div className=" p-4 bg-slate-100 mx-auto rounded-2xl shadow-xl">
          <table className=" mx-auto border-separate border-spacing-x-12 border-spacing-y-6">
            <tbody>
              <tr>
                <td className="text-xl font-medium text-cyan-900">Cantidad</td>
                <td className="text-xl text-right font-medium text-yellow-400">
                  {myHome.cantidad}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-medium text-cyan-900">Código</td>
                <td className="text-xl text-right font-medium text-yellow-400">
                  {myHome.codigo_familiar}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-medium text-cyan-900">Lider</td>
                <td className="text-xl text-right font-medium text-yellow-400">
                  {myHome.lider}
                </td>
              </tr>
              <tr>
                <td className="text-xl font-medium text-cyan-900">Familia</td>
                <td className="text-xl text-right font-medium text-yellow-400">
                  {myHome.nombre_familia}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {!existPhoto ? (
        <><h2 className=" mt-16 text-center text-xl font-medium text-cyan-900">Agregar piso</h2><button
          className="block p-4 mx-auto mt-6 bg-yellow-400/80 rounded-full shadow-xl hover:scale-110 transition-transform"
          onClick={() => setIsVisibleUpPhoto(true)}
        >
          <img
            src={imgMore}
            alt="boton mas"
            className=" w-4" />
        </button></>
      ): null}
      <img src={croquis} className="mt-10" />
      <ModalWrapper visible={isVisibleUpPhoto} onClose={closeModal} title="">
        <div>
          <h3 className=" mt-6 mb-12 text-center text-3xl font-medium text-cyan-900">
            Nuevo piso
          </h3>

          <p className=" my-8 text-center text-base font-medium text-cyan-900">
            Suba o tome la foto de un dibujo de su casa
          </p>

          <div className=" flex justify-between mb-3 px-4 gap-16">
            <button
              className="block p-4 mx-auto my-auto bg-yellow-400/80 rounded-full shadow-xl hover:scale-110 transition-transform"
              onClick={() => null}
            >
              <img
                src={imgCamera}
                alt="boton camara"
                className=" w-4"
                onClick={() => setIsVisibleUpPhoto(true)}
              />
            </button>
            <input
              type="file"
              name="myImage"
              accept="image/png, image/gif, image/jpeg"
              className="block w-min text-sm text-slate-500 my-auto
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-yellow-400 file:text-cyan-900
      hover:file:bg-cyan-500"
              onChange={handleChangeFile}
            />
          </div>
          <a
            className="block mx-auto text-center text-sm font-medium text-yellow-300 underline decoration-yellow-500"
            onClick={() => setIsVisibleExample(true)}
          >
            Ejemplo
          </a>
        </div>
      </ModalWrapper>

      <ModalWrapper
        visible={isVisibleExample}
        onClose={() => setIsVisibleExample(false)}
      >
        <div>
          <img src="./mapa.jpg" alt="" />
        </div>
      </ModalWrapper>
      <ModalWrapper
        visible={isVisibleConfirmPhoto}
        onClose={() => setIsVisibleConfirmPhoto(false)}
      >
        <div>
          {imageType?.preview && <img src={imageType.preview} />}
          <button className=" block mx-auto my-3" onClick={addCroquisQuery}>
            <img src={imgDone} alt="hecho" />
          </button>
        </div>
      </ModalWrapper>
      <Loading loading={loading} />
    </div>
  );
};

export default MyHome;
