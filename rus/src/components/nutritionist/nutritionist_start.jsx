// src/pages/SocialSubscribe.jsx
import React from "react";

// --- ASSETS ---
import bgGreen from "@/assets/bg-green.svg";
import vector from "@/assets/Vector.svg";
import heart from "@/assets/heart.svg"; // «сердечко с надписью»
import woman from "@/assets/woman.png";
import telegram from "@/assets/telegram.png";
import instagram from "@/assets/instagram.png";

export default function SocialSubscribe() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bgGreen})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 pt-[60px] pb-16 px-[40px] lg:px-[80px] xl:px-[120px] 2xl:px-[170px]">
        {/* ВНЕШНЯЯ РАМКА */}
        <div className="rounded-[28px] border border-[#D7B56D] bg-[#0F3A3E]/60 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          {/* Заголовок */}
          <h1
            className="text-center py-8 text-[clamp(28px,3.5vw,56px)] font-[Lato] font-extrabold
                       bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
          >
            Подписывайся на соцсети
          </h1>

          {/* ВНУТРЕННЯЯ ПАНЕЛЬ */}
          <div className="relative mx-4 mb-6 rounded-[20px] border border-[#D7B56D66] bg-[#0F3A3E]/70 px-6 sm:px-8 py-6">
            {/* Сердце справа сверху */}
            <img
              src={heart}
              alt=""
              className="hidden md:block absolute top-6 right-6 w-[176px] h-[160px] opacity-90"
            />

            {/* Шапка: аватар + имя + кнопки */}
            {/* Шапка: аватар + имя + кнопки */}
            <div className="flex items-center gap-5 pr-[160px]">
              <img
                src={woman}
                alt="Елена Селюкова"
                className="w-[160px] h-[160px] rounded-full object-cover"
              />
              <div className="flex-1">
                {/* Новый текст сверху */}
                <div className="bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent font-[Lato] font-bold text-[24px] mb-1">
                  ПРИВЕТ, ДРУЗЬЯ!
                </div>

                {/* Имя + должность */}
                <div
                  className="text-[48px] font-[Lato] font-bold
                 bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent"
                >
                  Елена Селюкова, нутрициолог
                </div>

                {/* Кнопки */}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #7C622B 0%, #FFD170 100%)",
                    }}
                    aria-label="Telegram"
                  >
                    <img src={telegram} alt="" className="w-[18px] h-[18px]" />
                    <span className="font-[Lato] text-[16px] font-semibold">
                      Telegram
                    </span>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #7C622B 0%, #FFD170 100%)",
                    }}
                    aria-label="Instagram"
                  >
                    <img src={instagram} alt="" className="w-[18px] h-[18px]" />
                    <span className="font-[Lato] text-[16px] font-semibold">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="my-5 border-t border-[#EDD19640]" />

            {/* ТЕКСТОВОЙ БЛОК */}
            <div className="space-y-5 text-[#EDD196]">
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                В наших соцсетях (и особенно в моем Telegram-канале{" "}
                <a
                  href="#"
                  className="underline decoration-[#D7B56D] underline-offset-4"
                >
                  @profguru_ft
                </a>
                ) мы будем погружаться глубже в правильное питание.
              </p>

              <div>
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] mb-2">
                  Подписывайся, если:
                </p>
                <ul className="space-y-1 pl-5">
                  {[
                    "Хочешь знать больше о пользе масел;",
                    "Готовить вкусно, а главное полезно;",
                    "Разбираться и слушать свое тело;",
                    "Понять, что ЗОЖ и ПП это очень даже легко.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-[10px] block w-[8px] h-[8px] rounded-full bg-[#D7B56D] shrink-0" />
                      <span className="text-[15px] sm:text-[16px] lg:text-[18px]">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#EDD19640] my-3" />

              <p className="text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                Подписывайтесь на телеграм{" "}
                <a
                  href="#"
                  className="underline decoration-[#D7B56D] underline-offset-4"
                >
                  @profguru_ft
                </a>
                ! Уже в ближайших постах стартуем с детального разбора
                подсолнечного и льняного масел — жду вас для обсуждений! Давайте
                вместе превращать наше питание в источник силы, красоты и
                долголетия! 💪✨
              </p>
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
