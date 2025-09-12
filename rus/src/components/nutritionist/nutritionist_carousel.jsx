// src/pages/History.jsx
import { useEffect, useState } from "react";

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

// Общие размеры
const CARD_WIDTH = 1535;
const GAP = 40;

// Универсальная карусель (с твоей разметкой)
function Carousel({ slides, topPadding = 60 }) {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ paddingTop: topPadding }}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(${
            windowWidth / 2 - CARD_WIDTH / 2 - current * (CARD_WIDTH + GAP)
          }px)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-[1535px] h-[700px] flex-shrink-0 rounded-[32px] bg-[#1C3B3E] flex flex-col items-center mr-[40px]"
          >
            {/* Заголовок карточки */}
            <h2 className="mt-[35px] text-[55px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
              {slide.title}
            </h2>

            {/* Контентная область */}
            <div className="mt-[20px] w-[1400px] h-[430px] rounded-[24px] border border-[#D7B56D] p-8 flex">
              {/* Левая колонка: фото + подложка */}
              <div className="flex-shrink-0 flex items-center justify-center w-[220px] relative">
                {/* Подложка (если есть) */}
                {slide.back && (
                  <img
                    src={slide.back}
                    alt=""
                    className={`absolute -mt-[50px] max-h-[400px] max-w-[280px] object-contain opacity-95 pointer-events-none select-none
                    ${
                      slide.title === "Льняное масло"
                        ? "left-[-60px]" // льняное масло — левее
                        : slide.title === "Горчичное масло"
                        ? "left-[20px]" // горчичное — правее
                        : slide.title === "Кунжутная мука (Тахинная мука)"
                        ? "left-[-25px]" // кунжутная мука — правее (НОВОЕ)
                        : slide.title.includes("мука")
                        ? "left-[-80px]" // остальные муки — левее
                        : "left-[-25px]" // прочие масла
                    }`}
                    style={{
                      filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.15))",
                    }}
                  />
                )}

                {/* Основное фото продукта (поверх) */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`relative object-contain z-10 
                  ${slide.title.includes("мука") ? "h-[280px]" : "h-[370px]"}`}
                />
              </div>

              {/* Правая колонка: текст */}
              <div className="flex-1 ml-[40px] flex flex-col">
                <h3 className="text-[28px] font-lato font-bold text-[#D7B56D]">
                  {slide.subtitle}
                </h3>

                {slide.introStrong ? (
                  <p className="mt-4 font-lato text-[20px] text-[#EDD196]">
                    <span className="font-bold">{slide.introStrong}</span>
                    {slide.introRest}
                  </p>
                ) : (
                  <p className="mt-4 text-[20px] font-lato text-[#EDD196]">
                    {slide.introRest}
                  </p>
                )}

                <ul className="mt-6 space-y-2">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2.5 block w-[8px] h-[8px] rounded-full bg-[#D7B56D]" />
                      <p className="text-[18px] font-lato leading-7 text-[#D7B56D]">
                        <span className="font-bold ">{b.strong}</span>
                        {b.rest}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Сноска фиксирована снизу */}
                <div className="mt-auto">
                  <div className="border-t border-[#EDD19640] w-full mb-4"></div>
                  <p className="text-[20px] font-lato font-bold text-[#D7B56D] ">
                    {slide.note}
                  </p>
                </div>
              </div>
            </div>

            {/* Навигация */}
            <div className="flex justify-center gap-[9px] mt-[30px] mb-8 flex-wrap">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`px-[20px] py-[10px] rounded-full font-lato text-[20px] ${
                    i === current
                      ? "bg-gradient-to-r from-[#7C622B] to-[#FFD170] text-white"
                      : "bg-white text-[#00000070]"
                  }`}
                >
                  {s.titleShort ?? s.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ДАННЫЕ СЛАЙДОВ (МАСЛА)
const slidesOils = [
  {
    title: "Льняное масло",
    titleShort: "Льняное масло",
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
    titleShort: "Кунжутное масло",
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
        rest: " Натуральный SPF-эффект, мощные противовоспалительные свойства. Отличный массажный базис!",
      },
      {
        strong: "Идеально:",
        rest: " В азиатские блюда, салаты, заправки, для лёгкого обжаривания (осторожно, не перегревать!), в уход за кожей.",
      },
    ],
    note: "Хранить в холоде, беречь от света!",
  },
  {
    title: "Горчичное масло",
    titleShort: "Горчичное масло",
    image: oilMustard,
    back: mustardBack,
    subtitle: "Нерафинированное холодного отжима",
    introRest:
      "Обладает выраженным согревающим и антимикробным действием (как имбирь, но в масле!).",
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
        rest: " Пикантный, островатый вкус — изюминка блюд!",
      },
      {
        strong: "Идеально:",
        rest: " Для заправки винегретов, селёдки под шубой, выпечки (делает тесто невероятно пышным!), тушения.",
      },
    ],
    note: "Хранить в холоде, беречь от света!",
  },
  {
    title: "Подсолнечное масло",
    titleShort: "Подсолнечное масло",
    image: oilSunflower,
    back: sunflowerBack,
    subtitle: "Нерафинированное холодного отжима",
    introRest:
      "Богатейший природный источник витамина E (токоферола) — главного антиоксиданта для борьбы со свободными радикалами и старением клеток.",
    bullets: [
      {
        strong: "Щит для сердца:",
        rest: " Помогает нормализовать холестериновый обмен, защищает сосуды",
      },
      {
        strong: "Друг ЖКТ:",
        rest: " Обволакивает слизистые, мягко стимулирует работу желчного.",
      },
      {
        strong: "Для красоты изнутри:",
        rest: " Линолевая кислота — строительный блок для здоровой, упругой кожи.",
      },
      {
        strong: "Идеально:",
        rest: " В свежие салаты, сбрызнуть готовые овощи, в холодные соусы",
      },
    ],
    note: "Не греть!",
  },
];

// ДАННЫЕ СЛАЙДОВ (МУКА)
const slidesFlour = [
  {
    title: "Льняная мука",
    titleShort: "Льняная мука",
    image: flourLinen,
    back: linenBack,
    subtitle: "Суперфуд для очищения!",
    introRest:
      "Рекордсмен по клетчатке. Чистильщик для кишечника, выводит токсины, нормализует стул, дарит долгое чувство сытости. Идеальна для детокса и контроля веса!",
    bullets: [
      {
        strong: "Омега-3 в порошке:",
        rest: " Сохраняет полезные жирные кислоты льняного семени.",
      },
      { strong: "Не содержит глютен", rest: "" },
      {
        strong: "Стабилизатор сахара:",
        rest: " Помогает сглаживать гликемические пики.",
      },
      {
        strong: "Идеально:",
        rest: " Добавлять в смузи, каши, йогурт, выпечку (до 20% от муки), панировку.",
      },
    ],
    note: "Хранить в сухом месте!",
  },
  {
    title: "Кунжутная мука (Тахинная мука)",
    titleShort: "Кунжутная мука",
    image: flourSesame,
    back: sesameBack,
    subtitle: "Источник кальция!",
    introRest:
      "Даже больше, чем в кунжутном масле! Основа крепкого скелета и спокойных нервов.",
    bullets: [
      {
        strong: "Белок и аминокислоты:",
        rest: " Содержит ценные аминокислоты, включая триптофан (предшественник «гормона счастья» серотонина) и аргинин (важен для мышц и сосудов).",
      },
      {
        strong: "Богатство минералов:",
        rest: " Железо, цинк, магний, фосфор — настоящий минеральный коктейль!",
      },
      {
        strong: "Идеально:",
        rest: " В смузи, энергетические шарики, выпечку (придаёт ореховый вкус), панировку, как загуститель соусов.",
      },
    ],
    note: "Хранить в сухом месте!",
  },
];

export default function HistoryPage() {
  return (
    <div
      className="h-[1800px]"
      style={{
        backgroundImage: `url(${bgYellow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Жёлтый фон под хедером */}
      <div className="pt-[70px]">
        {/* Текст сверху */}
        <div className="pl-[170px] mb-[56px] max-w-[1600px]">
          <p className="text-[48px] font-lato font-bold text-[#1C3B3E] ">
            МОИМИ ФАВОРИТАМИ СТАЛИ:
          </p>
        </div>

        {/* Карусель масел */}
        <Carousel slides={slidesOils} topPadding={0} />

        {/* Текст между каруселями */}
        <div className="relative z-10 mt-12 mb-8 pl-[170px] max-w-[1600px]">
          <p className="text-[32px] font-lato font-bold text-[#1C3B3E] ">
            Помимо масел «Злата Русь» производит муку, что позволяет
            разнообразить здоровый рацион.
          </p>
        </div>

        {/* Карусель муки */}
        <Carousel slides={slidesFlour} topPadding={0} />
      </div>
    </div>
  );
}
