const ProductCard = ({ title, bg, oil, points }) => (
  <div className="w-[500px] h-[538px] bg-white border border-[#D7B56D] rounded-[42px] relative overflow-hidden mx-5 flex-shrink-0">
    {/* фон */}
    <img
      src={bg}
      alt={title}
      className="absolute inset-0 w-full h-[578px] object-contain p-4.5"
    />

    {/* продукт */}
    <img
      src={oil}
      alt={title}
      className={`absolute object-contain z-10
        ${
          title.includes("мука")
            ? "bottom-0 -right-7 max-h-[85%]"
            : "right-0 top-1/2 -translate-y-1/2 max-h-[85%] pr-4.5"
        }`}
    />

    {/* тексты */}
    <div className="absolute left-9 top-3 flex flex-col h-full justify-between z-20">
      <h3 className="w-[300px] text-[27px] mt-[19px] font-lato font-bold text-[#1C3B3E] uppercase">
        {title}
      </h3>

      <ul className="text-[13.5px] text-[#1C3B3E] font-normal font-lato">
        {points.map((p, j) => (
          <li key={j} className="py-[3.75px]">
            {p}
          </li>
        ))}
      </ul>

      <button
        className={`font-lato bg-gradient-to-r from-[#7C622B] to-[#FFD170] 
          text-black rounded-full font-semibold uppercase hover:opacity-90 transition
          ${
            title.includes("мука")
              ? "w-[187px] h-[37px] text-[12px] mb-15"
              : title === "Подсолнечное масло"
              ? "w-[262px] h-[43.5px] text-[13px] mb-15"
              : "w-[297px] h-[48px] text-[13.5px] mb-15"
          }`}
      >
        Узнать подробнее
      </button>
    </div>
  </div>
);

export default ProductCard;
