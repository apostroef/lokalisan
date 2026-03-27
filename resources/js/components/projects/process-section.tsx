import React from 'react';

interface ProcessSection {
    ProcessName: React.ReactNode;
    ProcessDetails: React.ReactNode;
}

export const ProcessSection: React.FC<ProcessSection> = ({ ProcessName, ProcessDetails }) => {
    return (
        <>
            <div className="flex flex-col px-4 py-2">
                <h2 className="font-creato text-[1.5rem] text-black lg:text-[2rem]">{ProcessName}</h2>
                <div>{ProcessDetails}</div>
            </div>
        </>
    );
};
