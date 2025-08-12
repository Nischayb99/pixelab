function TemplateTool() {
  return (
    <div className="w-full h-[95%] bg-slate-500 flex items-center">
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
};

export default TemplateTool;
