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
      <div className="relative z-10 pt-[70px] px-[170px] pb-16">
        {/* верхний ряд: аватар + текст + кнопки */}
        <div className="flex flex-wrap items-start gap-8">
          {/* Аватар */}
          <img
            src={woman}
            alt="Елена Селюкова, нутрициолог"
            className="w-[290px] h-[290px] object-cover rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          />

          {/* Текст и кнопки */}
          <div className="flex-1 min-w-[320px] pt-6">
            <h1 className="text-[24px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent leading-tight">
              ПРИВЕТ, ДРУЗЬЯ!
            </h1>
            <p className="mt-3 text-[48px] text-[#D7B56D] font-lato">
              Меня зовут Елена Селюкова, и я – нутрициолог
            </p>

            {/* Кнопки */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full px-5 py-3 transition shadow-md"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7C622B, #FFD170)",
                }}
              >
                <img src={telegram} alt="" className="w-[22px] h-[22px]" />
                <span className="text-white font-lato text-[18px]">
                  Telegram
                </span>
              </a>

              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full px-5 py-3 transition shadow-md"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7C622B, #FFD170)",
                }}
              >
                <img src={instagram} alt="" className="w-[22px] h-[22px]" />
                <span className="text-white font-lato text-[18px]">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Большой бордер под фоткой */}
        <div className="mt-8">
          <div className="rounded-[24px] border border-[#D7B56D] bg-[#1C3B3E]/60 backdrop-blur-[1px] p-8">
            {/* Заголовок */}
            <h2 className="text-[64px] leading-none font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent text-center mb-8">
              Делюсь секретом:
            </h2>

            {/* Внутренний бордер */}
            <div className="rounded-[18px] border border-[#EDD19666] p-6">
              <p className="text-[#EDD196] font-lato text-[23px] mb-3">
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
                т.к. «правильные» жиры – это фундамент здоровья, красоты и
                энергии. Без преувеличений.
              </p>

              <ul className="space-y-2 ml-5 mb-4">
                <li className="flex items-start gap-3">
                  <span className="mt-[10px] block w-[8px] h-[8px] rounded-full bg-[#D7B56D] shrink-0" />
                  <p className="text-[#EDD196] font-lato text-[23px]">
                    Заправьте овощной салат маслом, добавьте сушеных орехов, и
                    ваш ужин будет наполнен полезными жирами, а вы утром будете
                    чувствовать себя, энергичным и здоровым человеком, с
                    чувством легкости в ЖКТ.{" "}
                  </p>
                </li>
              </ul>

              <p className="text-[#EDD196] font-lato text-[23px] mb-4">
                К сожалению, найти качественный продукт, не всегда легко, в
                магазинах большой выбор масел, но как выбрать для себя лучшее? И
                получить максимум пользы, витаминов из продуктов питания,
                которые мы ежедневно используем в своем рационе?{" "}
              </p>

              <div className="border-t border-[#EDD19640] my-4" />

              <p className="text-[#EDD196] font-lato text-[23px] mb-2">
                <span className="font-bold text-[#D7B56D]">
                  Продукция компании «Злата Русь» производят только
                  нерафинированные масла холодного отжима. Это значит:{" "}
                </span>
              </p>

              <ul className="space-y-2">
                {[
                  "Никакого нагрева и химии! Семечки и семена давят бережно, при низкой температуре.",
                  "Сохранено ВСЕ ценное: Витамины (особенно Е, К, А!), мощные антиоксиданты, незаменимые жирные кислоты (Омега-3, 6, 9), фосфолипиды, фитостеролы – вся та «магия», ради которой мы едим растительную пищу.",
                  "Живой вкус и аромат: Каждое масло – это характер, глубина, отражение растения, из которого оно получено. Это не просто жир, это кулинарное и оздоровительное приключение!",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[10px] block w-[8px] h-[8px] rounded-full bg-[#D7B56D] shrink-0" />
                    <p className="text-[#EDD196] font-lato text-[23px]">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Орнамент снизу */}
        <div className="flex justify-center mt-12">
          <img
            src={vector}
            alt="Орнамент"
            className="w-auto max-h-[120px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
