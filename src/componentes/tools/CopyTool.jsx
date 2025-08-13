import { BiSolidColorFill } from "react-icons/bi";
import { RxTransparencyGrid } from "react-icons/rx";
import { IoResizeSharp } from "react-icons/io5";
import { FaCropSimple } from "react-icons/fa6";
import { BiSolidImageAlt } from "react-icons/bi";
import { BiSolidImageAdd } from "react-icons/bi";
import { IoMdCamera } from "react-icons/io";
function CopyTool() {
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
        <div className="flex items-center justify-center gap-4 min-w-max px-2">
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-3">
            <BiSolidColorFill className="text-3xl" />
            <span>color</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-7">
            <RxTransparencyGrid className="text-3xl border-[2px] border-[#4e4e4e]" />
            <span>transparent</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-2">
            <IoResizeSharp className="text-3xl border-[2px] border-[#3c3c3c]" />
            <span className="text-nowrap">image size</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <FaCropSimple className="text-3xl" />
            <span className="text-nowrap">crop</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-5">
            <BiSolidImageAlt className="text-3xl" />
            <span className="text-nowrap">image</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-8">
            <BiSolidImageAdd className="text-3xl" />
            <span className="text-nowrap">from gallery</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            <IoMdCamera className="text-3xl" />
            <span className="text-nowrap">from camera</span>
          </div>
        </div>
      </div>

      {/* Desktop version (hidden on mobile) */}
      <div className="hidden sm:flex  w-full h-full">
        <div className=" flex gap-2 h-full w-full  ">
          <div className="w-[50%] h-full flex flex-col gap-7 items-center">
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <BiSolidColorFill className="text-5xl" />
                <span>color</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <RxTransparencyGrid className="text-5xl" />
                <span>transparent</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <IoResizeSharp className="text-5xl" />
                <span>resize</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <FaCropSimple className="text-5xl" />
                <span>crop</span>
              </button>
            </div>
          </div>
          <div className="w-[50%] h-full flex flex-col gap-7 items-center">
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <BiSolidImageAlt className="text-5xl" />
                <span>image</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <BiSolidImageAdd className="text-5xl" />
                <span className="text-nowrap">from gallery</span>
              </button>
            </div>
            <div className="h-[60px] w-[60px] text-[#181818] font-semibold rounded flex items-center justify-center">
              <button className="flex flex-col items-center justify-center">
                <IoMdCamera className="text-5xl" />
                <span className="text-nowrap">from camera</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyTool;
