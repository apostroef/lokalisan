import React from 'react';

interface ProjectCard {
    title: React.ReactNode;
    description: React.ReactNode;
    intro: string;
    problem: string;
    imgSrc1: string;
    imgSrc2: string;
    imgSrc3?: string;
    className?: string;
    link?: string;
}
export const ProjectCard: React.FC<ProjectCard> = ({ title, description, intro, problem, imgSrc1, imgSrc2, className, link, imgSrc3 }) => {
    return (
        <>
            <a href={link} className="sticky top-0 flex h-auto w-full flex-col gap-x-2 rounded-xl bg-[#FFF7E2]">
                <div className="overflow-y-auto">
                    <div className="=flex h-auto w-full cursor-pointer flex-col gap-x-2 rounded-xl border-1 border-black bg-[#FFF7E2]">
                        <div className="flex-col items-start justify-start px-4 py-4 lg:p-8">
                            <h1 className="cursor-pointer font-sans text-[1.7rem] text-black transition-all duration-300 ease-in-out hover:font-bold lg:text-[2rem]">
                                {title}
                            </h1>
                            <p className="line-clamp-2">{description}</p>
                        </div>
                        <hr></hr>
                        <div className="mx-4 mt-4 h-auto w-auto overflow-hidden rounded-xl bg-black lg:hidden">
                            <div className="flex flex-row items-center justify-around gap-x-2 p-4 md:gap-x-4">
                                <div className="h-[6rem] w-auto flex-shrink-0 object-contain md:h-[10rem]">
                                    <img className="h-full w-full rounded-xl" src={imgSrc2} />
                                </div>
                                <div className="h-[6rem] w-auto flex-shrink-0 object-contain md:h-[10rem]">
                                    <img className="h-full w-full rounded-xl" src={imgSrc1} />
                                </div>
                                {/* <div className="h-[17rem] w-auto flex-shrink-0 object-contain">
                                    <img className="h-full w-full rounded-xl" src={imgSrc3} />
                                </div> */}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-start justify-start gap-x-4 gap-y-4 p-4 md:grid-cols-2 md:flex-row lg:gap-x-8 lg:px-8">
                            <div className="flex w-auto flex-col items-start justify-start">
                                <h1 className="text-[1rem] font-bold text-black md:text-[1.5rem]">Intro</h1>
                                <p>{intro}</p>
                            </div>
                            <div className="flex w-auto flex-col items-start justify-start">
                                <h1 className="text-[1rem] font-bold text-black md:text-[1.5rem]">Problem</h1>
                                <p>{problem}</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="hidden h-auto w-full overflow-hidden rounded-xl bg-black lg:block">
                                <div className="flex flex-row items-center justify-around gap-x-4 p-4">
                                    <div className="h-[17rem] w-auto flex-shrink-0 object-contain">
                                        <img className="h-full w-full rounded-xl" src={imgSrc2} />
                                    </div>
                                    <div className="h-[17rem] w-auto flex-shrink-0 object-contain">
                                        <img className="h-full w-full rounded-xl" src={imgSrc1} />
                                    </div>
                                    {/* <div className="h-[17rem] w-auto flex-shrink-0 object-contain">
                                    <img className="h-full w-full rounded-xl" src={imgSrc3} />
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
};
