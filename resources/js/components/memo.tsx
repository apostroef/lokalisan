interface Memo {
    memotext: string;
    number?: string;
    className?: string;
    textClass?: string;
}

export const Memo: React.FC<Memo> = ({ memotext, number, className, textClass }) => {
    return (
        <>
            <div className={`${className} rounded-lg border-1 border-black/40 bg-[#FFF0CD] p-4 lg:h-auto lg:w-auto`}>
                <div className={`flex flex-row items-start justify-center gap-x-2 lg:gap-x-2`}>
                    <h1 className="text-[1rem] text-black lg:text-[1.5rem]">{number}</h1>
                    <p className={`${textClass} font-shine text-[1.7rem] lg:text-[2rem]`}>{memotext}</p>
                </div>
            </div>
        </>
    );
};
