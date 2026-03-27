import { motion } from 'framer-motion';
import React, { RefObject, useState } from 'react';

interface CardDrag {
    description: string;
    cardColor: string;
    cardTitle?: React.ReactNode;
    cardDescription: string;
    imgSrc: string;
    containerRef: RefObject<HTMLElement>;
    id: string;
    top: string;
    left: string;
    rotate: string;
    hCard?:string;
}

export const CardDrag: React.FC<CardDrag> = ({
    description,
    cardColor,
    imgSrc,
    cardTitle,
    cardDescription,
    containerRef,
    id,
    top,
    left,
    rotate,
    hCard="h-[11rem]",
}) => {
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
        <motion.div
            id={id}
            onMouseDown={updateDragZIndex} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            style={{ top, left, rotate }}
            className={`drag-elements group z-0 hover:z-10 absolute mt-4 -ml-20 flex w-1/2 flex-col items-center justify-center md:w-[26rem] lg:w-96 `}
            drag
            dragConstraints={containerRef}
            dragElastic={0.8}
        >
            <div className="group cursor-pointer  z-0">
                <div className="md:relative   flex md:flex-col items-center justify-center group-hover:rotate-2 group-hover:z-30 duration-300">
                    <div className="relative top-[2rem] z-10 flex">
                        <img src="/images/keychain.png" className="h-auto md:w-[7rem] w-[2rem]" draggable="false" />
                    </div>
                    <div className="group relative inset-0 h-auto w-auto">
                        <div className={`z-0 flex h-auto md:w-[26rem] flex-col items-center justify-center rounded-[0.5rem] border-1 border-black px-2 py-2 ${cardColor}`}>
                            <p>{description}</p>
                            <div className={`relative my-4 ${hCard} w-[20rem] flex-col items-center justify-center rounded-[0.5rem] bg-white px-2 py-4`}>
                                <div className="absolute inset-0 flex-col px-2 py-2 duration-300 ease-in-out group-hover:opacity-0">
                                    <h1 className="text-center text-[1.5rem] font-semibold text-black">{cardTitle}</h1>
                                    <p className="items-center text-center text-black">{cardDescription}</p>
                                </div>
                                <div className="absolute inset-0 flex opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                                    <img src={imgSrc} className="w-auto rounded-[0.5rem]" draggable="false"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
