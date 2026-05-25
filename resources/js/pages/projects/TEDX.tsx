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
                ProjectName4="projects/Priorly"
                link="/rwfd"
                link1="/beyond-the-bite"
                link2="/priorly"
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
                                <div className="space-y-4">
                                    <p className="leading-relaxed">
                                        <span className="font-bold">TEDx Universitas Airlangga 2024</span> was hosted by the Faculty of Economics and Business. 
                                        I was selected for the Website Development Division's UI/UX team.
                                    </p>
                                    <p className="leading-relaxed">
                                        Working closely with the Front-End and Back-End engineering teams, my focus was on building a <span className="font-bold underline decoration-light-green/50 decoration-4 underline-offset-4">functional, user-friendly event platform</span> 
                                        capable of handling high visitor traffic while maintaining the prestigious TEDx brand identity.
                                    </p>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                    <div className="grid h-auto w-full grid-cols-1 items-center justify-center gap-y-4 md:grid-cols-3 md:gap-x-8">
                                        <div className="relative rotate-[-5] py-2 transition-all duration-300 ease-in-out hover:rotate-1">
                                            <Memo
                                                number="1"
                                                memotext="How to design strong branding for TEDxUA?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                            />
                                        </div>
                                        <div className="relative rotate-2 py-2 transition-all duration-300 ease-in-out hover:rotate-4">
                                            <Memo
                                                number="2"
                                                memotext="How to design an efficient ticketing system?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                            />
                                        </div>
                                        <div className="relative rotate-[-3] py-2 transition-all duration-300 ease-in-out hover:rotate-0">
                                            <Memo
                                                number="3"
                                                memotext="How to integrate multiple event themes (3) cohesively?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Results"
                            SectionBody={
                                <div className="space-y-8">
                                    <p className="leading-relaxed">
                                        The final project delivered a comprehensive web platform featuring a dynamic landing page, a secure ticketing 
                                        system, and dedicated thematic sections, all designed to meet TEDx's global standards.
                                    </p>
                                    <div className="h-full w-full overflow-hidden">
                                        <div className="rounded-2xl bg-black">
                                            <div className="flex h-full w-full flex-col rounded-2xl bg-black">
                                                <div className="p-6">
                                                    <h2 className="text-[1.5rem] font-bold text-white">Landing Page</h2>
                                                    <p className="text-gray-400">Strong brand showcase with responsive design elements.</p>
                                                </div>
                                                <div className="grid grid-cols-1 items-end justify-center p-6 md:grid-cols-4 md:gap-12 md:p-12">
                                                    <div className="col-span-3 flex flex-col items-center justify-center space-y-4">
                                                        <img
                                                            src="/images/tedx/landing-page-mac.gif"
                                                            className="h-full w-full max-w-[30rem] rounded-lg shadow-2xl"
                                                            alt="TEDx Universitas Airlangga Official Website - Desktop Landing Page"
                                                        />
                                                        <p className="text-white font-medium">Desktop View</p>
                                                    </div>
                                                    <div className="mt-12 flex flex-col items-center justify-center space-y-4 md:mt-0">
                                                        <img src="images/tedx/landing-phone.png" className="w-auto h-auto max-h-[17rem] rounded-lg shadow-2xl" alt="TEDxUA Official Website - Responsive Mobile Landing Page" />
                                                        <p className="text-center text-white font-medium">Mobile View</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-t border-white/10">
                                                <ResultGrid2
                                                    title="Login Experience"
                                                    desc="Seamless authentication flow for attendees."
                                                    pcImage="/images/tedx/login-pc.gif"
                                                    pcDesc="TEDxUA Website - Secure Desktop Login Interface"
                                                    phoneImage="images/tedx/login-phone-black.gif"
                                                    phoneDesc="TEDxUA Website - Secure Mobile Login Experience"
                                                />
                                            </div>
                                            <div className="border-t border-white/10">
                                                <ResultGrid2
                                                    title="Event Themes"
                                                    desc="Informative sections detailing the event's core themes."
                                                    pcImage="/images/tedx/main-theme-black.gif"
                                                    pcClass="lg:w-[27rem]"
                                                    pcDesc="TEDxUA Website - Interactive Event Themes Desktop Showcase"
                                                    phoneImage="images/tedx/theme-phone.png"
                                                    phoneDesc="TEDxUA Website - Event Themes Mobile View"
                                                />
                                            </div>
                                            <div className="border-t border-white/10">
                                                <ResultGrid1
                                                    title="Ticketing System"
                                                    desc="Integrated ticketing platform for event registration."
                                                    pcImage="/images/tedx/tiket-black.gif"
                                                    pcClass="lg:w-[40rem]"
                                                    pcDesc="TEDxUA Official Website - Integrated Ticketing and Registration System"
                                                    colSpan="lg:col-span-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    </>
                }
            />
            <Footer />
        </>
    );
}
