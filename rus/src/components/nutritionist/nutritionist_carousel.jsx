// src/pages/History.jsx
import { useEffect, useRef, useState } from "react";

// --- ASSETS (продукты) ---
import flourLinen from "@/assets/flour-linen (2).png";
import flourSesame from "@/assets/flour-sesame (2).png";
import oilLinen from "@/assets/oil-linen.png";
import oilMustard from "@/assets/oil-mustard.png";
import oilSesame from "@/assets/oil-sesame.png";
import oilSunflower from "@/assets/oil-sunflower.png";

import bgYellow from "@/assets/bg-yellow.svg";

import linenBack from "@/assets/linen.png";
import mustardBack from "@/assets/mustard (1).png";
import sesameBack from "@/assets/sesame.png";
import sunflowerBack from "@/assets/sunflower.png";

/* ================== SLIDES DATA ================== */
// Масла
const slidesOils = [
  {
    title: "Льняное масло",
    titleShort: "Льняное",
    image: oilLinen,
    back: linenBack,
    subtitle: "Нерафинированное холодного отжима",
    introStrong: "Омега-3 (ALA)!",
    introRest:
      " Наш лучший растительный источник этой незаменимой жирной кислоты. Критически важно для мозга, борьбы с воспалением (после тренировок — особенно!), здоровья сердца и гормонального баланса.",
    bullets: [
      {
        strong: "Детокс и легкость:",
        rest: " Улучшает моторику кишечника, способствует мягкому очищению.",
      },
      {
        strong: "Сияние кожи и волос:",
        rest: " Витамин E + Омега-3 = мощный дуэт для восстановления и увлажнения.",
      },
      {
        strong: "Идеально:",
        rest: " В смузи, творог, салаты, на тощак (1 ч.л., если нет противопоказаний!).",
      },
    ],
    note: "Хранить в холоде, беречь от света!",
  },
  {
    title: "Кунжутное масло",
    titleShort: "Кунжутное",
    image: oilSesame,
    back: sesameBack,
    subtitle: "Нерафинированное холодного отжима",
    introRest: "Крепкие кости, зубы, здоровая нервная система!",
    bullets: [
      {
        strong: "Антистресс и иммунитет:",
        rest: " Помогает адаптироваться к нагрузкам (физическим и ментальным!).",
      },
      {
        strong: "Защитник кожи:",
        rest: " Натуральный SPF-эффект, противовоспалительные свойства. Отличный массажный базис!",
      },
      {
        strong: "Идеально:",
        rest: " В азиатские блюда, салаты, заправки, лёгкое обжаривание (не перегревать!), уход за кожей.",
      },
    ],
    note: "Хранить в холоде, беречь от света!",
  },
  {
    title: "Горчичное масло",
    titleShort: "Горчичное",
    image: oilMustard,
    back: mustardBack,
    subtitle: "Нерафинированное холодного отжима",
    introRest:
      "Согревающее и антимикробное действие (как имбирь, но в масле!).",
    bullets: [
      {
        strong: "Стимулятор пищеварения:",
        rest: " Улучшает аппетит и работу ЖКТ.",
      },
      {
        strong: "Укрепляет сосуды:",
        rest: " Помогает нормализовать давление и свёртываемость крови.",
      },
      {
        strong: "Для смелых вкусов:",
        rest: " Пикантный вкус — изюминка блюд!",
      },
      {
        strong: "Идеально:",
        rest: " Винегреты, «шуба», выпечка (тесто пышнее!), тушение.",
      },
    ],
    note: "Хранить в холоде, беречь от света!",
  },
  {
    title: "Подсолнечное масло",
    titleShort: "Подсолнечное",
    image: oilSunflower,
    back: sunflowerBack,
    subtitle: "Нерафинированное холодного отжима",
    introRest:
      "Богатейший природный источник витамина E — главный антиоксидант против свободных радикалов.",
    bullets: [
      {
        strong: "Щит для сердца:",
        rest: " Нормализует холестериновый обмен, защищает сосуды.",
      },
      {
        strong: "Друг ЖКТ:",
        rest: " Обволакивает слизистые, мягко стимулирует работу желчного.",
      },
      {
        strong: "Для красоты:",
        rest: " Линолевая кислота — база для здоровой упругой кожи.",
      },
      { strong: "Идеально:", rest: " Салаты, готовые овощи, холодные соусы." },
    ],
    note: "Не греть!",
  },
];

// Мука
const slidesFlour = [
  {
    title: "Льняная мука",
    titleShort: "Льняная мука",
    image: flourLinen,
    back: linenBack,
    subtitle: "Суперфуд для очищения!",
    introRest:
      "Рекордсмен по клетчатке. Выводит токсины, нормализует стул, даёт сытость. Отлично для детокса и контроля веса!",
    bullets: [
      {
        strong: "Омега-3 в порошке:",
        rest: " Сохраняет жирные кислоты льняного семени.",
      },
      { strong: "Не содержит глютен", rest: "" },
      {
        strong: "Стабилизатор сахара:",
        rest: " Сглаживает гликемические пики.",
      },
      {
        strong: "Идеально:",
        rest: " В смузи, каши, йогурт, выпечку (до 20% от муки), панировку.",
      },
    ],
    note: "Хранить в сухом месте!",
  },
  {
    title: "Кунжутная мука",
    titleShort: "Кунжутная мука",
    image: flourSesame,
    back: sesameBack,
    subtitle: "Источник кальция!",
    introRest:
      "Больше кальция, чем в масле. Основа крепких костей и спокойных нервов.",
    bullets: [
      {
        strong: "Белок и аминокислоты:",
        rest: " В т.ч. триптофан (серотонин) и аргинин (мышцы и сосуды).",
      },
      {
        strong: "Минералы:",
        rest: " Железо, цинк, магний, фосфор — минеральный коктейль!",
      },
      {
        strong: "Идеально:",
        rest: " Смузи, энергетические шарики, выпечка (ореховый вкус), панировка, загуститель соусов.",
      },
    ],
    note: "Хранить в сухом месте!",
  },
];

/* ================== SLIDE CARD ================== */
function ProductCard({ slide, showSwipeHint }) {
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);
  const interaction = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hint, setHint] = useState(false);
  const [touchX, setTouchX] = useState(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (cardRef.current) io.observe(cardRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!showSwipeHint || !isMobile || !isVisible) return;
    timeoutRef.current = setTimeout(() => {
      if (!interaction.current) setHint(true);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [isVisible, showSwipeHint]);

  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchMove = (e) => {
    if (touchX == null) return;
    const dx = Math.abs(e.touches[0].clientX - touchX);
    if (dx > 30 && !interaction.current) {
      interaction.current = true;
      setHint(false);
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
    relative snap-center flex-shrink-0 
    w-[95vw] sm:w-[720px] md:w-[700px] lg:w-[900px] xl:w-[1210px] 2xl:w-[1520px]
    bg-[#1C3B3E] rounded-[24px] md:rounded-[28px] p-4 sm:p-6 md:p-8 lg:p-10
    border border-[#1C3B3E]
    ${
      slide.title.includes("масло")
        ? "h-[920px] sm:h-[1010px]  lg:h-[800px] xl:h-[670px] 2xl:h-[640px]" // масла выше
        : " h-[730px] sm:h-[880px] xl:h-[580px] 2xl:h-[580px]" // мука ниже
    }
  `}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      <h2
        className="text-center mt-1 text-[28px] sm:text-[36px] md:text-[46px] lg:text-[48px] xl:text-[48px] 2xl:text-[55px] font-lato font-bold
                     bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
      >
        {slide.title}
      </h2>

      <div className="mt-4 md:mt-6 rounded-[18px] border border-[#D7B56D]  p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="relative flex items-center justify-center lg:w-[280px] xl:w-[320px] flex-shrink-0">
            {slide.back && (
              <img
                src={slide.back}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none select-none"
                style={{
                  filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.15))",
                  transform:
                    slide.title.includes("Льняное масло") ||
                    slide.title.includes("Льняная мука")
                      ? "translateX(-10%)"
                      : "none",
                }}
              />
            )}

            <img
              src={slide.image}
              alt={slide.title}
              className={`relative z-10 object-contain w-full
                ${
                  slide.title.includes("мука")
                    ? "max-h-[170px] md:max-h-[260px] lg:max-h-[270px]"
                    : "max-h-[200px] md:max-h-[330px] lg:max-h-[370px]"
                }`}
            />
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] font-lato font-bold text-[#D7B56D]">
              {slide.subtitle}
            </h3>

            <p className="mt-3 md:mt-4 text-[16px] sm:text-[18px] md:text-[20px] text-[#EDD196] font-lato">
              {slide.introStrong && (
                <span className="font-bold">{slide.introStrong}</span>
              )}
              {slide.introRest}
            </p>

            <ul className="mt-5 space-y-2">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 block w-[8px] h-[8px] rounded-full bg-[#D7B56D]" />
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-7 text-[#D7B56D] font-lato">
                    <span className="font-bold">{b.strong}</span>
                    {b.rest}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <div className="border-t border-[#EDD19640] w-full my-4"></div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-lato font-bold text-[#D7B56D]">
                {slide.note}
              </p>
            </div>
          </div>
        </div>
      </div>

      {hint && (
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none md:hidden">
          <div className="animate-pulse px-2 py-1 rounded-full bg-[#D7B56D] text-[#1C3B3E] text-[12px]">
            свайп →
          </div>
        </div>
      )}
    </div>
  );
}

/* ================== H-SCROLL CAROUSEL ================== */
function HScrollCarousel({ slides }) {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [pad, setPad] = useState(0);
  const [mobileHeight, setMobileHeight] = useState(null);

  useEffect(() => {
    const calcPadAndHeight = () => {
      const track = trackRef.current;
      const first = itemRefs.current[0];
      if (!track || !first) return;

      const half = Math.max((track.clientWidth - first.clientWidth) / 2, 0);
      const isMobile = window.innerWidth <= 768;

      const mobilePad = 4; // маленькая прокладка
      const p = isMobile ? Math.max(half, mobilePad) : Math.max(half, 16);
      setPad(p);

      if (isMobile) {
        setMobileHeight(first.clientHeight);
      } else {
        setMobileHeight(null);
      }

      track.scrollTo({ left: 0, behavior: "auto" });
    };

    calcPadAndHeight();
    window.addEventListener("resize", calcPadAndHeight);
    return () => window.removeEventListener("resize", calcPadAndHeight);
  }, [slides.length]);

  useEffect(() => {
    if (!trackRef.current) return;
    const options = { root: trackRef.current, threshold: 0.6 };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const idx = Number(entry.target.getAttribute("data-index"));
        setActive(idx);
      });
    }, options);

    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [slides.length]);

  const goto = (idx) => {
    const el = itemRefs.current[idx];
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const showHintOn = active === 0 ? 0 : -1;

  return (
    <>
      <div
        ref={trackRef}
        className="relative w-full overflow-x-auto no-scrollbar
             snap-x snap-mandatory scroll-px-1 sm:scroll-px-6 md:scroll-px-10"
      >
        <div className="flex items-stretch gap-1 sm:gap-6 md:gap-8 px-1 sm:px-6 md:px-10">
          <div
            aria-hidden="true"
            className="snap-none flex-shrink-0"
            style={{ width: pad }}
          />
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              data-index={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="snap-center"
              style={mobileHeight ? { minHeight: mobileHeight } : {}}
            >
              <ProductCard slide={slide} showSwipeHint={i === showHintOn} />
            </div>
          ))}
          <div
            aria-hidden="true"
            className="snap-none flex-shrink-0"
            style={{ width: pad }}
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => goto(i)}
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base
                        transition-all
                        ${
                          i === active
                            ? "bg-gradient-to-r from-[#1C3B3E] to-[#346d72] text-white shadow"
                            : "bg-white/90 text-black/60 hover:bg-white"
                        }`}
          >
            {s.titleShort ?? s.title}
          </button>
        ))}
      </div>
    </>
  );
}

/* ================== PAGE ================== */
export default function HistoryPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${bgYellow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-[70px]">
        <div className="px-4 sm:px-6 lg:px-15 xl:px-8  2xl:px-[160px]  mb-8 sm:mb-10 lg:mb-[56px] max-w-[1650px]">
          <p className="text-[28px] sm:text-[36px] lg:text-[48px] font-lato font-bold text-[#1C3B3E]">
            МОИМИ ФАВОРИТАМИ СТАЛИ:
          </p>
        </div>

        <div className="px-0">
          <HScrollCarousel slides={slidesOils} />
        </div>

        <div className="px-4 sm:px-6 lg:px-10 2xl:px-[170px] mt-10 sm:mt-12 mb-6 sm:mb-8 max-w-[1650px]">
          <p className="text-[18px] sm:text-[24px] lg:text-[32px] font-lato font-bold text-[#1C3B3E]">
            Помимо масел «Злата Русь» производит муку, что позволяет
            разнообразить здоровый рацион.
          </p>
        </div>

        <div className="px-0 pb-12 sm:pb-14 lg:pb-16">
          <HScrollCarousel slides={slidesFlour} />
        </div>
      </div>

      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
