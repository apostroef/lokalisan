import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { Margin } from '@/components/projects/margin-project';
import { NavBarProject } from '@/components/projects/navbar-project';
import { DetailHeader } from '@/components/projects/project-details';
import { ProjectHeader } from '@/components/projects/project-header';
import ProjectShowcase, { type ShowcaseItem } from '@/components/projects/project-result';
import { ProjectSection } from '@/components/projects/section';
import { XMargin } from '@/components/x-margin-line';

export default function Priorly() {
    const myDesktopScreens: ShowcaseItem[] = [
        { img: './images/foundation/prototype.svg', label: 'Priorly Interactive iOS Prototype' },
        { img: './images/foundation/landing-mock.png', label: 'Priorly App Landing Page Mockup' },
    ];
    const myMobileScreens: ShowcaseItem[] = [
        { img: '/images/foundation/adding-task.gif', label: 'Priorly - Adding a New Task Demo' },
        { img: '/images/foundation/streak-task.gif', label: 'Priorly - Task Streak and Motivation' },
        { img: './images/foundation/next-task.gif', label: 'Priorly - Smart Task Prioritization' },
    ];
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/Priorly"
                ProjectName2="projects/Beyond-The-Bite"
                ProjectName3="projects/TedXUA"
                ProjectName4="projects/RWFD"
                link="/beyond-the-bite"
                link1="/tedx-ua"
                link2="/rwfd"
            />
            <ProjectHeader
                ProjectTitle={
                    <>
                        {' '}
                        <span className="font-serif italic">Priorly:</span> Task Prioritization
                    </>
                }
                ProjectDesc={
                    <>
                        <p className="mb-5 md:text-center">
                            iOS App that overcome procrastination through clear & rewarding task setting. By using theories on human motivation, we
                            designed the app to make users feel more in control and capable of finishing their goals.
                        </p>
                    </>
                }
                ProjectCover="images/foundation/banner.png"
            />
            <DetailHeader
                Timeline="April, 2026"
                Role="iOS UI/UX Designer, iOS Developer"
                Scope=" Information Gathering, User Research, UI/UX, Prototyping, App Development"
                Users="Procrastinator"
                Tools="/images/foundation/tools.png"
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
                                        <span className="font-bold">Priorly</span> is the result of an intense one-month Apple Foundation Program at
                                        the Apple Developer Academy @ UC, Surabaya. Our five-person team combined diverse backgrounds, featuring three
                                        medical students <span className="text-gray-600">(Bilal, Hendrik, Paulinne)</span> and two engineers{' '}
                                        <span className="text-gray-600">(Edward and myself)</span>.
                                    </p>
                                    <p>
                                        I served as the{' '}
                                        <span className="font-bold underline decoration-light-green decoration-4 underline-offset-4">
                                            lead iOS Developer & UI/UX Designer
                                        </span>
                                        , ensuring our final product directly addressed the core challenge with a robust technical and design-driven
                                        response.
                                    </p>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <div className="grid break-inside-avoid grid-cols-1 justify-items-center gap-x-4 xl:justify-items-start">
                                    <div className="relative rotate-[-5] py-2 transition-all duration-300 ease-in-out hover:rotate-1">
                                        <Memo
                                            number="🤔"
                                            memotext="How do we overcome procrastination with an iOS App?"
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
                                            <p className="font-shine text-[2.5rem]">Identify & Iteration</p>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Identify
                                                </span>
                                                During this phase, we conducted academic research to identify the most effective response to our
                                                challenge. I focused on determining which{' '}
                                                <span className="font-semibold underline decoration-light-green/50 decoration-2">
                                                    app features could fulfill Basic Psychological Needs (autonomy, competence, relatedness)
                                                </span>
                                                . My primary source was the research paper:{' '}
                                                <a
                                                    href="https://www.sciencedirect.com/science/article/pii/S1071581920300513?via%3Dihub#bib0159"
                                                    className="font-bold text-black underline transition-colors hover:text-green-800"
                                                >
                                                    "Apps That Motivate: a Taxonomy of App Features Based on Self-Determination Theory."
                                                </a>
                                            </p>

                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Iteration
                                                </span>
                                                After team discussions and iterating on several core concepts, we finalized the features that would
                                                form the backbone of our application.
                                            </p>

                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/foundation/miro.png"
                                                    className="rounded-2xl shadow-sm lg:max-w-[60vh]"
                                                    loading="lazy"
                                                    alt="Feature iteration board"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Q2 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q2.</h1>
                                            <p className="font-shine text-[2.5rem]">UX Research & UI Design</p>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Wireframe
                                                </span>
                                                We began with low-fidelity wireframes to visualize the core user journey before moving into detailed
                                                designs.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/foundation/wireframe.png"
                                                    className="max-w-[30vh] rounded-2xl border border-light-green/50 shadow-sm lg:max-w-[60vh]"
                                                    loading="lazy"
                                                    alt="Application wireframes"
                                                />
                                            </div>
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    UX Research
                                                </span>
                                                We prioritized a user interface that{' '}
                                                <span className="font-semibold underline decoration-light-green/50 decoration-2">
                                                    avoids overwhelming the user, follows Apple's Human Interface Guidelines (HIG), and integrates
                                                    SDT-informed persuasive features.
                                                </span>{' '}
                                                Several key decision was made.
                                                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                                                    <p>1. Positioning the task prioritization container at the top of the view to maintain focus.</p>
                                                    <p>
                                                        2. Adding streak on left-top corner following common practice in TikTok and Duolingo to invite
                                                        user for coming back
                                                    </p>
                                                    <p>
                                                        3. Separating task based on Eisenhower folder instead of task list that might increase
                                                        overwhelming
                                                    </p>
                                                </div>
                                            </p>
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    UI Design
                                                </span>
                                                Learning Sketch was a swift two-day process, allowing me to build a high-fidelity prototype. You can
                                                view the{' '}
                                                <a
                                                    href="https://bit.ly/Priorly-Prototype"
                                                    className="font-bold text-black underline transition-colors hover:text-green-800"
                                                >
                                                    working prototype here.
                                                </a>
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/foundation/sketch.png"
                                                    className="max-w-[30vh] rounded-2xl border border-light-green/50 shadow-sm lg:max-w-[60vh]"
                                                    loading="lazy"
                                                    alt="Sketch design workspace"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Q3 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q3.</h1>
                                            <p className="font-shine text-[2.5rem]">SwiftUI Coding & SwiftData</p>
                                        </div>
                                        <div className="space-y-4">
                                            <p>
                                                <a
                                                    href="https://github.com/apostroef/Priorly"
                                                    className="inline-flex items-center gap-x-2 rounded-full border border-black bg-black px-4 py-2 text-sm font-bold text-white transition-all hover:bg-gray-800"
                                                >
                                                    View GitHub Repository
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        />
                                                    </svg>
                                                </a>
                                            </p>
                                            <p className="leading-relaxed">
                                                I developed Priorly to address choice paralysis through automated, logic-driven prioritization.
                                                Technically, this involved building a robust persistence layer using{' '}
                                                <span className="font-semibold underline decoration-light-green/50 decoration-2">
                                                    SwiftData to manage complex task objects and their RICE calculations
                                                </span>
                                                . My learning journey involved YouTube tutorials, Apple's official documentation, and leveraging AI
                                                tools (Claude, Gemini) for efficient debugging.
                                            </p>
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
                                                title: 'App View',
                                                desc: 'Iphone 17 pro',
                                                items: myMobileScreens,
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
                                        Our process ensured that every design choice was grounded in research, collaboration, and continuous
                                        iteration. While the current solution effectively maintains user motivation through rewarding task activities,
                                        we identified the <span className="font-semibold">"Relatedness"</span> aspect of Basic Psychological Needs as
                                        a key area for future development.
                                    </p>
                                    <p className="leading-relaxed">Special thanks to all of mentors from Apple Academy @UC and my team partner.</p>
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
