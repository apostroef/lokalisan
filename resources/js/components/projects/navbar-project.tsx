import React from 'react';

interface NavBarProject {
    ProjectName: string;
    ProjectName2: string;
    ProjectName3?: string;
    ProjectName4?: string;
    link?: string;
    link1?: string;
    link2?: string;
}
export const NavBarProject: React.FC<NavBarProject> = ({ ProjectName, link, link2, ProjectName4, ProjectName2, ProjectName3, link1 }) => {
    return (
        <div className="h-auto w-auto py-8">
            <div className="fixed top-0 right-0 left-0 z-50 h-[3.6rem] w-auto overflow-x-hidden bg-[#fffbed] md:h-[5rem] lg:h-[8rem]">
                <div className="fixed flex h-[3.6rem] w-full flex-row justify-start overflow-hidden px-2 md:h-[5rem] md:justify-start md:gap-x-24 md:px-8 lg:h-[8rem] lg:gap-x-2">
                    <a
                        href="/"
                        className="group relative z-10 mt-[1rem] flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[0.7rem] hover:font-bold md:mt-[2.3rem] md:w-1/3 lg:mt-[3.6rem] lg:hover:mt-[3rem]"
                    >
                        <h1 className="absolute top-2 left-1/8 z-10 font-creato text-[0.8rem] text-black md:top-1/5 md:text-[1.3rem] lg:top-2/5 lg:text-[1.5rem]">
                            homepage.
                        </h1>
                        <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-plain.svg" />
                        <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder.svg" />
                    </a>

                    <a
                        href=""
                        className="relative right-30 z-20 mt-[-2rem] flex h-[10rem] w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:mt-[-2.1rem] hover:font-bold md:mt-[-0.7rem] md:-ml-10 md:w-1/3 md:hover:mt-[-1.5rem] lg:mt-[1.3rem] hover:lg:mt-[0.9rem] xl:mt-[2rem]"
                    >
                        <div className="w-40 md:top-1/5 md:left-[12.5%] lg:top-8">
                            <h1 className="absolute top-[3.4rem] left-[5.5%] z-10 w-30 scale-70 truncate overflow-x-hidden font-creato text-[0.8rem] text-black underline md:w-40 md:text-[1.3rem] lg:w-50 lg:text-[1.5rem] xl:w-full xl:scale-100">
                                {ProjectName}
                            </h1>
                            <img className="absolute inset-0 z-0 h-full w-full object-contain" src="/images/folder-yellow.svg" />
                        </div>
                    </a>
                    <a
                        href={link}
                        className="group absolute left-40 z-18 mt-[1.6rem] flex w-1/2 scale-70 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[0.7rem] hover:font-bold md:left-85 md:mt-[2.2rem] md:w-1/3 lg:right-70 lg:mt-[3.5rem] lg:hover:mt-[3rem] xl:left-150 xl:scale-100"
                    >
                        <div className="absolute top-2 left-1/8 z-10 w-full justify-center p-2 md:top-1/5 lg:top-2">
                            <h1 className="w-20 truncate overflow-x-hidden font-creato text-[0.8rem] text-black md:w-30 md:text-[1.3rem] lg:w-50 lg:text-[1.5rem] xl:w-60">
                                {ProjectName2}
                            </h1>
                        </div>
                        <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-plain.svg" />
                        <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder.svg" />
                    </a>
                    <a
                        href={link1}
                        className="group absolute left-60 z-10 mt-[1.75rem] flex w-1/2 scale-70 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[0.8rem] hover:font-bold md:left-120 md:mt-[2.5rem] md:w-1/3 md:scale-100 lg:right-10 lg:mt-[4.5rem] lg:hover:mt-[3.2rem] xl:left-230 xl:scale-100"
                    >
                        <h1 className="absolute top-2 left-1/8 z-10 w-20 truncate overflow-x-hidden font-creato text-[0.8rem] text-black md:top-1/5 md:w-30 md:text-[1.3rem] lg:top-2 lg:w-50 lg:text-[1.5rem]">
                            {ProjectName3}
                        </h1>
                        <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-plain.svg" />
                        <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder-orange.svg" />
                    </a>
                    <a
                        href={link2}
                        className="group absolute left-80 z-[-5] mt-[1.75rem] flex w-1/2 scale-70 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-25 hover:mt-[0.8rem] hover:font-bold md:left-150 md:mt-[2.8rem] md:w-1/3 md:scale-100 lg:right-10 lg:mt-[5rem] lg:hover:mt-[3.5rem] xl:left-280 xl:scale-100"
                    >
                        <h1 className="absolute top-2 left-1/8 z-10 w-20 truncate overflow-x-hidden font-creato text-[0.8rem] text-black md:top-1/5 md:w-30 md:text-[1.3rem] lg:top-2 lg:w-50 lg:text-[1.5rem]">
                            {ProjectName4}
                        </h1>
                        <img className="absolute inset-0 z-0 group-hover:opacity-0" src="/images/folder-plain.svg" />
                        <img className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100" src="/images/folder.svg" />
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 z-5 w-full border-t-1 border-black"></div>
            </div>
        </div>
    );
};
