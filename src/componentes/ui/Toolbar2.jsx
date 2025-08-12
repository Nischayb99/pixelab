import { IoColorFilterOutline } from "react-icons/io5";
import { CgShapeHexagon } from "react-icons/cg";
import { LuCopy } from "react-icons/lu";
import { BsMagic } from "react-icons/bs";

function Toolbar2() {
  return (
    // Mobile screen
    <div className="h-[60px]  w-[100vw-1px]  bg-red-600">
      <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
        <IoColorFilterOutline />
      </button>
      <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
        A
      </button>
      <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
        <CgShapeHexagon />
      </button>
      <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
        <LuCopy />
      </button>
      <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
        <BsMagic />
      </button>
    </div>
  );
}

export default Toolbar2;
