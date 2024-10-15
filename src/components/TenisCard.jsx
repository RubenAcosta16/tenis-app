import { Image } from "@nextui-org/react";
import { CiHeart } from "react-icons/ci";

const TenisCard = ({sneacker}) => {
  return (
    <div
      
      className="flex flex-col  bg-[#222] py-5 px-4 rounded-2xl  relative"
    >
      <CiHeart className="absolute text-[30px] top-3 left-3" />
      <div className="flex justify-center items-center relative z-10 h-[120px] ">
        <Image
          className=" object-cover "
          src={sneacker.imagen} // Ruta de la imagen (puede ser interna o externa)
          alt="Tenis negro" // Texto alternativo
          width={180} // Ancho de la imagen en píxeles
          height={180} // Altura de la imagen en píxeles
        />
      </div>
      <p className="text-[16px] font-medium">{sneacker.nombre}</p>
      <p className="text-[16px]font-normal">${sneacker.precio}</p>
    </div>
  );
};

export default TenisCard;
