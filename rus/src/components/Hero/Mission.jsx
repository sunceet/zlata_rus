// src/components/Mission.jsx
import bear from "@/assets/bear.svg";
import bgHero from "@/assets/bg-green.svg";
import vector from "@/assets/Vector.svg";
import check from "@/assets/check.svg";
import leaf from "@/assets/leaf.svg";
import key from "@/assets/key.svg";
import { useRef } from "react";
import AdvantageCard from "./AdvantageCard";

const Mission = () => {
  const missionRef = useRef(null);

  return (
    <section
      id="about"
      ref={missionRef}
      className="
        relative w-full text-white overflow-hidden
        bg-cover bg-center
        pt-10 sm:pt-12 lg:pt-16 pb-10 lg:pb-14
        min-h-[680px] sm:min-h-[720px] md:min-h-[780px] xl:min-h-[840px]
      "
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Декор: медведь */}
      <img
        src={bear}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute opacity-20 sm:opacity-30 md:opacity-100
          right-[-40px] top-4
          w-[220px] sm:w-[280px]
          md:right-[4%] md:top-[80px] md:w-[320px]
          lg:right-[8%] lg:top-[70px] lg:w-[360px]
          xl:right-[10%] xl:top-[70px] xl:w-[380px]
        "
      />

      {/* Контейнер — ширина увеличена на 200px */}
      <div
        className="
          relative z-10
          mx-auto max-w-[1850px]
          px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-[160px]
        "
      >
        {/* Заголовки */}
        <header className="max-w-[70ch] md:max-w-[80ch]">
          <h1 className="font-lato font-bold uppercase  text-[#D7B56D] text-xs sm:text-sm md:text-[25px]">
            наша миссия
          </h1>

          <h2 className="mt-2 sm:mt-3 uppercase">
            <span className="font-lato font-bold  bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[44px]">
              КАЧЕСТВО АЛТАЯ – НА ВЕСЬ МИР
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 font-lato font-normal text-[#D7B56D]  text-sm sm:text-base md:text-lg max-w-[65ch]">
            Алтайский край – это сокровищница России. Наша главная задача –
            создать уникальный продукт премиум-класса, который станет эталоном
            качества. Чтобы, глядя на бутылку «Злата Русь» на полке в любом
            уголке России или за рубежом, люди сразу понимали: это лучшее, что
            может дать наша земля.
          </p>

          <p className="mt-3 sm:mt-4 font-lato font-normal text-[#D7B56D]  text-sm sm:text-base md:text-lg max-w-[65ch]">
            Наше масло – это посол Алтая, его силы и чистоты. Мы активно
            развиваем экспорт, чтобы делиться этим русским качеством с миром. И
            наш логотип – голова медведя – выбран не случайно. Это символ мощи,
            надежности и духа нашей великой страны, которую во всем мире знают и
            уважают.
          </p>
        </header>

        {/* Орнамент — максимум тоже +200px */}
        <div className="hidden md:flex justify-center mt-8 lg:mt-10">
          <img
            src={vector}
            alt="Орнамент"
            className="w-[100%] max-w-[1720px] h-auto"
          />
        </div>

        {/* Преимущества */}
        <section className="mt-8 sm:mt-10 lg:mt-12">
          <h3
            className="
              text-center uppercase font-lato font-bold tracking-wide
              bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent
              text-2xl sm:text-3xl md:text-4xl
            "
          >
            НАШИ ПРЕИМУЩЕСТВА
          </h3>

          <div className="mt-5 sm:mt-6 lg:mt-8">
            {/* На xl–2xl: три карточки слева направо в один ряд */}
            <div
              className="
                grid
                grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 2xl:grid-cols-3
                gap-4 xl:gap-6
                items-stretch justify-items-stretch
              "
            >
              <AdvantageCard
                icon={check}
                title="Контроль качества"
                subtitle="Строгий контроль качества"
                text="Каждый этап производства проходит строгий контроль, что гарантирует высочайшее качество продукции."
              />
              <AdvantageCard
                icon={leaf}
                title="Экологичное сырьё"
                subtitle="Только натуральное сырьё"
                text="Мы используем только натуральное сырье с экологически чистых территорий Алтайского края."
              />
              <AdvantageCard
                icon={key}
                title="Лабораторный анализ"
                subtitle="Безопасность и польза"
                text="Каждая партия продукции проходит тщательный лабораторный анализ, подтверждающий её безопасность и пользу."
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Mission;
