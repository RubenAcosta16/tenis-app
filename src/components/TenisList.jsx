import TenisCard from "./TenisCard";

const sneakers = [
  {
    nombre: "Nike Air Max 270",
    precio: 150,
    valoracion: 4.0, // Valoración como número
    bestSeller: false, // No es un best seller
    imagen: "/teni2.png",
  },
  {
    nombre: "Nike Air Force 1",
    precio: 90,
    valoracion: 5.0,
    bestSeller: true, // Es un best seller
    imagen: "/teni2.png",
  },
  {
    nombre: "Nike ZoomX Vaporfly NEXT% 2",
    precio: 250,
    valoracion: 4.5,
    bestSeller: false,
    imagen: "https://example.com/nike-zoomx-vaporfly-next2.png",
  },
  {
    nombre: "Nike React Infinity Run Flyknit",
    precio: 160,
    valoracion: 4.0,
    bestSeller: true, // Es un best seller
    imagen: "https://example.com/nike-react-infinity-run.png",
  },
  {
    nombre: "Nike Blazer Mid '77",
    precio: 100,
    valoracion: 3.5,
    bestSeller: false,
    imagen: "https://example.com/nike-blazer-mid77.png",
  },
  {
    nombre: "Nike Air Max 90",
    precio: 130,
    valoracion: 4.5,
    bestSeller: true, // Es un best seller
    imagen: "https://example.com/nike-air-max-90.png",
  },
  {
    nombre: "Nike Court Vision Low",
    precio: 75,
    valoracion: 4.0,
    bestSeller: false,
    imagen: "https://example.com/nike-court-vision-low.png",
  },
  {
    nombre: "Nike SB Dunk Low",
    precio: 110,
    valoracion: 5.0,
    bestSeller: true, // Es un best seller
    imagen: "https://example.com/nike-sb-dunk-low.png",
  },
  {
    nombre: "Nike Air Huarache",
    precio: 120,
    valoracion: 4.0,
    bestSeller: false,
    imagen: "https://example.com/nike-air-huarache.png",
  },
  {
    nombre: "Nike Air Jordan 1 Retro",
    precio: 180,
    valoracion: 4.5,
    bestSeller: true, // Es un best seller
    imagen: "https://example.com/nike-air-jordan-1-retro.png",
  },
  {
    nombre: "Nike ACG Air Mowabb",
    precio: 160,
    valoracion: 4.0,
    bestSeller: false,
    imagen: "https://example.com/nike-acg-air-mowabb.png",
  },
];

const TenisList = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-4 px-5 mt-5">
      {sneakers.map((sneacker,i) => (
        <TenisCard sneacker={sneacker} key={i}></TenisCard>
      ))}
    </div>
  );
};

export default TenisList;
