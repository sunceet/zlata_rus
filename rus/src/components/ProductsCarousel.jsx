import { useCallback, useEffect, useState } from "react";

/* === Ассеты === */
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

/* === Данные карточек === */
export const cards = [
  {
    title: "Льняное масло",
    bg: linen,
    oil: oilLinen,
    badges: ["Премиум-стекло", "Объём 250мл"],
    points: [
      "Льняное масло «Premium» — натуральный и очень полезный продукт, который получают путем прямого холодного отжима семян масличного льна, выращенного на Алтае - чистейшем уголке мира. Благодаря своим отменным целебным свойствам, льняное масло применяют во многих областях медицины и косметологии.",
    ],
  },
  {
    title: "Кунжутное масло",
    bg: sesame,
    oil: oilSesame,
    badges: ["Премиум-стекло", "Объём 250мл"],
    points: [
      "Ценный диетический продукт, получают путем прямого холодного отжима. Подходит для приготовления салатных заправок. Оптимально для поддержки уровня холестерина, снижает риск развития сердечнососудистых заболеваний. В косметологии кунжутное масло — отлично увлажняет кожу, глубоко проникая в клетки эпидермиса, питает и очищает её, замедляя процесс старения.",
    ],
  },
  {
    title: "Подсолнечное масло",
    bg: sunflower,
    oil: oilSunflower,
    badges: ["ПЭТ", "500 гр"],
    points: [
      "Масло подсолнечное нерафинированное Ароматное — это натуральный продукт из жареной семечки, не содержащий ГМО, с приятным ярким ароматом, насыщенным вкусом. Нерафинированное подсолнечное масло богато витаминами F и Е, полезными жирными кислотами-Омега 6, Омега 9.",
    ],
  },
  {
    title: "Горчичное масло",
    bg: mustard,
    oil: oilMustard,
    badges: ["Премиум-стекло", "Объём 250мл"],
    points: [
      "Нерафинированное горчичное масло улучшает пищеварение и аппетит, укрепляет сердце и сосуды, нормализует давление и уровень холестерина, повышает иммунитет за счёт витаминов, помогает заживлению кожи, ран и ожогов, улучшает состояние кожи и волос, может облегчать симптомы простуды, поддерживает здоровье печени и нервной системы, снижает стресс, улучшает сон и помогает при артрите и подагре.",
    ],
  },
  {
    title: "Кунжутная мука",
    bg: sesame,
    oil: flourSesame,
    badges: ["Дой-пак", "250 гр"],
    points: [
      "Кунжутная мука — это дробленое обезжиренное бланшированное семя черного кунжута, получаемое после отжима из него масла. Мука из кунжута не содержит глютен и идеально подойдет для низкоуглеводной диеты, спортивного и здорового питания, а также полезна для роста и полноценного развития детей. Если вы в поисках безглютеновой муки, то мука кунжутная это идеальная альтернатива пшеничной.",
    ],
  },
  {
    title: "Льняная мука",
    bg: linen,
    oil: flourLinen,
    badges: ["Дой-пак", "250 гр"],
    points: [
      "Содержит большое количество диетической клетчатки, полиненасыщенных жирных кислот, растительных белков витаминами В1, В6, фолиевой кислотой, антиоксидантами, а также необходимыми для здоровья микроэлементами. Нужно отметить высокую пищевую и биологическую ценность льняного белка, который по сбалансированности аминокислотного состава, превосходит белок многих зерновых и бобовых культур.",
    ],
  },
];

/* === Карточка === */
function Card({ item, isFlour, isSunflower }) {
  const cardWidth = isFlour ? 740 : isSunflower ? 630 : 606;

  return (
    <div
      className={`relative h-[381px] rounded-[24px] bg-white border border-none shadow-[0_10px_30px_rgba(16,24,40,0.08)] ${
        /мука/i.test(item.title) ? "overflow-visible" : "overflow-hidden"
      }`}
      style={{ width: `${cardWidth}px` }}
    >
      <div className="relative mt-3 z-10 h-full p-6 flex">
        <div className="flex-[0_0_60%] pr-4 flex flex-col">
          <h3 className="text-[24px] leading-none font-bold font-lato text-left text-[#111] uppercase">
            {item.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {(item.badges ?? []).map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-[13px] py-[13px] font-lato font-semibold rounded-[20px] bg-white text-[#111] text-[12px] border border-[#C6C6C6]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-3 w-[400px] min-h-[120px] rounded-[14px] border border-black/10 bg-white p-3 shadow-[0_2px_6px_rgba(16,24,40,0.06)] flex flex-col">
            <p className="text-[14px] text-left font-lato font-light  leading-[1.5] text-black">
              {item.points[0]}
            </p>

            <div className="h-px w-full bg-black/10 my-2" />

            <button
              type="button"
              className="group inline-flex items-center justify-center rounded-full border border-black w-[156px] h-[42px] transition-colors"
            >
              <span className="w-[32px] h-[32px] flex items-center justify-center translate-y-[3px]">
                <img
                  src={lupa}
                  alt="Поиск"
                  className="w-[28px] h-[28px] object-contain"
                  draggable={false}
                />
              </span>
              <span className="px-1.5 text-[12px] font-semibold font-lato text-[#111] leading-none">
                Узнать подробнее
              </span>
            </button>
          </div>
        </div>

        <div
          className={
            isFlour
              ? "flex-[0_0_44%] flex items-end justify-center -translate-x-2"
              : isSunflower
              ? "flex-[0_0_44%] flex items-end justify-center -translate-x-7"
              : "flex-[0_0_40%] flex items-end justify-center -translate-x-8"
          }
        >
          <img
            src={item.oil}
            alt=""
            className={
              isFlour
                ? "max-h-[100%] object-contain select-none pointer-events-none translate-y-6"
                : isSunflower
                ? "max-h-[110%] object-contain select-none pointer-events-none translate-y-9"
                : "max-h-[110%] object-contain select-none pointer-events-none translate-y-9"
            }
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

/* === Карусель === */
export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = cards.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const baseHeight = isMobile ? 380 : 381;
  const offsetX = isMobile ? 160 : 220;
  const scaleStep = 0.06;

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div
        id="products-carousel"
        className="relative w-full max-w-[900px] mx-auto h-[420px] flex items-center justify-center"
      >
        {/* ← левая стрелка */}
        {!isMobile && (
          <button
            onClick={handlePrev}
            className="absolute -left-[300px] top-1/2 -translate-y-1/2 z-50 hover:opacity-90"
          >
            <img
              src={arrowImg}
              alt="Prev"
              className="rotate-180 w-[22px] h-[37px]"
            />
          </button>
        )}

        <div className="relative w-full h-full flex items-center justify-center overflow-visible z-10">
          {cards.map((item, i) => {
            const isFlour = /мука/i.test(item.title);
            const isSunflower = /подсолнечное масло/i.test(item.title);

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

            let diff = i - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const position = diff;
            const scale = 1 - Math.abs(position) * scaleStep;
            const translateX = position * offsetX;
            const zIndex = 30 - Math.abs(position) * 10;
            const opacity =
              Math.abs(position) <= 2 ? (position === 0 ? 1 : 0.95) : 0;
            const blur =
              position === 0
                ? "blur-none"
                : Math.abs(position) === 1
                ? "blur-[5px]"
                : "blur-[10px]";

            return (
              <div
                key={i}
                className={`absolute ${blur}`}
                style={{
                  width,
                  height: baseHeight,
                  transform: `translate3d(${translateX}px,0,0) scale(${scale})`,
                  transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                  zIndex,
                  opacity,
                }}
              >
                <Card item={item} isFlour={isFlour} isSunflower={isSunflower} />
              </div>
            );
          })}
        </div>

        {/* → правая стрелка */}
        {!isMobile && (
          <button
            onClick={handleNext}
            className="absolute -right-[300px] top-1/2 -translate-y-1/2 z-50 hover:opacity-90"
          >
            <img src={arrowImg} alt="Next" className="w-[22px] h-[37px]" />
          </button>
        )}
      </div>
    </div>
  );
}
