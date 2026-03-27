import { motion } from 'framer-motion';
import React, { RefObject, useState } from 'react';

interface PictDrag {
    imgSrc: string;
    containerRef: RefObject<HTMLElement>;
    id: string;
    top: string;
    left: string;
    rotate: string;
    hCard: string;
    className?:string;
}

export const PictDrag: React.FC<PictDrag> = ({ imgSrc, containerRef, id, top, left, rotate, hCard}) => {
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
            className={`drag-elements group absolute z-0 flex w-auto flex-col items-center justify-center hover:z-10`}
            drag
            dragConstraints={containerRef}
            dragElastic={0.5}
        >
            <div className="z-0 cursor-pointer">
                <div className="hover:rotate-2 ease-in-out transition-all duration-400 relative inset-0 flex items-center w-auto h-auto justify-center md:relative md:flex-col">
                    <img src={`${imgSrc}`} className={`${hCard} w-auto relative` }  draggable="false"/>
                </div>
            </div>
        </motion.div>
    );
};
