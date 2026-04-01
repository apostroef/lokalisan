import { Navbar } from '@/components/navbar-folder';
import { XMargin } from '@/components/x-margin-line';

export default function Messages() {
    return (
        <>
            {' '}
            <XMargin />
            <div className="">
                <Navbar
                    src1="./images/folder.svg"
                    src2="./images/folder-yellow.svg"
                    src3="/images/folder-plain.svg"
                    src4="/images/folder-orange.svg"
                />
            </div>
            <div className="mt-32 grid w-full grid-cols-4 px-16 sm:px-32">
                <div className="col-span-full">
                    <form>
                        {' '}
                        {/* add max words */}
                        <label htmlFor="messages" className="block text-[2rem] text-black">
                            Messages
                        </label>
                        <div className="h-min-[4vh] mt-4 flex shrink-0 items-center rounded-md bg-light-green/40 outline-2 outline-light-green focus-within:shadow-md focus-within:shadow-primary-green/60 focus-within:outline-primary-green/60">
                            <div className="col-span-1 shrink-0 grow items-start justify-center select-none">
                                <textarea
                                    id="content"
                                    name="messages"
                                    placeholder="whatsup"
                                    className="mt-4 block w-full grow bg-transparent px-4 text-[1.2rem] text-black/40 outline-0 focus-within:text-black"
                                ></textarea>
                            </div>
                        </div>
                        <div className="col-span-full mt-4 flex items-center justify-end">
                            <button
                                type="submit"
                                className="rounded-2xl border-1 border-primary-orange/40 bg-primary-orange/70 px-8 py-2 text-[1rem] text-white focus-visible:border-primary-orange/70 focus-visible:bg-primary-orange"
                            >
                                {' '}
                                Send!
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <br></br>
            <hr></hr>
            <div className="bg-dot-pattern absolute h-screen w-full px-8 sm:px-32">
                <div className="mt-16 grid shrink-0 break-inside-avoid grid-cols-3 gap-8 space-y-4 sm:grid-cols-2">
                    <div className="grid grid-cols-4 gap-2 rounded-md border-1 border-primary-orange/20 bg-primary-yellow/80 p-4 transition-transform duration-200 hover:rotate-1 hover:bg-primary-yellow">
                        <p className="col-span-2 flex shrink-0 items-center justify-center rounded-md border-1 border-black bg-light-green/50 p-1 text-sm">
                            Date.
                        </p>
                        <p className="col-span-full flex w-full justify-items-center">
                            Analysis of the IT ticket content length, as shown in Figure 4.1, reveals that 95% of the dataset (approximately 19,906
                            samples) contains 170 words or fewer. Based on this 95th percentile, a max_length of 256 tokens was established for the
                            tokenization process. While some models suggest limits as high as 1024 tokens (Liu, 2023), selecting 256 tokens provides a
                            strategic buffer for the 170-word maximum while significantly optimizing computational efficiency and reducing memory
                            overhead during model training.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
