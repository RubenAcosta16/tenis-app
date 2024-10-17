import { Button } from "@nextui-org/react";
import ShowAd from "./components/ShowAd";
import Navbar from "./components/Navbar";
import TenisList from "./components/TenisList";
import Categorys from "./components/Categorys";
import AdTeni from "./components/AdTeni";
import TextCollections from "./components/TextCollections";
import Start from "./components/Start";
import AdTeniComp from "./components/AdTeniComp";

function App() { 
  return (
    <div className="w-full flex flex-col bg-[#111] text-white ">
      {/* navbar */}
      <Navbar></Navbar>

      <Start></Start>

      <div className="z-20 w-full flex flex-col">
        <Button
          className="mt-[30px] md:mt-[-200px] mx-auto w-[200px] rounded-full "
          color="warning"
          variant="ghost"
          size="lg"
        >
          Get Started
        </Button>

        <TextCollections></TextCollections>

        {/* <div className="w-full flex flex-col justify-between items-center md:flex-row"> */}
          <AdTeni></AdTeni>

          <AdTeniComp></AdTeniComp>
        {/* </div> */}
      </div>

      {/* +20px porque 50 son obligatorios pa que no se pegue arriba */}
      <p className="text-[26px] font-medium ml-5 text-yellow-400 mt-[70px] md:text-center">
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
