import React, { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.svg";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const isCompleteRef = useRef(false);

  // Сбрасываем состояние при каждом новом показе прелоадера
  useEffect(() => {
    setProgress(0);
    setIsVisible(true);
    isCompleteRef.current = false;
  }, []);

  useEffect(() => {
    let progressInterval;
    let checkInterval;
    let timeoutId;

    // Функция для проверки загрузки всех изображений
    const checkAllResourcesLoaded = () => {
      return new Promise((resolve) => {
        const images = document.querySelectorAll("img");
        const stylesheets = document.querySelectorAll("link[rel='stylesheet']");

        let loadedCount = 0;
        let totalCount = images.length;
        let stylesheetCount = 0;
        let totalStylesheets = stylesheets.length;

        // Проверяем стили
        if (totalStylesheets === 0) {
          stylesheetCount = 1;
        } else {
          stylesheets.forEach((link) => {
            if (link.sheet || link.href) {
              stylesheetCount++;
            }
          });
        }

        // Если нет изображений, считаем что они загружены
        if (totalCount === 0) {
          loadedCount = 1;
        } else {
          images.forEach((img) => {
            if (img.complete && img.naturalHeight !== 0) {
              loadedCount++;
            } else {
              const loadHandler = () => {
                loadedCount++;
                if (
                  loadedCount === totalCount &&
                  stylesheetCount === totalStylesheets
                ) {
                  resolve(true);
                }
                img.removeEventListener("load", loadHandler);
                img.removeEventListener("error", errorHandler);
              };
              const errorHandler = () => {
                loadedCount++;
                if (
                  loadedCount === totalCount &&
                  stylesheetCount === totalStylesheets
                ) {
                  resolve(true);
                }
                img.removeEventListener("load", loadHandler);
                img.removeEventListener("error", errorHandler);
              };
              img.addEventListener("load", loadHandler);
              img.addEventListener("error", errorHandler);
            }
          });
        }

        // Если все уже загружено
        if (
          loadedCount === totalCount &&
          (totalStylesheets === 0 || stylesheetCount === totalStylesheets)
        ) {
          resolve(true);
        }
      });
    };

    // Проверяем, когда все ресурсы загружены
    const checkLoadComplete = async () => {
      if (isCompleteRef.current) return;

      // Даем время для рендеринга новой страницы
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Проверяем готовность документа
      if (document.readyState === "complete") {
        // Ждем загрузки всех ресурсов
        await checkAllResourcesLoaded();

        // Даем небольшую задержку для завершения всех процессов загрузки
        await new Promise((resolve) => setTimeout(resolve, 200));

        if (!isCompleteRef.current) {
          // Останавливаем прогресс-бар
          if (progressInterval) {
            clearInterval(progressInterval);
          }
          if (checkInterval) {
            clearInterval(checkInterval);
          }

          isCompleteRef.current = true;
          setProgress(100);

          // Плавное исчезновение
          timeoutId = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) {
              onComplete();
            }
          }, 300);
        }
      }
    };

    // Симуляция прогресса загрузки
    progressInterval = setInterval(() => {
      if (isCompleteRef.current) {
        clearInterval(progressInterval);
        return;
      }

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Ускоряем прогресс в начале, замедляем в конце
        const increment = prev < 50 ? 3 : prev < 80 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Для SPA проверяем периодически, так как событие load может не сработать при навигации
    checkInterval = setInterval(() => {
      if (document.readyState === "complete") {
        clearInterval(checkInterval);
        checkLoadComplete();
      }
    }, 100);

    // Также слушаем событие load на случай первой загрузки
    window.addEventListener("load", checkLoadComplete);

    // Запускаем проверку сразу
    checkLoadComplete();

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("load", checkLoadComplete);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 px-4 sm:px-6 md:px-8"
      style={{
        backgroundColor: "rgb(20, 41, 43)", // r: 0.079*255, g: 0.160*255, b: 0.168*255
      }}
    >
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[472px]">
        {/* Логотип */}
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[472px] h-[150px] sm:h-[180px] md:h-[220px] lg:h-[260px] flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Загрузочная линия */}
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[470px] h-[4px] sm:h-[5px] md:h-[6px] relative">
          {/* Фоновая линия */}
          <div
            className="w-full h-full rounded-full"
            style={{
              backgroundColor: "rgb(217, 217, 217)", // r: 0.851*255, g: 0.851*255, b: 0.851*255
            }}
          />
          {/* Прогресс линия */}
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, rgb(124, 98, 43) 0%, rgb(255, 209, 112) 100%)",
            }}
          />
        </div>

        {/* Текст */}
        <p
          className="text-[#b3b2b2] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-lato font-regular text-center w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[449px] px-2"
          // r: 0.868*255, g: 0.868*255, b: 0.868*255
        >
          Идет загрузка. Пожалуйста, подождите.
        </p>
      </div>
    </div>
  );
};

export default Preloader;
