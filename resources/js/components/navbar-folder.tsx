import React from 'react';

interface NavBar {
    src1: string;
    src2: string;
    src3: string;
    src4: string;
}

export const Navbar: React.FC<NavBar> = ({ src1, src2, src3, src4 }) => {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 h-[3.6rem] w-full bg-[#fffbed] md:h-[5.5rem]">
            <div className="fixed flex h-[3.6rem] w-full flex-row justify-start gap-5 overflow-hidden md:h-[5.5rem] md:justify-start md:px-8 lg:h-[5.5rem]">
                <a
                    href="/"
                    className="relative z-20 mt-3 flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:mt-2 hover:font-bold md:mt-5 md:w-1/3"
                >
                    <h1 className="absolute top-2 left-1/8 z-10 font-creato text-black md:top-4 md:text-[1.5rem]">homepage.</h1>
                    <img className="absolute inset-0 z-0" src={src1} />
                </a>

                <a
                    href="/gallery"
                    className="relative z-10 mt-4 -ml-20 flex h-[10rem] w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-30 hover:mt-2 hover:font-bold sm:ml-20 md:mt-7 md:-ml-10 md:w-1/3"
                >
                    <h1 className="absolute top-2 left-[12.5%] z-10 font-creato text-black md:top-4 md:left-[12.5%] md:text-[1.5rem]">gallery.</h1>
                    <img className="absolute inset-0 z-0" src={src2} />
                </a>

                {/* <div className="relative right-10 z-5 mt-4 flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-30 hover:mt-2 hover:font-bold md:mt-7 md:-ml-10 md:w-1/3">
                    <a href="/messages">
                        <h1 className="absolute top-2 left-1/15 z-10 font-creato text-black md:top-4 md:left-1/8 md:text-[1.5rem]">messages.</h1>
                        <img className="absolute inset-0 z-0" src={src3} />
                    </a>
                </div> */}
                {/* <div className="relative z-0 mt-5 -ml-20 flex w-1/2 flex-col items-center justify-center transition-all duration-300 ease-in-out hover:z-30 hover:mt-2 hover:font-bold md:mt-9 md:-ml-100 md:w-1/3">
                    <h1 className="absolute top-2 left-1/8 z-10 font-creato text-black md:top-4 md:text-[1.5rem]">mailbox.</h1>
                    <img className="absolute inset-0 z-0" src={src4} />
                </div> */}
            </div>
            <div className="absolute bottom-0 left-0 z-5 w-full border-t-1 border-black"></div>
        </div>
    );
};
