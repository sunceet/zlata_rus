// src/pages/SocialSubscribe.jsx

// --- ASSETS ---
import bgGreen from "@/assets/bg-green.svg";
import heart from "@/assets/heart.svg";
import instagram from "@/assets/instagram.png";
import telegram from "@/assets/telegram.png";
import vector from "@/assets/Vector.svg";
import woman from "@/assets/woman.png";

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
      {/* Единый контейнер как на Nutritionist */}
      <div className="relative z-10 max-w-[1550px] mx-auto px-2 md:px-4 pt-10 sm:pt-14 lg:pt-[70px] pb-10 sm:pb-14 lg:pb-16">
        {/* ВНЕШНЯЯ РАМКА */}
        <div className="rounded-[20px] sm:rounded-[24px] border border-[#D7B56D] bg-[#0F3A3E]/60 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
          {/* Заголовок */}
          <h1 className="text-center py-6 sm:py-8 text-[32px] sm:text-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[64px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent">
            Подписывайся на соцсети
          </h1>

          {/* ВНУТРЕННЯЯ ПАНЕЛЬ */}
          <div className="relative mx-3 sm:mx-4 mb-6 rounded-[16px] sm:rounded-[20px] border border-[#D7B56D] bg-[#0F3A3E]/70 px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
            {/* Сердце справа сверху — только на md+ */}
            <img
              src={heart}
              alt=""
              className="hidden md:block absolute top-4 sm:top-6 right-4 sm:right-6 w-[120px] sm:w-[160px] lg:w-[176px] h-auto opacity-90 pointer-events-none select-none"
            />

            {/* Шапка: аватар + имя + кнопки */}
            <div className="flex items-center gap-3 sm:gap-5 pr-0 md:pr-[140px] lg:pr-[160px]">
              {/* Аватар */}
              <img
                src={woman}
                alt="Елена Селюкова"
                className="
                  w-[110px] h-[110px]
                  sm:w-[140px] sm:h-[140px]
                  lg:w-[160px] lg:h-[160px]
                  rounded-full object-cover
                  shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                "
              />

              {/* Имя и кнопки */}
              <div className="flex-1 min-w-0">
                <div className="text-[22px] sm:text-[30px] lg:text-[40px] font-lato font-bold bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent leading-tight">
                  Елена Селюкова, нутрициолог
                </div>

                <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Telegram */}
                  <a
                    href="https://t.me/profiguru_fit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center rounded-[14px] sm:rounded-[18px] h-[35px] sm:h-[52px] lg:h-[56px] px-4 sm:px-5 text-white shadow-md transition hover:shadow-lg hover:scale-105 hover:brightness-110"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #7C622B 0%, #FFD170 100%)",
                    }}
                    aria-label="Telegram"
                  >
                    <img
                      src={telegram}
                      alt=""
                      className="absolute left-3 sm:left-4 w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] transition-transform group-hover:rotate-6"
                    />
                    <span className="font-lato pl-5 sm:pl-6 text-[15px] sm:text-[18px] xl:text-[23px] font-semibold">
                      Telegram
                    </span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/dietolog_elselyukova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center rounded-[14px] sm:rounded-[18px] h-[35px] sm:h-[52px] lg:h-[56px] px-4 sm:px-5 text-white shadow-md transition hover:shadow-lg hover:scale-105 hover:brightness-110"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #7C622B 0%, #FFD170 100%)",
                    }}
                    aria-label="Instagram"
                  >
                    <img
                      src={instagram}
                      alt=""
                      className="absolute left-3 sm:left-4 w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-transform group-hover:rotate-6"
                    />
                    <span className="font-lato pt-1 pl-6 sm:pl-7 text-[15px] sm:text-[18px] xl:text-[23px] font-semibold">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="my-4 sm:my-5 border-t border-[#EDD19650]" />

            {/* ТЕКСТОВОЙ БЛОК */}
            <div className="space-y-4 sm:space-y-5 text-[#EDD196]">
              <p className="font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] ">
                В наших соцсетях (и особенно в моем Telegram-канале{" "}
                <a
                  href="https://t.me/profiguru_fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#D7B56D] underline-offset-4 hover:text-[#FFD170]"
                >
                  @profiguru_fit
                </a>
                ) мы будем погружаться глубже в правильное питание.
              </p>

              <div>
                <p className="font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] mb-2">
                  Подписывайся, если:
                </p>
                <ul className="space-y-1 pl-4 sm:pl-5">
                  {[
                    "Хочешь знать больше о пользе масел;",
                    "Готовить вкусно, а главное полезно;",
                    "Разбираться и слушать свое тело;",
                    "Понять, что ЗОЖ и ПП это очень даже легко.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="mt-[8px] sm:mt-[10px] block w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full bg-[#D7B56D] shrink-0" />
                      <span className="font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] ">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#EDD19640] my-3" />

              <p className="font-lato text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[23px] leading-relaxed">
                Подписывайтесь на телеграм{" "}
                <a
                  href="https://t.me/profiguru_fit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#D7B56D] underline-offset-4 hover:text-[#FFD170]"
                >
                  @profiguru_fit
                </a>
                ! Уже в ближайших постах стартуем с детального разбора
                подсолнечного и льняного масел — жду вас для обсуждений! Давайте
                вместе превращать наше питание в источник силы, красоты и
                долголетия! 💪✨
              </p>
            </div>
          </div>
        </div>

        {/* Орнамент снизу — как в Nutritionist: скрыт до 640px */}
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
