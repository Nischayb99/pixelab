import { RiStarSmileFill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoMdBrush } from "react-icons/io";
import { PiShapesLight } from "react-icons/pi";
import { FaBezierCurve } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";
function ShapeTool() {
  return (
    <div className="w-full h-[95%] flex items-center bg-slate-200">
      {/* Mobile Template */}
      <div
        className="sm:hidden overflow-x-auto w-full"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}</style>
        <div className="flex items-center justify-center gap-2 min-w-max px-4">
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <RiStarSmileFill className="text-3xl" />
            <span>stickers</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <GrGallery className="text-3xl" />
            <span>import</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <IoMdBrush className="text-3xl" />
            <span>draw</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <PiShapesLight className="text-3xl" />
            <span>shapes</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <FaBezierCurve className="text-3xl" />
            <span>bezier</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <ImArrowUp className="text-3xl" />
            <span>arrow</span>
          </div>
        </div>
      </div>

      {/* Desktop version (hidden on mobile) */}
      <div className="hidden sm:flex  w-full h-full">
        <div className=" flex gap-2 h-full w-full  ">
          <div className="w-[50%] h-full flex flex-col gap-7 items-center">
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <RiStarSmileFill className="text-5xl" />
                <span>stickers</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <GrGallery className="text-5xl" />
                <span>import</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <IoMdBrush className="text-5xl" />
                <span>draw</span>
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col gap-7 items-center">
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <PiShapesLight className="text-5xl" />
                <span>shapes</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <FaBezierCurve className="text-5xl" />
                <span>bezier</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <ImArrowUp className="text-5xl" />
                <span>arrow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapeTool;
