import React from 'react';

interface ProjectSection {
    SectionTitle: string;
    SectionBody: React.ReactNode;
}
export const ProjectSection: React.FC<ProjectSection> = ({ SectionTitle, SectionBody }) => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-4 lg:mt-12">
            <h1 className="font-creato text-[1.5rem] font-bold text-black md:col-span-1 lg:text-[2rem]">{SectionTitle}</h1>
            <div className="md:col-span-3">{SectionBody}</div>
        </div>
    );
};
