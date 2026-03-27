import React from "react";

interface ProjectSection{
SectionTitle: string;
SectionBody: React.ReactNode;
}
export const ProjectSection : React.FC<ProjectSection> =({SectionTitle, SectionBody}) => {
    return (
        <>
            <div className="mt-2 h-full w-full items-start overflow-hidden lg:mt-4">
                <div className="flex h-full w-full flex-col items-start justify-start">
                    <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">{SectionTitle}</h1>
                    <div className="flex h-full w-full flex-col md:items-center">{SectionBody}</div>
                </div>
            </div>
        </>
    );
}