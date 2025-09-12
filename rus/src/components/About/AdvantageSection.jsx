import React from "react";
import bgGreen from "@/assets/bg-green.svg";
import vector from "@/assets/Vector.svg";
import check from "@/assets/check.svg";
import leaf from "@/assets/leaf.svg";
import key from "@/assets/key.svg";
import ProductCarousel from "./ProductCarousel";
import AdvantageCard from "../Hero/AdvantageCard";

const advantages = [
  {
    icon: check,
    title: "Контроль качества",
    subtitle: "Строгий контроль качества",
    text: "Каждый этап производства проходит строгий контроль, что гарантирует высочайшее качество продукции.",
  },
  {
    icon: leaf,
    title: "Экологичное сырьё",
    subtitle: "Только натуральное сырьё",
    text: "Мы используем только натуральное сырье с экологически чистых территорий Алтайского края.",
  },
  {
    icon: key,
    title: "Лабораторный анализ",
    subtitle: "Безопасность и польза",
    text: "Каждая партия продукции проходит тщательный лабораторный анализ, подтверждающий ее безопасность и пользу.",
  },
];

const AdvantageSection = () => (
  <div
    className="w-full bg-cover bg-center py-10"
    style={{ backgroundImage: `url(${bgGreen})` }}
  >
    <div className="flex flex-col items-center">
      {/* Карточки */}
      <div className="flex gap-22 mb-[60px]">
        {advantages.map((advantage, index) => (
          <AdvantageCard
            key={index}
            icon={advantage.icon}
            title={advantage.title}
            subtitle={advantage.subtitle}
            text={advantage.text}
          />
        ))}
      </div>

      {/* Орнамент */}
      <img src={vector} alt="Орнамент" className="w-[1520px] h-[34px]" />

      {/* Заголовок */}
      <h2
        className="mt-12 text-[40px] font-[Lato] font-bold uppercase 
                 bg-gradient-to-r from-[#7C622B] to-[#FFD170] 
                 bg-clip-text text-transparent tracking-wide text-center"
      >
        ПРЕИМУЩЕСТВО НАШИХ ПРОДУКТОВ
      </h2>
    </div>

    <ProductCarousel />
  </div>
);

export default AdvantageSection;
