import { useState } from "react";

// --- ASSETS ---
import about from "@/assets/about.png"; // 1920x540
import bgGreen from "@/assets/bg-green.svg"; // фон секции 1 и фон карточек секции 2
import bgYellow from "@/assets/bg-yellow.svg"; // фон секции 2 и фон карточек секции 1
import heart from "@/assets/heart.svg";
import heart2 from "@/assets/heart2.svg";
import vector from "@/assets/Vector.svg";
import vector2 from "@/assets/vector2.svg";

// Products
import flourLinen from "@/assets/flour-linen (2).png";
import flourSesame from "@/assets/flour-sesame (2).png";
import oilLinen from "@/assets/oil-linen.png";
import oilMustard from "@/assets/oil-mustard.png";
import oilSesame from "@/assets/oil-sesame.png";
import oilSunflower from "@/assets/oil-sunflower.png";

// Вспомогательно: для второго блока — делим твои points на ОПИСАНИЕ и ПОЛЬЗУ (сохраняя текст)
function splitPointsToDescBenefit(points = []) {
  if (!points.length) return { desc: "", benefit: "" };
  const mid = Math.ceil(points.length / 2);
  const desc = points.slice(0, mid).join(" ");
  const benefit = points.slice(mid).join(" ");
  return { desc, benefit };
}

function FlipCard({
  image,
  title,
  points, // массив для блока 1 (рендерится как маркеры)
  frontBg, // фон фронта (обеих секций)
  backBg, // фон бэка  (обеих секций)
  titleClass, // класс для текста под фото (разный во 2-м блоке)
  backMode, // "list" | "descBenefit" — режим обратной стороны
  backTextColor = "#1C3B3E", // цвет текста на обороте (по умолчанию тёмно-зелёный)
  descText = "", // для режима descBenefit
  benefitText = "", // для режима descBenefit
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-[376px] h-[414px] [perspective:1000px] cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 [backface-visibility:hidden]"
          style={frontBg}
        >
          <img
            src={image}
            alt={title}
            className="max-w-[80%] max-h-[80%] mb-6 object-contain"
          />
          <div
            className={
              titleClass ??
              "font-bold text-[24px] font-lato uppercase text-center px-2 text-[#1C3B3E]"
            }
          >
            {title}
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center p-6 text-left [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={backBg}
        >
          {/* Режим 1: список поинтов (блок 1) */}
          {backMode === "list" ? (
            <ul
              className="w-[80%] mx-auto list-none font-lato text-[20px] font-[350px] flex flex-col items-start justify-center gap-2"
              style={{ color: backTextColor }}
            >
              {points?.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 block w-[8px] h-[8px] rounded-full bg-[#1C3B3E] shrink-0"></span>
                  <span className="leading-7">{p}</span>
                </li>
              ))}
            </ul>
          ) : (
            // Режим 2: ОПИСАНИЕ -> текст; ПОЛЬЗА -> текст (блок 2)
            <div className="w-[85%] mx-auto font-lato">
              <h4 className="font-bold text-[20px] font-lato bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent ">
                ОПИСАНИЕ
              </h4>
              <p
                className="text-[16px] font-[350px] font-lato leading-7 mb-4"
                style={{ color: backTextColor }}
              >
                {descText}
              </p>
              <h4 className="font-bold text-[20px] bg-gradient-to-r font-lato from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent ">
                ПОЛЬЗА
              </h4>
              <p
                className="text-[16px] font-[350px] font-lato leading-7"
                style={{ color: backTextColor }}
              >
                {benefitText}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ApplicationPage() {
  // Секция 1 (Применение) — жёлтый фон карточек, список поинтов
  const cards1 = [
    {
      image: oilLinen,
      title: "льняное масло",
      points: [
        "Принимать по 1–2 ст. ложки в день (до еды).",
        "Добавлять в салаты, каши, йогурт.",
        "Не нагревать.",
        "Для косметологии — маски для кожи и волос.",
        "Хранить в темном, прохладном месте.",
      ],
    },
    {
      image: oilMustard,
      title: "горчичное масло",
      points: [
        "Для заправки салатов, каш.",
        "Не использовать для жарки.",
        "Использовать для массажа, ухода за кожей.",
        "Употреблять внутрь для профилактики.",
        "Хранить в темном месте.",
      ],
    },
    {
      image: oilSesame,
      title: "кунжутное масло",
      points: [
        "Добавлять в салаты, соусы, маринады.",
        "Не подходит для жарки.",
        "Использовать в косметологии (маски, уход).",
        "При простудах — народные рецепты.",
        "Хранить в темном месте.",
      ],
    },
    {
      image: oilSunflower,
      title: "подсолнечное масло",
      points: [
        "Заправка салатов, соусов, маринадов.",
        "Не подходит для жарки (низкая точка дымления).",
        "Не рекомендуется в выпечке.",
        "Маски для волос и кожи.",
        "Хранить в прохладном месте.",
      ],
    },
    {
      image: flourLinen,
      title: "льняная мука",
      points: [
        "Хранить герметично.",
        "Добавлять в выпечку, каши, соусы.",
        "Смешивать с пшеничной мукой.",
        "Добавлять в напитки (кефир, йогурт).",
        "Принимать на ночь для очищения.",
      ],
    },
    {
      image: flourSesame,
      title: "кунжутная мука",
      points: [
        "Добавлять в выпечку, каши, соусы.",
        "Использовать для тахини и панировки.",
        "Добавлять в молочные продукты, напитки.",
        "1–2 ст. ложки в день.",
        "Хранить в сухом, прохладном месте.",
      ],
    },
  ];

  // Секция 2 (Польза и описание) — фон карточек с двух сторон green, текст делим на ОПИСАНИЕ/ПОЛЬЗУ
  const cards2 = [
    {
      image: oilLinen,
      title: "льняное масло",
      points: [
        "Источник омега‑3 и антиоксидантов, благоприятно влияющий на здоровье сердца, кожи и фигуры.",
        "Снижает холестерин, поддерживает давление, иммунитет и обмен веществ. Улучшает состояние кожи, волос, способствует похудению и снятию стресса.",
      ],
    },
    {
      image: oilMustard,
      title: "горчичное масло",
      points: [
        "Пряное масло с витаминами и жирными кислотами, полезное для сердца, иммунитета и кожи.",
        "Стимулирует пищеварение, укрепляет сосуды, нормализует давление. Заживляет кожу, улучшает волосы и помогает при простуде.",
      ],
    },
    {
      image: oilSesame,
      title: "кунжутное масло",
      points: [
        "Ароматное масло с витаминами и омега‑кислотами, полезное для сердца, кожи и обмена веществ.",
        "Укрепляет сосуды, снижает холестерин, поддерживает пищеварение. Увлажняет кожу, защищает от воспалений и ультрафиолета.",
      ],
    },
    {
      image: oilSunflower,
      title: "подсолнечное масло",
      points: [
        "Масло с богатым витаминно-минеральным составом, сохраняющее природные свойства семян.",
        "Витамины A, D, E, K, группы B, магний, селен укрепляют иммунитет, кожу, зрение. Поддерживает ЖКТ, обмен веществ, нервную и эндокринную системы.",
      ],
    },
    {
      image: flourLinen,
      title: "льняная мука",
      points: [
        "Богатая клетчаткой и омега‑3 мука для очищения организма и укрепления здоровья.",
        "Улучшает пищеварение, снижает холестерин, поддерживает иммунитет. Помогает в снижении веса, нормализует сахар в крови, укрепляет кожу и волосы.",
      ],
    },
    {
      image: flourSesame,
      title: "кунжутная мука",
      points: [
        "Кальциевая и витаминная мука для костей, кожи и иммунитета.",
        "Богата кальцием, аминокислотами, витаминами и минералами. Поддерживает сердце, эндокринную систему, укрепляет ногти, волосы, иммунитет.",
      ],
    },
  ];

  // Фоны карточек
  const yellowBg = {
    backgroundImage: `url(${bgYellow})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const greenBg = {
    backgroundImage: `url(${bgGreen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="font-sans text-gray-800">
      {/* ===== HERO #1 ===== */}
      <section className="relative w-full h-[540px] grid place-items-center overflow-hidden">
        <img
          src={about}
          alt="Фон о нас"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center z-10">
          <h1 className="text-white font-bold text-[60px] font-lato ">
            ПРИМЕНЕНИЕ
          </h1>
          <p className="text-white font-normal text-[24px] text ">
            Советы по применению нашей продукции
          </p>
        </div>
      </section>

      {/* ===== SECTION #1 (BG GREEN, cards YELLOW) ===== */}
      <section className="relative">
        <img
          src={bgGreen}
          alt="Зелёный фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* TEXT */}
        <div className="relative z-10 max-w-[1600px] pt-[70px] pl-[160px] pr-[160px]">
          <h2 className="font-bold font-lato text-[24px] text-[#D7B56D]">
            НАВЕДИТЕСЬ НА КАРТОЧКУ, ЧТОБЫ ПЕРЕВЕРНУТЬ
          </h2>
          <p className="mt-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent text-[48px] font-lato font-bold">
            ПРИМЕНЕНИЕ НАШЕЙ ПРОДУКЦИИ
          </p>
        </div>
        {/* GRID #1 */}
        <div className="relative z-10 mt-6 px-[160px] max-w-[1920px] mx-auto flex flex-col items-center gap-8">
          <div className="grid grid-cols-4 gap-8 justify-center">
            {cards1.slice(0, 4).map((c, idx) => (
              <FlipCard
                key={idx}
                {...c}
                frontBg={yellowBg}
                backBg={yellowBg}
                backMode="list"
                backTextColor="#1C3B3E"
              />
            ))}
          </div>
          <div className="grid mb-[60px] grid-cols-3 gap-8 justify-center items-center">
            {cards1.slice(4).map((c, idx) => (
              <FlipCard
                key={`b${idx}`}
                {...c}
                frontBg={yellowBg}
                backBg={yellowBg}
                backMode="list"
                backTextColor="#1C3B3E"
              />
            ))}
            <div className="flex items-center justify-center">
              <img
                src={heart}
                alt=""
                className="w-[372.44px] h-[339.59px] heartbeat"
              />
            </div>
          </div>
        </div>
        {/* Орнамент 1 */}
        <div className="relative z-10 flex w-full justify-center mt-6">
          <img
            src={vector}
            alt="Орнамент"
            className="w-[1540px] -mt-10 mb-13 h-[34px]"
          />
        </div>
      </section>

      {/* ===== HERO #2 ===== */}
      <section className="relative w-full h-[540px] grid place-items-center overflow-hidden ">
        <img
          src={about}
          alt="Фон о нас"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center w-full z-10 max-w-[1200px]">
          <h2 className="text-white font-bold text-[60px] font-lato ">
            ПОЛЬЗА И ОПИСАНИЕ ПРОДУКТОВ
          </h2>
          <p className="text-white font-normal text-[24px] text-center whitespace-nowrap">
            Узнайте о полезных свойствах наших растительных масел и муки, а
            также об их уникальном вкусе и применении
          </p>
        </div>
      </section>

      {/* ===== SECTION #2 (BG YELLOW, cards GREEN): FRONT title — золотой градиент, BACK — #D7B56D; ОПИСАНИЕ → ПОЛЬЗА ===== */}
      <section className="relative">
        <img
          src={bgYellow}
          alt="Жёлтый фон"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* TEXT */}
        <div className="relative z-10 max-w-[1600px] pt-[70px] pl-[160px] pr-[160px]">
          <h3 className="font-bold font-lato text-[24px] text-[#1C3B3E]">
            НАВЕДИТЕСЬ НА КАРТОЧКУ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ
          </h3>
          <p className="mt-2 text-[#1C3B3E] text-[36px] font-lato font-bold">
            ПОЛЕЗНЫЕ СВОЙСТВА И ВКУС
          </p>
        </div>
        {/* GRID #2 */}
        <div className="relative z-10 mt-6 px-[160px] max-w-[1920px] mx-auto flex flex-col items-center gap-8">
          {/* верхний ряд */}
          <div className="grid grid-cols-4 gap-8 justify-center">
            {cards2.slice(0, 4).map((c, idx) => {
              const { desc, benefit } = splitPointsToDescBenefit(c.points);
              return (
                <FlipCard
                  key={`top2-${idx}`}
                  image={c.image}
                  title={c.title}
                  frontBg={greenBg}
                  backBg={greenBg}
                  // ЗАКРЫТАЯ карточка — градиентный золотой текст под фото:
                  titleClass="font-bold text-[24px] font-lato uppercase text-center px-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                  // ОТКРЫТАЯ карточка — цвет текста #D7B56D, структура: ОПИСАНИЕ → ПОЛЬЗА
                  backMode="descBenefit"
                  backTextColor="#D7B56D"
                  descText={desc}
                  benefitText={benefit}
                />
              );
            })}
          </div>
          {/* нижний ряд */}
          <div className="grid mb-[60px] grid-cols-3 gap-8 justify-center items-center">
            {cards2.slice(4).map((c, idx) => {
              const { desc, benefit } = splitPointsToDescBenefit(c.points);
              return (
                <FlipCard
                  key={`bot2-${idx}`}
                  image={c.image}
                  title={c.title}
                  frontBg={greenBg}
                  backBg={greenBg}
                  titleClass="font-bold text-[24px] font-lato uppercase text-center px-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                  backMode="descBenefit"
                  backTextColor="#D7B56D"
                  descText={desc}
                  benefitText={benefit}
                />
              );
            })}
            <div className="flex items-center justify-center">
              <img
                src={heart2}
                alt=""
                className="w-[372.44px] h-[339.59px] heartbeat"
              />
            </div>
          </div>
        </div>
        {/* Орнамент 2 */}
        <div className="relative z-10 flex w-full justify-center mt-6">
          <img
            src={vector2}
            alt="Орнамент"
            className="w-[1540px] -mt-10 mb-13 h-[34px]"
          />
        </div>
      </section>

      {/* Локальная анимация сердца */}
      <style>{`
        @keyframes heartbeat {
          0%   { transform: scale(1); }
          25%  { transform: scale(1.08); }
          40%  { transform: scale(0.97); }
          60%  { transform: scale(1.1); }
          75%  { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        .heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
          transform-origin: center center;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
