import React from 'react';

interface ResultGrid2 {
    title: string;
    desc: string;
    pcImage: string;
    pcDesc: string;
    phoneImage?: string;
    phoneDesc?: string;
    pcClass?: string;
}

export const ResultGrid2: React.FC<ResultGrid2> = ({
    title,
    desc,
    pcImage,
    pcDesc,
    phoneImage,
    phoneDesc,
    pcClass = 'w-[25rem] md:w-[20rem] lg:w-[40rem]',
}) => {
    return (
        <>
            <div className="p-4">
                <hr className="h-[0.05rem] w-full bg-white lg:mb-4"></hr>
                <h2 className="text-[1.5rem] font-bold !text-white">{title}</h2>
                <p className="!text-white">{desc} </p>
            </div>
            <div className="grid grid-cols-1 items-end justify-center p-4 md:grid-cols-4 md:gap-12 md:p-8">
                <div className="col-span-3 flex flex-col items-center justify-center">
                    <img src={pcImage} className={`h-full ${pcClass}`} />
                    <p className="!text-white lg:p-2">{pcDesc}</p>
                </div>{' '}
                <div className="mt-12 flex flex-col items-center justify-center md:mt-0">
                    <img src={phoneImage} className="w-auto md:h-full lg:h-[17rem]" />
                    <p className="text-center !text-white lg:p-2">{phoneDesc}</p>
                </div>
            </div>
        </>
    );
};
