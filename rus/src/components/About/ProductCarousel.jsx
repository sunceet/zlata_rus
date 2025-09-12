import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
import vector from "../../assets/Vector.svg";
import ProductCard from "./ProductCard";
import { cards } from "./cardsData";

// Константы для расчета, основанные на классах Tailwind CSS
const CARD_WIDTH = 500;
const CARD_MARGIN_X = 20; // mx-5 в TailwindCSS = 1.25rem = 20px
const CARDS_IN_VIEW = 2;
const CARD_TOTAL_WIDTH = CARD_WIDTH + CARD_MARGIN_X * 2; // 500 + 20 + 20 = 540

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < cards.length - CARDS_IN_VIEW) {
      setIndex(index + 2);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 2);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center mt-12">
      {/* Ширина контейнера теперь точно равна 2 карточкам по 540px */}
      <div className="overflow-hidden w-[1080px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            // Смещение учитывает полную ширину одной карточки
            transform: `translateX(-${index * CARD_TOTAL_WIDTH}px)`,
          }}
        >
          {cards.map((card, i) => (
            <ProductCard key={i} {...card} />
          ))}
        </div>
      </div>

      {/* стрелки */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-80 top-[260px] -translate-y-1/2 z-20 cursor-pointer"
      >
        <img
          src={arrow}
          alt="prev"
          className="w-8 h-8 rotate-180 opacity-80 hover:opacity-100 transition"
        />
      </button>
      <button
        onClick={next}
        disabled={index >= cards.length - CARDS_IN_VIEW}
        className="absolute right-80 top-[260px] -translate-y-1/2 z-20 cursor-pointer"
      >
        <img
          src={arrow}
          alt="next"
          className="w-8 h-8 opacity-80 hover:opacity-100 transition"
        />
      </button>

      {/* индикатор */}
      <div className="relative w-[600px] h-2 mt-12 bg-white/50 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-[#7C622B] to-[#FFD170] rounded-full transition-all duration-700 ease-in-out"
          style={{ transform: `translateX(${(index / 2) * 100}%)` }}
        />
      </div>

      <div className="items-center">
        <img
          src={vector}
          alt="Орнамент"
          className="mt-10 w-[1520px] h-[34px]"
        />
      </div>
    </div>
  );
};

export default ProductCarousel;
