import bgGreen from "@/assets/bg-green.svg";
import bgYellow from "@/assets/bg-yellow.svg";
import heartSvg from "@/assets/heart.svg";
import ruslanImg from "@/assets/ruslan.png";
import vector from "@/assets/Vector.svg";
import zrVideo from "@/assets/zr-video.mp4";
import ProductsCarousel from "@/components/ProductsCarousel";

export default function About() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex items-center justify-center text-center text-white overflow-hidden h-[48vh] min-h-[320px] lg:h-[540px]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={zrVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Фоновое видео Алтай"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Headline */}
        <h1 className="relative z-10 font-lato mb-4 text-3xl sm:text-5xl lg:text-[64px] leading-tight px-4">
          НАТУРАЛЬНОЕ СЫРЬЕ С АЛТАЯ
        </h1>
      </section>

      {/* Welcome */}
      <section
        className="relative w-full text-white"
        style={{
          backgroundImage: `url(${bgGreen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Desktop layout preserved with pixel-perfect offsets via xl: classes */}
        <div className="mx-auto w-full max-w-[1920px]">
          <div className="flex flex-col items-center xl:items-start xl:flex-row xl:max-w-8xl">
            {/* Avatar */}
            <div className="mt-10 xl:mt-[120px] xl:ml-[40px] 2xl:ml-[160px] flex justify-center xl:block">
              <img
                src={ruslanImg}
                alt="Руслан Снигур"
                className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] xl:w-[250px] xl:h-[250px] object-contain"
                loading="lazy"
              />
            </div>

            {/* Text & CTAs */}
            <div className="mt-6 sm:mt-10 xl:mt-[150px] 2xl:ml-[60px] text-center xl:text-left px-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-[56px] bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent font-lato font-bold uppercase">
                ДОБРО ПОЖАЛОВАТЬ В ЗЛАТА РУСЬ!
              </h2>
              <p className="mt-2 text-lg sm:text-2xl xl:text-[32px] text-[#D7B56D] font-normal font-lato">
                В мир настоящего вкуса, силы природы и заботы о себе!
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 justify-center xl:justify-start">
                <a
                  href="http://localhost:5173/#/products"
                  className="px-6 py-3 sm:px-8 sm:py-4 rounded-[20px] sm:rounded-[24px] bg-[#D7B56D] text-[16px] sm:text-[20px] text-[#1C3B3E] font-semibold transition-colors duration-300 hover:bg-[#c7a75d] hover:text-white"
                >
                  О продукциях
                </a>
                <a
                  href="http://localhost:5173/#/about"
                  className="px-6 py-3 sm:px-8 sm:py-4 rounded-[20px] sm:rounded-[24px] bg-[#D7B56D] text-[16px] sm:text-[20px] text-[#1C3B3E] font-semibold transition-colors duration-300 hover:bg-[#c7a75d] hover:text-white"
                >
                  О бренде
                </a>
              </div>
            </div>
          </div>

          <div className="xl:hidden flex flex-col items-center gap-4 mt-8 px-6 pb-10">
            <p className="text-[#D7B56D] text-base sm:text-lg font-lato italic text-center max-w-xl">
              С уважением и любовью, основатель Руслан Снигур
            </p>
            <img
              src={heartSvg}
              alt="heart"
              className="w-[120px] h-[110px] object-contain"
              loading="lazy"
            />
          </div>

          {/* Signature & heart — desktop absolute positioning preserved but lower and responsive shift */}
          <div className="hidden xl:flex absolute bottom-[100px] right-[60px] 2xl:right-[192px] items-center gap-[44px]">
            <p className="w-[489px] h-[76px] text-[#D7B56D]  text-[25px] font-lato italic text-right max-w-xs">
              С уважением и любовью, основатель Руслан Снигур
            </p>
            <img
              src={heartSvg}
              alt="heart"
              className="w-[240px] h-[219px] heartbeat object-contain"
              loading="lazy"
            />
          </div>

          {/* Vector ornament */}
          <div className="hidden sm:flex justify-center mt-50 px-4 pb-8">
            <img
              src={vector}
              alt="Орнамент"
              className="w-full max-w-[1520px] h-[24px] sm:h-[28px] lg:h-[34px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        className="w-full text-emerald-900"
        style={{
          backgroundImage: `url(${bgYellow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-[1920px] py-10 sm:py-14 lg:py-16 xl:h-[750px]">
          <div className="px-4 xl:mt-[1px] xl:ml-[160px]">
            <h4 className="text-sm sm:text-base lg:text-xl xl:text-[24px] font-semibold text-[#19474B] uppercase font-lato">
              ЧТО МЫ ПРОИЗВОДИМ?
            </h4>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-[48px] font-bold text-[#19474B] uppercase font-lato">
              НАША ПРОДУКЦИЯ
            </h2>
          </div>

          <div className="w-full flex justify-center mt-6 sm:mt-8 lg:mt-10 px-2 sm:px-6">
            <div className="w-full max-w-[1520px]">
              <ProductsCarousel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
