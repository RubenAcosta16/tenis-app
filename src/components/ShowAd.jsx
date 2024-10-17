import { Image } from "@nextui-org/react";

const ShowAd = () => {
  return (
    <div className="bg-[#b60000] w-[90%]  md:w-[390px] h-[120px] mx-auto rounded-3xl flex flex-row justify-between items-center text-white px-6 mt-[20px]">
      <Image
        className="  object-cover rotate-[-5deg] mt-[-20px] ml-[-20px]"
        src="/teni3.png" // Ruta de la imagen (puede ser interna o externa)
        alt="Tenis negro" // Texto alternativo
        width={220} // Ancho de la imagen en píxeles
        height={220} // Altura de la imagen en píxeles
      />
      <div className="flex flex-col justify-center items-center ">
        <p className="text-[20px] font-thin text-zinc-300">Discount 20%.</p>
        <p className="text-[12px] font-thin text-zinc-400">Learn More</p>
      </div>
    </div>
  );
};

export default ShowAd;

// <div className="flex flex-col justify-center items-center text-white">
// <div
//   className=" grid  w-full Inter justify-center items-center  px-5 Inter"
//   style={{ gridTemplateColumns: "20% 80%" }}
// >
//   {/* text */}
//   <p className="text-xl font-light ">JUST DO IT.</p>
//   {/* teni */}
//   <Image
//     className=" grid-c object-cover rotate-[-15deg]"
//     src="/teni2.png" // Ruta de la imagen (puede ser interna o externa)
//     alt="Tenis negro" // Texto alternativo
//     width={500} // Ancho de la imagen en píxeles
//     height={300} // Altura de la imagen en píxeles
//   />
// </div>
// {/* another text */}
// <div className="flex flex-col justify-center items-baseline font-thin">
//   <p>NIKE AIR MAX </p>
//   <p>PRE-DAY</p>

//   <p className="font-medium">$160</p>
// </div>
// </div>
