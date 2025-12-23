import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import modalBg from "@/assets/modal1.png";
import airplaneImg from "@/assets/airplane.png";

export default function NotificationModal({ isOpen, onClose }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-[716px] h-auto aspect-[716/639] rounded-[30px] border-[0.1px] border-white/50 overflow-hidden transition-all duration-300 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(90deg, #7C622B 0%, #FFD170 100%)'
        }}
      >
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src={modalBg}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'blur(1.5px)' }}
          />
        </div>

        {/* Dark Shadow Overlay */}
        <div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[200%] h-64 rounded-full bg-black"
          style={{ filter: 'blur(100px)' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-[50px] h-[50px] rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors group cursor-pointer z-20"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" strokeWidth={1} />
        </button>

        {/* Main Heading - БЕСПЛАТНО! */}
        <div
          className="absolute top-[100px] left-1/2 -translate-x-1/2 -translate-y-[60%] w-[90%] text-center pointer-events-none"
          style={{
            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '90px',
            fontWeight: 800,
            fontStyle: 'italic',
            lineHeight: 1,
            color: 'transparent',
            WebkitTextStroke: '1px white',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
          }}
        >
          БЕСПЛАТНО!
        </div>

        {/* Airplane Image */}
        <img
          src={airplaneImg}
          alt="Airplane"
          className="absolute top-[11%] -left-[6.4%] w-[84%] h-auto  z-10"
        />



        {/* Subheading */}
        <div
          className="absolute bottom-35 left-1/2 -translate-x-1/2 w-[90%] text-center text-white"
          style={{
            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
            fontSize: '48px',
            fontWeight: 800,
            fontStyle: 'italic',
            lineHeight: 1
          }}
        >
          Собери свой тур в Алтай!
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            onClose();
            navigate('/promo');
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-[14px] px-[26px] py-[20px] transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, #7C622B 0%, #FFD170 100%)',
            minWidth: '311px',
            height: '66px'
          }}
        >
          <span
            className="text-white  text-center whitespace-nowrap"
            style={{
              fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: 'normal'
            }}
          >
            Узнать подробнее об акции
          </span>
        </button>
      </div>
    </div>
  );
}
