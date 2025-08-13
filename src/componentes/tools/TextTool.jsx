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
            <IoMdAdd className="text-3xl" />
            <span>text</span>
          </div>
          <div className="h-[60px] w-[60px] flex flex-col items-center justify-center text-[#181818] font-semibold rounded">
            <ImQuotesRight className="text-3xl" />
            <span>quotes</span>
          </div>
        </div>
      </div>

      {/* Desktop version (hidden on mobile) */}
      <div className="hidden sm:flex h-full w-full">
        <div className=" flex gap-2 items-start w-full">
          <div className="h-[60px] w-[50%] flex items-center justify-center text-[#181818] font-semibold rounded ">
            <button className="flex flex-col items-center justify-center">
              <IoMdAdd className="text-5xl" />
              <span>text</span>
            </button>
          </div>
          <div className="h-[60px] w-[50%] text-[#181818] font-semibold rounded flex items-center justify-center">
            <button className="flex flex-col items-center justify-center">
              <ImQuotesRight className="text-5xl" />
              <span>quotes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextTool;
