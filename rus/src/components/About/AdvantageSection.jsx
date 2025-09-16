import bgGreen from "@/assets/bg-green.svg";
import check from "@/assets/check.svg";
import key from "@/assets/key.svg";
import leaf from "@/assets/leaf.svg";
import vector from "@/assets/Vector.svg";
import AdvantageCard from "../Hero/AdvantageCard";
import ProductCarousel from "./ProductCarousel";

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
      <div
        className=" grid
                grid-cols-1 sm:grid-cols-2
                xl:grid-cols-3 2xl:grid-cols-3
                gap-4 xl:gap-6 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-[160px]
                items-stretch justify-items-stretch"
      >
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
      <div className="hidden md:flex justify-center mt-8 lg:mt-10">
        <img
          src={vector}
          alt="Орнамент"
          className="w-[100%] max-w-[1560px] h-auto"
        />
      </div>
      {/* Заголовок */}
      <h2
        className="mt-12 text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] font-lato font-bold uppercase 
                 bg-gradient-to-r from-[#7C622B] to-[#FFD170] 
                 bg-clip-text text-transparent text-center"
      >
        ПРЕИМУЩЕСТВО НАШИХ ПРОДУКТОВ
      </h2>
    </div>

    <ProductCarousel />
  </div>
);

export default AdvantageSection;
