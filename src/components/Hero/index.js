const Hero = () => {
  return (
    <section className="flex h-screen">
      {/* Contenedor principal */}
      <div className="flex relative h-[calc(100vh-9.75rem)] self-end justify-center px-2 pb-4">
        {/* Contenedor para bordes redondeados */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src="/images/image00010.jpeg"
            alt="Johnny Carretes"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-xs text-white mix-blend-difference">35°18′35″N 24°53′36″E</div>
      </div>
    </section>
  );
};

export default Hero;
