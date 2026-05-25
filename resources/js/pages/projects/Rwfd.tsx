import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { Margin } from '@/components/projects/margin-project';
import { NavBarProject } from '@/components/projects/navbar-project';
import { DetailHeader } from '@/components/projects/project-details';
import { ProjectHeader } from '@/components/projects/project-header';
import { ProjectSection } from '@/components/projects/section';
import { XMargin } from '@/components/x-margin-line';
export default function Rwfd() {
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/RWFD"
                ProjectName2="projects/Beyond-The-Bite"
                ProjectName3="projects/TedXUA"
                ProjectName4="projects/Priorly"
                link="/beyond-the-bite"
                link1="/tedx-ua"
                link2="/priorly"
            />
            <ProjectHeader
                ProjectTitle={
                    <>
                        Real World <span className="font-serif italic">Fake Data</span> Website
                    </>
                }
                ProjectDesc={
                    <>
                        <p className="md:text-center">3 person-team internship project @SatuData Universitas Airlangga.</p>
                        <p className="md:text-center">
                            Website to manage, publish and find academic dataset directly from researches in Universitas Airlangga
                        </p>
                    </>
                }
                ProjectCover="/images/rwfd/rwfd-mockup.png"
            />
            <DetailHeader
                Timeline="March - Aug, 2025"
                Role="Project Manager, UI/UX Designer"
                Scope="Information Gathering, UI/UX, User Research, Prototyping, Design System"
                Users="Civitas Academic"
                Tools="/images/rwfd/rwfd-tools.svg"
            />
            <hr></hr>
            <Margin
                body={
                    <>
                        {' '}
                        <ProjectSection
                            SectionTitle="Foreword"
                            SectionBody={
                                <div className="space-y-4">
                                    <p className="leading-relaxed">
                                        This three-month internship was a collaborative effort with my colleagues,{' '}
                                        <span className="font-bold text-gray-900">Arya and Hansen</span>, where I served as the team lead.
                                    </p>
                                    <p className="leading-relaxed">
                                        I held primary responsibility for{' '}
                                        <span className="font-bold underline decoration-light-green/50 decoration-4 underline-offset-4">
                                            UI/UX and Front-End Development
                                        </span>
                                        . This involved translating complex user needs into technical specifications, designing within a Design
                                        Thinking framework, and delivering responsive Figma prototypes alongside complete project documentation.
                                    </p>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <div className="space-y-6">
                                    <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                        <div className="grid h-auto w-full grid-cols-1 items-center justify-center gap-y-4 md:grid-cols-3 md:gap-x-8">
                                            <div className="relative rotate-[-5] py-2 transition-all duration-300 ease-in-out hover:rotate-1">
                                                <Memo
                                                    number="1"
                                                    memotext="What's the need & user purpose?"
                                                    className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                                />
                                            </div>
                                            <div className="relative rotate-2 py-2 transition-all duration-300 ease-in-out hover:rotate-4">
                                                <Memo
                                                    number="2"
                                                    memotext="How are we going to design this?"
                                                    className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                                />
                                            </div>
                                            <div className="relative rotate-[-3] py-2 transition-all duration-300 ease-in-out hover:rotate-0">
                                                <Memo
                                                    number="3"
                                                    memotext="How to transfer accepted ideas to functional product?"
                                                    className="h-auto w-[13rem] md:h-auto md:w-[15rem]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed text-gray-800">
                                        Our primary challenge was establishing foundation for the RWFD platform through a user-centric development
                                        process. We needed to identify core user motivations and translate those insights into a functional, intuitive
                                        interface that addressed real-world academic research needs.
                                    </p>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Process"
                            SectionBody={
                                <div className="space-y-12">
                                    <p className="leading-relaxed">
                                        We executed the project using an{' '}
                                        <span className="font-semibold underline decoration-light-green/50">Agile SDLC</span> framework. I integrated
                                        Design Thinking during the initial phases—from Information Gathering through to Design—to ensure the product
                                        remained strictly user-focused.
                                    </p>

                                    {/* Q1 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q1.</h1>
                                            <p className="font-shine text-[2.5rem]">Users & Product Purpose</p>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Research
                                                </span>
                                                I conducted extensive interviews with users and stakeholders to develop a comprehensive User Journey.
                                                Over two weeks, I synthesized these insights with observations of enterprise applications to align our
                                                features with core business objectives.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-6">
                                                <p className="max-w-2xl text-center text-[1.25rem] leading-snug font-bold text-gray-900 italic md:text-[1.5rem]">
                                                    "How might we build a website to publish and manage research datasets so Universitas Airlangga's
                                                    academic community can fully utilize them?"
                                                </p>
                                            </div>
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Analysis
                                                </span>
                                                Our findings identified four distinct user types, with University Civitas as the primary persona. I
                                                defined specific authorization levels and access controls tailored to each user group.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="images/rwfd/user-identification.png"
                                                    className="w-full rounded-2xl shadow-sm"
                                                    alt="RWFD Platform - Detailed User Persona and Authorization Matrix"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Q2 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q2.</h1>
                                            <p className="font-shine text-[2.5rem]">Feature Design</p>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Ideation
                                                </span>
                                                I led collaborative brainstorming sessions to define our application's functional characteristics. By
                                                involving our Full-Stack and Back-End engineers early, I ensured our design decisions were technically
                                                feasible and aligned with the backend architecture.
                                            </p>
                                            <div className="bg-dot-pattern flex flex-col items-center gap-y-6 rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="/images/rwfd/ideate-brainstrom.png"
                                                    className="w-full max-w-3xl rounded-xl shadow-sm"
                                                    alt="RWFD Project - Collaborative Brainstorming and Feature Ideation"
                                                />
                                                <img
                                                    src="/images/rwfd/ideate-req.png"
                                                    className="w-full max-w-3xl rounded-xl shadow-sm"
                                                    alt="RWFD Project - Technical Requirements and Functional Mapping"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Q3 Section */}
                                    <div className="space-y-4">
                                        <div className="flex w-full items-center justify-start gap-x-3">
                                            <h1 className="text-[2rem] font-bold text-black md:text-[1.2rem] xl:text-[1.5rem]">Q3.</h1>
                                            <p className="font-shine text-[2.5rem]">Prototyping</p>
                                        </div>
                                        <div className="space-y-6">
                                            <p className="leading-relaxed">
                                                <span className="mr-2 inline-block rounded-full border border-black bg-light-green px-3 py-0.5 text-sm font-bold">
                                                    Figma
                                                </span>
                                                I developed high-fidelity wireframes and interactive prototypes covering the Landing Page, Dataset
                                                Management, Notebooks, and User Profiles. Features were prioritized based on affinity diagram grouping
                                                to ensure a logical and intuitive user experience.
                                            </p>
                                            <div className="bg-dot-pattern flex justify-center rounded-2xl p-4 md:p-8">
                                                <img
                                                    src="/images/rwfd/wireframe.png"
                                                    className="w-full rounded-2xl shadow-sm"
                                                    alt="RWFD Platform - High-Fidelity Figma Wireframes and User Interface Prototypes"
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
                                <div className="space-y-6">
                                    <p className="leading-relaxed">
                                        The final prototypes include comprehensive{' '}
                                        <span className="font-semibold underline decoration-light-green/50">Mobile and Desktop</span> views, designed
                                        to ensure a seamless cross-platform experience.
                                    </p>
                                    <div className="flex w-full flex-col items-center justify-center">
                                        <div className="mt-8 flex h-full w-full flex-col rounded-2xl bg-black md:mt-2">
                                            <div className="p-6">
                                                <h2 className="text-[1.5rem] font-bold text-white">Desktop Platform Preview</h2>
                                                <p className="text-gray-400">Optimized for 1024px width for research data management.</p>
                                            </div>
                                            <div className="grid grid-cols-1 items-center justify-center gap-8 p-6 md:grid-cols-3">
                                                <div className="flex flex-col items-center justify-center space-y-2">
                                                    <img
                                                        src="/images/rwfd/landing-page-tablet.gif"
                                                        className="h-full w-[13rem] rounded-lg shadow-lg md:w-[12rem] lg:w-[15rem]"
                                                        alt="RWFD Research Data Platform - Desktop Landing Page"
                                                    />
                                                    <p className="font-medium text-white">Landing Page</p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center space-y-2">
                                                    <img
                                                        src="/images/rwfd/FAQ-tablet.gif"
                                                        className="h-full w-[13rem] rounded-lg shadow-lg md:w-[12rem] lg:w-[15rem]"
                                                        alt="RWFD Platform - Frequently Asked Questions"
                                                    />
                                                    <p className="font-medium text-white">FAQ</p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center space-y-2">
                                                    <img
                                                        src="/images/rwfd/about-us-tablet.gif"
                                                        className="h-full w-[13rem] rounded-lg shadow-lg md:w-[12rem] lg:w-[15rem]"
                                                        alt="RWFD Platform - Project About Us Page"
                                                    />
                                                    <p className="font-medium text-white">About Us</p>
                                                </div>

                                                <div className="p-4 md:col-span-3">
                                                    <hr className="mb-8 border-white opacity-20" />
                                                    <h2 className="text-[1.5rem] font-bold text-white">Mobile Interface Preview</h2>
                                                    <p className="text-gray-400">Responsive mobile interface focusing on research accessibility.</p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center space-y-2">
                                                    <img
                                                        src="/images/rwfd/notebook-page.gif"
                                                        className="h-full w-[6rem] rounded-lg shadow-lg md:w-[7rem] lg:w-[10rem]"
                                                        alt="RWFD Mobile - Research Notebooks Interface"
                                                    />
                                                    <p className="font-medium text-white">Notebooks</p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center space-y-2">
                                                    <img
                                                        src="/images/rwfd/dataset-page.gif"
                                                        className="h-full w-[6rem] rounded-lg shadow-lg md:w-[7rem] lg:w-[10rem]"
                                                        alt="RWFD Mobile - Dataset Index and Search"
                                                    />
                                                    <p className="font-medium text-white">Dataset Index</p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center space-y-2">
                                                    <img
                                                        src="/images/rwfd/dataset-detail-page.gif"
                                                        className="h-full w-[6rem] rounded-lg shadow-lg md:w-[7rem] lg:w-[10rem]"
                                                        alt="RWFD Mobile - Detailed Dataset Metadata View"
                                                    />
                                                    <p className="font-medium text-white">Dataset Details</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Afterword"
                            SectionBody={
                                <div className="space-y-4 text-gray-800">
                                    <div className="flex items-center gap-x-2">
                                        <p className="leading-relaxed">
                                            I am deeply grateful for the opportunity provided by{' '}
                                            <span className="font-bold underline decoration-light-green/50">@SatuData Universitas Airlangga</span>.
                                            This internship allowed me to refine my product design approach, effectively blending{' '}
                                            <span className="font-semibold">Design Thinking with SDLC</span>.
                                        </p>
                                        <img src="/images/star-component.png" className="h-6 w-6" alt="Star icon" />
                                    </div>
                                    <p className="leading-relaxed">
                                        It was an invaluable journey in honing my technical selection skills—aligning tech stacks with corporate
                                        standards—and applying modern technologies like React and Figma's advanced Auto Layout features to create
                                        professional-grade products.
                                    </p>
                                </div>
                            }
                        />
                    </>
                }
            />
            <div className="lg:x-32 flex flex-col items-start justify-center px-8 py-8 md:px-32 xl:px-64"></div>
            <Footer />
        </>
    );
}
