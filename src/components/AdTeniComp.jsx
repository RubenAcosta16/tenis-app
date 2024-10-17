import { Image, Button } from "@nextui-org/react";

function AdTeniComp() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-[20px]  justify-center items-center overflow-hidden xl:w-[70%] mx-auto mt-[30px]">
      <div className="w-full">
        <div className="w-[60%] md:w-[70%] mx-auto flex flex-col gap-[10px]">
          <p className="text-[18px] md:text-[22px] font-medium ml-5 mt-[10px] text-cyan-400">
          Catalogs
          </p>
          <p className="text-[16px] md:text-[18px]">
          Browse through our wide selection of catalogs to discover the latest trends in sneakers. From exclusive collections to classic designs, our catalogs are curated to help you find the perfect pair for every style. Stay ahead of the game and explore what’s new in the sneaker world!
          </p>
        </div>
      </div>
{/* /////////////////////////////////////////// */}
      <div className="mt-[30px] mx-auto flex flex-col justify-center items-center glass px-10 py-4 relative ">
        <div className="flex flex-col justify-center items-center bg-emerald-950 h-[340px] w-[270px] relative rounded-2xl">
          <Image
            className=" object-cover rotate-[320deg] relative right-5 "
            src="teni4.png" // Ruta de la imagen (puede ser interna o externa)
            alt="Tenis negro" // Texto alternativo
            width={320} // Ancho de la imagen en píxeles
            height={320} // Altura de la imagen en píxeles
          />
          {/* button yellow */}
          <Button
            className="py-5 px-10 text-[16px] font-bold relative bottom-6 left-5 rounded-full bg-yellow-500"
            color="warning"
            variant="solid"
            size="lg"
          >
            Buy Now
          </Button>

          <div className="flex flex-col absolute top-[15px] left-[-27px] gap-3 ">
            <div className="w-[57px] h-[57px] glass">
              <Image
                className=" object-cover  relative bottom-3"
                src="teni4.png" // Ruta de la imagen (puede ser interna o externa)
                alt="Tenis negro" // Texto alternativo
                width={70} // Ancho de la imagen en píxeles
                height={70} // Altura de la imagen en píxeles
              />
            </div>
            <div className="w-[55px] h-[55px] glass">
              <Image
                className=" object-cover  relative bottom-3"
                src="teni4.png" // Ruta de la imagen (puede ser interna o externa)
                alt="Tenis negro" // Texto alternativo
                width={70} // Ancho de la imagen en píxeles
                height={70} // Altura de la imagen en píxeles
              />
            </div>
            <div className="w-[55px] h-[55px] glass">
              <Image
                className=" object-cover  relative bottom-3"
                src="teni4.png" // Ruta de la imagen (puede ser interna o externa)
                alt="Tenis negro" // Texto alternativo
                width={70} // Ancho de la imagen en píxeles
                height={70} // Altura de la imagen en píxeles
              />
            </div>
            <div className="w-[55px] h-[55px] glass">
              <Image
                className=" object-cover  relative bottom-3"
                src="teni4.png" // Ruta de la imagen (puede ser interna o externa)
                alt="Tenis negro" // Texto alternativo
                width={70} // Ancho de la imagen en píxeles
                height={70} // Altura de la imagen en píxeles
              />
            </div>
          </div>
        </div>
        {/* teni verde */}
      </div>
    </div>
  );
}

export default AdTeniComp;
