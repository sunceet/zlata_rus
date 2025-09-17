import React, { useEffect, useState, useCallback } from "react";

/* === ассеты === */
import arrowImg from "@/assets/arrow(1).png";
import flourLinen from "@/assets/flour-linen_carousel.png"; // десктоп
import flourSesame from "@/assets/flour-sesame-carousel.png"; // десктоп
import flourLinenMobile from "@/assets/flour-linen (2).png"; // мобильный
import flourSesameMobile from "@/assets/flour-sesame (2).png"; // мобильный
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
    oil: flourSesame, // десктопное изображение
    badges: ["Дой-пак", "250 гр"],
    points: [
      "Кунжутная мука — это дробленое обезжиренное бланшированное семя черного кунжута, получаемое после отжима из него масла. Мука из кунжута не содержит глютен и идеально подойдет для низкоуглеводной диеты, спортивного и здорового питания, а также полезна для роста и полноценного развития детей.",
    ],
    link: "/#/sesame_flour",
  },
  {
    title: "Льняная мука",
    bg: linen,
    oil: flourLinen, // десктопное изображение
    badges: ["Дой-пак", "250 гр"],
    points: [
      "Содержит большое количество диетической клетчатки, ПНЖК, растительных белков, витамины группы B и антиоксиданты. Высокая пищевая и биологическая ценность льняного белка.",
    ],
    link: "/#/linen_flour",
  },
];

/* === карточка === */
function Card({ item, width, height, isMobile }) {
  if (isMobile) {
    const isFlaxFlour = /льняная мука/i.test(item.title);
    const isSesameFlour = /кунжутная мука/i.test(item.title);
    const oilSrc = isFlaxFlour
      ? flourLinenMobile
      : isSesameFlour
      ? flourSesameMobile
      : item.oil;

    return (
      <div
        className="relative rounded-[24px] bg-white shadow-[0_10px_30px_rgba(16,24,40,0.08)] overflow-hidden"
        style={{ width, height }}
      >
        <div className="h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center bg-white pt-6 pb-4">
            <img
              src={oilSrc}
              alt={item.title}
              className="h-[120px] w-auto object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>

          <div className="px-4 pb-6">
            <h3 className="text-center text-[16px] leading-tight font-bold font-lato text-[#111] uppercase mb-1">
              {item.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-2 mb-1">
              {(item.badges ?? []).map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1.5 font-lato font-semibold rounded-[20px] bg-white text-[#111] text-[12px] border border-[#C6C6C6]"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="rounded-[14px] border border-black/10 bg-white/70 backdrop-blur-[2px] p-2 shadow-[0_2px_6px_rgba(16,24,40,0.06)] mb-4">
              <p className="text-[11px] text-left font-lato font-light text-black leading-relaxed">
                {item.points[0]}
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href={item.link}
                role="button"
                className="cursor-pointer group inline-flex items-center justify-center rounded-full border border-black w-[156px] h-[42px] bg-white transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D7B56D]/50 supports-[hover:hover]:hover:shadow-lg supports-[hover:hover]:hover:scale-105 supports-[hover:hover]:hover:border-[#D7B56D]"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <span className="w-[32px] h-[32px] flex items-center justify-center translate-y-[2px]">
                  <img
                    src={lupa}
                    alt="Лупа"
                    className="w-[28px] h-[28px] object-contain transition-transform duration-300 supports-[hover:hover]:group-hover:scale-110"
                    draggable={false}
                  />
                </span>
                <span className="px-1.5 text-[12px] font-semibold font-lato text-black leading-none transition-colors duration-300 supports-[hover:hover]:group-hover:text-[#D7B56D]">
                  Узнать подробнее
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isFlour = /мука/i.test(item.title);
  const isSunflower = /подсолнечное масло/i.test(item.title);

  return (
    <div
      className={`relative rounded-[24px] bg-white shadow-[0_10px_30px_rgba(16,24,40,0.08)] ${
        isFlour ? "overflow-visible" : "overflow-hidden"
      }`}
      style={{ width, height }}
    >
      <div className="relative z-10 h-full p-5 md:p-6 flex">
        <div className="flex-[0_0_60%] pr-4 md:pr-5 flex flex-col h-full">
          <h3 className="text-[20px] md:text-[24px] leading-tight font-bold font-lato text-left text-[#111] uppercase">
            {item.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {(item.badges ?? []).map((b, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1.5 font-lato font-semibold rounded-[20px] bg-white text-[#111] text-[12px] border border-[#C6C6C6]"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="flex-1 min-h-0">
            <div className="mt-3 w-[114%] h-full rounded-[14px] border border-black/10 bg-white p-3 shadow-[0_2px_6px_rgba(16,24,40,0.06)] flex flex-col">
              <p className="flex-1 overflow-auto text-[13px] md:text-[14px] text-left font-lato font-light text-black">
                {item.points[0]}
              </p>
              <div className="h-px w-full bg-black/10 my-2" />
              <a
                href={item.link}
                role="button"
                className="cursor-pointer mt-auto group inline-flex items-center justify-center rounded-full border border-black w-[156px] h-[42px] bg-white transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#D7B56D] focus:outline-none focus:ring-2 focus:ring-[#D7B56D]/50"
              >
                <span className="w-[32px] h-[32px] flex items-center justify-center translate-y-[2px]">
                  <img
                    src={lupa}
                    alt="Лупа"
                    className="w-[28px] h-[28px] object-contain transition-transform duration-300 group-hover:scale-110"
                    draggable={false}
                  />
                </span>
                <span className="px-1.5 text-[12px] font-semibold font-lato text-black leading-none group-hover:text-[#D7B56D] transition-colors duration-300">
                  Узнать подробнее
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Фото справа */}
        <div className="flex items-end justify-center">
          <img
            src={item.oil}
            alt={item.title}
            className={`object-contain select-none pointer-events-none
            ${
              isFlour
                ? "max-h-[90%] md:max-h-[92%] lg:max-h-[80%] xl:translate-y-[24px] xl:translate-x-4"
                : isSunflower
                ? "max-h-[105%] md:max-h-[110%] xl:translate-x-20 xl:translate-y-6"
                : "max-h-[110%] xl:translate-y-6  xl:translate-x-20"
            }`}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

/* === карусель с «выглядывающими» карточками на мобиле === */
export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = cards.length;
  const [isMobile, setIsMobile] = useState(false);
  const [isXL, setIsXL] = useState(false); // 1280–1535
  const [is2XL, setIs2XL] = useState(false); // ≥1536

  useEffect(() => {
    const updateBP = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsXL(w >= 1280 && w < 1536);
      setIs2XL(w >= 1536);
    };
    updateBP();
    window.addEventListener("resize", updateBP, { passive: true });
    return () => window.removeEventListener("resize", updateBP);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // свайпы
  useEffect(() => {
    if (!isMobile) return;
    let sx = 0,
      ex = 0,
      moved = false;

    const start = (e) => {
      sx = e.touches[0].clientX;
      moved = false;
    };
    const move = (e) => {
      ex = e.touches[0].clientX;
      if (Math.abs(sx - ex) > 10) moved = true;
    };
    const end = () => {
      if (!moved) return;
      const dx = sx - ex;
      if (dx > 50) requestAnimationFrame(handleNext);
      else if (dx < -50) requestAnimationFrame(handlePrev);
    };

    const el = document.getElementById("products-carousel");
    if (!el) return;
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("touchend", end, { passive: true });
    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);
    };
  }, [isMobile, handlePrev, handleNext]);

  // размеры/смещения
  const baseHeight = isMobile ? 450 : 420;

  // На xl «утопляем» сильнее: меньше ширина карточки + меньше шаг X
  const desktopCardWidth = isXL ? 520 : 606;
  const offsetX = isMobile ? 140 : isXL ? 160 : 220;

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div
        id="products-carousel"
        className={`relative w-full mx-auto flex items-center justify-center ${
          isMobile
            ? "max-w-[360px] h-[440px]"
            : // На xl сильно сужаем сцену и даём большие паддинги, чтобы боковые карточки ушли внутрь.
              `h-[420px] ${isXL ? "max-w-[760px] px-16" : "max-w-[900px] px-0"}`
        }`}
      >
        {/* стрелки — только для десктопа */}
        {!isMobile && (
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 hover:scale-110 hover:opacity-80
              ${isXL ? "-left-25" : "xl:-left-[100px] 2xl:-left-[300px]"}`}
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
            const width = isMobile ? 300 : desktopCardWidth;

            // кольцевая позиция
            let diff = i - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const position = diff;
            const scale = 1 - Math.abs(position) * 0.06;
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
                <Card
                  item={item}
                  width={width}
                  height={baseHeight}
                  isMobile={isMobile}
                />
              </div>
            );
          })}
        </div>

        {!isMobile && (
          <button
            onClick={handleNext}
            className={`absolute top-1/2 -translate-y-1/2 z-50 transition-transform duration-300 hover:scale-110 hover:opacity-80
              ${isXL ? "-right-25" : "xl:-right-[100px] 2xl:-right-[300px]"}`}
            aria-label="Вперёд"
          >
            <img
              src={arrowImg}
              alt=""
              className="w-[20px] h-[32px] cursor-pointer"
              draggable={false}
            />
          </button>
        )}
      </div>

      {/* Пагинация для мобильной версии */}
      {isMobile && (
        <div className="flex items-center justify-center mt-6 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Перейти к слайду ${index + 1}`}
              className={`w-9 h-9 rounded-full mx-0.5 border-2 flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#1C3B3E] border-none text-white"
                  : "bg-white border-none text-gray-600 hover:border-[#D7B56D] hover:text-[#D7B56D]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
