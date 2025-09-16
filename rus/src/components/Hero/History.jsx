import bgYellow from "@/assets/bg-yellow.svg";
import vector from "@/assets/Vector2.svg";
import { useEffect, useRef } from "react";
import HistoryCarousel from "./HistoryCarousel";

const History = () => {
  const historyRef = useRef(null);

  return (
    <section
      id="history"
      ref={historyRef}
      className="relative w-full min-h-[1050px] bg-cover bg-center text-[#19474B] pt-[60px] pb-5 "
      style={{ backgroundImage: `url(${bgYellow})` }}
    >
      <div className="relative z-10">
        <h1 className=" ml-4 sm:ml-[25px] md:ml-[35px] lg:ml-[65px] xl:ml-[45px] 2xl:ml-[170px] font-lato font-bold text-[16px] md:text-[20px] uppercase tracking-wide">
          ИСТОРИЯ БРЕНДА
        </h1>

        <h2 className=" ml-4 sm:ml-[25px] md:ml-[35px] lg:ml-[65px] xl:ml-[45px] 2xl:ml-[170px] mt-3 uppercase">
          <span className="text-[32px] md:text-[40px] font-lato font-bold uppercase tracking-wide bg-gradient-to-r from-[#1C3B3E] to-[#255D62] bg-clip-text text-transparent">
            Приветствую вас!
          </span>
        </h2>

        <h3 className=" w-[350px] sm:w-[540px] md:w-[640px] text-[16px] 2xl:w-[995px] font-lato font-normal md:text-[20px] mt-3 ml-4 sm:ml-[25px] md:ml-[35px] lg:ml-[65px] xl:ml-[45px] 2xl:ml-[170px] leading-relaxed">
          Меня зовут Руслан, я основатель натуральных масел "Злата Русь". Хочу
          поделиться с вами историей, которая началась с простого желания – быть
          здоровым, и превратилась в нашу общую миссию. Как всё начиналось? С
          личного откровения.
        </h3>

        <HistoryCarousel />

        <div className="hidden sm:flex justify-center  mt-10 sm:mt-12">
          <img
            src={vector}
            alt="Орнамент"
            className="w-[1600px] px-9 h-[24px] lg:h-[34px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
