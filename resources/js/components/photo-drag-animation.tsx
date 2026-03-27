import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { PictDrag } from './photo-drag';

export const Photos = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="absolute inset-0 h-auto flex-col items-center justify-center overflow-hidden" ref={containerRef}>
            <PictDrag imgSrc="/images/receipt.svg" id="photo-1" left="65%" top="0%" rotate="0deg" hCard="h-[24rem]" containerRef={containerRef} />
            <PictDrag imgSrc="/images/duta-1.svg" id="photo-2" left="25%" top="3%" rotate="0deg" hCard="h-[13rem]" containerRef={containerRef} />
            <PictDrag imgSrc="/images/strip 1.svg" id="photo-3" left="2%" top="13%" rotate="0deg" hCard="h-[28rem]" containerRef={containerRef} />
            <PictDrag imgSrc="/images/trophy.svg" id="photo-4" left="30%" top="67%" rotate="0deg" hCard="h-[10rem]" containerRef={containerRef} />
            <PictDrag imgSrc="/images/utm1.svg" id="photo-5" left="72%" top="45%" rotate="0deg" hCard="h-[18rem]" containerRef={containerRef} />
            <PictDrag imgSrc="/images/duta2.svg" id="photo-6" left="50%" top="30%" rotate="0deg" hCard="h-[15rem]" containerRef={containerRef} />
            <PictDrag imgSrc="/images/appel-1.svg" id="photo-7" left="40%" top="40%" rotate="0deg" hCard="h-[4rem]" containerRef={containerRef} />
        </div>
    );
};

const Photo = ({ containerRef, src, alt, top, left, rotate, className }) => {
    const [dragZIndex, setDragZIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const updateDragZIndex = () => {
        const els = document.querySelectorAll('.drag-elements');
        let maxZIndex = 0;
        els.forEach((el) => {
            let currentZIndex = parseInt(window.getComputedStyle(el).getPropertyValue('z-index'));
            if (!isNaN(currentZIndex) && currentZIndex > maxZIndex) {
                maxZIndex = currentZIndex;
            }
        });

        setDragZIndex(maxZIndex + 1);
        setIsHovered(false);
        const finalZIndex = isHovered ? 999 : dragZIndex;
    };

    return (
        <motion.img
            onMouseDown={updateDragZIndex} // Saat klik/drag dimulai, update zIndex drag
            onMouseEnter={() => setIsHovered(true)} // Saat mouse masuk, set isHovered true
            onMouseLeave={() => setIsHovered(false)}
            style={{
                top,
                left,
                rotate,
                zIndex,
            }}
            className={twMerge('drag-elements absolute w-48 p-1 pb-4', className)}
            src={src}
            alt={alt}
            drag
            dragConstraints={containerRef}
            dragElastic={0.4}
        />
    );
};
