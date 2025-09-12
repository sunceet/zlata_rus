import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logoText from "@/assets/logo-text.svg";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "О БРЕНДЕ", href: "/about" },
    { name: "ПРОДУКЦИЯ", href: "/products" },
    { name: "ПРЕИМУЩЕСТВА", href: "/advantages" },
    { name: "ПРИМЕНЕНИЕ И ПОЛЬЗА", href: "/application" },
    { name: "НУТРИЦОЛОГ", href: "/nutritionist" },
    { name: "КОНТАКТЫ", href: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Верхний блок */}
      <div
        className={`fixed w-full bg-[#1C3B3E]/95 backdrop-blur-sm border-b border-[#D7B56D]/70 z-50
        transition-all duration-700 ease-in-out
        ${scrolled ? "h-[90px]" : "h-[160px]"}`}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          <Link to="/" className="block relative w-[220px] h-[110px]">
            {/* Лого иконка */}
            <img
              src={logo}
              alt="Логотип"
              className={`absolute left-0 top-0 w-[200px] h-[110px] 
              transition-all duration-700 ease-in-out
              ${scrolled ? "opacity-0 scale-90 " : "opacity-100 scale-100 "}`}
            />

            {/* Лого текстовое */}
            <img
              src={logoText}
              alt="Логотип текст"
              className={`absolute left-0 top-0 w-[200px] h-[110px] 
              transition-all duration-700 ease-in-out
              ${scrolled ? "opacity-100 scale-100 " : "opacity-0 scale-90 "}`}
            />
          </Link>
        </div>
      </div>

      {/* Навбар */}
      <header
        className={`fixed w-full z-40 bg-[#1C3B3E]/95 backdrop-blur-sm transition-all duration-700
        shadow-[0_4px_20px_rgba(215,181,109,0.35)]  border-b border-[#D7B56D]/70
        ${scrolled ? "top-[90px] h-[55px]" : "top-[160px] h-[65px]"}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <nav className="flex">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[#D7B56D] font-lato py-1 px-2 text-[20px] transition-colors duration-300 hover:text-[#FFD170]"
                style={{
                  marginRight: index < navItems.length - 1 ? "50px" : "0",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
