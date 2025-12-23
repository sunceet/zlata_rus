import React from 'react';
import bgGreen from '@/assets/bg-green.svg';
import tourHeader from '@/assets/tour.png';
import vectorSvg from '@/assets/Vector.svg';
import altaiIcon from '@/assets/altai_icon.svg';
import tgIcon from '@/assets/tg_icon.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Carousel images
import card61 from '@/assets/carousel/Ресурс 61@4x.png';
import card62 from '@/assets/carousel/Ресурс 62@4x.png';
import card63 from '@/assets/carousel/Ресурс 63@4x.png';
import card64 from '@/assets/carousel/Ресурс 64@4x.png';
import card65 from '@/assets/carousel/Ресурс 65@4x.png';
import card66 from '@/assets/carousel/Ресурс 66@4x.png';
import card67 from '@/assets/carousel/Ресурс 67@4x.png';
import card68 from '@/assets/carousel/Ресурс 68@4x.png';
import card69 from '@/assets/carousel/Ресурс 69@4x.png';
import card70 from '@/assets/carousel/Ресурс 70@4x.png';
import card71 from '@/assets/carousel/Ресурс 71@4x.png';
import card72 from '@/assets/carousel/Ресурс 72@4x.png';
import card73 from '@/assets/carousel/Ресурс 73@4x.png';
import card74 from '@/assets/carousel/Ресурс 74@4x.png';
import card75 from '@/assets/carousel/Ресурс 75@4x.png';
import card76 from '@/assets/carousel/Ресурс 76@4x.png';
import card77 from '@/assets/carousel/Ресурс 77@4x.png';
import card78 from '@/assets/carousel/Ресурс 78@4x.png';
import card79 from '@/assets/carousel/Ресурс 79@4x.png';
import card80 from '@/assets/carousel/Ресурс 80@4x.png';
import card81 from '@/assets/carousel/Ресурс 81@4x.png';
import card82 from '@/assets/carousel/Ресурс 82@4x.png';
import card83 from '@/assets/carousel/Ресурс 83@4x.png';
import card84 from '@/assets/carousel/Ресурс 84@4x.png';
import card85 from '@/assets/carousel/Ресурс 85@4x.png';
import card86 from '@/assets/carousel/Ресурс 86@4x.png';
import card87 from '@/assets/carousel/Ресурс 87@4x.png';
import card88 from '@/assets/carousel/Ресурс 88@4x.png';

const carouselImages = [
    card61, card62, card63, card64, card65, card66, card67, card68, card69, card70,
    card71, card72, card73, card74, card75, card76, card77, card78, card79, card80,
    card81, card82, card83, card84, card85, card86, card87, card88
];

export default function TourPage() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const total = carouselImages.length;

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev - 1 + total) % total);
        setTimeout(() => setIsTransitioning(false), 500); // Lock duration matching transition
    };

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % total);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Mobile Swipe Handling
    const [touchStart, setTouchStart] = React.useState(null);
    const [touchEnd, setTouchEnd] = React.useState(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) handleNext();
        if (isRightSwipe) handlePrev();
    };

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col items-center relative overflow-x-hidden"
            style={{ backgroundImage: `url(${bgGreen})` }}
        >
            {/* Header Image */}
            <div className="w-full h-[540px] relative overflow-hidden flex items-center justify-center">
                <img
                    src={tourHeader}
                    alt="Tour Header"
                    className="w-full h-full object-cover"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4 text-center">
                    <h1
                        className="text-white font-bold"
                        style={{
                            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                            fontSize: 'clamp(1.5rem, 5vw, 48px)'
                        }}
                    >
                        ВЫИГРАЙ ТУР В АЛТАЙ
                    </h1>
                    <p
                        className="text-white font-bold mt-2"
                        style={{
                            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                            fontSize: 'clamp(1rem, 2.5vw, 24px)'
                        }}
                    >
                        Собери свой путь к внутренней гармонии
                    </p>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-[1920px] flex flex-col px-4 md:px-[160px] relative">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start relative">
                    <div className="w-full lg:max-w-[1000px] flex flex-col z-10">
                        <h2
                            className="mt-[40px] lg:mt-[99px] font-bold"
                            style={{
                                color: 'rgba(215, 181, 109, 1)',
                                fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                                fontSize: 'clamp(1rem, 2.5vw, 24px)'
                            }}
                        >
                            Экспедиция в свой внутренний мир
                        </h2>

                        <h1
                            className="mt-[14px] font-bold bg-clip-text text-transparent"
                            style={{
                                fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                                fontSize: 'clamp(1.5rem, 5vw, 48px)',
                                background: 'linear-gradient(90deg, #7C622B 0%, #FFD170 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            Собери свой Алтай
                        </h1>

                        <div
                            className="mt-[28px] w-full font-lato font-normal text-[20px] md:text-[24px] leading-[32px] flex flex-col gap-6"
                            style={{ color: 'rgba(215, 181, 109, 1)' }}
                        >
                            <p>
                                Мы верим, что премиальные масла и здоровое питание - это только начало. Наша настоящая цель - изменение жизни через изменение сознания.
                            </p>
                            <p>
                                Поэтому мы создали инновационный подход, где сила продукта встречается с силой мысли. Мы строим комьюнити не вокруг покупок, а вокруг ценностей: осознанности, гармонии с природой и стремления к лучшей версии себя.
                            </p>
                            <p>
                                С нами выгодно вдвойне: вы получаете не только эталонное качество с Алтая, но и возможность выиграть путешествие, которое перевернет ваш внутренний мир.
                            </p>
                        </div>
                    </div>

                    {/* Altai Icon positioned relative to flex on desktop, centered on mobile */}
                    <div className="w-full lg:w-auto mt-10 lg:mt-[99px] flex justify-center lg:block lg:flex-shrink-0">
                        <img
                            src={altaiIcon}
                            alt="Altai Icon"
                            className="w-[200px] h-[200px] lg:w-[370px] lg:h-[370px] object-contain"
                        />
                    </div>
                </div>

                <div className="mt-[56px] w-full flex justify-center">
                    <img src={vectorSvg} alt="Vector ornament" className="w-full object-contain" />
                </div>

                <h1
                    className="mt-[56px] text-center font-bold bg-clip-text"
                    style={{
                        fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                        fontSize: 'clamp(1.5rem, 5vw, 48px)',
                        background: 'linear-gradient(90deg, #7C622B 0%, #FFD170 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Как принять участие в акции
                </h1>

                <div
                    className="mt-[32px] md:mt-[48px] w-full max-w-[1600px] rounded-[24px] md:rounded-[32px] self-center flex flex-col relative"
                    style={{
                        border: '0.7px solid rgba(215, 181, 109, 1)',
                        boxShadow: '0px 0px 10px 0px rgba(215, 181, 109, 1)',
                        background: 'transparent',
                        backdropFilter: 'blur(4px)'
                    }}
                >
                    <div
                        className="mt-[20px] md:mt-[30px] ml-[20px] md:ml-[42px] font-bold text-left"
                        style={{
                            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                            fontSize: 'clamp(1.5rem, 3vw, 32px)',
                            color: 'rgba(215, 181, 109, 1)'
                        }}
                    >
                        Правила акции
                    </div>

                    <div
                        className="mt-[15px] md:mt-[18px] mx-[15px] md:mx-[31px] h-[1.5px]"
                        style={{
                            background: 'rgba(237, 209, 150, 1)'
                        }}
                    />

                    <div
                        className="mt-[20px] md:mt-[28px] ml-[20px] md:ml-[42px] mr-[20px] md:mr-[42px] mb-[20px] md:mb-[30px] text-left font-normal flex flex-col gap-3 md:gap-2"
                        style={{
                            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                            fontSize: 'clamp(0.9rem, 1.5vw, 20px)',
                            lineHeight: '120%',
                            color: 'rgba(237, 209, 150, 1)'
                        }}
                    >
                        <div className="flex gap-2">
                            <span className="flex-shrink-0 w-[20px]">1.</span>
                            <p>На каждой бутылке масла Злата Русь висит уникальная мудрая карточка с цитатой-размышлением.</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex-shrink-0 w-[20px]">2.</span>
                            <p>Всего 8 золотых карточек (особого дизайна). Они — главные ключи.</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex-shrink-0 w-[20px]">3.</span>
                            <p>Ваша задача: собрать все 56 карточек с одной золотой карточкой (срок акции неограничен).</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex-shrink-0 w-[20px]">4.</span>
                            <p>Как только коллекция из мудрыых карточек собрана — вы фиксируете их на фото на фоне бутылок Злата Русь, которые вы купили.</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex-shrink-0 w-[20px]">5.</span>
                            <p>Отправляете фото на проверку в наш Telegram-бот (@ZlataAltaibot).</p>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex-shrink-0 w-[20px]">6.</span>
                            <p>После проверки модераторами (мы должны убедиться в подлинности карточек) — вы и ваш спутник получаете бесплатные путевки на 10-дневный трансформационный тур в Алтай!</p>
                        </div>
                    </div>
                </div>

                {/* Telegram Bot Button */}
                <button
                    className="mt-[48px] self-center flex items-center justify-center gap-[24px] rounded-[18px] hover:opacity-90 transition-opacity"
                    style={{
                        width: '307px',
                        height: '82px',
                        background: 'linear-gradient(90deg, #7C622B 0%, #FFD170 100%)',
                        padding: '18px 24px',
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={tgIcon}
                        alt="Telegram Icon"
                        style={{ width: '32px', height: '28px' }}
                    />
                    <span
                        style={{
                            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                            fontWeight: '700',
                            fontSize: '32px',
                            color: 'white'
                        }}
                    >
                        Telegram-бот
                    </span>
                </button>

                <div className="mt-[54px] w-full flex justify-center">
                    <img src={vectorSvg} alt="Vector ornament" className="w-full object-contain" />
                </div>

                <h1
                    className="mt-[56px] text-center font-bold bg-clip-text"
                    style={{
                        fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                        fontSize: 'clamp(1.5rem, 5vw, 48px)',
                        background: 'linear-gradient(90deg, #7C622B 0%, #FFD170 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Ваши ключи в Алтай
                </h1>

                {/* Carousel Block */}
                <div
                    className="mt-[32px] md:mt-[56px] w-full max-w-[1600px] h-[450px] md:h-[780px] rounded-[24px] self-center flex flex-col items-center justify-center relative overflow-hidden"
                    style={{
                        border: '1px solid rgba(215, 181, 109, 1)',
                        boxShadow: '0px 0px 10px 0px rgba(215, 181, 109, 1)',
                        background: 'transparent',
                        backdropFilter: 'blur(4px)',
                        padding: '20px md:55px'
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Carousel Area */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                        {/* Navigation Arrows - Hidden on mobile and tablet */}
                        <button
                            onClick={handlePrev}
                            className="hidden lg:flex absolute left-[0px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-white backdrop-blur-md items-center justify-center hover:bg-white/40 transition-colors z-50 shadow-lg cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-8 h-8 text-black" />
                        </button>

                        <button
                            onClick={handleNext}
                            className="hidden lg:flex absolute right-[0px] top-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-full bg-white backdrop-blur-md items-center justify-center hover:bg-white/40 transition-colors z-50 shadow-lg cursor-pointer"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-8 h-8 text-black" />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                            {carouselImages.map((img, i) => {
                                let diff = i - activeIndex;
                                if (diff > total / 2) diff -= total;
                                if (diff < -total / 2) diff += total;

                                const position = diff;
                                const isActive = position === 0;

                                // Carousel adaptive logic
                                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                                const baseWidth = isMobile ? 220 : 400;
                                const baseHeight = isMobile ? 330 : 600;

                                const positionAbs = Math.abs(position);
                                const isVisible = positionAbs <= 3;

                                // Precise Offsets (Desktop)
                                let translateX = 0;
                                let hReduction = 0;
                                if (!isMobile) {
                                    if (positionAbs === 1) translateX = 200;
                                    else if (positionAbs === 2) translateX = 200 + 205;
                                    else if (positionAbs === 3) translateX = 200 + 205 + 130;

                                    if (position < 0) translateX = -translateX;

                                    hReduction = positionAbs * 66;
                                } else {
                                    // Mobile Fallback - simpler peeking
                                    translateX = position * (baseWidth * 0.4);
                                    hReduction = positionAbs * 30;
                                }

                                const cardWidth = baseWidth;
                                const cardHeight = baseHeight - hReduction;

                                // Vertical Offset (33px down per level)
                                const yOffset = positionAbs * 1;

                                const zIndex = 30 - positionAbs * 10;
                                const opacity = isVisible ? 1 : 0;

                                let blur = '0px';
                                if (!isActive) {
                                    if (Math.abs(position) === 1) blur = '2px';
                                    else if (Math.abs(position) === 2) blur = '5px';
                                    else blur = '10px';
                                }

                                return (
                                    <div
                                        key={i}
                                        onClick={() => !isActive && !isTransitioning && setActiveIndex(i)}
                                        className="absolute transition-all duration-500 ease-out flex items-center justify-center"
                                        style={{
                                            width: `${cardWidth}px`,
                                            height: `${cardHeight}px`,
                                            transform: `translate(${translateX}px, ${yOffset}px)`,
                                            zIndex,
                                            opacity,
                                            filter: `blur(${blur})`,
                                            pointerEvents: isVisible ? 'auto' : 'none',
                                            cursor: !isActive && isVisible ? 'pointer' : 'default',
                                            visibility: isVisible ? 'visible' : 'hidden'
                                        }}
                                    >
                                        <div
                                            className={`w-full h-full transition-all duration-500 flex items-center justify-center`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Card ${i + 61}`}
                                                className={`w-full h-full object-contain select-none transition-all duration-500 ${isActive ? 'scale-110 drop-shadow-[0_0_15px_rgba(255,209,112,0.8)]' : ''}`}
                                                draggable={false}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="py-10 lg:py-20 flex flex-col items-center">
                    {/* Additional content will go here */}
                </div>
            </div>
        </div>
    );
}
