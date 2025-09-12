import React, { useState, useEffect } from "react";
import ruslan from "@/assets/ruslan.svg";
import heart from "@/assets/heart.svg";

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
    text: `"Злата Русь" – это масла исключительно холодного отжима высшего сорта. Почему это важно? Потому что только при бережном отжиме без высоких температур сохраняются все драгоценные дары природы: витамины (А, Е, D, K), жирные кислоты (Омега-3, -6, -9), антиоксиданты и фитостерины. Это не просто масло для салата – это настоящий эликсир здоровья! Оно укрепляет организм, дарит сияние коже, блеск волосам, поддерживает сердце и сосуды, борется с воспалениями. Мы не гонимся за универсальностью – наше масло создано для того, чтобы приносить максимум пользы в холодных блюдах, раскрывая свой яркий, натуральный вкус и аромат. Помните: для жарки оно не предназначено – мы заботимся о вашем здоровье честно.`,
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

// Ширина карточки и отступ между ними
const CARD_WIDTH = 1535;
const GAP = 40;

const HistoryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center mt-[60px]">
      <div className="relative w-full overflow-hidden">
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
              {/* Заголовок */}
              <h2 className="mt-[35px] text-[55px] bg-gradient-to-r from-[#7C622B] to-[#FFD170] font-[Lato] font-bold bg-clip-text text-transparent">
                {slide.title}
              </h2>

              {/* Контент */}
              <div className="mt-[20px] w-[1400px] h-[547px] rounded-[24px] border border-[#D7B56D] p-8 flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <img
                      src={ruslan}
                      alt="Руслан"
                      className="w-[160px] ml-[5px] mt-[5px] h-[160px] object-cover rounded-full"
                    />
                    <div className="ml-[20px] mt-2 flex flex-col justify-start">
                      <h3 className="text-[55px] font-[Lato] font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
                        Руслан Снигур
                      </h3>
                      <p className="text-[20px] font-[Lato] font-normal mt-2.5 text-[#EDD196]">
                        Основатель "Злата Русь"
                      </p>
                    </div>
                  </div>
                  <img
                    src={heart}
                    alt="С любовью"
                    className="w-[176px] h-[160px] mr-[5px] mt-[5px] object-contain"
                  />
                </div>

                <div className="w-[1320px] mt-[15px] border-t border-[#EDD19650] mx-auto"></div>
                <div className="flex-1 overflow-y-auto mt-[17px]">
                  <p className="text-[20px] w-[1300px] font-[Lato] font-normal text-[#EDD196]">
                    {slide.text}
                  </p>
                </div>
              </div>

              {/* Кнопки */}
              <div className="flex justify-center gap-[9px] mt-[30px] mb-8 flex-wrap">
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`px-[20px] py-[10px] rounded-full font-[Lato] text-[20px] ${
                      i === current
                        ? "bg-gradient-to-r from-[#7C622B] to-[#FFD170] text-white"
                        : "bg-white text-[#00000070]"
                    }`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryCarousel;
