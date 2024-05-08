// components/Loader.js
import Image from "next/image";
import loader from "../../../public/loader.png"
const Loader = () => {
    return <div className="loader ">
        <div>
        <div className="flex justify-center items-center ">
        <div className="w-24 h-24 bg-white rounded-md relative mb-10">
          <div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-8 border-slate-500"></div>
          </div>
        
        </div>
        <div className="">
        <div><p>Loading.....</p></div>
        </div>
        
        </div>
        </div>
    </div>;
  };
  
  export default Loader;
  