import { BiUndo } from "react-icons/bi";
import { FaSearchPlus } from "react-icons/fa";
import { GrGrid } from "react-icons/gr";
import { IoCopySharp } from "react-icons/io5";
import { MdShare } from "react-icons/md";
import { ImQuotesRight } from "react-icons/im";
import TreeDots from "../navButtons/ThreeBots";
import AddButton from "../navButtons/addButton";
import SaveButton from "../navButtons/SaveButton";
import ShareButton from "../navButtons/ShareButton";
function Navbar() {
  return (
    <nav className="bg-[#3575df] text-white sticky top-0 z-50  ">
      {/* Mobile Layout - 2 Lines */}
      <div className="sm:hidden h-[100px] flex flex-col justify-center pt-2">
        {/* First Row - Top Icons (Add, Save, Share, Quote, ThreeDot) */}
        <div className="flex justify-center items-center pb-2 ">
          <div className="flex items-center justify-around space-x-2 max-[640px]:w-full">
            <AddButton />
            <SaveButton />
            <ShareButton />
            <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
              <ImQuotesRight />
            </button>
            <TreeDots />
          </div>
        </div>

        {/* Second Row - Logo and Bottom Icons (Undo, SearchPlus, Grid, Copy) */}
        <div className="flex justify-between items-center px-2 py-2">
          <h1 className="text-sm font-bold bg-[#1f68dd] py-1 px-2 rounded-full hover:bg-[#1a5cc4] transition-colors duration-200">
            Pixelab
          </h1>
          <div className="lineOne flex items-center justify-around space-x-6 gap-4 max-[640px]:w-full max-[340px]:gap-x-[3px]">
            <button className="text-2xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
              <BiUndo />
            </button>
            <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
              <FaSearchPlus />
            </button>
            <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
              <GrGrid />
            </button>
            <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
              <IoCopySharp />
            </button>
          </div>
        </div>
      </div>

      

      {/* Desktop Layout - 1 Line with proper spacing */}
      <div className="hidden sm:flex justify-between items-center w-[90%] h-[80px]">
        {/* Logo */}
        <div className="flex-shrink-0 mx-6 md:mx-4">
          <h1 className="text-lg font-bold bg-[#1f68dd] py-1 px-3 rounded-full hover:bg-[#1a5cc4] transition-colors duration-200">
            Pixelab
          </h1>
        </div>

        <div className="flex items-center justify-end flex-1 space-x-5 md:space-x-8 lg:space-x-10" >
          <button className="text-4xl  p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
            <BiUndo />
          </button>
          <button className="text-xl md:text-2xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
            <FaSearchPlus />
          </button>
          <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
            <GrGrid />
          </button>
          <button className="text-xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
            <IoCopySharp />
          </button>
          <AddButton />
          <SaveButton />
          <ShareButton />
          <button className="text-xl md:text-2xl p-2 rounded-md hover:bg-[#2961c9] transition-all duration-200 hover:scale-105">
            <ImQuotesRight />
          </button>
          <TreeDots />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
