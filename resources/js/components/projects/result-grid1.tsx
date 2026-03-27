import React from 'react';

interface ResultGrid1 {
    title: string;
    desc: string;
    pcImage: string;
    pcDesc: string;
    pcClass?: string;
    colSpan?: string;
}

export const ResultGrid1: React.FC<ResultGrid1> = ({
    title,
    desc,
    pcImage,
    pcDesc,
    pcClass = 'w-[25rem] md:w-[20rem] lg:w-[40rem]',
    colSpan = 'col-grid-3',
}) => {
    return (
        <>
            <div className="p-4">
                <hr className="h-[0.05rem] w-full bg-white lg:mb-4"></hr>
                <h2 className="text-[1.5rem] font-bold !text-white">{title}</h2>
                <p className="!text-white">{desc} </p>
            </div>
            <div className="grid grid-cols-1 items-end justify-center p-4 md:grid-cols-4 md:gap-12 md:p-8">
                <div className={`${colSpan} flex flex-col items-center justify-center`}>
                    <img src={pcImage} className={`h-full ${pcClass}`} />
                    <p className="!text-white lg:p-2">{pcDesc}</p>
                </div>{' '}
            </div>{' '}
        </>
    );
};
