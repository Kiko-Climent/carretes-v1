import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-8rem)] flex">
      <div className="h-full items-end flex inset-0 top-0">
        <Image
          src="/images/image00010.jpeg"
          alt="Johnny Carretes"
          className="object-cover h-full"
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
