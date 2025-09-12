import bgYellow from "@/assets/bg-yellow.svg";
import vector from "@/assets/Vector2.svg";
import { useEffect, useRef } from "react";
import HistoryCarousel from "./HistoryCarousel";

const History = () => {
  const historyRef = useRef(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 200;

      if (!hasScrolled.current && window.scrollY > triggerPoint) {
        if (historyRef.current) {
          // --- ИЗМЕНЕНИЕ ЗДЕСЬ ---
          // Добавляем смещение, чтобы скролл остановился выше
          const yOffset = -90; // Это смещение в пикселях. Увеличивайте для большей высоты.
          const y =
            historyRef.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
          // --- КОНЕЦ ИЗМЕНЕНИЯ ---

          hasScrolled.current = true;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="history"
      ref={historyRef}
      className="relative w-full min-h-[1200px] bg-cover bg-center text-[#19474B] pt-[60px] pb-20"
      style={{ backgroundImage: `url(${bgYellow})` }}
    >
      <div className="relative z-10">
        <h1 className="ml-[170px] font-lato font-bold text-[20px] uppercase tracking-wide">
          ИСТОРИЯ БРЕНДА
        </h1>

        <h2 className="ml-[170px] mt-3 uppercase">
          <span className="text-[40px] font-lato font-bold uppercase tracking-wide bg-gradient-to-r from-[#1C3B3E] to-[#255D62] bg-clip-text text-transparent">
            Приветствую вас!
          </span>
        </h2>

        <h3 className="w-[995px] font-lato font-normal text-[20px] mt-3 ml-[170px] leading-relaxed">
          Меня зовут Руслан, я основатель натуральных масел "Злата Русь". Хочу
          поделиться с вами историей, которая началась с простого желания – быть
          здоровым, и превратилась в нашу общую миссию. Как всё начиналось? С
          личного откровения.
        </h3>

        <HistoryCarousel />

        <div className="flex justify-center mt-[70px]">
          <img src={vector} alt="Орнамент" className="w-[1520px] h-[34px]" />
        </div>
      </div>
    </section>
  );
};

export default History;
