import { AnimatedButton } from './button-hero';
import { Photos } from './photo-drag-animation';

export function AboutMe() {
    return (
        <>
            <div className="flex h-full w-full flex-row items-center justify-center gap-x-2">
                <div className="relative inset-0 z-0 mt-0 flex h-auto w-[200vh] flex-col items-center justify-center overflow-hidden lg:flex-row">
                    <div className="bg-dot-pattern relative inset-0 z-0 h-[30rem] w-full overflow-hidden rounded-xl border-1 border-black bg-[#FFF7E2] lg:h-[35rem] lg:w-[200vh]">
                        <img src="/images/08.png" className="z-0 w-[4rem] items-end px-2 py-2 lg:w-[5rem]"></img>
                        <img src="/images/tanda.png" className="absolute right-0 bottom-0 z-0 h-auto w-[4rem] px-2 py-2 lg:w-[5rem]"></img>
                        <div className="md:w-[40vh]">
                            <Photos />
                        </div>
                    </div>
                    <img
                        src="/images/spiral.svg"
                        className="absolute bottom-75 left-1/2 z-20 h-[20rem] w-auto -translate-x-1/2 -translate-y-1/2 rotate-90 md:bottom-45 md:h-[20rem] lg:h-[30rem] lg:rotate-0"
                        draggable="false"
                        alt="spiral decorator"
                    />
                    <div className="bg-dot-pattern relative inset-0 z-0 h-full w-full rounded-xl border-1 border-black bg-[#FFF7E2] lg:h-[35rem] lg:w-[200vh]">
                        <div className="px-4 py-8 selection:bg-[#D2E09A] selection:text-[#5A6E0A] md:px-12 lg:px-8">
                            <div className="flex flex-row items-center justify-start gap-x-4">
                                <h1 className="font-sans text-[1.5rem] text-black md:text-[2.5rem]">
                                    {' '}
                                    <span className="font-serif font-bold italic">Ibra</span> Cardine
                                </h1>
                                <img src="/images/star-green.svg" className="xl:h-[2rem]" />
                            </div>
                            <p className="mt-2 py-2 text-[1rem] text-black">
                                Outside the lecture halls and industry work, I'm fueled with a passion for design. I'm a firm believer that great work
                                starts with <span className="font-bold">problems and systemic planning</span>. That analytical edge, paired with a
                                genuine curiosity for how people think and behave, naturally evolved into{' '}
                                <span className="font-bold">UI/UX design</span> — from user research and wireframing to building scalable design
                                systems.
                            </p>
                            <p className="py-2 text-black">
                                Going on to final year, my interest expands into <span className="font-bold">Product Management</span>. I see design
                                as the bridge between user needs and business goals, and I'm drawn to owning that bigger picture — from{' '}
                                <span className="font-bold">defining product strategy and requirements</span> to validating solutions through
                                prototyping and iteration. It's a natural next step from designing experiences to shaping the products behind them.
                            </p>
                            <div className="flex justify-center lg:scale-60 lg:p-1 xl:w-full xl:scale-70 xl:p-4">
                                <AnimatedButton
                                    buttonTitle="Work Experiences"
                                    hoverTitle="Download CV"
                                    link="https://bit.ly/CV-Ibra"
                                    bg="bg-[#B3AB2C]"
                                    bgHover="bg-black"
                                    icon="/images/star-component.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
