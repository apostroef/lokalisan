
export function NavigationBar () {
    return ( 
        <div className="fixed top-0 left-0 w-full h-auto z-50 bg-background backdrop-blur-sm"> 
            <div className="flex w-full items-start justify-around py-4">
                <div className="relative z-20 flex w-1/3 flex-col items-center justify-center">
                    <h1 className="font-creato absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-[2rem] text-black">homepage</h1>
                    <img className="absolute inset-0 z-0 w-1/3 h-full object-contain" src="/images/folder.svg" alt="Folder Icon" />
                </div>
                <div className="relative z-10 mt-4 -ml-8 flex w-1/3 flex-col items-center justify-center"> 
                    <h1 className="font-creato absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black md:text-[2rem]">About Us</h1>
                    <img className="absolute inset-0 z-0 w-full h-full object-contain" src="/images/folder-yellow.svg" alt="Folder Icon" />
                </div>
                <div className="relative z-0 mt-6 -ml-8 flex w-1/3 flex-col items-center justify-center"> 
                    <h1 className="font-creato absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-black md:text-[2rem]">FAQ</h1>
                    <img className="absolute inset-0 z-0 w-full h-full object-contain" src="/images/folder-orange.svg" alt="Folder Icon" />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full border-t-2 border-black z-5"></div> 

        </div>
    );
}