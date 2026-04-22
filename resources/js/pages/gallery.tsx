import { Navbar } from '@/components/navbar-folder';
import { XMargin } from '@/components/x-margin-line';

export default function homepage() {
    const images = [
        { id: 1, imgLink: '/images/gallery/beach.jpg', alt: 'Tulungagung, 2026' },
        { id: 2, imgLink: '/images/gallery/aegis.JPG', alt: 'Opening speech as Chairwoman of Student Ambassador' },
        { id: 3, imgLink: '/images/gallery/bf.jpg', alt: '<3' },
        { id: 4, imgLink: '/images/gallery/infest.jpg', alt: 'Field Coordinator' },
        { id: 17, imgLink: '/images/gallery/friends-2.jpg', alt: 'Dreamers' },
        { id: 9, imgLink: '/images/gallery/sharing-skripsi.jpg', alt: 'Thesis Sharing to Juniors' },
        { id: 7, imgLink: '/images/gallery/intern-1.jpg', alt: '1-year Intern as Data Literacy & Strategic Planning team!' },
        { id: 8, imgLink: '/images/gallery/duta-1.jpg', alt: 'Duta FST 2024 <3' },
        { id: 6, imgLink: '/images/gallery/presentation-1.jpg', alt: 'Presenting UX researches during internship in Satu Data Unair' },
        { id: 13, imgLink: '/images/gallery/moderator-1.jpg', alt: 'Guest Lectures Moderator' },
        { id: 14, imgLink: '/images/gallery/topm-kse.jpg', alt: 'Top-M of KSE Unair 2025/2026' },
        { id: 11, imgLink: '/images/gallery/friends-1.jpg', alt: '@grup Skripsi Gacor' },
        { id: 5, imgLink: '/images/gallery/utm-visit-1.jpg', alt: 'With Dr. Iza from Biochem, Universiti Teknologi Malaysia' },
        { id: 18, imgLink: '/images/gallery/friends-0.jpg', alt: 'trio' },
        { id: 10, imgLink: '/images/gallery/presentation-2.jpg', alt: 'Invited to share college tips with class of 2025' },
        { id: 15, imgLink: '/images/gallery/utm-visit-2.jpg', alt: 'Malaysia, Johor Bahru' },
        { id: 12, imgLink: '/images/gallery/all.JPG', alt: 'Cultural night with intl friends!' },
        { id: 16, imgLink: '/images/gallery/shrine.jpg', alt: 'Wonders' },
    ];
    return (
        <>
            <XMargin />
            <div className="overflow-hidden">
                <Navbar src1="/images/folder-yellow.svg" src2="/images/folder-plain.svg" src3="/images/folder.svg" src4="/images/folder-orange.svg" />
            </div>
            <div className="bg-dot-pattern mt-[10vh] gap-4 overflow-hidden p-4 md:p-10 xl:mt-[8vh] xl:p-16">
                <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
                    {images.map((item) => (
                        <div key={item.id} className="break-inside-avoid">
                            <div className="group flex-col rounded-2xl duration-300 lg:hover:rotate-2 lg:hover:shadow-2xl">
                                <div className="relative flex justify-center opacity-100 transition-transform lg:group-hover:opacity-30 lg:group-hover:blur-[5px]">
                                    <img
                                        src={item.imgLink}
                                        alt={item.alt}
                                        className="h-auto w-full cursor-pointer rounded-lg shadow-md transition-opacity duration-300 lg:group-hover:opacity-90"
                                    />
                                </div>
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 lg:group-hover:opacity-70">
                                    <p className="w-full p-4 text-center text-[1rem] text-black md:text-[1.2rem]">{item.alt}</p>
                                </div>
                                <div className="w-full lg:hidden">
                                    <p className="text-center text-sm opacity-100">{item.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full items-center justify-center gap-2 p-4 align-middle md:p-6 xl:p-8">
                <img src="/images/seal.gif" className="flex w-[5vh] items-center justify-center" />
                <p className="text-center align-middle text-[1rem] md:text-[1.2rem] xl:text-[1.3rem]">waiting for another journey to share! :D</p>
            </div>
        </>
    );
}
