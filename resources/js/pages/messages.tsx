import { Navbar } from '@/components/navbar-folder';
import { XMargin } from '@/components/x-margin-line';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface MessageProps {
    id: number;
    content: string;
    created_at: string;
}

export default function Messages() {
    const { messages = [] } = usePage<any>().props;
    const { data, setData, post, processing, reset, errors, recentlySuccessful } = useForm({
        content: '',
    });

    const wordCount = data.content.trim().split(/\s+/).filter(Boolean).length;
    const isOverLimit = wordCount > 300;

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (isOverLimit || wordCount === 0) return;

        post('/messages', {
            onSuccess: () => reset('content'),
        });
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <>
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
                    <form onSubmit={submit}>
                        <label htmlFor="content" className="block text-[2rem] text-black">
                            Messages
                        </label>

                        <div
                            className={`h-min-[4vh] mt-4 flex shrink-0 items-center rounded-md outline-2 focus-within:shadow-md ${isOverLimit ? 'bg-red-100 outline-red-500 focus-within:shadow-red-500/60' : 'bg-light-green/40 outline-light-green focus-within:shadow-primary-green/60 focus-within:outline-primary-green/60'}`}
                        >
                            <div className="col-span-1 shrink-0 grow items-start justify-center select-none">
                                <textarea
                                    id="content"
                                    name="content"
                                    value={data.content}
                                    onChange={(e) => setData('content', e.target.value)}
                                    placeholder="Drop an anonymous message here..."
                                    className="mt-4 block min-h-[150px] w-full grow bg-transparent px-4 text-[1.2rem] text-black/40 outline-0 focus-within:text-black"
                                ></textarea>
                            </div>
                        </div>

                        {/* Word Counter & Error Messages */}
                        <div className="mt-2 flex items-center justify-between">
                            <span className={`text-sm ${isOverLimit ? 'font-bold text-red-500' : 'text-gray-500'}`}>{wordCount} / 300 words</span>
                            {errors.content && <span className="text-sm text-red-500">{errors.content}</span>}
                            {recentlySuccessful && <span className="text-sm font-bold text-green-600">Message sent for approval!</span>}
                        </div>

                        <div className="col-span-full mt-4 flex items-center justify-end">
                            <button
                                type="submit"
                                disabled={processing || isOverLimit || wordCount === 0}
                                className="rounded-2xl border-1 border-primary-orange/40 bg-primary-orange/70 px-8 py-2 text-[1rem] text-white transition-all focus-visible:border-primary-orange/70 focus-visible:bg-primary-orange disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing ? 'Sending...' : 'Send!'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <br />
            <hr />

            {/* Approved Messages Display */}
            <div className="bg-dot-pattern absolute h-screen w-full px-8 sm:px-32">
                <div className="mt-16 grid shrink-0 break-inside-avoid grid-cols-3 gap-8 space-y-4 sm:grid-cols-2">
                    {messages.length === 0 ? (
                        <p className="col-span-full mt-10 text-center text-gray-500 italic">No messages yet. Be the first!</p>
                    ) : (
                        messages.map((msg: MessageProps) => (
                            <div
                                key={msg.id}
                                className="grid grid-cols-4 gap-2 rounded-md border-1 border-primary-orange/20 bg-primary-yellow/80 p-4 transition-transform duration-200 hover:rotate-1 hover:bg-primary-yellow"
                            >
                                <p className="col-span-2 flex shrink-0 items-center justify-center rounded-md border-1 border-black bg-light-green/50 p-1 font-mono text-sm">
                                    {formatDate(msg.created_at)}
                                </p>
                                <p className="col-span-full mt-2 flex w-full justify-items-start whitespace-pre-wrap text-black">{msg.content}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}