import {Avatar} from "@nextui-org/react";
import { SiNike } from "react-icons/si";

import { CiSearch } from "react-icons/ci";
 
const Navbar = () => {
    return <div className="flex flex-row justify-between items-center text-black w-full px-7 py-4 relative z-20">
        <CiSearch className="text-[36px] text-white"/>
        {/* <span >Tenis App</span> */}
        <SiNike className="text-[40px] font-normal text-white b"/>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md"/>
    </div>;
}

export default Navbar;