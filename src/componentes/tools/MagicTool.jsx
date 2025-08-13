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
      <div className="hidden sm:flex  w-full h-full">
        <div className=" flex gap-2 h-full w-full  ">
          <div className="w-[50%] h-full flex flex-col gap-7 items-center">
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <MdRotate90DegreesCw className="text-5xl" />
                <span>rotate</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <MdVignette className="text-5xl" />
                <span>vignette</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <MdLensBlur className="text-5xl" />
                <span>noise</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <FaLinesLeaning className="text-5xl" />
                <span>stripes</span>
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col gap-7 items-center">
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <MdBrightness7 className="text-5xl" />
                <span>brightness</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <IoContrastSharp className="text-5xl" />
                <span>contrast</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <BiSolidColorFill className="text-5xl" />
                <span>hue</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <BiLoaderCircle className="text-5xl" />
                <span>saturation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagicTool;
