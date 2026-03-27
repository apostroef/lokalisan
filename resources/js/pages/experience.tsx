import { Navbar } from '@/components/navbar-folder';
import { Header } from '@/components/ui/header';
import { XMargin } from '@/components/x-margin-line';

export default function experience() {
    return (
        <>
            <XMargin />
            <div>
                <Navbar
                    src1="./images/folder-yellow.svg"
                    src2="./images/folder-plain.svg"
                    src3="/images/folder.svg"
                    src4="/images/folder-orange.svg"
                />
            </div>
            <div className="mt-32 h-auto w-auto px-4 md:px-24 xl:px-36">
                <Header
                    icon="/images/crab.gif"
                    title={
                        <>
                            Work<span className="font-serif italic"> experience</span>s
                        </>
                    }
                    description={<></>}
                />
                <div className="flex justify-between rounded-2xl border-1 border-black p-4">
                    <p className="text-[1.5rem] font-bold">Data Literacy & Strategic Planning</p>
                    <p>Pusat Satu Data & Kecerdasan Digital, Universitas Airlangga</p>
                </div>
            </div>
        </>
    );
}
