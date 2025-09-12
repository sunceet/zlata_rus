import React from "react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full border border-t-[#D7B56D] bg-[#1C3B3E]">
      {/* Основная часть футера */}
      <div className="h-[240px] flex items-center px-3">
        {/* Лого слева */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Логотип"
            className="w-[240px] h-[132px] ml-[125px]"
          />

          {/* Линия */}
          <div className="h-[168px] w-[1px] bg-[#D7B56D] ml-[250px]"></div>

          {/* Текстовые ссылки */}
          <div className="flex flex-col gap-[15px] ml-[30px] font-lato text-[16px] font-weight-[350px] tracking-wide">
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

      <div className="h-[45px] bg-[#183336] flex items-center justify-center">
        <p className="text-[#767676] text-[14px] font-lato tracking-wide">
          © 2025 ZLATA RUS — ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
