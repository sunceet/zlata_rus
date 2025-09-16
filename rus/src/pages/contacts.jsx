// src/pages/Contacts.jsx

// --- ASSETS ---
import bgYellow from "@/assets/bg-yellow.svg";
import building from "@/assets/Building.svg";
import mail from "@/assets/mail.png";
import mapPin from "@/assets/map_pin.png";
import phone from "@/assets/Phone.svg";
import vector2 from "@/assets/vector2.svg";

export default function Contacts() {
  const cards = [
    {
      icon: mapPin,
      title: "Почтовый адрес",
      text: "658046, Алтайский край, Первомайский р-н, с. Санниково, ул. Ефремова, д. 8",
      link: "https://yandex.ru/maps/?text=658046%2C%20Алтайский%20край%2C%20Первомайский%20р-н%2C%20с.%20Санниково%2C%20ул.%20Ефремова%2C%208",
    },
    {
      icon: building,
      title: "Юридический адрес",
      text: "658046, Алтайский край, Первомайский р-н, с.п. Санниковский сельсовет, с. Санниково, мкр. Промышленный, влд. 7.",
    },
    {
      icon: mail,
      title: "Электронная почта",
      text: "zlata_rus@inbox.ru",
      link: "mailto:zlata_rus@inbox.ru",
    },
    {
      icon: phone,
      title: "Телефон",
      text: "8-800-201-69-39 (Многоканальный)",
      link: "tel:+78002016939",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bgYellow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Заголовки */}
      <div
        className={[
          "relative z-10",
          // Мобайл/планшет
          "pt-10 px-4 sm:px-6 md:px-10",
          // Десктоп — сохраняем исходные отступы
          "lg:pt-[50px] lg:pl-[160px] lg:pr-[20px]",
        ].join(" ")}
      >
        <h2
          className={[
            "font-lato font-bold text-[#1C3B3E]",
            "text-sm sm:text-base md:text-lg",
            "lg:text-[24px]",
          ].join(" ")}
        >
          ИНФОРМАЦИОННЫЙ РАЗДЕЛ
        </h2>
        <p
          className={[
            "font-lato font-bold text-[#1C3B3E]",
            "mt-1",
            "text-2xl sm:text-3xl md:text-4xl",
            "lg:mt-3 lg:text-[48px]",
          ].join(" ")}
        >
          НАШИ КОНТАКТЫ
        </p>
      </div>

      {/* Сетка карточек */}
      <div
        className={[
          "relative z-10",
          // Мобайл/планшет
          "mt-6 px-4 sm:px-6 md:px-10 pb-12",
          // Десктоп — как было
          "lg:mt-8 lg:px-[160px] lg:pb-16",
        ].join(" ")}
      >
        <div
          className={[
            // 1 колонка на мобиле, 2 — с lg как было
            "grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-y-8 md:gap-y-10",
            // Горизонтальный зазор: мягче на мобиле, как было на десктопе
            "gap-x-6 md:gap-x-8 lg:gap-x-[54px] lg:gap-y-[54px]",
          ].join(" ")}
        >
          {cards.map((c, i) => (
            <article
              key={i}
              className={[
                // Контейнер
                "rounded-[20px] sm:rounded-[24px] border border-[#1C3B3E90]",
                "bg-[#EDD196]/5 backdrop-blur-sm",
                // Паддинги и флекс
                "p-4 sm:p-5 md:p-6 flex flex-col",
                // Высота: авто на мобиле (для переносов), фикс как было на десктопе
                "min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:h-[266px]",
                // Лёгкая тень на мобиле для «карточности»
                "shadow-sm",
              ].join(" ")}
            >
              <div className="flex items-start gap-3">
                <img
                  src={c.icon}
                  alt={c.title}
                  className={[
                    // Иконки меньше на мобиле, как было на десктопе
                    "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14",
                    "lg:w-[56px] lg:h-[56px]",
                    // Отступы как в исходнике только на десктопе
                    "lg:mt-3 lg:ml-2",
                    "object-contain select-none",
                  ].join(" ")}
                  loading="lazy"
                  decoding="async"
                />
                <h3
                  className={[
                    "font-lato font-bold text-[#1C3B3E]",
                    // Мобайл типографика
                    "text-xl sm:text-2xl md:text-3xl",
                    // Десктоп как было
                    "lg:text-[35px]",
                    // Отступы как в исходнике только на десктопе
                    "lg:ml-4 lg:mt-3",
                  ].join(" ")}
                >
                  {c.title}
                </h3>
              </div>

              {c.link ? (
                <a
                  href={c.link}
                  className={[
                    "mt-3 sm:mt-4 inline-block",
                    "font-lato text-[#1C3B3E] underline decoration-transparent hover:decoration-current transition",
                    // Текст: адаптив на мобиле, фикс как было на десктопе
                    "text-base sm:text-lg md:text-xl",
                    "lg:text-[22px]",
                    // Ширина: авто на мобиле/планшете, как было на десктопе
                    "w-auto lg:w-[490px]",
                    // Слегка корректируем историческую ml-23 только на десктопе, чтобы не ломать
                    "lg:ml-[23px]",
                  ].join(" ")}
                  target={c.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {c.text}
                </a>
              ) : (
                <p
                  className={[
                    "mt-3 sm:mt-4",
                    "font-lato text-[#1C3B3E]",
                    "text-base sm:text-lg md:text-xl",
                    "lg:text-[22px]",
                    "w-auto lg:w-[490px]",
                    "lg:ml-[23px]",
                  ].join(" ")}
                >
                  {c.text}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Орнамент снизу */}
        <div className="hidden md:flex justify-center mt-8 lg:mt-10">
          <img
            src={vector2}
            alt="Орнамент"
            className="w-[100%] max-w-[1720px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
