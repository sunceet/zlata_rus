import aboutImage from "@/assets/about.png";

const AboutHero = () => (
  <div className="relative w-full h-[340px] sm:h-[540px]">
    <img
      src={aboutImage}
      alt="О бренде"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1 className="text-[30px] md:text-[42px] lg:text-[50px] xl:text-[58px] 2xl:text-[64px] font-lato font-bold uppercase text-white">
        НАШИ ПРЕИМУЩЕСТВА
      </h1>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-lato font-normal text-white mt-4 drop-shadow-md">
        Качество, которое говорит само за себя
      </p>
    </div>
  </div>
);

export default AboutHero;
