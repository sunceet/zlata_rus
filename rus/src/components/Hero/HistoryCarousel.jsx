// src/components/HistoryCarousel.jsx
import { useEffect, useRef, useState } from "react";
import ruslan from "@/assets/ruslan.svg";
import heart from "@/assets/heart.svg";

/* ================== SLIDES DATA ================== */
const slides = [
  {
    title: "Моя история",
    text: `В 2020 году я круто изменил свою жизнь, перейдя на здоровое питание.
      Одним из ключевых шагов был отказ от жареного и открытие для себя мира
      настоящих, нерафинированных масел холодного отжима. Результат не заставил
      себя ждать: прилив энергии, ясность мысли и улучшения во внешности.
      Этот личный опыт стал искрой. Так родилась идея "Злата Русь".`,
  },
  {
    title: "Наша уникальность",
    text: `"Злата Русь" – это масла исключительно холодного отжима высшего сорта. Почему это важно? Потому что только при бережном отжиме без высоких температур сохраняются все драгоценные дары природы: витамины (А, Е, D, K), жирные кислоты (Омега-3, -6, -9), антиоксиданты и фитостерины. Это не просто масло для салата – это настоящий эликсир здоровья! Оно укрепляет организм, дарит сияние коже, блеск волосам, поддерживает сердце и сосуды, борется с воспалениями. Мы не гонимся за универсальностью – наше масло создано для того, чтобы приносить максимум пользы в холодных блюдах, раскрывая свой яркий, натуральный вкус и аромат. Помните: для жарки оно не предназначено – мы заботимся о вашем здоровье честно.`,
  },
  {
    title: "Для кого мы создаем?",
    text: `Наша аудитория – это вы, ценители своего здоровья и качества жизни. Вы понимаете, что красота и долголетие идут изнутри, что питание – это основа. Вы выбираете натуральные продукты, чтобы чувствовать себя лучше, энергичнее, выглядеть моложе и ухоженнее. Для вас важно знать, что вы употребляете, и мы с огромным уважением относимся к вашему выбору.
"Злата Русь" – для тех, кто инвестирует в свое здоровье и благополучие.`,
  },
  {
    title: "Наши ценности",
    text: `В основе "Злата Русь" лежат простые, но фундаментальные вещи:
    • Только чистое сырье с алтайских полей, бережная технология холодного отжима.
     • Стремление быть номером 1 в России и за ее пределами.
     • Четкое понимание пользы и рекомендаций по употреблению.
     • Премиальная упаковка, в том числе наши любимые деревянные подарочные коробки.
     • Наш слоган "С любовью в ваш дом" – это не просто слова, это суть бренда.`,
  },
  {
    title: "Какие эмоции мы хотим дарить?",
    text: `Когда вы видите "Злата Русь", мы хотим, чтобы вы чувствовали: заботу о вашем здоровье, гордость за качественный российский продукт, тепло и уют семейного стола, радость от возможности подарить близким не просто масло, а частичку здоровья и любви в красивой упаковке. Для меня нет большей радости, чем знать, что мое "детище" становится желанным подарком, приносящим приятные эмоции и дарителям, и получателям!`,
  },
  {
    title: "Наши амбиции",
    text: `Наш путь только начинается, и он полон вызовов. Но мы уверенно идем к своей цели – шаг за шагом. Наша главная мечта – чтобы культура потребления натуральных растительных масел в России вышла на новый уровень. Чтобы в каждом доме, в каждой семье знали и любили "Злата Русь", доверяя нам самое ценное – свое здоровье и здоровье своих близких. Мы стремимся войти в ваш дом "с любовью" и остаться там надолго. Добро пожаловать в мир настоящего вкуса, силы природы и заботы о себе! Добро пожаловать в "Злата Русь"!`,
  },
];

/* ================== CARD ================== */
function StoryCard({ slide, showSwipeHint, index }) {
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);
  const interaction = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hint, setHint] = useState(false);
  const [touchX, setTouchX] = useState(null);

  const showTop = index === 0; // верхний блок только на 1-й карточке
  const showHeartBottom = index >= 2; // сердце справа внизу начиная с 3-й карточки

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

  /* ===== Разбор текста на абзацы и буллеты ===== */
  const lines = (slide.text || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  // соберём абзацы и пункты в порядке появления:
  const blocks = [];
  let currentPara = [];

  const flushPara = () => {
    if (currentPara.length) {
      blocks.push({ type: "p", text: currentPara.join(" ") });
      currentPara = [];
    }
  };

  lines.forEach((l) => {
    if (/^•\s*/.test(l)) {
      // встретили пункт — закрываем текущий абзац и добавляем li
      flushPara();
      blocks.push({ type: "li", text: l.replace(/^•\s*/, "") });
    } else {
      currentPara.push(l);
    }
  });
  flushPara();

  // сгруппируем подряд идущие li в один список
  const grouped = [];
  let currentList = null;
  blocks.forEach((b) => {
    if (b.type === "li") {
      if (!currentList) currentList = { type: "ul", items: [] };
      currentList.items.push(b.text);
    } else {
      if (currentList) {
        grouped.push(currentList);
        currentList = null;
      }
      grouped.push(b);
    }
  });
  if (currentList) grouped.push(currentList);

  return (
    <div
      ref={cardRef}
      className={`
        relative snap-center flex-shrink-0 
        w-[95vw] sm:w-[720px] md:w-[700px] lg:w-[900px] xl:w-[1210px] 2xl:w-[1520px]
        bg-[#1C3B3E] rounded-[24px] md:rounded-[28px] p-4 sm:p-6 md:p-8 lg:p-10
        border border-[#1C3B3E]
        h-full
        flex flex-col
      `}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {/* Заголовок с градиентом */}
      <h2 className="text-center md:-mt-7 text-[32px] sm:text-[36px] md:text-[46px] lg:text-[48px] xl:text-[48px] 2xl:text-[55px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
        {slide.title}
      </h2>

      {/* Контент-бокс */}
      <div
        className={`mt-1 rounded-[18px] border border-[#D7B56D] p-4 sm:p-6 md:p-8 lg:p-10
                    h-full
                    flex flex-col relative ${showHeartBottom ? "pb-28" : ""}`}
      >
        {/* Верхний ряд только на первой карточке */}
        {showTop && (
          <>
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <img
                  src={ruslan}
                  alt="Руслан"
                  className="w-[120px] sm:w-[140px] md:w-[160px] h-[120px] sm:h-[140px] md:h-[160px] object-cover rounded-full ml-[2px] mt-[2px]"
                />
                <div className="ml-[16px] md:ml-[20px] mt-2">
                  <h3 className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[55px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
                    Руслан Снигур
                  </h3>
                  <p className="text-[14px] sm:text-[18px] md:text-[20px] font-lato text-[#EDD196] mt-1.5">
                    Основатель "Злата Русь"
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-3 sm:mt-4 border-t border-[#EDD19650]" />
          </>
        )}

        {/* Текст со скроллом */}
        <div
          className={`flex-1 overflow-y-auto ${
            showTop ? "mt-3 sm:mt-4" : "mt-1"
          }`}
        >
          {grouped.map((b, i) => {
            if (b.type === "p") {
              return (
                <p
                  key={`p-${i}`}
                  className="text-[16px] sm:text-[18px] md:text-[20px] text-[#EDD196] leading-7 font-lato pr-1"
                >
                  {b.text}
                </p>
              );
            }
            // список
            return (
              <ul
                key={`ul-${i}`}
                className="list-disc pl-6 mt-2 space-y-2 text-[16px] sm:text-[18px] md:text-[20px] leading-7 text-[#EDD196] font-lato marker:text-[#D7B56D]"
              >
                {b.items.map((t, j) => (
                  <li key={`li-${i}-${j}`}>{t}</li>
                ))}
              </ul>
            );
          })}
        </div>

        {/* Сердце справа внизу (с 3-й карточки) */}
        {showHeartBottom && (
          <img
            src={heart}
            alt="С любовью"
            className="absolute right-3 bottom-3 w-[120px] sm:w-[140px] md:w-[160px] h-auto select-none pointer-events-none"
          />
        )}
      </div>

      {/* Свайп-подсказка на мобилке */}
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

/* ================== H-SCROLL КАРУСЕЛЬ ================== */
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

      const mobilePad = 4;
      const p = isMobile ? Math.max(half, mobilePad) : Math.max(half, 16);
      setPad(p);

      if (isMobile) setMobileHeight(first.clientHeight);
      else setMobileHeight(null);

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
        className="relative w-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-1 sm:scroll-px-6 md:scroll-px-10"
      >
        <div className="flex items-stretch gap-1 sm:gap-6 md:gap-8 sm:px-6 md:px-10">
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
              <StoryCard
                slide={slide}
                index={i}
                showSwipeHint={i === showHintOn}
              />
            </div>
          ))}
          <div
            aria-hidden="true"
            className="snap-none flex-shrink-0"
            style={{ width: pad }}
          />
        </div>
      </div>

      {/* Индикаторы / кнопки навигации */}
      <div className="flex justify-center flex-wrap ml-2 xl:ml-0 gap-1 md:gap-3 mt-6 md:mt-8">
        {slides.map((s, i) => (
          <button
            key={s.title}
            onClick={() => goto(i)}
            className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base transition-all
              ${
                i === active
                  ? "bg-gradient-to-r from-[#1C3B3E] to-[#346d72] text-white shadow"
                  : "bg-white/90 text-black/60 hover:bg-white"
              }`}
          >
            {s.title}
          </button>
        ))}
      </div>
    </>
  );
}

/* ================== КОМПОНЕНТ СТРАНИЦЫ/СЕКЦИИ ================== */
export default function HistoryCarousel() {
  return (
    <div className="flex flex-col items-center mt-[60px]">
      <div className="w-full">
        <HScrollCarousel slides={slides} />
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
