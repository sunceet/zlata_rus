import aboutImage from "@/assets/about.png";

const AboutHero = () => (
  <div className="relative w-full h-[540px]">
    <img
      src={aboutImage}
      alt="О бренде"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <h1 className="text-[64px] font-lato font-bold uppercase text-white">
        НАШИ ПРЕИМУЩЕСТВА
      </h1>
      <p className="text-[24px] font-lato font-normal text-white mt-4 drop-shadow-md">
        качество, которое говорит само за себя
      </p>
    </div>
  </div>
);

export default AboutHero;
