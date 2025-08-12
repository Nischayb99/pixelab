function Toolbar() {
  return <div>
    {/* Mobile screen */}
    <div className="sm:hidden block bg-emerald-400 h-[60px] w-screen"></div>
    {/* Desktop screen */}
    <div className="hidden sm:block bg-blue-600 h-[calc(100vh-80px)] w-[calc(100vw-20%)]"></div>
  </div>;
}

export default Toolbar;
