export function Footer() {
    return (
        <>
            <div className="mt-[4rem] mb-[2rem]">
                <hr></hr>
                <div className="mt-4 grid w-auto grid-cols-1 items-start justify-start gap-x-2 px-4 md:grid-cols-2 md:px-24 xl:px-64">
                    <h1 className="text-[1.5rem] font-bold text-black md:text-[2rem]">Keep in Contact</h1>
                    <div className="flex flex-col items-start justify-start md:items-end">
                        <p> <a href="https://www.linkedin.com/in/ibracardine/" className="hover:font-bold">Linkedin</a></p>
                        <p> <a href="mailto:1bracardine@gmail.com?subject=Reaching%20Out%20From%20Portfolio" className="hover:font-bold">Email</a></p>
                        <p> <a href="https://www.instagram.com/cardineibra" className="hover:font-bold">Instagram</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}
