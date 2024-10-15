import { Image, Button } from "@nextui-org/react";

import { FaArrowDownLong } from "react-icons/fa6";

const AdTeni = () => {
  return (
    <div className="w-full flex  justify-center items-center h-[120px] mt-[20px] mb-[90px] relative mb-[150px] mt-[20px]">
      <Image
        className="overflow-x-hidden object-cover rotate-[-15deg] mx-auto"
        src="/teni4.png" // Ruta de la imagen (puede ser interna o externa)
        alt="Tenis negro" // Texto alternativo
        width={400} // Ancho de la imagen en píxeles
        height={400} // Altura de la imagen en píxeles
      />

      {/* <Button color="primary" variant="ghost">
        Get 
      </Button> */}

      <p className="text-white font-medium text-[16px] absolute z-10 top-48 left-[50%] text-cyan-400">Best Seller  <FaArrowDownLong className="inline rotate-[270deg] ml-1 text-[16px]"/></p>
    </div>
  );
};

export default AdTeni;
