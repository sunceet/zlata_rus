// src/pages/ProductCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import arrow from "@/assets/arrow.png";
import vector from "@/assets/Vector.svg";

// ====== ассеты ======
import linen from "@/assets/linen.png";
import oilLinen from "@/assets/oil-linen.png";
import sesame from "@/assets/sesame.png";
import oilSesame from "@/assets/oil-sesame.png";
import sunflower from "@/assets/sunflower.png";
import oilSunflower from "@/assets/oil-sunflower.png";
import mustard from "@/assets/mustard.png";
import oilMustard from "@/assets/oil-mustard.png";
import flourSesame from "@/assets/flour-sesame.png";
import flourLinen from "@/assets/flour-linen.png";

// ====== товары ======
const cards = [
  {
    title: "Льняное Масло",
    bg: linen,
    oil: oilLinen,
    points: [
      "• Омега-3 жирные кислоты",
      "• Поддержка сердца и сосудов",
      "• Для кожи и волос",
      "• Иммуномодулятор",
    ],
  },
  {
    title: "Кунжутное масло",
    bg: sesame,
    oil: oilSesame,
    points: [
      "• Полезно для костей",
      "• Укрепляет волосы",
      "• Антиоксиданты",
      "• Ореховый вкус",
    ],
  },
  {
    title: "Подсолнечное масло",
    bg: sunflower,
    oil: oilSunflower,
    points: [
      "• Полезные жирные кислоты и витамины",
      "• Улучшает состояние кожи и волос",
      "• Натуральный продукт",
      "• Яркий вкус и аромат",
    ],
  },
  {
    title: "Горчичное масло",
    bg: mustard,
    oil: oilMustard,
    points: [
      "• Витамины групп B и E",
      "• Горчичный вкус",
      "• Укрепляет иммунитет",
      "• Для кожи и волос",
    ],
  },
  {
    title: "Кунжутная мука",
    bg: sesame,
    oil: flourSesame,
    points: [
      "• Богата кальцием, магнием",
      "• Для костей и нервной системы",
      "• Ореховый вкус",
      "• Антиоксиданты",
    ],
  },
  {
    title: "Льняная мука",
    bg: linen,
    oil: flourLinen,
    points: [
      "• Очищение организма",
      "• Клетчатка и белок",
      "• Поддержка ЖКТ",
      "• Снижение веса",
    ],
  },
];

// Маппинг ссылок по заголовку
function getLinkByTitle(title) {
  const t = title.toLowerCase();
  if (t.includes("льняное масло")) return "/#/linen_oil";
  if (t.includes("кунжутное масло")) return "/#/sesame_oil";
  if (t.includes("подсолнечное масло")) return "/#/sunflower_oil";
  if (t.includes("горчичное масло")) return "/#/mustard_oil";
  if (t.includes("кунжутная мука")) return "/#/sesame_flour";
  if (t.includes("льняная мука")) return "/#/linen_flour";
  return "/#/";
}

// Рендер заголовка с переносом «масло» для «Подсолнечное масло»
function TitleWithOptionalBreak({ title }) {
  const t = title.toLowerCase().trim();
  if (t === "подсолнечное масло") {
    return (
      <>
        Подсолнечное <span className="block">масло</span>
      </>
    );
  }
  return <>{title}</>;
}

function ProductCarousel() {
  const GAP_PX = 24;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  // drag state (используем только на touch/pen)
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // px
  const startXRef = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () =>
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(cards.length / itemsPerView);

  const goTo = (page) => {
    const safe = ((page % totalSlides) + totalSlides) % totalSlides;
    setCurrentIndex(safe);
  };

  const nextSlide = () => {
    if (!isAnimating && currentIndex < totalSlides - 1) {
      setIsAnimating(true);
      goTo(currentIndex + 1);
    }
  };
  const prevSlide = () => {
    if (!isAnimating && currentIndex > 0) {
      setIsAnimating(true);
      goTo(currentIndex - 1);
    }
  };

  useEffect(() => {
    const t = setTimeout(() => setIsAnimating(false), 450);
    return () => clearTimeout(t);
  }, [currentIndex]);

  const translatePercent = currentIndex * 100;

  // --- touch handlers ---
  const onStart = (clientX) => {
    setIsDragging(true);
    startXRef.current = clientX;
    setDragOffset(0);
  };
  const onMove = (clientX) => {
    if (!isDragging) return;
    const dx = clientX - startXRef.current;
    setDragOffset(dx);
  };
  const onEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 60; // px
    if (dragOffset <= -threshold && currentIndex < totalSlides - 1) nextSlide();
    else if (dragOffset >= threshold && currentIndex > 0) prevSlide();

    setDragOffset(0);
  };

  // helpers for events
  const handleTouchStart = (e) => onStart(e.touches[0].clientX);
  const handleTouchMove = (e) => onMove(e.touches[0].clientX);
  const handleTouchEnd = () => onEnd();

  // Pointer Events — только для touch/pen (не мышь!)
  const isTouchLike = (e) =>
    e.pointerType === "touch" || e.pointerType === "pen";

  const handlePointerDown = (e) => {
    if (!isTouchLike(e)) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    onStart(e.clientX);
  };
  const handlePointerMove = (e) => {
    if (!isTouchLike(e)) return;
    onMove(e.clientX);
  };
  const handlePointerUp = (e) => {
    if (!isTouchLike(e)) return;
    onEnd();
  };

  // Базовые стили и ховер для кнопки
  const btnBase =
    "inline-flex items-center justify-center rounded-full font-semibold uppercase font-lato text-black " +
    "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B56D]/60 " +
    "active:scale-[0.97] select-none relative " +
    "bg-gradient-to-r from-[#7C622B] to-[#FFD170] shadow-[0_6px_18px_rgba(16,24,40,0.15)] " +
    "hover:-translate-y-[2px] hover:shadow-[0_10px_26px_rgba(16,24,40,0.18),0_0_0_3px_rgba(215,181,109,0.25)] " +
    "hover:saturate-[1.05] hover:brightness-105 " +
    "before:absolute before:inset-0 before:rounded-full before:bg-white/0 hover:before:bg-white/10 before:transition-colors";

  return (
    <div className="relative w-full overflow-hidden">
      <div className="mx-auto px-0 xl:px-10 py-8 mb md:py-5 2xl:py-15 xl:max-w-[1200px] 2xl:max-w-[1400px]">
        <div className="relative">
          {/* Вьюпорт */}
          <div
            className="overflow-hidden"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {/* Лента */}
            <div
              className="flex will-change-transform"
              style={{
                columnGap: 24,
                paddingLeft: 12,
                paddingRight: 12,
                transition: isDragging ? "none" : "transform 450ms ease-out",
                transform: `translateX(calc(-${translatePercent}% + ${dragOffset}px))`,
              }}
            >
              {cards.map((card, i) => {
                const isFlour = card.title.toLowerCase().includes("мука");
                const link = getLinkByTitle(card.title);
                const btnSize =
                  (isFlour
                    ? "w-[160px] h-9 text-[11px] "
                    : "w-[200px] h-10 text-[12px] ") +
                  "lg:w-[240px] lg:h-[52px] lg:text-[14px] xl:w-[280px] xl:h-[52px] xl:text-[16px]";

                return (
                  <div
                    key={i}
                    className="flex-shrink-0"
                    style={{
                      width:
                        itemsPerView === 2 ? `calc((100% - 24px) / 2)` : "100%",
                    }}
                  >
                    {/* Карточка */}
                    <div
                      className="relative h-[400px] lg:h-[510px] md:h-[520px] bg-white rounded-[32px] overflow-hidden p-5 md:p-6 pb-[160px] md:pb-[180px]
                      xl:scale-[0.9] 2xl:scale-100 origin-center transition-transform duration-300"
                    >
                      {/* фон (не перехватывает клики) */}
                      <div
                        className="absolute inset-0 pointer-events-none z-0"
                        style={{ backgroundImage: `url(${card.bg})` }}
                      />

                      {/* Контент */}
                      <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                        {/* Текст + список поверх фото */}
                        <div className="w-full overflow-x-visible">
                          <h3 className="absolute top-5 lg:left-5 lg:right-5 z-20 text-[22px] lg:text-[30px] xl:text-[33px] font-lato font-semibold text-[#000000] uppercase leading-tight whitespace-nowrap">
                            <TitleWithOptionalBreak title={card.title} />
                          </h3>

                          <ul className="absolute -left-2 top-6 sm:left-2 sm:right-5 sm:top-20 z-20 text-[13px] font-light font-lato lg:text-[14px] xl:text-[18px] text-[#555555] mt-20 leading-7 lg:leading-9">
                            {card.points.map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Фото */}
                        <div className="col-span-1 flex items-center justify-end">
                          <img
                            src={card.oil}
                            alt={card.title}
                            className={
                              "object-contain drop-shadow " +
                              (isFlour
                                ? "max-h-full xl:max-h-[25rem] 2xl:max-h-[28rem] translate-x-5 translate-y-39 2xl:translate-x-6 2xl:translate-y-10 xl:translate-x-6 xl:translate-y-22 lg:translate-x-6 lg:translate-y-39"
                                : "max-h-[17rem] lg:max-h-[24rem] xl:max-h-[28rem] 2xl:max-h-[29rem] translate-y-22 translate-x-2 lg:translate-y-18 lg:translate-x-0 xl:translate-x-0 xl:translate-y-2 2xl:translate-x-0 2xl:-translate-y-1")
                            }
                          />
                        </div>
                      </div>

                      {/* Кнопка снизу с корректной ссылкой (всегда кликабельна) */}
                      <div className="absolute bottom-[20px] lg:bottom-[30px] left-5 right-5 md:left-6 md:right-auto z-20">
                        <a
                          href={link}
                          aria-label={`Узнать подробнее — ${card.title}`}
                          className={`${btnBase} ${btnSize}`}
                          onClick={(e) => {
                            if (isDragging) e.preventDefault();
                          }}
                        >
                          Узнать подробнее
                        </a>
                      </div>
                    </div>
                    {/* /Карточка */}
                  </div>
                );
              })}
            </div>
          </div>

          {totalSlides > 1 && (
            <>
              {/* prev */}
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                aria-label="Предыдущие товары"
                className="cursor-pointer hidden lg:block group absolute left-2 xl:-left-10 2xl:-left-20 top-1/2 -translate-y-1/2 z-30 p-2 disabled:opacity-40"
              >
                <img
                  src={arrow}
                  alt=""
                  className="w-6 h-10 opacity-80 rotate-0 transition-transform duration-300
                   group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(215,181,109,0.6)]"
                />
              </button>

              {/* next */}
              <button
                onClick={nextSlide}
                disabled={currentIndex === totalSlides - 1}
                aria-label="Следующие товары"
                className="cursor-pointer hidden lg:block group absolute xl:-right-10 2xl:-right-20 top-1/2 -translate-y-1/2 z-30 p-2 disabled:opacity-40"
              >
                <img
                  src={arrow}
                  alt=""
                  className="w-6 h-10 opacity-80 rotate-180 transition-transform duration-300
                   group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(215,181,109,0.6)]"
                />
              </button>
            </>
          )}

          {/* Индикатор снизу */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="relative w-[72%] sm:w-[68%] md:w-[60%] max-w-[640px] h-2 bg-black/10 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#7C622B] to-[#FFD170] rounded-full transition-transform duration-500 ease-out"
                style={{
                  width: `${100 / totalSlides}%`,
                  transform: `translateX(${currentIndex * 100}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Орнамент */}
      <div className="hidden sm:flex justify-center mt-5">
        <img
          src={vector}
          alt="Орнамент"
          className="w-[95%] max-w-[1540px] h-[24px] lg:h-[34px] object-contain"
        />
      </div>
    </div>
  );
}

export default ProductCarousel;
