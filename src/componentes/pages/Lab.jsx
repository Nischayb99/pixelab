import { useState, useEffect, React } from "react";
import Navbar from "../common/Navbar";
import { IoColorFilterOutline } from "react-icons/io5";
import { CgShapeHexagon } from "react-icons/cg";
import { LuCopy } from "react-icons/lu";
import { BsMagic } from "react-icons/bs";
import TemplateTool from "../tools/TemplateTool";
import TextTool from "../tools/TextTool";
import ShapeTool from "../tools/ShapeTool";
import CopyTool from "../tools/CopyTool";
import MagicTool from "../tools/MagicTool";

function Lab() {
  const [currentTool, setCurrentTool] = useState("template");

  const tools = [
    {
      id: "template",
      icon: <IoColorFilterOutline />,
      label: "Template",
      component: <TemplateTool />,
    },
    { id: "texts", icon: "A", label: "Text", component: <TextTool /> },
    {
      id: "shapes",
      icon: <CgShapeHexagon />,
      label: "Shapes",
      component: <ShapeTool />,
    },
    { id: "copy", icon: <LuCopy />, label: "Copy", component: <CopyTool /> },
    {
      id: "magic",
      icon: <BsMagic />,
      label: "Magic",
      component: <MagicTool />,
    },
  ];

  const handleNavigation = (toolId) => {
    setCurrentTool(toolId);
  };

  const currentComponent = tools.find((tool) => tool.id === currentTool)
    ?.component || <TemplateTool />;

  // Optional: Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "1") setCurrentTool("template");
      if (e.key === "2") setCurrentTool("texts");
      if (e.key === "3") setCurrentTool("shapes");
      if (e.key === "4") setCurrentTool("copy");
      if (e.key === "5") setCurrentTool("magic");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const renderButtons = (size) => (
    <div
      className={`flex ${
        size === "desktop"
          ? "justify-around items-center h-[60px] bg-gray-300"
          : "justify-around h-10 bg-slate-100"
      }`}
    >
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => handleNavigation(tool.id)}
          title={tool.label}
          className={`w-10 h-10 flex items-center justify-center text-xl rounded-md transition-transform duration-200 ${
            currentTool === tool.id
              ? "text-blue-600 bg-blue-100 shadow-md"
              : "text-[#4d4d4d] hover:text-[#2961c9]"
          } hover:scale-100`}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="sm:h-[calc(100vh-80px)] h-[calc(100vh-100px)] w-full flex flex-col sm:flex-row">
        {/* Canvas Area */}
        <div className="flex-1 bg-[#747474] flex items-center justify-center relative">
          <span className="text-red-500 text-2xl font-bold">Canvas</span>

          {/* Mobile Toolbar */}
          <div className="sm:hidden absolute bottom-0 left-0 right-0 h-30">
            <div className="border-t-[1px] border-stone-600 h-20 animate-fadeIn flex items-center">
              {currentComponent}
            </div>
            <div className="border-t-[1px] border-blue-300">{renderButtons("mobile")}</div>
          </div>
        </div>

        {/* Desktop Toolbar */}
        <div className="hidden sm:flex flex-col w-[28%] md:w-[25%] lg:w-[20%] bg-gray-300">
          {/* Tool Preview */}
          <div className="bg-red-500 h-[calc(100vh-140px)] animate-fadeIn flex items-center justify-center">
            {currentComponent}
          </div>
          {/* Toolbar */}
          {renderButtons("desktop")}
        </div>
      </main>
    </div>
  );
}

export default Lab;
