import React from "react";
import { Link } from "react-router-dom";

import bgGreen from "@/assets/bg-green.svg";
import bgYellow from "@/assets/bg-yellow.svg";

import flourLinen from "@/assets/flour-linen (2).png";
import flourSesame from "@/assets/flour-sesame (2).png";
import oilLinen from "@/assets/oil-linen.png";
import oilMustard from "@/assets/oil-mustard.png";
import oilSesame from "@/assets/oil-sesame.png";
import oilSunflower from "@/assets/oil-sunflower.png";
import vector from "@/assets/Vector2.svg";

/* -------------------- утилита для медиа-запросов -------------------- */
function useMedia(query) {
  const getMatch = () =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false;

  const [matches, setMatches] = React.useState(getMatch);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener?.("change", onChange) || mql.addListener(onChange);
    return () => {
      mql.removeEventListener?.("change", onChange) ||
        mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

/* --------------------------------- данные --------------------------------- */
const products = [
  { id: 1, slug: "linen_oil", name: "Масло льняное", image: oilLinen },
  { id: 2, slug: "mustard_oil", name: "Масло горчичное", image: oilMustard },
  { id: 3, slug: "sesame_oil", name: "Масло кунжутное", image: oilSesame },
  {
    id: 4,
    slug: "sunflower_oil",
    name: "Масло подсолнечное",
    image: oilSunflower,
  },
  {
    id: 5,
    slug: "linen_flour",
    name: "Мука льняная",
    image: flourLinen,
    type: "flour",
  },
  {
    id: 6,
    slug: "sesame_flour",
    name: "Мука кунжутная",
    image: flourSesame,
    type: "flour",
  },
];

/* ------------------------------ карточка товара --------------------------- */
function ProductCard({ name, image, type, insetOffset = 0 }) {
  const baseTop = type === "flour" ? 90 : 84; // базовый отступ «подложки»
  const imageShift =
    type === "flour"
      ? "mt-[60px] sm:mt-[115px] lg:mt-[115px] max-h-full sm:max-h-[600px] lg:max-h-[700px]"
      : "mt-[0px] sm:mt-[120px] lg:mt-[130px] -mb-[16px] sm:-mb-[24px] lg:-mb-[40px] max-h-[85%] sm:max-h-[500px] lg:max-h-[540px]";

  return (
    <div
      className="
        group relative rounded-[18px] bg-[#1C3B3E]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:scale-[1.01]
        hover:shadow-[0_18px_40px_rgba(20,45,48,0.35)]
        w-full h-[380px] sm:h-[460px] lg:h-[526px]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-transparent transition-colors duration-300 group-hover:border-[#D7B56D]" />

      <div className="pt-3 sm:pt-4 px-3 sm:px-5 text-center relative z-[1]">
        <h3
          className="
            text-xl sm:text-2xl lg:text-[36px] font-lato font-semibold
            bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent
            transition-[filter] duration-300
            group-hover:brightness-110
          "
        >
          {name}
        </h3>
      </div>

      <div
        className="
          absolute rounded-[12px] border border-[#D7B56D]
          flex items-center justify-center overflow-hidden
          transition-shadow duration-300
          group-hover:shadow-[inset_0_0_30px_rgba(215,181,109,0.25)]
          bg-cover bg-center
          left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4
        "
        style={{
          top: `${baseTop + insetOffset}px`,
          backgroundImage: `url(${bgGreen})`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient( to bottom, rgba(255, 247, 224, 0.25), transparent 35% )",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "0 0 40px rgba(215,181,109,0.18) inset" }}
        />
        <img
          src={image}
          alt={name}
          className={`relative z-[1] ${imageShift} max-w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1`}
        />
      </div>
    </div>
  );
}

/* ------------------------------- страница --------------------------------- */
export default function ProductsPage() {
  const isLg = useMedia("(min-width:1024px)");
  const isXl = useMedia("(min-width:1280px)");

  const cols = isLg ? 3 : 2;
  const STEP_BASE = 8; // <1024
  const STEP_LG = 12; // 1024–1279 — чуть меньше, чтобы точно не «слипались»
  const STEP_XL = 10; // ≥1280
  const step = !isLg ? STEP_BASE : !isXl ? STEP_LG : STEP_XL;

  return (
    <div
      className="relative bg-no-repeat bg-cover min-h-screen"
      style={{ backgroundImage: `url(${bgYellow})` }}
    >
      {/* ЕДИНЫЙ контейнер — равные отступы слева/справа */}
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-5">
        {/* Подсказка */}
        <div className="pt-10">
          <div className="text-sm sm:text-base lg:text-[24px] font-bold font-lato text-[#1C3B3E]">
            НАЖМИТЕ НА КАРТОЧКУ С ПРОДУКЦИЕЙ, ЧТОБЫ УЗНАТЬ ПОДРОБНУЮ ИНФОРМАЦИЮ
          </div>
        </div>

        {/* Заголовок */}
        <h1 className="pt-5 text-3xl sm:text-4xl lg:text-[48px] font-lato text-[#1C3B3E] font-bold">
          ПРОДУКЦИЯ
        </h1>

        {/* Сетка карточек — без внутренних px, паддинги только у внешнего контейнера */}
        <div className="mt-8 sm:mt-10">
          <div
            className="
              grid grid-cols-2 xl:grid-cols-3
              gap-2 sm:gap-6 lg:gap-8 xl:gap-[70px] 
              w-full
            "
          >
            {products.map((p, idx) => {
              const insetOffset = (idx % cols) * step;
              return (
                <Link
                  key={p.id}
                  to={`/${p.slug}`}
                  className="group block mb-10 sm:mb-0 w-full"
                >
                  <ProductCard
                    name={p.name}
                    image={p.image}
                    type={p.type}
                    insetOffset={insetOffset}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden sm:flex mt-10 sm:mt-12 px-4 sm:px-6 lg:px-5 w-full justify-center">
        <img
          src={vector}
          alt="Орнамент"
          className="w-full mb-10 max-w-[1550px] h-auto md:h-[50px] lg:h-[34px] mx-auto"
        />
      </div>
    </div>
  );
}
