import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { Margin } from '@/components/projects/margin-project';
import { NavBarProject } from '@/components/projects/navbar-project';
import { DetailHeader } from '@/components/projects/project-details';
import { ProjectHeader } from '@/components/projects/project-header';
import { ResultGrid2 } from '@/components/projects/result-2-grid';
import { ResultGrid1 } from '@/components/projects/result-grid1';
import { ProjectSection } from '@/components/projects/section';
import { XMargin } from '@/components/x-margin-line';
export default function Rwfd() {
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/TedXUA"
                ProjectName2="projects/RWFD"
                ProjectName3="projects/BeyondTheBite"
                link="/rwfd"
                link1="/beyond-the-bite"
            />

            <ProjectHeader
                ProjectTitle={
                    <>
                        TedX-UA <span className="font-serif italic">Official</span> Website
                    </>
                }
                ProjectDesc={
                    <>
                        <p className="mb-4 md:text-center">
                            {' '}
                            3 person-team UI/UX under WebDevelopment division of TEDXUniversitas Airlangga. Event website designed to showcase the
                            event’s theme and ticketing information
                        </p>
                    </>
                }
                ProjectCover="images/tedx/banner.gif"
            />

            <DetailHeader
                Timeline="Aug - Oct, 2024"
                Role="UI/UX Designer"
                Scope="UI/UX, Prototyping, Design System"
                Users="Young Audience, General"
                Tools="/images/rwfd/rwfd-tools.svg"
            />
            <hr></hr>
            <Margin
                body={
                    <>
                        <ProjectSection
                            SectionTitle="Foreword"
                            SectionBody={
                                <>
                                    <p>
                                        <span className="bg-light-green font-bold">TedX Universitas Airlangga 2024</span> was hosted under the Faculty
                                        of Business. I was accepted by the Website Development Division as part of the UI/UX team, working closely
                                        with the Front-End and Back-End teams to build a functional, user-friendly event website designed to handle
                                        high visitor traffic.
                                    </p>{' '}
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <>
                                    <div className="bg-dot-pattern p-2 md:p-16 lg:p-8">
                                        <div className="oveflow-hidden flex h-auto w-full items-center justify-center object-contain">
                                            <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 p-4 md:grid-cols-3 md:gap-x-8 md:py-0 lg:grid-cols-3">
                                                <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                                    <Memo
                                                        number="1"
                                                        memotext="How to design strong branding of TedXUA?"
                                                        className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                                    />
                                                </div>
                                                <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                                    <Memo
                                                        number="2"
                                                        memotext="How to design efficient ticketing system?"
                                                        className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                                    />
                                                </div>
                                                <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                                    <Memo
                                                        number="3"
                                                        memotext="How to fit all the themes (3)?"
                                                        className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Results"
                            SectionBody={
                                <>
                                    <div className="h-full w-full overflow-hidden py-8">
                                        <div className="mt-8 rounded-2xl bg-black md:mt-2">
                                            <div className="mt-8 flex h-full w-full flex-col rounded-2xl bg-black md:mt-2">
                                                <div className="p-4">
                                                    <h2 className="text-[1.5rem] font-bold !text-white">Landing Page</h2>
                                                    <p className="!text-white">Design and showcase strong branding of TedXUA. </p>
                                                </div>
                                                <div className="grid grid-cols-1 items-end justify-center p-4 md:grid-cols-4 md:gap-12 md:p-8">
                                                    <div className="col-span-3 flex flex-col items-center justify-center">
                                                        <img
                                                            src="images/tedx/landing-page-mac.gif"
                                                            className="h-full w-[25rem] md:w-[20rem] lg:w-[30rem]"
                                                        />
                                                        <p className="!text-white lg:p-2">Landing-Page</p>
                                                    </div>{' '}
                                                    <div className="mt-12 flex flex-col items-center justify-center md:mt-0">
                                                        <img src="images/tedx/landing-phone.png" className="w-auto md:h-full lg:h-[17rem]" />
                                                        <p className="text-center !text-white lg:p-2">Landing-Page-Phone</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <ResultGrid2
                                                title="Login Page"
                                                desc="Login Page"
                                                pcImage="images/tedx/login-pc.gif"
                                                pcDesc="login-pc"
                                                phoneImage="images/tedx/login-phone-black.gif"
                                                phoneDesc="login-phone"
                                            />
                                            <ResultGrid2
                                                title="Themes"
                                                desc="Event theme informations"
                                                pcImage="images/tedx/main-theme-black.gif"
                                                pcClass="lg:w-[27rem]"
                                                pcDesc="main-theme-pc"
                                                phoneImage="images/tedx/theme-phone.png"
                                                phoneDesc="main-theme"
                                            />
                                            <ResultGrid1
                                                title="Ticketing System"
                                                desc="Event theme informations"
                                                pcImage="images/tedx/tiket-black.gif"
                                                pcClass="lg:w-[40rem]"
                                                pcDesc="ticketing-system"
                                                colSpan="lg:col-span-4"
                                            />
                                        </div>

                                        {/* <StickerPeel
                                            imageSrc="images/tedx/stiker-1.png"
                                            width={200}
                                            rotate={0}
                                            peelBackHoverPct={20}
                                            peelBackActivePct={40}
                                            peelDirection={40}
                                            shadowIntensity={0}
                                            lightingIntensity={0.01}
                                            initialPosition={{ x: 0, y: 0 }}
                                            className="top-0 right-0 overflow-hidden"
                                        />
                                        <StickerPeel
                                            imageSrc="images/tedx/apple1.png"
                                            width={180}
                                            rotate={0}
                                            peelBackHoverPct={20}
                                            peelBackActivePct={40}
                                            peelDirection={40}
                                            shadowIntensity={0}
                                            lightingIntensity={0.01}
                                            initialPosition={{ x: 0, y: 0 }}
                                            className="top-20 left-0 overflow-hidden"
                                        /> */}
                                    </div>{' '}
                                </>
                            }
                        />
                    </>
                }
            />
            <Footer />
        </>
    );
}
