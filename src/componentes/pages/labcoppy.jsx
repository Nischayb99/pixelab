import { useState, React } from "react";
import Navbar from "../common/Navbar";
import { IoColorFilterOutline } from "react-icons/io5";
import { CgShapeHexagon } from "react-icons/cg";
import { LuCopy } from "react-icons/lu";
import { BsMagic } from "react-icons/bs";
import {
  TemplateTool,
  TextTool,
  ShapeTool,
  CopyTool,
  MagicTool,
} from "../common/ToolPages";

function Lab() {
  const [currentTool, setCurrentTool] = useState("color");

  const handleNavigation = (toolId) => {
    setCurrentTool(toolId);
  };

  const renderCurrentTool = () => {
    switch (currentTool) {
      case "template":
        return <TemplateTool />;
      case "texts":
        return <TextTool />;
      case "shapes":
        return <ShapeTool />;
      case "copy":
        return <CopyTool />;
      case "magic":
        return <MagicTool />;
      default:
        return <TemplateTool />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="sm:h-[calc(100vh-80px)] h-[calc(100vh-100px)] w-full flex flex-col sm:flex-row">
        {/* Canvas Area */}
        <div className="flex-1 bg-[#747474] flex items-center justify-center relative">
          <span className="text-red-500 text-2xl font-bold">Canvas</span>

          {/* Mobile Toolbar - appears at bottom on mobile */}
          <div className="sm:hidden absolute bottom-0 left-0 right-0 h-30 ">
            <div className="bg-red-500 h-20">
              {renderCurrentTool(currentTool)}{" "}
            </div>

            {/* Toolbar */}
            <div className=" h-10 flex justify-around bg-slate-100">
              <button
                className="text-xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
                onClick={() => handleNavigation("color")}
              >
                <IoColorFilterOutline />
              </button>
              <button
                className="text-xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
                onClick={() => handleNavigation("texts")}
              >
                A
              </button>
              <button
                className="text-xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
                onClick={() => handleNavigation("shapes")}
              >
                <CgShapeHexagon />
              </button>
              <button
                className="text-xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
                onClick={() => handleNavigation("copy")}
              >
                <LuCopy />
              </button>
              <button
                className="text-xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
                onClick={() => handleNavigation("magic")}
              >
                <BsMagic />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Toolbar - appears on right side on desktop */}
        <div className="hidden sm:block w-[28%] md:w-[25%] lg:w-[20%] bg-gray-300">
          <div className="bg-red-500 h-[calc(100vh-140px)]">
            {renderCurrentTool(currentTool)}
          </div>
          {/* Toolbar */}
          <div className="bg-gray-300 h-[60px] flex justify-around items-center">
            <button
              className="text-2xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
              onClick={() => handleNavigation("color")}
            >
              <IoColorFilterOutline />
            </button>
            <button
              className="text-2xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
              onClick={() => handleNavigation("texts")}
            >
              A
            </button>
            <button
              className="text-2xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
              onClick={() => handleNavigation("shapes")}
            >
              <CgShapeHexagon />
            </button>
            <button
              className="text-2xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
              onClick={() => handleNavigation("copy")}
            >
              <LuCopy />
            </button>
            <button
              className="text-2xl rounded-md text-[#4d4d4d] hover:text-[#2961c9] transition-all duration-200"
              onClick={() => handleNavigation("magic")}
            >
              <BsMagic />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Lab;
