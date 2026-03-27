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
                    <div key={idx} className="group flex break-inside-avoid flex-col items-center">
                        <div className="relative w-full overflow-hidden rounded-xl border border-white/5 bg-neutral-900 shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:rotate-1">
                            <img
                                src={item.img}
                                alt={item.label}
                                className={`h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-80 ${
                                    isMobile ? 'mx-auto max-w-[140px] py-4 md:max-w-[180px]' : ''
                                }`}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-primary-orange/5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                        <p className="mt-3 text-sm font-medium text-gray-400 transition-colors group-hover:text-primary-orange">{item.label}</p>
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
