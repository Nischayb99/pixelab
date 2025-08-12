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
            < BiSolidColorFill className="text-3xl" />
            <span >color</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-7">
            <RxTransparencyGrid className="text-3xl border-[2px] border-[#4e4e4e]" />
            <span>transparent</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-2">
            < IoResizeSharp className="text-3xl border-[2px] border-[#3c3c3c]" />
            <span className="text-nowrap">image size</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            < FaCropSimple className="text-3xl" />
            <span className="text-nowrap">crop</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-5">
            < BiSolidImageAlt className="text-3xl" />
            <span className="text-nowrap">image</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-8">
            < BiSolidImageAdd className="text-3xl" />
            <span className="text-nowrap">from gallery</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded mr-6">
            < IoMdCamera className="text-3xl" />
            <span className="text-nowrap">from camera</span>
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

export default CopyTool;
