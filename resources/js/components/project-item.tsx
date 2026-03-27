import React from "react";

interface ProjectItem {
    description: string;
    cardColor: string;
    cardTitle?: React.ReactNode;
    cardDescription: string;
    imgSrc: string;
    
}

export const ProjectItem: React.FC<ProjectItem> = ({ description, cardColor = 'bg-[#FFE985', imgSrc, cardTitle,  cardDescription}) => {
    return (
        <div className="group cursor-pointer">
             <div className="relative inset-0 z-0 flex flex-col items-center justify-center group-hover:rotate-1 transition-all duration-300">
            <div className="relative top-[2rem] z-10 flex">
                <img src="/images/keychain.png" className="h-auto w-[7rem]" />
            </div>
            <div className="group relative inset-0 h-auto w-auto">
                <div className="z-0 flex h-auto w-[26rem] flex-col items-center justify-center rounded-[0.5rem] border-1 border-black bg-[#FFE9B5] px-2 py-2">
                    <p>{description}</p>
                    <div className="relative my-4 h-[11rem] w-[20rem] flex-col items-center justify-center rounded-[0.5rem] bg-white px-2 py-4">
                        <div className="absolute inset-0 flex-col px-2 py-2 duration-300 ease-in-out group-hover:opacity-0">
                            <h1 className="text-center text-[1.5rem] font-semibold text-black">
                               {cardTitle}
                            </h1>
                            <p className="items-center text-center text-black">
                               {cardDescription}
                            </p>
                        </div>
                        <div className="absolute inset-0 flex opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                            <img src={imgSrc} className="w-auto rounded-[0.5rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};
