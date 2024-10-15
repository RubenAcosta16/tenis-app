import {Button} from "@nextui-org/react";
import ShowAd from "./components/ShowAd";
import Navbar from "./components/Navbar";
import TenisList from "./components/TenisList";
import Categorys from "./components/Categorys";
import AdTeni from "./components/AdTeni";
import TextCollections from "./components/TextCollections";
import Start from "./components/Start";

function App() {
  return (
    <div className="w-full flex flex-col bg-[#111] text-white ">
      {/* navbar */}
      <Navbar></Navbar>

      <Start></Start>

      <Button className="mt-[30px] mx-auto w-[200px] rounded-full" color="warning" variant="ghost" size="lg">
        Get Started
      </Button>

      <TextCollections></TextCollections>

      <AdTeni></AdTeni>

{/* +20px porque 50 son obligatorios pa que no se pegue arriba */}
      <p className="text-[26px] font-medium ml-5 text-yellow-400 mt-[70px]">
        Popular Shoes
      </p>

      {/* categorias */}
      <Categorys></Categorys>

      <ShowAd></ShowAd>

      {/* products cards */}
      <TenisList></TenisList>
    </div>
  );
}

export default App;
