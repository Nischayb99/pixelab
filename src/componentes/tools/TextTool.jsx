import { IoMdAdd } from "react-icons/io";
import { ImQuotesRight } from "react-icons/im";

function TextTool() {
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
        <div className="flex items-center justify-start gap-2 min-w-max px-4">
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <IoMdAdd className="text-3xl"/>
            <span>text</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <ImQuotesRight className="text-3xl"/>
            <span>quotes</span>
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
      </div>
    </div>
  );
};

export default TextTool;
