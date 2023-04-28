import { LoadingProps } from '../models'
import gifLoading from "../assets/loading.gif"

const Loading = ({loading}:LoadingProps):JSX.Element => {
    if (!loading) return <></>;
    return (
      <div className="fixed left-0 top-0 w-screen h-screen z-40 bg-black bg-opacity-30 backdrop-blur">
        <div
          className={`shadow-3xl mx-auto my-auto p-4 w-screen max-w-sm max-h-max absolute inset-0 bg-white rounded-3xl border`}
        >
          <div className="flex mb-2">
          </div>
          <div>
            <img src={gifLoading} alt="" />
          </div>
        </div>
      </div>
    );
  };

export default Loading