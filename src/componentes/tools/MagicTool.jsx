import { MdRotate90DegreesCw } from "react-icons/md";
import { MdVignette } from "react-icons/md";
import { MdLensBlur } from "react-icons/md";
import { FaLinesLeaning } from "react-icons/fa6";
import { MdBrightness7 } from "react-icons/md";
import { IoContrastSharp } from "react-icons/io5";
import { BiSolidColorFill } from "react-icons/bi";
import { BiLoaderCircle } from "react-icons/bi";
function MagicTool() {
  return (
    <div className="w-full h-[95%] bg-slate-200 flex items-center">
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
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <MdRotate90DegreesCw className="text-3xl" />
            <span className="text-nowrap"> rotate</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <MdVignette className="text-3xl" />
            <span className="text-nowrap"> vignette</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <MdLensBlur className="text-3xl" />
            <span className="text-nowrap"> noise</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <FaLinesLeaning className="text-3xl" />
            <span className="text-nowrap"> stripes</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <MdBrightness7 className="text-3xl" />
            <span className="text-nowrap"> brightness</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <IoContrastSharp className="text-3xl" />
            <span className="text-nowrap"> contrast</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <BiSolidColorFill className="text-3xl" />
            <span className="text-nowrap"> hue</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <BiLoaderCircle className="text-3xl" />
            <span className="text-nowrap"> saturation</span>
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

export default MagicTool;
