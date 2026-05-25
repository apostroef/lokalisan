import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { Margin } from '@/components/projects/margin-project';
import { NavBarProject } from '@/components/projects/navbar-project';
import { DetailHeader } from '@/components/projects/project-details';
import { ProjectHeader } from '@/components/projects/project-header';
import ProjectShowcase, { type ShowcaseItem } from '@/components/projects/project-result';
import { ProjectSection } from '@/components/projects/section';
import { XMargin } from '@/components/x-margin-line';
export default function BeyondBite() {
    const myDesktopScreens: ShowcaseItem[] = [
        { img: './images/beyondBite/main.gif', label: 'Beyond the Bite - Full-Stack Web Application Demo' },
        { img: './images/beyondBite/works.gif', label: 'Machine Learning Model Integration Flow' },
        { img: './images/beyondBite/product1.png', label: 'Beyond the Bite - Interactive User Interface' },
    ];
    const myMobileScreens: ShowcaseItem[] = [{ img: '/images/beyondBite/works.gif', label: 'Responsive Mobile Notebook View' }];
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/Beyond-The-Bite"
                ProjectName2="projects/RWFD"
                ProjectName3="projects/Priorly"
                ProjectName4="projects/TedX"
                link="/rwfd"
                link1="/priorly"
                link2="/tedx-ua"
            />
            <ProjectHeader
                ProjectTitle={
                    <>
                        {' '}
                        <span className="font-serif italic">Beyond</span> The <span className="font-serif italic">Bite</span>
                    </>
                }
                ProjectDesc={
                    <>
                        <p className="mb-5">ML integrated website to fulfill 6-person-team credit during Project Management class.</p>
                    </>
                }
                ProjectCover="images/beyondBite/product1.gif"
            />
            <DetailHeader
                Timeline="Aug-Nov, 2025"
                Role="UI/UX, Web Dev, PM Assistant"
                Scope="PMO Standards, UX Research, UI/UX Design, Front-End"
                Users="General"
                Tools="/images/beyondBite/Bite-tech.svg"
            />
            <hr></hr>
            <Margin
                body={
                    <>
                        <ProjectSection
                            SectionTitle="Foreword"
                            SectionBody={
                                <div className="space-y-4">
                                    <p>
                                        <span className="font-bold">Beyond the Bite</span> was a four-month collaborative project involving a
                                        six-person team for our{' '}
                                        <span className="font-semibold underline decoration-light-green/50 decoration-4 underline-offset-4">
                                            Project Management
                                        </span>{' '}
                                        class.
                                    </p>
                                    <p>
                                        Initially tasked with the dual role of{' '}
                                        <span className="font-bold">UI/UX Designer and Front-End Developer</span>, I later expanded my
                                        responsibilities to serve as the{' '}
                                        <span className="font-bold underline decoration-light-green/50 decoration-4 underline-offset-4">
                                            Administrative Project Assistant
                                        </span>
                                        . In this capacity, I ensured our project adhered to PM2 standards and efficiently managed our workflow using
                                        ClickUp.
                                    </p>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <div className="grid break-inside-avoid grid-cols-1 justify-items-center gap-x-4 md:grid-cols-2 xl:grid-cols-2 xl:justify-items-start">
                                    <div className="relative rotate-[-5] py-2 transition-all duration-300 ease-in-out hover:rotate-1">
                                        <Memo
                                            number="1"
                                            memotext="Where to start & What to do?"
                                            className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                        />
                                    </div>
                                    <div className="relative rotate-[3] py-2 transition-all duration-300 ease-in-out hover:rotate-1">
                                        <Memo
                                            number="2"
                                            memotext="How do we make the product feel easy to use?"
                                            className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                        />
                                    </div>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Process"
                            SectionBody={
                                <div className="space-y-8 p-4 md:p-2 lg:p-8">
                                    {/* Q1 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q1.</h1>
                                            <p className="font-shine text-[2.5rem]">Work Breakdown & Use Case</p>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Where to start
                                                </span>
                                                After pitching our initial concept, our Project Manager selected the medium-difficulty product path.
                                                My role was defined with high granularity and assessed through a rigorous Work Breakdown Structure
                                                (WBS).
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/beyondBite/wbs.png"
                                                    className="w-full min-w-[30vh] rounded-2xl shadow-sm"
                                                    alt="Beyond the Bite - Project Management Work Breakdown Structure (WBS)"
                                                />
                                            </div>
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    What to do
                                                </span>
                                                Working in a two-person engineering team alongside our ML Engineer, Riry, I focused on translating our
                                                requirements into actionable tasks. I designed a comprehensive use case and authored the Software
                                                Requirements Specification (SRS) documentation to meet our project standards.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/beyondBite/usecase.png"
                                                    className="w-full min-w-[30vh] rounded-2xl shadow-sm"
                                                    alt="Beyond the Bite - System Use Case and Requirement Mapping"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Q2 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q2.</h1>
                                            <p className="font-shine text-[2.5rem]">Research, Design, Code</p>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Design Ideas
                                                </span>
                                                We drew inspiration from platforms like{' '}
                                                <span className="font-semibold underline decoration-light-green/50">alma.com</span>. I developed
                                                low-fidelity designs to rapidly iterate and present progress during weekly stakeholder meetings,
                                                ensuring alignment with the project's technical objectives.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/beyondBite/design.png"
                                                    className="w-full rounded-2xl border border-light-green/50 shadow-sm"
                                                    alt="Beyond the Bite - UI Design Ideation and Sketching Process"
                                                />
                                            </div>
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    User Flow
                                                </span>
                                                I created detailed user flows to streamline the UI design and prototyping phases. These flows
                                                accounted for critical edge cases, such as image upload errors and model recognition failures.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center overflow-x-auto rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/beyondBite/userflow.png"
                                                    className="min-w-[40rem] rounded-2xl border border-light-green/50 shadow-sm md:w-full"
                                                    alt="Beyond the Bite - Detailed User Journey and Application Logic Flow"
                                                />
                                            </div>
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    UI Design & Prototyping
                                                </span>
                                                I built a responsive prototype utilizing Figma's auto-layout. As both the UI/UX designer and Front-End
                                                developer, I prioritized functional navigation and clarity to ensure stakeholders could easily grasp
                                                the application's core value proposition.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="/images/beyondBite/prototype.png"
                                                    className="w-full min-w-[10rem] rounded-2xl border border-light-green/50 shadow-sm"
                                                    alt="Beyond the Bite - High-Fidelity Interactive Web Prototype"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Results"
                            SectionBody={
                                <>
                                    {' '}
                                    <div className="min-h-[200px] w-full">
                                        <ProjectShowcase
                                            desktopSection={{
                                                title: 'Dekstop View',
                                                desc: 'Designed in 1024px canvas size',
                                                items: myDesktopScreens,
                                            }}
                                        />{' '}
                                    </div>
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Afterwords"
                            SectionBody={
                                <div className="space-y-4 text-gray-800">
                                    <p className="leading-relaxed">
                                        While this project was balanced alongside a full academic load, it provided invaluable professional insights.
                                        Collaborating with Dr. Eva and my dedicated team sparked a deep interest in Project Management and its
                                        intersection with technology.
                                    </p>
                                    <p className="leading-relaxed">
                                        This experience motivated me to pursue specialized management coursework in the following semester, including{' '}
                                        <span className="font-semibold underline decoration-light-green/50 decoration-2">
                                            Risk Management, IT Service Management, IT Audit, and Software Testing Management
                                        </span>
                                        , further broadening my technical and administrative expertise.
                                    </p>
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
