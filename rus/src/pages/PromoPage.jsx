import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bgGreen from '@/assets/bg-green.svg';
import carousel1 from '@/assets/carousel1.png';
import carousel2 from '@/assets/carousel2.png';
import whiteOrn from '@/assets/white_orn.svg';
import firstImg from '@/assets/first.png';
import secondImg from '@/assets/second.png';
import bearSvg from '@/assets/bear.svg';
import heartSvg from '@/assets/heart.svg';


export default function PromoPage() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const images = [carousel1, carousel2];
    const AUTOPLAY_DURATION = 5000; // 5 seconds per slide

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setProgress(0); // Reset progress on slide change
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect);
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi, onSelect]);

    // Autoplay and Progress Logic
    useEffect(() => {
        if (!emblaApi) return;

        let startTime = Date.now();
        let animationFrameId;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / AUTOPLAY_DURATION) * 100, 100);
            setProgress(newProgress);

            if (elapsed < AUTOPLAY_DURATION) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                emblaApi.scrollNext();
                startTime = Date.now(); // Reset timer for next slide
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [emblaApi, selectedIndex]); // Restart on slide change

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center flex flex-col items-center py-10 lg:py-20 relative overflow-x-hidden"
            style={{ backgroundImage: `url(${bgGreen})` }}
        >
            {/* Heading */}
            <h1
                className="text-center bg-gradient-to-r from-[#7C622B] to-[#FFD170] bg-clip-text text-transparent font-bold mb-8 md:mb-12 px-4"
                style={{
                    fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                    fontSize: 'clamp(1.5rem, 5vw, 48px)'
                }}
            >
                ЗЛАТА РУСЬ - ВАШ КЛЮЧ К ВНУТРЕННЕМУ МИРУ
            </h1>

            {/* Carousel Container */}
            <div className="w-full relative px-2 md:px-[162px] max-w-[1920px] flex flex-col gap-6 md:gap-10">
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollPrev}
                        className="absolute left-[-14px] md:left-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-[56px] md:h-[56px] rounded-full bg-white backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-20"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute right-[-14px] md:right-[-28px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-[56px] md:h-[56px] rounded-full bg-white backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors z-20"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-black" />
                    </button>

                    <div className="relative rounded-[21px] overflow-hidden">
                        {/* Progress Lines */}
                        <div className="absolute top-8 left-0 w-full z-10 px-8 flex gap-4 pointer-events-none">
                            {images.map((_, index) => (
                                <div key={index} className="h-[2px] w-full bg-white/30 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white transition-all duration-100 ease-linear"
                                        style={{
                                            width: index === selectedIndex ? `${progress}%` : (index < selectedIndex ? '100%' : '0%')
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="overflow-hidden h-full" ref={emblaRef}>
                            <div className="flex">
                                {images.map((img, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[300px] md:h-[596px]">
                                        <img
                                            src={img}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ornament 1 */}
                <img src={whiteOrn} alt="" className="hidden md:block w-full h-[34px] object-contain" />

                {/* Combined Photos and Texts Section for Mobile Interleaving */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {/* Image 1 */}
                    <div className="h-[250px] md:h-full w-full bg-black/20 rounded-[20px] overflow-hidden order-1 md:order-1">
                        <img src={firstImg} alt="First" className="w-full h-full object-cover" />
                    </div>

                    {/* Image 2 */}
                    <div className="h-[250px] md:h-full w-full bg-black/20 rounded-[20px] overflow-hidden order-3 md:order-2">
                        <img src={secondImg} alt="Second" className="w-full h-full object-cover" />
                    </div>

                    {/* Text Column 1 */}
                    <div className="flex flex-col gap-2 order-2 md:order-3">
                        <div className="text-left  text-[#D7B56D] text-[20px] md:text-[32px] font-lato font-medium">
                            Собери все коллекционные карточки и выиграй оплачиваемый тур в Алтай
                        </div>
                        <div className="text-left text-sm md:text-[20px] text-[#D7B56D] font-lato font-medium">
                            срок акции неограничен
                        </div>
                    </div>

                    {/* Text Column 2 */}
                    <div className="flex flex-col gap-2 order-4 md:order-4">
                        <div className="text-left  text-[#D7B56D] text-[20px] md:text-[32px] font-lato font-medium">
                            С любовью в ваш дом! Сочини стихотворение и получи подарок от нашего бренда
                        </div>
                        <div className="text-left text-sm md:text-[20px] text-[#D7B56D] font-lato font-medium">
                            срок акции неограничен
                        </div>
                    </div>
                </div>

                {/* Ornament 2 */}
                <div className="hidden md:block w-full h-[34px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${whiteOrn})` }} />

                {/* Manifesto Sections */}
                <div className="flex flex-col gap-10">
                    {/* Manifesto Heading */}
                    <h2
                        className="text-center bg-gradient-to-r from-[#7C622B] to-[#FFD170] lg:mt-0 mt-10 bg-clip-text text-transparent font-bold px-4 text-2xl md:text-[36px]"
                        style={{
                            fontFamily: 'Lato, -apple-system, Roboto, Helvetica, sans-serif',
                        }}
                    >
                        МЫ НЕ ПРОСТО СОЗДАЕМ ПРЕМИАЛЬНЫЕ МАСЛА. МЫ СОЗДАЕМ МАРШРУТЫ.
                    </h2>

                    {/* Bear Section */}
                    <div className="w-full border border-[#D7B56D] backdrop-blur-xs rounded-[32px] p-4 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-[323px]">
                        <img src={bearSvg} alt="Bear" className="w-[150px] h-[150px] md:w-[240px] md:h-[240px] object-contain flex-shrink-0" />
                        <p className="text-[#D7B56D] text-sm md:text-[30px] leading-relaxed font-lato text-center md:text-left">
                            <span className="font-bold">Добро пожаловать в мир, где покупка становится началом пути.</span> Каждая наша бутылка — это больше, чем просто продукт. Это шаг на пути к себе, к своей внутренней гармонии и силе, которую дарит нам природа Алтая. Наша философия — это мост между качеством, которое вы пробуете, и трансформацией, которую вы переживаете.
                        </p>
                    </div>

                    {/* Heart Section */}
                    <div className="w-full border border-[#D7B56D] backdrop-blur-xs rounded-[32px] p-4 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 h-auto md:h-[323px]">
                        <img src={heartSvg} alt="Heart" className="w-[150px] h-[150px] md:w-[240px] md:h-[240px] object-contain flex-shrink-0" />
                        <p className="text-sm 2xl:text-[30px] font-regular text-[#D7B56D] font-lato text-center md:text-left">
                            <span className="font-bold">Наша главная задача — это духовная трансформация.</span> У вас открыты возможности для внутреннего путешествия. Соберите коллекцию мудрых карточек и выиграйте настоящую экспедицию на Алтай. Также вы можете проявить вашу креативность в конкурсе стихов, чтобы наполнить свой дом любовью и получить наш подарок.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}
