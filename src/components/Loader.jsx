import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="bg-layout-bg h-screen w-full flex items-center justify-center ">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#3b82f6"
        ariaLabel="oval-loading"
        wrapperStyle={{ color: "#3b82f6" }}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
