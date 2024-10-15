import {Avatar} from "@nextui-org/react";

import { CiSearch } from "react-icons/ci";
 
const Navbar = () => {
    return <div className="flex flex-row justify-between items-center text-black w-full px-7 py-4">
        <CiSearch className="text-[36px] text-white"/>
        <span className="text-[22px] font-normal text-white b">Tenis App</span>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="md"/>
    </div>;
}

export default Navbar;