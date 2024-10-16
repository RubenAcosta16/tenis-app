import { Image } from "@nextui-org/react";

function AdTeniComp() {
  return (
    <div className="mt-[30px] w-[80%] mx-auto flex flex-col justify-center items-center glass p-10 relative">
      <div className="flex flex-row justify-center items-center bg-emerald-950 h-[290px] w-[220px] relative">
        <Image
          className=" object-cover rotate-[320deg]"
          src="teni4.png" // Ruta de la imagen (puede ser interna o externa)
          alt="Tenis negro" // Texto alternativo
          width={250} // Ancho de la imagen en píxeles
          height={250} // Altura de la imagen en píxeles
        />
        {/* button yellow */}

        <div className="flex flex-col absolute top-[15px] left-[-27px] gap-3 ">
          <div className="w-[57px] h-[57px] glass"></div>
          <div className="w-[55px] h-[55px] glass"></div>
          <div className="w-[55px] h-[55px] glass"></div>
          <div className="w-[55px] h-[55px] glass"></div>
        </div>
      </div>
      teni verde
    </div>
  );
}

export default AdTeniComp;
