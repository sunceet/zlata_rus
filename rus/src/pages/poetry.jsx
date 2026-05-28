import React from "react";
import bgYellow from "@/assets/bg-yellow.svg";
import poertyImg from "@/assets/poerty_img.png";
import vector2Svg from "@/assets/Vector2.svg";
import vectorMb from "@/assets/VectorMb.svg";
import heart2Icon from "@/assets/heart2.svg";
import tgIcon from "@/assets/tg_icon.svg";
import vkIcon from "@/assets/vk.png";
import instIcon from "@/assets/inst.svg";
import poertyImg2 from "@/assets/poerty_img2.png";
import poertyImg3 from "@/assets/poerty_img3.png";

export default function PoetryPage() {
  const mainColor = "rgba(28, 59, 62, 1)";

  return (
    <div className="min-h-screen w-full flex flex-col items-center relative overflow-x-hidden pb-[187px]">
      {/* Header Image */}
      <div className="w-full h-[540px] relative overflow-hidden flex items-center justify-center">
        <img
          src={poertyImg}
          alt="Poetry Header"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
          <h1
            className="text-white font-bold"
            style={{
              fontFamily: "Lato, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "clamp(1.5rem, 5vw, 48px)",
            }}
          >
            С ЛЮБОВЬЮ В ВАШ ДОМ
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1920px] flex flex-col px-4 md:px-[160px] relative">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start relative">
          <div className="w-full lg:max-w-[1000px] flex flex-col z-10">
            <h2
              className="mt-[40px] lg:mt-[99px] font-bold"
              style={{
                color: mainColor,
                fontFamily:
                  "Lato, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "clamp(1rem, 2.5vw, 24px)",
              }}
            >
              Экспедиция в свой внутренний мир
            </h2>

            <h1
              className="mt-[14px] font-bold"
              style={{
                fontFamily:
                  "Lato, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "clamp(1.5rem, 5vw, 48px)",
                color: mainColor,
              }}
            >
              Творите любовь. Выигрывайте подарки.
            </h1>

            <div
              className="mt-[28px] w-full font-lato font-normal text-[20px] md:text-[24px] leading-[32px] flex flex-col gap-6"
              style={{ color: mainColor }}
            >
              <p>
                В каждом доме есть своя мелодия. Шёпот вечернего чая, смех на
                кухне, тихий разговор — это лирика повседневности.
              </p>
              <p>
                Мы объявляем творческий конкурс, где главная валюта — не рифма,
                а искренность. Пусть ваши строки станут самым тёплым подарком —
                сначала для ваших близких, а потом и для нас. Лучшие работы мы
                наградим подарочными коробками Злата Русь, чтобы любви и вкуса в
                вашем доме стало ещё больше.
              </p>
            </div>
          </div>

          {/* Heart Icon positioned relative to flex on desktop, centered on mobile */}
          <div className="w-full lg:w-auto mt-10 lg:mt-[99px] flex justify-center lg:block lg:flex-shrink-0">
            <img
              src={heart2Icon}
              alt="Heart Icon"
              className="w-[200px] h-[200px] lg:w-[370px] lg:h-[370px] object-contain"
            />
          </div>
        </div>

        <div className="mt-[56px] w-full flex justify-center">
          <img
            src={vector2Svg}
            alt="Vector ornament"
            className="hidden lg:block w-full object-contain"
          />
          <img
            src={vectorMb}
            alt="Vector ornament mobile"
            className="block lg:hidden w-full object-contain"
          />
        </div>

        <h1
          className="mt-[56px] text-center font-bold"
          style={{
            fontFamily: "Lato, -apple-system, Roboto, Helvetica, sans-serif",
            fontSize: "clamp(1.5rem, 5vw, 48px)",
            color: mainColor,
          }}
        >
          Как участвовать?
        </h1>

        <div
          className="mt-[32px] md:mt-[48px] w-full max-w-[1600px] rounded-[24px] md:rounded-[32px] self-center flex flex-col relative"
          style={{
            border: `0.7px solid ${mainColor}`,
            boxShadow: `0px 0px 10px 0px ${mainColor}`,
            background: "transparent",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            className="mt-[20px] md:mt-[30px] ml-[20px] md:ml-[42px] font-bold text-left"
            style={{
              fontFamily: "Lato, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 32px)",
              color: mainColor,
            }}
          >
            Правила акции
          </div>

          <div
            className="mt-[15px] md:mt-[18px] mx-[15px] md:mx-[31px] h-[0.5px] lg:h-[1.5px]"
            style={{
              background: mainColor,
            }}
          />

          <div
            className="mt-[20px] md:mt-[28px] ml-[20px] md:ml-[42px] mr-[20px] md:mr-[42px] mb-[20px] md:mb-[30px] text-left font-normal flex flex-col gap-3 md:gap-2"
            style={{
              fontFamily: "Lato, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "clamp(0.9rem, 1.5vw, 20px)",
              lineHeight: "120%",
              color: mainColor,
            }}
          >
            <div className="flex gap-2">
              <span className="flex-shrink-0 w-[20px]">1.</span>
              <p>
                Соберитесь семьей и сочините небольшой стих (два куплета) на
                тему «С любовью в ваш дом» о том, что для вас значит семья, уют,
                здоровые традиции.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex-shrink-0 w-[20px]">2.</span>
              <p>
                Выложите в уютной домашней обстановке в соцсети с вашим стихом.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex-shrink-0 w-[20px]">3.</span>
              <p>
                Поставьте хештеги #ЗлатаРусьЛюбовьВДом #ЗлатаРусь (VK,
                Instagram) и отметьте наш аккаунт @zlatarus.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="flex-shrink-0 w-[20px]">4.</span>
              <p>
                Самые теплые, искренние и творческие работы получат уютную
                коробку с подарками БЕСПЛАТНО с доставкой за наш счет!
              </p>
            </div>
          </div>
        </div>

        {/* Social Bot Links Row */}
        <div className="mt-[48px] self-center flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[54px] w-full">
          <a
            href="https://vk.com/zlatarus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[12px] md:gap-[24px] rounded-[18px] hover:opacity-90 transition-opacity cursor-pointer w-[220px] h-[60px] lg:w-[307px] lg:h-[82px]"
            style={{
              background: "linear-gradient(90deg, #1C3B3E 0%, #1C3B3E 100%)",
              padding: "12px 16px",
              textDecoration: "none",
            }}
          >
            <img
              src={vkIcon}
              alt="VK Icon"
              className="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] object-contain"
            />
            <span
              className="text-[18px] lg:text-[24px]"
              style={{
                fontFamily:
                  "Lato, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: "700",
                color: "white",
              }}
            >
              Мы ВКонтакте
            </span>
          </a>

          <a
            href="https://instagram.com/zlatarus"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-[12px] md:gap-[24px] rounded-[18px] hover:opacity-90 transition-opacity cursor-pointer w-[220px] h-[60px] lg:w-[307px] lg:h-[82px]"
            style={{
              background: "linear-gradient(90deg, #1C3B3E 0%, #1C3B3E 100%)",
              padding: "12px 16px",
              textDecoration: "none",
            }}
          >
            <img
              src={instIcon}
              alt="Instagram Icon"
              className="w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] object-contain"
            />
            <span
              className="text-[18px] lg:text-[24px]"
              style={{
                fontFamily:
                  "Lato, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: "700",
                color: "white",
              }}
            >
              Наш Instagram
            </span>
          </a>
        </div>

        <div className="mt-[54px] w-full flex justify-center ">
          <img
            src={vector2Svg}
            alt="Vector ornament 2"
            className="hidden lg:block w-full object-contain"
          />
          <img
            src={vectorMb}
            alt="Vector ornament 2 mobile"
            className="block lg:hidden w-full object-contain"
          />
        </div>

        {/* Final Section with Images and Text */}
        <div className="mt-[56px] w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:gap-[118px] relative">
          {/* Left Column Group */}
          <div className="flex flex-col w-full lg:w-auto items-center lg:items-start flex-shrink-1">
            <div
              className="mt-[40px] lg:mt-[97px] px-4 lg:px-0 text-left lg:text-left"
              style={{
                fontFamily:
                  "Lato, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: "700",
                fontSize: "clamp(1.75rem, 4vw, 56px)",
                lineHeight: "110%",
                background: "linear-gradient(90deg, #1C3B3E 0%, #19474B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                maxWidth: "755px",
                width: "fit-content",
              }}
            >
              Пусть ваше
              <br />
              вдохновение вернётся
              <br />к вам со вкусом Алтая!
            </div>

            <img
              src={poertyImg2}
              alt="Poetry Inspiration"
              className="mt-[40px] lg:mt-[74px] mx-auto lg:mx-0 object-cover w-[90%] lg:w-[706px] flex-shrink-1 "
              style={{
                height: "auto",
                aspectRatio: "706/434",
                borderRadius: "32px",
                boxShadow: "0px 0px 20px 0px rgba(28, 59, 62, 1)",
                maxWidth: "100%",
              }}
            />
          </div>

          {/* Right Column / Large Image */}
          <div className="w-full lg:w-auto flex justify-center lg:block lg:flex-shrink-1">
            <img
              src={poertyImg3}
              alt="Poetry Large View"
              className="mt-[40px] mx-auto lg:mx-0 object-cover w-[90%] lg:w-[776px] flex-shrink-1"
              style={{
                height: "auto",
                aspectRatio: "776/780",
                borderRadius: "24px",
                border: "1px solid rgba(28, 59, 62, 1)",
                boxShadow: "0px 0px 10px 0px rgba(28, 59, 62, 1)",
                maxWidth: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
