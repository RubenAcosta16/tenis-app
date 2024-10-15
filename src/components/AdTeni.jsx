import { Image, Button } from "@nextui-org/react";

const AdTeni = () => {
  return (
    <div className="w-full flex  justify-center items-center h-[120px] mt-[20px] mb-[90px] relative">
      <Image
        className="overflow-x-hidden object-cover rotate-[-15deg] mx-auto"
        src="/teni4.png" // Ruta de la imagen (puede ser interna o externa)
        alt="Tenis negro" // Texto alternativo
        width={400} // Ancho de la imagen en píxeles
        height={400} // Altura de la imagen en píxeles
      />

      <Button color="primary" variant="ghost">
        Get access
      </Button>
    </div>
  );
};

export default AdTeni;
