import { Image } from "@nextui-org/react";

import { FaArrowDownLong } from "react-icons/fa6";

const AdTeni = () => {
  return (
    <div className="w-full flex flex-col  justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col  justify-center items-center h-[120px] mt-[20px] relative  mt-[80px] mb-[90px]">
        <Image
          className="overflow-x-hidden object-cover rotate-[-15deg] mx-auto relative left-[10%]"
          src="/teni4.png" // Ruta de la imagen (puede ser interna o externa)
          alt="Tenis negro" // Texto alternativo
          width={400} // Ancho de la imagen en píxeles
          height={400} // Altura de la imagen en píxeles
        />

        <div className="h-[200px] w-[200px] bg-cyan-700 absolute top-0 left-[30%] rounded-xl" />

        <p className="text-white font-medium text-[16px] absolute z-10 top-[170px] left-[50%] text-cyan-400">
          Best Seller{" "}
          <FaArrowDownLong className="inline rotate-[270deg] ml-1 text-[16px]" />
        </p>
      </div>
      <p className="text-[22px] font-medium ml-5 mt-[10px]">Summer <span className="text-cyan-400">Collections</span>
      </p>
    </div>
  );
};

export default AdTeni;
