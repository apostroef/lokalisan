import React from 'react';

interface ProcessHeader {
    number: string;
    title: string;
    details: React.ReactNode;
    className?: string;
}

export const ProcessHeader: React.FC<ProcessHeader> = ({ title, number, details, className }) => {
    return (
        <>
            <h2 className="font-creato text-[1.5rem] text-black lg:text-[2rem]">
                {number} <span className="font-shine md:text-[2.5rem]">{title}</span>
            </h2>
            <div>{details}</div>
        </>
    );
};

{/* example usage:
    <ProcessHeader
  number="01"
  title="Research"
  details={
    <>
      <p>We started by gathering user requirements and analyzing existing workflows.</p>
      <p>Then, we mapped out the key challenges to address in our solution.</p>
    </>
  }
/> */}
