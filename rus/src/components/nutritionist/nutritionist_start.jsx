// src/pages/Nutritionist.jsx
import React from "react";

import bgGreen from "@/assets/bg-green.svg";
import woman from "@/assets/woman.png";
import telegram from "@/assets/telegram.png";
import instagram from "@/assets/instagram.png";
import vector from "@/assets/vector.svg";

export default function Nutritionist() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bgGreen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Единый контейнер с привычными отступами */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-2 md:px-4  pt-10 sm:pt-14 lg:pt-[70px] pb-10 sm:pb-14 lg:pb-16">
        {/* Верхний ряд: аватар + текст + кнопки */}
        <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
          {/* Аватар */}
          <img
            src={woman}
            alt="Елена Селюкова, нутрициолог"
            className="
            w-[141px] h-[141px]
            sm:w-[180px] sm:h-[180px]
            lg:w-[290px] lg:h-[290px]
            object-cover rounded-full
            shadow-[0_10px_30px_rgba(0,0,0,0.15)]
    "
          />

          {/* Текст и кнопки */}
          <div className="flex-1 min-w-0 pt-2 sm:pt-4 lg:pt-6">
            <h1 className="text-[13px] sm:text-[20px] lg:text-[24px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent leading-tight">
              ПРИВЕТ, ДРУЗЬЯ!
            </h1>
            <p className="mt-2 text-[17px] sm:text-[28px] lg:text-[48px] text-[#D7B56D] font-lato">
              Меня зовут Елена Селюкова, и я – нутрициолог
            </p>

            {/* Кнопки соцсетей */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-1 sm:gap-3 rounded-full px-4 sm:px-5 py-2 sm:py-3 transition shadow-md hover:shadow-lg"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7C622B, #FFD170)",
                }}
              >
                <img
                  src={telegram}
                  alt=""
                  className="-ml-2 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]"
                />
                <span className="text-white  font-lato text-[11px] sm:text-[18px]">
                  Telegram
                </span>
              </a>

              <a
                href="#"
                className="group inline-flex items-center gap-1 sm:gap-3 rounded-full px-4 sm:px-5 py-2 sm:py-3 transition shadow-md hover:shadow-lg"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7C622B, #FFD170)",
                }}
              >
                <img
                  src={instagram}
                  alt=""
                  className="-ml-1 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]"
                />
                <span className="text-white font-lato text-[11px] sm:text-[18px]">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Большой бордер под фоткой */}
        <div className="mt-8 sm:mt-10">
          <div className="rounded-[20px] sm:rounded-[24px] border border-[#D7B56D] bg-[#1C3B3E]/60 backdrop-blur-[1px] p-5 sm:p-7 lg:p-8">
            {/* Заголовок */}
            <h2 className="text-[32px] sm:text-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[64px] leading-none font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent text-center mb-6 sm:mb-8">
              Делюсь секретом:
            </h2>

            {/* Внутренний бордер */}
            <div className="rounded-[16px] sm:rounded-[18px] border border-[#EDD19666] p-4 sm:p-5 lg:p-6">
              <p className="text-[#EDD196] font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] leading-relaxed mb-3">
                Наверняка все слышали о том, что такое КБЖУ? Несколько десятков
                лет назад, диетологи убирали жиры из рациона людей, неверно
                считая, что потребление жиров будут приводить к лишнему весу.
                Только через несколько лет, они поняли, как ошибаются. Жиры –
                это основа питания, работа мозга, качество кожи, работа нервной
                системы. Поэтому в современной медицине, жирам уделяется особое
                внимание!! Активная жизнь диктует свои правила, часто мы
                перекусываем на ходу, пьем кофе вместо завтрака, на ужин
                готовим, что побыстрее. Старайтесь добавить одну полезную
                привычку в неделю, и я бы очень порекомендовала начать с МАСЛА,
                т.к. «правильные» жиры – это фундамент здоровья, красоты и
                энергии. Без преувеличений.
              </p>

              <ul className="space-y-2 sm:space-y-2.5 ml-4 sm:ml-5 mb-3 sm:mb-4">
                <li className="flex items-start gap-2.5 sm:gap-3">
                  <span className="mt-[8px] sm:mt-[10px] block w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full bg-[#D7B56D] shrink-0" />
                  <p className="text-[#EDD196] font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] leading-relaxed">
                    Заправьте овощной салат маслом, добавьте сушеных орехов, и
                    ваш ужин будет наполнен полезными жирами, а вы утром будете
                    чувствовать себя энергичным и здоровым человеком, с чувством
                    легкости в ЖКТ.
                  </p>
                </li>
              </ul>

              <p className="text-[#EDD196] font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] leading-relaxed mb-4">
                К сожалению, найти качественный продукт, не всегда легко, в
                магазинах большой выбор масел, но как выбрать для себя лучшее? И
                получить максимум пользы, витаминов из продуктов питания,
                которые мы ежедневно используем в своем рационе?
              </p>

              <div className="border-t border-[#EDD19640] my-4" />

              <p className="text-[#EDD196] font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] leading-relaxed mb-2">
                <span className="font-bold text-[#D7B56D]">
                  Продукция компании «Злата Русь» производят только
                  нерафинированные масла холодного отжима. Это значит:
                </span>
              </p>

              <ul className="space-y-2 sm:space-y-2.5 ml-4 sm:ml-5">
                {[
                  "Никакого нагрева и химии! Семечки и семена давят бережно, при низкой температуре.",
                  "Сохранено ВСЕ ценное: Витамины (особенно Е, К, А!), мощные антиоксиданты, незаменимые жирные кислоты (Омега-3, 6, 9), фосфолипиды, фитостеролы – вся та «магия», ради которой мы едим растительную пищу.",
                  "Живой вкус и аромат: Каждое масло – это характер, глубина, отражение растения, из которого оно получено. Это не просто жир, это кулинарное и оздоровительное приключение!",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="mt-[8px] sm:mt-[10px] block w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full bg-[#D7B56D] shrink-0" />
                    <p className="text-[#EDD196] font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] leading-relaxed">
                      {t}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Орнамент снизу — скрываем до 640px */}
        <div className="hidden sm:flex justify-center mt-10 sm:mt-12">
          <img
            src={vector}
            alt="Орнамент"
            className="w-full max-w-[1540px] h-[24px] lg:h-[34px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
