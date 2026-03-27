import React from 'react';

interface ProjectHeader {
    ProjectTitle: React.ReactNode;
    ProjectDesc: React.ReactNode;
    ProjectCover: string;
}

export const ProjectHeader: React.FC<ProjectHeader> = ({ ProjectTitle, ProjectDesc, ProjectCover }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center px-8 py-4 md:mt-4 md:px-32 lg:mt-16 lg:px-32 xl:px-64">
                <div className="flex flex-col items-start justify-center md:items-center">
                    <h1 className="font-creato text-[3rem] text-black md:text-center md:text-[4rem] lg:text-[3.5rem]">{ProjectTitle}</h1>
                    <div className="flex flex-col items-start justify-center md:items-center">{ProjectDesc}</div>
                    <img src={ProjectCover} className="h-auto w-[36rem]" />
                </div>
            </div>
        </>
    );
}
