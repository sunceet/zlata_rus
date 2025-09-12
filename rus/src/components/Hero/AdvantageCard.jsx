import React from "react";

const AdvantageCard = ({ icon, title, subtitle, text }) => {
  return (
    <div className="w-[448px] h-[220px] rounded-[20px] border border-[#D7B56D] bg-transparent p-5">
      <div className="flex items-center">
        <img src={icon} alt={title} className="w-14 h-14" />
        <div className="ml-4">
          <h3 className="text-[28px] font-[Lato] font-bold text-[#D7B56D]">
            {title}
          </h3>
          <p className="text-[12px] font-normal font-[Lato] text-[#C0A96A80]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="w-[420px] mt-4 border-t border-[#EDD19650] my-4 mx-auto"></div>
      <p className="mt-4 font-normal font-[Lato] text-[16px] text-[#EDD196] leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default AdvantageCard;
