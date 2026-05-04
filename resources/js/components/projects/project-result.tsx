import React from 'react';

export interface ShowcaseItem {
    img: string;
    label: string;
}

interface ProjectShowcaseProps {
    desktopSection: ShowcaseSection;
    mobileSection?: ShowcaseSection;
}

interface ShowcaseSection {
    title: string;
    desc: string;
    items: ShowcaseItem[];
    isMobile?: boolean;
}

interface SectionProps {
    title: string;
    desc: string;
    items: ShowcaseItem[];
    isMobile?: boolean;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ desktopSection, mobileSection }) => {
const Section = ({ title, desc, items, isMobile = false }: SectionProps) => (
    <div className="h-full w-full p-6 md:p-10">
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-white md:text-3xl">{title}</h1>
            <h2 className="mt-2 text-[1rem] text-white md:text-xl">{desc}</h2>
        </div>

        <div className="columns-1 gap-4 space-y-6 md:columns-2 lg:columns-3">
            {items.map((item, idx) => (
                <div key={idx} className="flex break-inside-avoid flex-col items-center gap-2">
                    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl border bg-white/5">
                        <img
                            src={item.img}
                            alt={item.label}
                            className={`h-auto w-full object-contain ${
                                isMobile
                                    ? 'max-w-[120px] py-4 md:max-w-[160px] lg:max-w-[180px]'
                                    : 'max-h-[280px] max-w-full md:max-h-[320px] lg:max-h-[360px]'
                            } `}
                        />
                    </div>
                    <p className="w-full rounded-2xl border border-white bg-light-green px-2 py-1 text-center text-sm text-white">{item.label}</p>
                </div>
            ))}
        </div>
    </div>
);

    return (
        <div className="mx-auto w-full max-w-6xl px-4 md:py-8">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl">
                <Section {...desktopSection} />

                {mobileSection && (
                    <>
                        <div className="px-10">
                            <hr className="border-white/5" />
                        </div>
                        <Section {...mobileSection} />
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectShowcase;
