import RotatingText from './animated-rounded-text';
import { AnimatedButton } from './button-hero';
const textProp = [
    { text: 'UI/UX Designer', bgColor: 'bg-[#F4D68D]' },
    { text: 'Front-End Dev', bgColor: 'bg-[#B3AB2C]' },
    { text: 'Graphic Designer', bgColor: 'bg-[#D24C19]' },
];
export function HeroSection() {
    return (
        <>
            <div className="mt-16 px-4 py-4 selection:bg-[#D2E09A] md:mt-24 md:px-16 md:py-8 lg:mt-60 xl:mt-40">
                <div className="grid items-center justify-center md:grid-cols-2 md:gap-x-8 lg:grid-cols-[18rem_15rem_28rem] lg:justify-center lg:gap-x-8 xl:grid-cols-[20rem_15rem_30rem]">
                    <h1 className="flex items-center justify-center font-creato text-[2.5rem] text-black md:flex md:items-end md:justify-end md:text-[4rem]">
                        {' '}
                        Hi, I am{' '}
                    </h1>
                    <div className="relative left-1/8 h-[3rem] w-[10rem] flex-shrink-0 md:left-0 md:h-[3rem] md:w-[11.75rem] lg:h-[4rem] lg:w-[15rem]">
                        <img className="absolute top-[-0.5rem] right-[-0.5rem] z-10 h-[3rem] w-[4rem]" src="/images/sparkles.gif"></img>
                        <img className="absolute inset-0 z-0 h-full w-full" src="/images/ibra-c.png"></img>
                    </div>
                    <h1 className="flex items-center justify-center font-creato text-[2.5rem] font-bold text-black md:col-span-2 md:text-[4rem] lg:col-span-1 lg:justify-start">
                        {' '}
                        Ibra Cardine
                    </h1>
                </div>
                <div className="mt-[-1rem] grid grid-cols-[10rem_10rem] items-center justify-center gap-x-2 md:grid-cols-2 md:gap-x-8">
                    <h1 className="text-[3rem] text-black italic md:text-[4rem]">
                        {' '}
                        <span className="font-serif text-[2rem] italic md:flex md:items-center md:justify-end md:text-[4rem]">Passionate</span>
                    </h1>
                    <div className="flex items-center justify-start">
                        <RotatingText
                            texts={textProp}
                            intervalTime={2200}
                            className="flex h-[2.5rem] w-[12rem] items-center justify-center rounded-[1rem] px-3 text-center md:h-[4rem] md:w-[20rem]"
                            textClassName="justify-center flex text-black font-creato text-[1rem] md:text-[2rem]"
                        />
                    </div>
                </div>
                <div className="mt-[1rem] flex flex-col items-center justify-start py-2 md:mt-0 md:items-center md:justify-center md:py-6">
                    <p className="text-center">Fresh Graduate Information System student, Universitas Airlangga</p>
                    <p className="text-center">
                        Have been doing creative design & video editing for 4 to 5 years. Based in <span className="line-through">Denpasar</span>,
                        Surabaya | ID
                    </p>
                    <br></br>
                </div>

                <div className="relative inset-0 z-0 flex items-center justify-center">
                    <div className="mt-[2rem] md:mt-0">
                        <AnimatedButton
                            buttonTitle="Contact Me"
                            hoverTitle="Contact Me"
                            link="mailto:1bracardine@gmail.com"
                            bg="bg-[#D24C19]"
                            bgHover="bg-[#F4D68D]"
                            icon="./images/rabbit.gif"
                        />
                    </div>
                    <img
                        src="/images/rumput.svg"
                        className="absolute top-12 z-10 flex h-[2.2rem] items-center justify-center md:top-8 md:h-[3.2rem]"
                    />
                </div>
            </div>
        </>
    );
}
