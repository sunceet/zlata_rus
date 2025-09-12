import bear from "@/assets/bear.svg";
import bgHero from "@/assets/bg-green.svg";
import check from "@/assets/check.svg";
import key from "@/assets/key.svg";
import leaf from "@/assets/leaf.svg";
import vector from "@/assets/Vector.svg";
import { useEffect, useRef } from "react";
import AdvantageCard from "./AdvantageCard";

const Mission = () => {
  const missionRef = useRef(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Проверяем, был ли сделан первый скролл
      if (!hasScrolled.current && window.scrollY > 10) {
        if (missionRef.current) {
          const yOffset = -90; // Adjust this value (e.g., -50 for 50px higher)
          const y =
            missionRef.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });

          hasScrolled.current = true; // Отмечаем, что прокрутка сработала
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      ref={missionRef} // Привязываем ref к секции
      className="relative w-full min-h-[936px] text-white pt-[60px] pb-10 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Медведь */}
      <img
        src={bear}
        alt="Медведь"
        className="absolute top-[80px] right-[170px] w-[370px] h-auto"
      />

      {/* Текстовый блок (выровнен по левому краю) */}
      <div className="pl-[170px] relative z-10">
        <h1 className="text-[20px] font-bold uppercase font-lato tracking-wide text-[#D7B56D]">
          наша миссия
        </h1>

        <h2 className="text-[40px] mt-3">
          <span className="font-bold font-lato uppercase tracking-wide bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
            КАЧЕСТВО АЛТАЯ – НА ВЕСЬ МИР
          </span>
        </h2>

        <h3 className="w-[800px] text-[20px] mt-3 font-lato font-normal text-[#D7B56D] leading-relaxed">
          Алтайский край – это сокровищница России. Наша главная задача –
          создать уникальный продукт премиум-класса, который станет эталоном
          качества. Чтобы, глядя на бутылку "Злата Русь" на полке в любом уголке
          России или за рубежом, люди сразу понимали: это лучшее, что может дать
          наша земля.
        </h3>

        <h3 className="w-[800px] text-[20px] mt-4 font-lato font-normal text-[#D7B56D] leading-relaxed">
          Наше масло – это посол Алтая, его силы и чистоты. Мы активно развиваем
          экспорт, чтобы делиться этим русским качеством с миром. И наш логотип
          – голова медведя – выбран не случайно. Это символ мощи, надежности и
          духа нашей великой страны, которую во всем мире знают и уважают.{" "}
        </h3>
      </div>

      {/* Орнамент и блок преимуществ (центрированы) */}
      <div className="w-full flex flex-col items-center">
        <div className="flex mt-12 px-20 w-full justify-center">
          <img src={vector} alt="Орнамент" className="w-[1520px] h-[34px]" />
        </div>

        <h2 className="text-[40px] font-lato font-bold uppercase tracking-wide bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent mt-7 text-center">
          НАШИ ПРЕИМУЩЕСТВА
        </h2>

        <div className="flex justify-center gap-22 mt-6">
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
            text="Каждая партия продукции проходит тщательный лабораторный анализ, подтверждающий ее безопасность и пользу."
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
