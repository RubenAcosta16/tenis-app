import { Image } from "@nextui-org/react";

import { FaArrowDownLong } from "react-icons/fa6";

const AdTeni = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[20px]  justify-center items-center overflow-hidden xl:w-[70%] mx-auto md:mt-[30px]">
      <div className="w-full flex flex-col  justify-center items-center overflow-hidden">
        <div className="w-full flex flex-col w-[70%] mx-auto justify-center items-center h-[120px] mt-[20px] relative  mt-[80px] mb-[90px]">
          <Image
            className="overflow-x-hidden object-cover rotate-[-15deg] mx-auto relative left-[5%]"
            src="/teni4.png" // Ruta de la imagen (puede ser interna o externa)
            alt="Tenis negro" // Texto alternativo
            width={400} // Ancho de la imagen en píxeles
            height={400} // Altura de la imagen en píxeles
          />

          <div className="h-[200px] w-[200px] bg-cyan-700 absolute top-0 left-[10%] md:left-[35%] rounded-xl" />

          <p className="text-white font-medium text-[16px] absolute z-10 top-[170px] left-[50%] text-cyan-400">
            Best Seller{" "}
            <FaArrowDownLong className="inline rotate-[270deg] ml-1 text-[16px]" />
          </p>
        </div>
        <p className="text-[22px] font-medium ml-5 mt-[10px]">
          Summer <span className="text-cyan-400">Collections</span>
        </p>
      </div>

      <div className="w-full">
        <div className="w-[60%] md:w-[70%] mx-auto flex flex-col gap-[10px]">
          <p className="text-[18px] md:text-[22px] font-medium ml-5 mt-[10px] text-yellow-500">
            2024 Collection
          </p>
          <p className="text-[16px] md:text-[18px]">
            Get ready for summer with our new sneaker collection. Inspired by
            sunny days, these sneakers blend style and comfort so you can enjoy
            every step. With vibrant colors and lightweight materials, they’re
            perfect for any occasion, whether it’s a stroll through the city or
            a day at the beach. Find the pair that will be your go-to this
            season!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdTeni;
