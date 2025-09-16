import React, { useEffect, useState, useCallback } from "react";

/* === ассеты === */
import arrowImg from "@/assets/arrow.png";
import flourLinen from "@/assets/flour-linen_carousel.png";
import flourSesame from "@/assets/flour-sesame-carousel.png";
import linen from "@/assets/linen.png";
import lupa from "@/assets/lupa.png";
import mustard from "@/assets/mustard.png";
import oilLinen from "@/assets/oil-linen.png";
import oilMustard from "@/assets/oil-mustard.png";
import oilSesame from "@/assets/oil-sesame.png";
import oilSunflower from "@/assets/oil-sunflower.png";
import sesame from "@/assets/sesame.png";
import sunflower from "@/assets/sunflower.png";

/* === данные карточек с ссылками === */
const cards = [
  {
    title: "Льняное масло",
    bg: linen,
    oil: oilLinen,
    badges: ["Премиум-стекло", "Объём 250мл"],
    points: [
      "Льняное масло «Premium» — натуральный и очень полезный продукт, который получают путем прямого холодного отжима семян масличного льна, выращенного на Алтае - чистейшем уголке мира. Благодаря своим отменным целебным свойствам, льняное масло применяют во многих областях медицины и косметологии.",
    ],
    link: "/#/linen_oil",
  },
  {
    title: "Кунжутное масло",
    bg: sesame,
    oil: oilSesame,
    badges: ["Премиум-стекло", "Объём 250мл"],
    points: [
      "Ценный диетический продукт, получают путем прямого холодного отжима. Подходит для приготовления салатных заправок. Снижает риск развития сердечнососудистых заболеваний. В косметологии кунжутное масло — отлично увлажняет кожу, глубоко проникая в клетки эпидермиса, питает и очищает её, замедляя процесс старения.",
    ],
    link: "/#/sesame_oil",
  },
  {
    title: "Подсолнечное масло",
    bg: sunflower,
    oil: oilSunflower,
    badges: ["ПЭТ", "500 гр"],
    points: [
      "Масло подсолнечное нерафинированное Ароматное — натуральный продукт из жареной семечки без ГМО, с ярким ароматом и насыщенным вкусом. Богато витаминами F и Е, а также Омега-6 и Омега-9 жирными кислотами.",
    ],
    link: "/#/sunflower_oil",
  },
  {
    title: "Горчичное масло",
    bg: mustard,
    oil: oilMustard,
    badges: ["Премиум-стекло", "Объём 250мл"],
    points: [
      "Нерафинированное горчичное масло улучшает пищеварение и аппетит, укрепляет сердце и сосуды, нормализует давление и уровень холестерина, помогает заживлению кожи, улучшает состояние кожи и волос, может облегчать симптомы простуды, поддерживает здоровье печени и нервной системы, улучшает сон и помогает при артрите и подагре.",
    ],
    link: "/#/mustard_oil",
  },
  {
    title: "Кунжутная мука",
    bg: sesame,
    oil: flourSesame,
    badges: ["Дой-пак", "250 гр"],
    points: [
      "Кунжутная мука — это дробленое обезжиренное бланшированное семя черного кунжута, получаемое после отжима из него масла. Мука из кунжута не содержит глютен и идеально подойдет для низкоуглеводной диеты, спортивного и здорового питания, а также полезна для роста и полноценного развития детей.",
    ],
    link: "/#/sesame_flour",
  },
  {
    title: "Льняная мука",
    bg: linen,
    oil: flourLinen,
    badges: ["Дой-пак", "250 гр"],
    points: [
      "Содержит большое количество диетической клетчатки, ПНЖК, растительных белков, витамины группы B и антиоксиданты. Высокая пищевая и биологическая ценность льняного белка.",
    ],
    link: "/#/linen_flour",
  },
];

/* === карточка === */
function Card({ item, width, height }) {
  const isFlour = /мука/i.test(item.title);
  const isSunflower = /подсолнечное масло/i.test(item.title);

  return (
    <div
      className={`relative rounded-[24px] bg-white shadow-[0_10px_30px_rgba(16,24,40,0.08)] ${
        isFlour ? "overflow-visible" : "overflow-hidden"
      }`}
      style={{ width, height }}
    >
      {/* Мобильное фото: за текстом, крупнее и полупрозрачное */}
      <img
        src={item.oil}
        alt={item.title}
        className={
          "block sm:hidden absolute right-1 bottom-1 z-0 select-none pointer-events-none " +
          (isFlour
            ? "w-[52%] translate-y-1 opacity-85"
            : isSunflower
            ? "w-[28%] -translate-x-5 opacity-80"
            : "w-[19%] -translate-x-8 opacity-70")
        }
        draggable={false}
      />

      <div className="relative z-10 h-full p-4 sm:p-5 md:p-6 flex">
        {/* левая колонка */}
        <div className="basis-full sm:flex-[0_0_60%] pr-0 sm:pr-4 md:pr-5 flex flex-col h-full">
          <h3 className="text-[14px] sm:text-[20px] md:text-[24px] leading-tight font-bold font-lato text-left text-[#111] uppercase">
            {item.title}
          </h3>

          <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
            {(item.badges ?? []).map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-1 py-0.5 sm:px-3 sm:py-1.5 font-lato font-semibold rounded-[20px] bg-white text-[#111] text-[11px] sm:text-[12px] border border-[#C6C6C6]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Блок «на всю высоту» с кнопкой внизу */}
          <div className="flex-1 min-h-0">
            <div className="mt-1 sm:mt-3 w-[96%] sm:w-[114%] h-full rounded-[14px] border border-black/10 bg-white/70 sm:bg-white backdrop-blur-[2px] sm:backdrop-blur-0 p-3 shadow-[0_2px_6px_rgba(16,24,40,0.06)] flex flex-col">
              <p className="flex-1 overflow-auto text-[10px] sm:text-[13px] md:text-[14px] text-left font-lato font-light text-black">
                {item.points[0]}
              </p>

              <div className="h-px w-full bg-black/10 my-2" />

              {/* Ссылка-«кнопка» */}
              <a
                href={item.link}
                className="cursor-pointer mt-auto group inline-flex items-center justify-center rounded-full border border-black w-[146px] h-[38px] sm:w-[156px] sm:h-[42px] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#D7B56D] focus:outline-none focus:ring-2 focus:ring-[#D7B56D]/50"
                role="button"
              >
                <span className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center translate-y-[2px]">
                  <img
                    src={lupa}
                    alt="Лупа"
                    className="w-[22px] h-[22px] sm:w-[28px] sm:h-[28px] object-contain transition-transform duration-300 group-hover:scale-110"
                    draggable={false}
                  />
                </span>
                <span className="px-1.5 text-[11px] sm:text-[12px] font-semibold font-lato text-black leading-none group-hover:text-[#D7B56D] transition-colors duration-300">
                  Узнать подробнее
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Фото справа — только на sm+ */}
        <div
          className={
            "hidden sm:flex items-end justify-center " +
            (isFlour
              ? "sm:flex-[0_0_35%] 2xl:flex-[0_0_44%] xl:translate-x-10 xl:translate-y-2 2xl:translate-x-3 2xl:translate-y-2"
              : isSunflower
              ? "sm:flex-[0_0_19%] 2xl:flex-[0_0_44%] xl:translate-x-20 xl:translate-y-2 2xl:translate-x-8 "
              : "sm:flex-[0_0_35%] 2xl:flex-[0_0_40%] xl:translate-x-10 xl:translate-y-2  2xl:translate-x-9")
          }
        >
          <img
            src={item.oil}
            alt={item.title}
            className={
              isFlour
                ? "object-contain select-none pointer-events-none max-h-[90%] md:max-h-[92%] lg:max-h-[94%] translate-y-2 md:translate-y-4"
                : isSunflower
                ? "object-contain select-none pointer-events-none max-h-[105%] md:max-h-[110%] translate-y-4 md:translate-y-7"
                : "object-contain select-none pointer-events-none max-h-[110%] translate-y-5 md:translate-y-9"
            }
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

/* === карусель с адаптивом как в шаблоне === */
export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = cards.length;
  const [isMobile, setIsMobile] = useState(false);

  // брейкпоинт как в шаблоне (<=768 — мобилка)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // свайпы 1в1 по логике шаблона
  useEffect(() => {
    if (!isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let isScrolling = false;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      isScrolling = false;
    };
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
      const deltaX = Math.abs(touchStartX - touchEndX);
      if (deltaX > 10) isScrolling = true;
    };
    const handleTouchEnd = () => {
      if (!isScrolling) return;
      const deltaX = touchStartX - touchEndX;
      if (deltaX > 50) requestAnimationFrame(handleNext);
      else if (deltaX < -50) requestAnimationFrame(handlePrev);
    };

    const container = document.getElementById("products-carousel");
    if (!container) return;

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, handlePrev, handleNext]);

  // размеры / смещения как в шаблоне
  const baseHeight = isMobile ? 320 : 381;
  const offsetX = isMobile ? 140 : 220;
  const scaleStep = 0.06;

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div
        id="products-carousel"
        className={`relative w-full mx-auto flex items-center justify-center ${
          isMobile ? "max-w-[360px] h-[360px]" : "max-w-[900px] h-[420px]"
        }`}
      >
        {/* стрелки — только не-мобилка, как в шаблоне */}
        {!isMobile && (
          <button
            onClick={handlePrev}
            className="absolute xl:-left-[100px] 2xl:-left-[300px] top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 hover:scale-110 hover:opacity-80"
            aria-label="Назад"
          >
            <img
              src={arrowImg}
              alt=""
              className="rotate-180 w-[20px] h-[32px] cursor-pointer"
              draggable={false}
            />
          </button>
        )}

        {/* сцена */}
        <div className="select-none relative w-full h-full flex items-center justify-center overflow-visible z-10">
          {cards.map((item, i) => {
            const isFlour = /мука/i.test(item.title);
            const isSunflower = /подсолнечное масло/i.test(item.title);

            // ширина карточки (как у тебя), + мобильный вариант
            const width = isMobile
              ? isFlour
                ? 340
                : isSunflower
                ? 330
                : 320
              : isFlour
              ? 660
              : isSunflower
              ? 630
              : 606;

            // позиционирование как в шаблоне
            let diff = i - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const position = diff;
            const scale = 1 - Math.abs(position) * scaleStep;
            const translateX = position * offsetX;

            const blur = isMobile
              ? position === 0
                ? "blur-none"
                : "blur-[2px]"
              : position === 0
              ? "blur-none"
              : Math.abs(position) === 1
              ? "blur-[5px]"
              : "blur-[10px]";

            const zIndex = 30 - Math.abs(position) * 10;
            const opacity =
              Math.abs(position) <= 2 ? (position === 0 ? 1 : 0.95) : 0;

            return (
              <div
                key={i}
                className={`absolute ${blur}`}
                style={{
                  width,
                  height: baseHeight,
                  transform: `translate3d(${translateX}px,0,0) scale(${scale})`,
                  transition: isMobile
                    ? "transform 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.25s cubic-bezier(0.4,0,0.2,1)"
                    : "transform 0.3s ease-out, opacity 0.3s ease-out",
                  zIndex,
                  opacity,
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  transformStyle: "preserve-3d",
                }}
              >
                <Card item={item} width={width} height={baseHeight} />
              </div>
            );
          })}
        </div>

        {!isMobile && (
          <button
            onClick={handleNext}
            className="absolute xl:-right-[100px] 2xl:-right-[300px] top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 hover:scale-110 hover:opacity-80"
            aria-label="Вперёд"
          >
            <img
              src={arrowImg}
              alt=""
              className="w-[20px] cursor-pointer h-[32px] "
              draggable={false}
            />
          </button>
        )}
      </div>
    </div>
  );
}
