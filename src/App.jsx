// import {Button} from "@nextui-org/react";
import ShowAd from "./components/ShowAd";
import Navbar from "./components/Navbar";
import TenisList from "./components/TenisList";
import Categorys from "./components/Categorys";
import AdTeni from "./components/AdTeni";
import TextCollections from "./components/TextCollections";

function App() {
  return (
    <div className="w-full flex flex-col bg-[#111] text-white">
      {/* navbar */}
      <Navbar></Navbar>

      <TextCollections></TextCollections>

      <AdTeni></AdTeni>

      <p className="text-[26px] font-medium ml-5 text-yellow-400">Popular Shoes</p>

      {/* categorias */}
      <Categorys></Categorys>

      <ShowAd></ShowAd>

      {/* products cards */}
      <TenisList></TenisList>
    </div>
  );
}

export default App;
