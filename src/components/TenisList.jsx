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
    imagen: "/teni3.png",
  },
  {
    nombre: "Nike ZoomX Vaporfly NEXT% 2",
    precio: 250,
    valoracion: 4.5,
    bestSeller: false,
    imagen:  "/teni3.png",
  },
  {
    nombre: "Nike React Infinity Run Flyknit",
    precio: 160,
    valoracion: 4.0,
    bestSeller: true, // Es un best seller
    imagen:  "/teni4.png",
  },
  {
    nombre: "Nike Blazer Mid '77",
    precio: 100,
    valoracion: 3.5,
    bestSeller: false,
    imagen: "/teni3.png",
  },
  {
    nombre: "Nike Air Max 90",
    precio: 130,
    valoracion: 4.5,
    bestSeller: true, // Es un best seller
    imagen:  "/teni2.png",
  },
  {
    nombre: "Nike Court Vision Low",
    precio: 75,
    valoracion: 4.0,
    bestSeller: false,
    imagen:  "/teni4.png",
  },
  {
    nombre: "Nike SB Dunk Low",
    precio: 110,
    valoracion: 5.0,
    bestSeller: true, // Es un best seller
    imagen:  "/teni3.png",
  },
  {
    nombre: "Nike Air Huarache",
    precio: 120,
    valoracion: 4.0,
    bestSeller: false,
    imagen:  "/teni3.png",
  },
  { 
    nombre: "Nike Air Jordan 1 Retro",
    precio: 180,
    valoracion: 4.5,
    bestSeller: true, // Es un best seller
    imagen:  "/teni2.png",
  },
  {
    nombre: "Nike ACG Air Mowabb",
    precio: 160,
    valoracion: 4.0,
    bestSeller: false,
    imagen:  "/teni4.png",
  },
];

const TenisList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 w-full md:w-[70%] lg:w-[50%] mx-auto gap-4 px-5 mt-5">
      {sneakers.map((sneacker,i) => (
        <TenisCard sneacker={sneacker} key={i}></TenisCard>
      ))}
    </div>
  );
};

export default TenisList;
