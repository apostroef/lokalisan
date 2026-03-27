import React from 'react';

interface AnimatedButton {
    buttonTitle: React.ReactNode;
    hoverTitle: React.ReactNode;
    link: string;
    bg: string;
    bgHover: string;
    icon?: string;
}

export const AnimatedButton: React.FC<AnimatedButton> = ({ buttonTitle, hoverTitle, link, bg, bgHover, icon }) => {
    return (
        <>
            <button
                onClick={() => (window.location.href = link)}
                className={`${bg} group relative h-[3rem] w-[10rem] cursor-pointer overflow-hidden rounded-[1rem] px-4 py-2 shadow-lg transition-all duration-200 ease-in-out hover:opacity-100 hover:shadow-primary-yellow hover:${bgHover} md:h-[4rem] md:w-[15rem]`}
            >
                <div className="flex items-center justify-center gap-x-2">
                    <div className="absolute inset-0 flex translate-x-0 transform items-center justify-center gap-x-2 opacity-100 transition-all duration-500 ease-in-out group-hover:translate-x-[-40%] group-hover:opacity-0">
                        <h1 className="flex justify-center text-[1rem] text-white md:text-[1.5rem] xl:text-[1.5rem]"> {buttonTitle}</h1>
                    </div>
                    <div className="absolute inset-0 flex translate-x-[40%] transform items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                        <h1 className="align-center text-[1rem] text-white md:text-[1.5rem] xl:text-[1.5rem]"> {hoverTitle} </h1>
                        <img src={icon} className="h-[2.5rem] w-[2.5rem] items-center" />
                    </div>
                </div>
            </button>
        </>
    );
};
