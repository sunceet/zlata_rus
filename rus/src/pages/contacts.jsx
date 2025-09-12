// src/pages/Contacts.jsx
import React from "react";

// --- ASSETS ---
import bgYellow from "../assets/bg-yellow.svg";
import mapPin from "../assets/map_pin.png";
import building from "../assets/Building.svg";
import mail from "../assets/mail.png";
import phone from "../assets/Phone.svg";
import vector2 from "../assets/vector2.svg"; // ✅ импорт орнамента

export default function Contacts() {
  const cards = [
    {
      icon: mapPin,
      title: "Почтовый адрес",
      text: "658046, Алтайский край, Первомайский р-н, с. Санниково, ул. Ефремова, д. 8",
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
    },
    {
      icon: phone,
      title: "Телефон",
      text: "8-800-201-69-39 (Многоканальный)",
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
      <div className="relative z-10 pt-[84px] pl-[160px] pr-[20px]">
        <h2 className="font-[Lato] font-bold text-[24px] text-[#1C3B3E]">
          ИНФОРМАЦИОННЫЙ РАЗДЕЛ
        </h2>
        <p className="-mt-1 font-[Lato] font-extrabold text-[48px] text-[#1C3B3E]">
          НАШИ КОНТАКТЫ
        </p>
      </div>

      {/* Сетка карточек */}
      <div className="relative z-10 mt-8 px-[160px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[54px] gap-y-[54px]">
          {cards.map((c, i) => (
            <div
              key={i}
              className="h-[266px] rounded-[24px] border border-[#1C3B3E50]
                         bg-[#EDD196]/5 backdrop-blur-sm
                         p-6 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <img
                  src={c.icon}
                  alt=""
                  className="w-[56px] mt-3 ml-2 h-[56px] object-contain"
                />
                <div className="font-[Lato] ml-4 mt-3 font-bold text-[35px] text-[#1C3B3E]">
                  {c.title}
                </div>
              </div>

              <div className="ml-23 w-[490px] mt-4 font-[Lato] text-[22px] text-[#1C3B3E]">
                {c.text}
              </div>
            </div>
          ))}
        </div>

        {/* Орнамент снизу */}
        <div className="flex justify-center mt-16">
          <img
            src={vector2}
            alt="Орнамент"
            className="w-auto max-h-[120px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
