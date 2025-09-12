// src/pages/About.jsx
import bgGreen from "@/assets/bg-green.svg";
import bgYellow from "@/assets/bg-yellow.svg";
import heartSvg from "@/assets/heart.svg";
import ruslanImg from "@/assets/ruslan.png";
import vector from "@/assets/Vector.svg";
import zrVideo from "@/assets/zr-video.mp4"; // ✅ добавил видео
import ProductsCarousel from "@/components/ProductsCarousel";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[540px] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Фоновое видео */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={zrVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Затемняющая подложка (чтобы текст был читаемым) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Текст поверх видео */}
        <h1 className="relative z-10 text-[64px] font-lato mb-4">
          НАТУРАЛЬНОЕ СЫРЬЕ С АЛТАЯ
        </h1>
      </section>

      {/* Welcome */}
      <section
        className="w-[1920px] h-[651px] relative text-white"
        style={{
          backgroundImage: `url(${bgGreen})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex max-w-8xl mx-auto">
          {/* Левая часть (аватар) */}
          <div className="mt-[120px] ml-[160px]">
            <img
              src={ruslanImg}
              alt="Руслан Снигур"
              className="w-[250px] h-[250px]"
            />
          </div>

          {/* Правая часть (текст и кнопки) */}
          <div className="mt-[150px] ml-[60px]">
            <h2 className="text-[56px] bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent font-lato font-bold uppercase">
              ДОБРО ПОЖАЛОВАТЬ В ЗЛАТА РУСЬ!
            </h2>
            <p className="text-[32px] text-[#D7B56D] font-normal font-lato mt-2">
              В мир настоящего вкуса, силы природы и заботы о себе!
            </p>

            <div className="flex gap-4 mt-6">
              <button className="px-8 py-4 rounded-[24px] bg-[#D7B56D] text-[20px] text-[#1C3B3E] font-semibold">
                О продукциях
              </button>
              <button className="px-8 py-4 rounded-[24px] bg-[#D7B56D] text-[20px] text-[#1C3B3E] font-semibold">
                О бренде
              </button>
            </div>
          </div>
        </div>

        <div className="absolute right-[192px] bottom-[142px] flex items-center gap-[44px]">
          <p className="w-[489px] h-[76px] text-[#D7B56D] text-[25px] font-lato italic text-right max-w-xs">
            С уважением и любовью, основатель Руслан Снигур
          </p>
          <img
            src={heartSvg}
            alt="heart"
            className="w-[240px] h-[219px] heartbeat object-contain "
          />
        </div>
        <div className="flex mt-50 px-20 w-full justify-center">
          <img src={vector} alt="Орнамент" className="w-[1520px] h-[34px]" />
        </div>
      </section>

      {/* Products */}
      <section
        className="w-[1920px] h-[750px] flex flex-col items-start text-emerald-900"
        style={{
          backgroundImage: `url(${bgYellow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-[70px] ml-[160px]">
          <h4 className="text-[24px] font-semibold text-[#19474B] uppercase font-lato">
            ЧТО МЫ ПРОИЗВОДИМ?
          </h4>
          <h2 className="mt-2 text-[48px] font-bold  text-[#19474B] uppercase font-lato">
            НАША ПРОДУКЦИЯ
          </h2>
        </div>

        <div className="w-full flex justify-center mt-10">
          <ProductsCarousel />
        </div>
      </section>
    </div>
  );
}
