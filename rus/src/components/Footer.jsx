import React from "react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full border border-t-[#D7B56D] bg-[#1C3B3E]">
      {/* Основная часть футера */}
      <div className="h-[120px] md:h-[140px] lg:h-[160px] xl:h-[200px] 2xl:h-[240px] flex items-center px-3">
        {/* Лого слева */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Логотип"
            className="w-[110px] h-[70px] md:w-[150px] md:h-[80px] lg:w-[170px] lg:h-[90px] xl:w-[200px] xl:h-[110px] 2xl:w-[240px] 2xl:h-[132px] ml-[5px] md:ml-[40px] lg:ml-[70px] xl:ml-[100px] 2xl:ml-[125px]"
          />

          {/* Линия */}
          <div className="h-[90px] md:h-[110px] lg:h-[130px] w-[1px] xl:h-[150px] xl:w-[1px] 2xl:h-[168px] 2xl:w-[1px] bg-[#D7B56D] ml-[30px] md:ml-[50px] lg:ml-[70px] xl:ml-[100px] 2xl:ml-[250px]"></div>

          {/* Текстовые ссылки */}
          <div className="flex flex-col gap-[10px] sm:gap-[15px] ml-[30px] font-lato text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-weight-[350px]">
            <a
              href="#"
              className="text-[#FFFFFF] no-underline hover:text-[#D7B56D] visited:text-[#FFFFFF] active:text-[#FFFFFF]"
            >
              УСЛОВИЯ ИСПОЛЬЗОВАНИЯ
            </a>
            <a
              href="#"
              className="text-[#FFFFFF] no-underline hover:text-[#D7B56D] visited:text-[#FFFFFF] active:text-[#FFFFFF]"
            >
              КОНФИДЕНЦИАЛЬНОСТЬ
            </a>
            <a
              href="#"
              className="text-[#FFFFFF] no-underline hover:text-[#D7B56D] visited:text-[#FFFFFF] active:text-[#FFFFFF]"
            >
              ПОЛИТИКА ИСПОЛЬЗОВАНИЯ ФАЙЛОВ COOKIE
            </a>
            <a
              href="#contacts"
              className="text-[#FFFFFF] no-underline hover:text-[#D7B56D] visited:text-[#FFFFFF] active:text-[#FFFFFF]"
            >
              КОНТАКТЫ
            </a>
          </div>
        </div>
      </div>

      <div className="md:h-[45px] bg-[#183336] flex items-center justify-center">
        <p className="text-[#767676] text-[10px] md:text-[12px] lg:text-[14px] font-lato tracking-wide">
          © 2025 ZLATA RUS — ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
