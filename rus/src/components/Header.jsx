import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logoText from "@/assets/logo-text.svg";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  const location = useLocation();

  const navItems = [
    { name: "О БРЕНДЕ", href: "/about" },
    { name: "ПРОДУКЦИЯ", href: "/products" },
    { name: "ПРЕИМУЩЕСТВА", href: "/advantages" },
    { name: "ПРИМЕНЕНИЕ И ПОЛЬЗА", href: "/application" },
    { name: "НУТРИЦОЛОГ", href: "/nutritionist" },
    { name: "КОНТАКТЫ", href: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(false);
      }
    };
    const handleResize = () => {
      const desk = window.innerWidth >= 1024;
      setIsDesktop(desk);
      if (!desk) setScrolled(false);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Верхняя панель */}
      <div
        className={`fixed w-full bg-[#1C3B3E]/95 backdrop-blur-sm border-b border-[#D7B56D]/70 z-50
        transition-all duration-700 ease-in-out
        ${isDesktop ? (scrolled ? "h-[90px]" : "h-[160px]") : "h-[100px]"}`}
      >
        <div className="w-full h-full flex items-center justify-between lg:justify-center px-4 lg:px-10">
          {/* ЛОГО */}
          <Link
            to="/"
            className={`block relative ${
              isDesktop ? "w-[220px] h-[110px]" : "w-[200px] h-[80px]"
            }`}
          >
            {isDesktop ? (
              <>
                {/* Иконка логотипа (видна при непрокрученной шапке) */}
                <img
                  src={logo}
                  alt="Логотип"
                  className={`absolute left-0 top-0 w-[200px] h-[110px]
                  transition-all duration-700 ease-in-out
                  ${scrolled ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}
                />
                {/* Текстовый логотип (виден после скролла) */}
                <img
                  src={logoText}
                  alt="ZLATA RUS"
                  className={`absolute left-0 top-0 w-[200px] h-[110px]
                  transition-all duration-700 ease-in-out
                  ${scrolled ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                />
              </>
            ) : (
              // <1024 — только иконка, без анимаций
              <img src={logo} alt="ZLATA RUS" className="w-[120px] h-[80px]" />
            )}
          </Link>

          {/* БУРГЕР (только <1024px) */}
          <button
            className="lg:hidden relative flex items-center justify-center w-12 h-12 rounded-md
                       focus:outline-none active:scale-[0.98] transition-transform duration-150"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {/* Линия 1 */}
            <span
              className={`absolute block h-[2px] w-11 rounded-full bg-[#D7B56D] 
                          transition-all duration-300 ease-out 
                          ${
                            menuOpen
                              ? "translate-y-0 rotate-45"
                              : "-translate-y-2.5 rotate-0"
                          }`}
            />
            {/* Линия 2 */}
            <span
              className={`absolute block h-[2px] w-11 rounded-full bg-[#D7B56D]
                          transition-all duration-300 ease-out 
                          ${
                            menuOpen
                              ? "opacity-0 scale-x-0"
                              : "opacity-100 scale-x-100"
                          }`}
            />
            {/* Линия 3 */}
            <span
              className={`absolute block h-[2px] w-11 rounded-full bg-[#D7B56D]
                          transition-all duration-300 ease-out 
                          ${
                            menuOpen
                              ? "translate-y-0 -rotate-45"
                              : "translate-y-2.5 rotate-0"
                          }`}
            />
          </button>
        </div>

        {/* Выпадающее мобильное меню */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#1C3B3E]/95 backdrop-blur-md border-t border-[#D7B56D]/50 shadow-lg animate-fadeIn">
            <div className="flex flex-col items-center py-6 gap-1 space-y-4">
              {navItems.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative inline-block text-[18px] font-lato transition-colors duration-300 
                      ${
                        active
                          ? "text-[#FFD170]"
                          : "text-[#D7B56D] hover:text-[#FFD170]"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-[#FFD170] rounded"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Нижняя панель (только ≥1024px) */}
      <header
        className={`hidden lg:block fixed w-full z-40 bg-[#1C3B3E]/95 backdrop-blur-sm transition-all duration-700
        shadow-[0_4px_20px_rgba(215,181,109,0.35)] border-b border-[#D7B56D]/70
        ${scrolled ? "top-[90px] h-[55px]" : "top-[160px] h-[65px]"}`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <nav className="flex">
            {navItems.map((item, index) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative inline-block font-lato py-1 px-2 text-[18px] transition-colors duration-300 
                    ${
                      active
                        ? "text-[#FFD170]"
                        : "text-[#D7B56D] hover:text-[#FFD170]"
                    }`}
                  style={{
                    marginRight: index < navItems.length - 1 ? "40px" : 0,
                  }}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-[#FFD170] rounded"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.25s ease-out; }

        @keyframes burger-pop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        button[aria-label="Закрыть меню"] { animation: burger-pop .18s ease-out; }
      `}</style>
    </>
  );
};

export default Header;
