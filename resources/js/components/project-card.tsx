import React from 'react';

interface ProjectCard {
    title: React.ReactNode;
    description: React.ReactNode;
    intro: string;
    problem: string;
    imgSrc1: string;
    imgSrc2: string;
    imgSrc3?: string;
    imgMobile: string;
    className?: string;
    icon?: string;
    link?: string;
}
export const ProjectCard: React.FC<ProjectCard> = ({
    title,
    description,
    intro,
    problem,
    imgSrc1,
    imgSrc2,
    className,
    icon,
    imgMobile,
    link,
    imgSrc3,
}) => {
    return (
        <>
            <a href={link} className="sticky top-0 flex h-auto w-full flex-col gap-x-2 rounded-xl bg-[#FFF7E2]">
                <div className="overflow-y-auto">
                    <div className="=flex h-auto w-full cursor-pointer flex-col gap-x-2 rounded-xl border-1 border-black bg-[#FFF7E2]">
                        <div className="flex-col items-start justify-start px-4 py-4 lg:p-8">
                            <div className="flex flex-row items-center justify-start gap-x-2">
                                <img className="h-[2rem]" src={icon} />
                                <h1 className="line-clamp-1 cursor-pointer font-sans text-[1.7rem] text-black transition-all duration-300 ease-in-out hover:font-bold lg:text-[2rem]">
                                    {title}
                                </h1>
                            </div>

                            <p className="line-clamp-2">{description}</p>
                        </div>
                        <hr></hr>
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
                            <div className="bg-dot-pattern h-auto w-full overflow-hidden rounded-xl md:bg-black lg:block">
                                <div className="flex scale-80 flex-row items-center justify-center gap-x-4 p-2 md:p-4 lg:scale-100">
                                    {/* Mobile image - replace this block */}
                                    <div className="block w-full md:hidden">
                                        <img className="h-auto w-full rounded-xl object-contain" loading="lazy" src={imgMobile} />
                                    </div>
                                    <div className="hidden h-[17rem] w-auto flex-shrink-0 object-contain md:block">
                                        <img className="h-full w-full rounded-xl" loading="lazy" src={imgSrc2} />
                                    </div>
                                    <div className="hidden h-[17rem] w-auto flex-shrink-0 object-contain md:block">
                                        <img className="h-full w-full rounded-xl" loading="lazy" src={imgSrc1} />
                                    </div>
                                    <div className="hidden h-[17rem] w-auto flex-shrink-0 object-contain md:block">
                                        <img className="h-full w-full rounded-xl" loading="lazy" src={imgSrc3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
};
