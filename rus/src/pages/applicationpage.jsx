import { useState, useEffect, useRef } from "react";

// --- ASSETS ---
import about from "@/assets/about.png";
import bgGreen from "@/assets/bg-green.svg";
import bgYellow from "@/assets/bg-yellow.svg";
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

// helper
function splitPointsToDescBenefit(points = []) {
  if (!points.length) return { desc: "", benefit: "" };
  const mid = Math.ceil(points.length / 2);
  return {
    desc: points.slice(0, mid).join(" "),
    benefit: points.slice(mid).join(" "),
  };
}
function FlipCard({
  image,
  title,
  points,
  frontBg,
  backBg,
  titleClass,
  backMode, // "list" | "descBenefit"
  backTextColor = "#1C3B3E",
  descText = "",
  benefitText = "",
}) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  // определяем тип устройства
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // авто-закрытие при клике вне карточки (только на мобиле)
  useEffect(() => {
    if (!flipped || !isMobile) return;

    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setFlipped(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [flipped, isMobile]);

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[320px] sm:h-[380px] lg:h-[414px] [perspective:1000px] cursor-pointer"
      onMouseEnter={!isMobile ? () => setFlipped(true) : undefined}
      onMouseLeave={!isMobile ? () => setFlipped(false) : undefined}
      onClick={isMobile ? () => setFlipped((v) => !v) : undefined}
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
            className="max-w-[78%] max-h-[70%] mb-4 sm:mb-6 object-contain"
          />
          <div
            className={
              titleClass ??
              "font-bold text-[18px] sm:text-[20px] lg:text-[24px] font-lato uppercase text-center px-2 text-[#1C3B3E]"
            }
          >
            {title}
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl flex items-center justify-center p-4 sm:p-6 text-left [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={backBg}
        >
          {backMode === "list" ? (
            <ul
              className="w-[100%] sm:w-[80%] mx-auto list-none font-lato text-[12px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] font-[350] flex flex-col items-start justify-center gap-2"
              style={{ color: backTextColor }}
            >
              {points?.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-[7px] sm:mt-[8px] block h-[4px] w-[4px] sm:w-[8px] sm:h-[8px] rounded-full bg-[#1C3B3E] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="w-[100%] sm:w-[100%] mx-auto font-lato">
              <h4 className="font-bold text-[14px] sm:text-[18px] lg:text-[20px] bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
                ОПИСАНИЕ
              </h4>
              <p
                className="text-[12px] sm:text-[16px] lg:text-[18px] mb-3 font-normal"
                style={{ color: backTextColor }}
              >
                {descText}
              </p>
              <h4 className="font-bold text-[14px] sm:text-[16px] lg:text-[20px] bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
                ПОЛЬЗА
              </h4>
              <p
                className="text-[12px] sm:text-[16px] lg:text-[18px] font-normal"
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
  // SECTION 1
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

  // SECTION 2
  const cards2 = [
    {
      image: oilLinen,
      title: "льняное масло",
      points: [
        "Источник омега-3 и антиоксидантов, благоприятно влияющий на здоровье сердца, кожи и фигуры.",
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
        "Ароматное масло с витаминами и омега-кислотами, полезное для сердца, кожи и обмена веществ.",
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
        "Богатая клетчаткой и омега-3 мука для очищения организма и укрепления здоровья.",
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
      <section className="relative w-full h-[340px] sm:h-[440px] lg:h-[540px] grid place-items-center overflow-hidden">
        <img
          src={about}
          alt="Фон о нас"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center z-10 px-4">
          <h1 className="text-white font-bold text-[36px] sm:text-[48px] lg:text-[60px] font-lato">
            ПРИМЕНЕНИЕ
          </h1>
          <p className="text-white font-normal text-[16px] sm:text-[20px] lg:text-[24px]">
            Советы по применению нашей продукции
          </p>
        </div>
      </section>

      {/* ===== SECTION #1 (BG GREEN, cards YELLOW) ===== */}
      {/* ===== SECTION #1 (BG GREEN, cards YELLOW) ===== */}
      <section className="relative overflow-hidden">
        <img
          src={bgGreen}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-5 pb-10 sm:pb-12 lg:pb-16">
          <div className="pt-10">
            <h2 className="font-bold font-lato text-[14px] sm:text-[18px] lg:text-[24px] text-[#D7B56D]">
              НАВЕДИТЕСЬ НА КАРТОЧКУ, ЧТОБЫ ПЕРЕВЕРНУТЬ
            </h2>
            <p className="mt-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent text-[26px] sm:text-[36px] lg:text-[48px] font-lato font-bold">
              ПРИМЕНЕНИЕ НАШЕЙ ПРОДУКЦИИ
            </p>
          </div>

          {/* < 1280px: один общий грид на все 6 карточек, сердце скрыто */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:hidden">
            {cards1.map((c, idx) => (
              <FlipCard
                key={`all1-subxl-${idx}`}
                {...c}
                frontBg={yellowBg}
                backBg={yellowBg}
                backMode="list"
                backTextColor="#1C3B3E"
              />
            ))}
          </div>

          {/* ≥ 1280px: 4 карточки сверху */}
          <div className="mt-6 hidden xl:grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {cards1.slice(0, 4).map((c, idx) => (
              <FlipCard
                key={`top1-xl-${idx}`}
                {...c}
                frontBg={yellowBg}
                backBg={yellowBg}
                backMode="list"
                backTextColor="#1C3B3E"
              />
            ))}
          </div>

          {/* ≥ 1280px: снизу 2 карточки + сердце по центру */}
          <div className="mt-6 hidden lg:ml-15 lg:mr-15 xl:grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* левая карточка */}
            <FlipCard
              key="bot1-xl-left"
              {...cards1[4]}
              frontBg={yellowBg}
              backBg={yellowBg}
              backMode="list"
              backTextColor="#1C3B3E"
            />
            {/* сердце — видно только ≥1280px */}
            <div className="hidden xl:flex items-center justify-center">
              <img
                src={heart}
                alt=""
                className="w-[240px] sm:w-[300px] 2xl:w-[330px] h-auto heartbeat"
              />
            </div>
            {/* правая карточка */}
            <FlipCard
              key="bot1-xl-right"
              {...cards1[5]}
              frontBg={yellowBg}
              backBg={yellowBg}
              backMode="list"
              backTextColor="#1C3B3E"
            />
          </div>

          {/* Орнамент 1 — скрыт до 640px */}
          <div className="hidden sm:flex w-full justify-center mt-8">
            <img
              src={vector}
              alt="Орнамент"
              className="w-full max-w-[1540px] h-[24px] lg:h-[34px]"
            />
          </div>
        </div>
      </section>

      {/* ===== HERO #2 ===== */}
      <section className="relative w-full h-[340px] sm:h-[440px] lg:h-[540px] grid place-items-center overflow-hidden">
        <img
          src={about}
          alt="Фон о нас"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center w-full z-10 max-w=[1200px] px-4">
          <h2 className="text-white font-bold text-[28px] sm:text-[44px] lg:text-[60px] font-lato">
            ПОЛЬЗА И ОПИСАНИЕ ПРОДУКТОВ
          </h2>
          <p className="text-white font-normal text-[14px] sm:text-[18px] lg:text-[24px]">
            Узнайте о полезных свойствах наших растительных масел и муки, а
            также об их уникальном вкусе и применении
          </p>
        </div>
      </section>

      {/* ===== SECTION #2 (BG YELLOW, cards GREEN) ===== */}
      {/* ===== SECTION #2 (BG YELLOW, cards GREEN) ===== */}
      <section className="relative overflow-hidden">
        <img
          src={bgYellow}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-5 pb-10 sm:pb-12 lg:pb-16">
          <div className="pt-10">
            <h3 className="font-bold font-lato text-[14px] sm:text-[18px] lg:text-[24px] text-[#1C3B3E]">
              НАВЕДИТЕСЬ НА КАРТОЧКУ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ
            </h3>
            <p className="mt-2 text-[#1C3B3E] text-[22px] sm:text-[28px] lg:text-[36px] font-lato font-bold">
              ПОЛЕЗНЫЕ СВОЙСТВА И ВКУС
            </p>
          </div>

          {/* < 1280px: один общий грид на все 6 карточек */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:hidden">
            {cards2.map((c, idx) => {
              const { desc, benefit } = splitPointsToDescBenefit(c.points);
              return (
                <FlipCard
                  key={`all2-subxl-${idx}`}
                  image={c.image}
                  title={c.title}
                  frontBg={greenBg}
                  backBg={greenBg}
                  titleClass="font-bold text-[18px] sm:text-[20px] lg:text-[24px] font-lato uppercase text-center px-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                  backMode="descBenefit"
                  backTextColor="#D7B56D"
                  descText={desc}
                  benefitText={benefit}
                />
              );
            })}
          </div>

          {/* ≥ 1280px: 4 сверху */}
          <div className="mt-6 hidden xl:grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {cards2.slice(0, 4).map((c, idx) => {
              const { desc, benefit } = splitPointsToDescBenefit(c.points);
              return (
                <FlipCard
                  key={`top2-xl-${idx}`}
                  image={c.image}
                  title={c.title}
                  frontBg={greenBg}
                  backBg={greenBg}
                  titleClass="font-bold text-[18px] sm:text-[20px] lg:text-[24px] font-lato uppercase text-center px-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                  backMode="descBenefit"
                  backTextColor="#D7B56D"
                  descText={desc}
                  benefitText={benefit}
                />
              );
            })}
          </div>

          {/* ≥ 1280px: снизу 2 карточки + сердце по центру (сердце видно только на xl) */}
          <div className="mt-6 hidden lg:ml-15 lg:mr-15 xl:grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
            {(() => {
              const c = cards2[4];
              const { desc, benefit } = splitPointsToDescBenefit(c.points);
              return (
                <FlipCard
                  key="bot2-xl-left"
                  image={c.image}
                  title={c.title}
                  frontBg={greenBg}
                  backBg={greenBg}
                  titleClass="font-bold text-[18px] sm:text-[20px] lg:text-[24px] font-lato uppercase text-center px-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                  backMode="descBenefit"
                  backTextColor="#D7B56D"
                  descText={desc}
                  benefitText={benefit}
                />
              );
            })()}
            <div className="hidden xl:flex items-center justify-center">
              <img
                src={heart2}
                alt=""
                className="w-[240px] sm:w-[300px] 2xl:w-[330px] h-auto heartbeat"
              />
            </div>
            {(() => {
              const c = cards2[5];
              const { desc, benefit } = splitPointsToDescBenefit(c.points);
              return (
                <FlipCard
                  key="bot2-xl-right"
                  image={c.image}
                  title={c.title}
                  frontBg={greenBg}
                  backBg={greenBg}
                  titleClass="font-bold text-[18px] sm:text-[20px] lg:text-[24px] font-lato uppercase text-center px-2 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                  backMode="descBenefit"
                  backTextColor="#D7B56D"
                  descText={desc}
                  benefitText={benefit}
                />
              );
            })()}
          </div>

          {/* Орнамент 2 — скрыт до 640px */}
          <div className="hidden sm:flex w-full justify-center mt-8">
            <img
              src={vector2}
              alt="Орнамент"
              className="w-full max-w-[1540px] h-[24px] lg:h-[34px]"
            />
          </div>
        </div>
      </section>

      {/* сердце анимация */}
      <style>{`
        @keyframes heartbeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.08); }
          40% { transform: scale(0.97); }
          60% { transform: scale(1.1); }
          75% { transform: scale(0.98); }
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
