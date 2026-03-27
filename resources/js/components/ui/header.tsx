import React from "react";

interface Header {
    title: React.ReactNode;
    description: React.ReactNode;
    icon?:string;
}

export const Header: React.FC<Header> = ({
    description,
    title,
    icon,
}) => {
    return <>
    <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row items-center justify-items-start gap-x-4">
                                    <img src={icon} className="md:h-[3rem] h-[2rem] w-auto object-center" />
                                    <h1 className="font-sans md:text-[3rem] text-[2rem] text-black">
                                        {title}
                                    </h1>
                                </div>
                                <p className="md:ml-16 ml-12 mb-4">{description}</p>
                            </div>
    </>
}