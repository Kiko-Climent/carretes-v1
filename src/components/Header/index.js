const Menu = () => {
  return(
    
    <header className="w-full py-16 px-1 text-sm font-bold text-black fixed top-0 z-10 bg-white">
    <nav className="flex flex-row justify-between leading-3 tracking-[0.04em]">
      <div className="flex-col items-start">
        <div>Johnny Carretes</div>
        <div className="text-gray-300">Analog Photography</div>
      </div>
      <div className="flex-col items-end text-end">
        <div className="invisible">Placeholder</div>
        <div className="">About</div>
      </div>
    </nav>
    </header>  
  )
}

export default Menu;