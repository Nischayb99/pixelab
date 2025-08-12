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
      <div className="hidden sm:flex items-center justify-center gap-2 flex-wrap">
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem1
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem2
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem3
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem4
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem5
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem6
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem7
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem8
        </div>
        <div className="h-[60px] w-[60px] bg-slate-400 flex items-center justify-center text-white font-semibold rounded">
          Tem9
        </div>
      </div>
    </div>
  );
}

export default ShapeTool;
