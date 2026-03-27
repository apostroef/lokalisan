import { useRef, useState } from 'react';
import { CardDrag } from './card-drag';

export const Cards = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="absolute inset-0 mx-[2rem] mb-[3rem] h-auto flex-col items-center justify-center" ref={containerRef}>
            <CardDrag
                id="project-card-1"
                containerRef={containerRef}
                cardColor="bg-[#FFE9B5]"
                cardTitle={
                    <>
                        {' '}
                        <span className="font-serif italic">Real </span>World <span className="font-serif italic">Fake </span> Data
                    </>
                }
                cardDescription="3-person team internship project @SatuData Universitas Airlangga. Website to manage, publish and find academic dataset directly from researches in Universitas Airlangga"
                mainFolderImgSrc="/images/folder.svg"
                imgSrc="/images/faq.gif"
                description="UI/UX Designer | Front-End Dev | March-July, 2025"
                top="0%"
                left="10%"
                rotate="2deg"
                className="w-80 md:w-[26rem]"
            />

            <CardDrag
                id="project-card-3"
                containerRef={containerRef}
                cardColor="bg-[#FFCAB5]"
                cardTitle={
                    <>
                        {' '}
                        <span className="font-serif italic">Paper </span>Keywords <span className="font-serif italic"> Validator</span>
                    </>
                }
                hCard="h-[14rem]"
                cardDescription="3-person team internship project @SatuData Universitas Airlangga. Website to manage, publish and find academic dataset directly from researches in Universitas Airlangga"
                imgSrc="/images/CALEB.png"
                description="Project Manager | ML Engineer | Aug-Dec 2024"
                top="0%"
                left="55%"
                rotate="-3deg"
                className="w-80 md:w-[26rem]"
            />
            <CardDrag
                id="project-card-2"
                hCard="h-[9rem]"
                containerRef={containerRef}
                cardColor="bg-[#D2E09A]"
                cardTitle={
                    <>
                        {' '}
                        <span className="font-serif italic">TEDX</span>UA <span className="font-serif italic">Website </span>
                    </>
                }
                cardDescription="3-person UI/UX team. Official website for ticketing, timeline and applicant form to the TedXUniversitas Airlangga 2024 event"
                imgSrc="/images/CALEB.png"
                description="UI/UX Designer | Aug-Oct 2024"
                top="40%"
                left="25%"
                rotate="0deg"
                className="w-80 md:w-[26rem]"
            />
            <CardDrag
                id="project-card-4"
                containerRef={containerRef}
                cardColor="bg-[#D9D9D9]"
                cardTitle={
                    <>
                        {' '}
                        Jatim<span className="font-serif italic">Tour</span> Web & <span className="font-serif italic">App </span>Dev
                    </>
                }
                hCard="h-[13rem]"
                cardDescription="2-person team. Website and Application to explore and promote Jawa Timur culture and event. Complete with ticketing, article writing and bookmarking"
                imgSrc="/images/CALEB.png"
                description="UI/UX Designer | Feb-Jun 2024"
                top="35%"
                left="70%"
                rotate="-1deg"
                className="w-80 md:w-[26rem]"
            />
        </div>
    );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
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
            dragMomentum={false}
        />
    );
};
