// src/components/AdvantageCard.jsx
const AdvantageCard = ({ icon, title, subtitle, text, className = "" }) => {
  return (
    <div
      className={`
        w-full h-full
        rounded-[20px] border border-[#D7B56D] bg-transparent
        p-4 xl:px-6 xl:py-5 2xl:px-6 2xl:py-5
        ${className}
      `}
    >
      <div className="flex items-center">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 md:w-12 md:h-12 2xl:w-14 2xl:h-14"
        />
        <div className="ml-3 xl:ml-4">
          <h3 className="font-lato font-bold text-[#D7B56D] text-xl sm:text-2xl xl:text-[22px] 2xl:text-[28px]">
            {title}
          </h3>
          <p className="font-lato font-normal text-[#C0A96A80] text-[11px] sm:text-xs xl:text-[12px]">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="w-full border-t border-[#EDD19650] my-3 xl:my-3 2xl:my-4" />

      <p className="font-lato font-normal text-[#EDD196] text-sm sm:text-base 2xl:text-[16px] leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default AdvantageCard;
