import { Footer } from '@/components/footer';
import { Memo } from '@/components/memo';
import { Margin } from '@/components/projects/margin-project';
import { NavBarProject } from '@/components/projects/navbar-project';
import { DetailHeader } from '@/components/projects/project-details';
import { ProjectHeader } from '@/components/projects/project-header';
import { ProjectSection } from '@/components/projects/section';
import { SectionTitle } from '@/components/projects/section-title';
import { XMargin } from '@/components/x-margin-line';
export default function Rwfd() {
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/RWFD"
                ProjectName2="projects/Beyond-The-Bite"
                ProjectName3="projects/TedXUA"
                link="/beyond-the-bite"
                link1="/tedx-ua"
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
                                <>
                                    <p>
                                        The internship was held for <span className="font-bold">3 months </span>with my friends,{' '}
                                        <span className="font-bold">Arya & Hansen</span> with me as the team leader. I was given the responsibility
                                        for <span className="bg-light-green font-bold">UI/UX and Front-End development</span> that includes
                                        translating user needs into technical specifications, designing products using the Design Thinking framework,
                                        creating responsive UI prototypes in Figma, and managing complete project documentation.
                                    </p>{' '}
                                </>
                            }
                        />
                        <div className="mt-8 flex flex-col items-start justify-start">
                            <SectionTitle title="Challenges" />
                            <div className="bg-dot-pattern p-2 md:p-16 lg:p-8">
                                <div className="oveflow-hidden grid h-auto w-full grid-cols-1 items-center justify-center md:grid-cols-3 md:gap-x-8 md:py-0 lg:grid-cols-3">
                                    <div className="w-full items-center justify-center gap-x-4 p-4">
                                        <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                            <Memo
                                                number="1"
                                                memotext="What's the need & user purpose?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                            />
                                        </div>
                                        <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                            <Memo
                                                number="2"
                                                memotext="How are we going to design this?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem]"
                                            />
                                        </div>
                                        <div className="relative rotate-2 py-2 transition-all duration-299 ease-in-out hover:rotate-4">
                                            <Memo
                                                number="3"
                                                memotext="How to transfer accepted ideas to functional product?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[15rem]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p className="mt-2 md:mt-0">
                        My main challenge was to{' '}
                        <span className="bg-light-green font-bold"> lay the foundation for the RWFD website by following a user-centric </span>{' '}
                        development process. I had to identify the core purpose and needs of our target users, then translate those insights into a
                        practical product design that addressed their specific problems. The final outcome was to create an{' '}
                        <span className="bg-light-green font-bold">functional and user-friendly interface</span> that not only looked good, but also
                        directly reflected the needs and feedback gathered during the initial research phase.
                    </p> */}
                        </div>
                        <div className="mt-8 flex flex-col items-start justify-start">
                            <ProjectSection
                                SectionTitle="Process"
                                SectionBody={
                                    <>
                                        <p>
                                            We ran the project using the <span className="bg-light-green font-bold">Agile SDLC</span> framework. I
                                            used Design Thinking for the first{' '}
                                            <span className="bg-light-green font-bold">three phases (Information Gathering → Design)</span> to keep
                                            everything user-focused. Since we were short on time the Testing & Maintenance phase didn’t make it into
                                            this round.
                                        </p>{' '}
                                    </>
                                }
                            />
                            <div className="flex flex-col px-4 py-2">
                                <h2 className="font-creato text-[1.5rem] text-black lg:text-[2rem]">
                                    Q1. <span className="font-shine text-[2rem] md:text-[2.5rem]">Users & Product Purpose</span>
                                </h2>
                                <p>
                                    In the first phase of Design Thinking, I conducted user and stakeholder interviews to build the{' '}
                                    <span className="bg-light-green font-bold">User Journey and Use Cases</span>. Over two weeks, I combined
                                    interviews with enterprise app observations to better understand the business objectives
                                </p>
                                <br></br>
                                <p>
                                    To ensure a direct and correct understanding towards software purpose, I concluded the finding into HMW formula:
                                </p>
                                <div className="bg-dot-pattern py-4 md:py-8">
                                    <p className="text-center text-[1.5rem] font-bold">
                                        "How might we build a website to publish and manage research datasets from Universitas Airlangga’s academic
                                        community so they can be utilized?"
                                    </p>
                                </div>
                                <br></br>
                                <p>
                                    {' '}
                                    The information gathered resulting in{' '}
                                    <span className="bg-light-green font-bold">4 type of users, with Univeristy Civitas becomes the main user</span>.
                                    The user defined will have different authorization and access of the website.
                                </p>
                                <br></br>
                                <div className="bg-dot-pattern rounded-2xl">
                                    <img src="images/rwfd/user-identification.png" className="" />
                                </div>
                            </div>

                            <div className="flex flex-col px-4 py-2">
                                <h2 className="font-creato text-[1.5rem] text-black lg:text-[2rem]">
                                    Q2. <span className="font-shine text-[2rem] md:text-[2.5rem]">Feature Design</span>
                                </h2>
                                <p>
                                    To understand the feature of website functions, I asked my team to{' '}
                                    <span className="bg-light-green font-bold">brainstorm and discuss</span> the possible characteristic that need to
                                    be fulfiled by design. The brainstorm includes the opinion from our Full-Stack and Back-End engineer that enrich
                                    my <span className="bg-light-green font-bold">design decision to align with technical need</span>.{' '}
                                </p>
                                <div className="bg-dot-pattern grid h-auto w-auto grid-cols-1 items-start justify-start p-4">
                                    <img src="/images/rwfd/ideate-brainstrom.png" />
                                    <img src="/images/rwfd/ideate-req.png" />
                                </div>
                            </div>
                            <div className="flex flex-col px-4 py-2">
                                <h2 className="font-creato text-[1.5rem] text-black lg:text-[2rem]">
                                    Q3. <span className="font-shine text-[2rem] md:text-[2.5rem]">Prototyping</span>
                                </h2>
                                <p>
                                    Figma is used as a tool to help Prototyping and Wireframing. The prototype includes GUI for{' '}
                                    <span className="bg-light-green font-bold">
                                        Landing Page, Dataset, Notebook, Profile, FAQ, Profile and About Us
                                    </span>{' '}
                                    Page. The function is choosen based on the accepted affinity diagram groupping.
                                </p>
                                <div className="bg-dot-pattern grid h-auto w-auto grid-cols-1 items-start justify-start p-4">
                                    <img src="/images/rwfd/wireframe.png" className="relative z-0 rounded-2xl" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-col items-start justify-start">
                            <h1 className="font-creato text-[1.5rem] font-bold text-black lg:text-[2rem]">Results</h1>
                            <p>
                                Includes design prototype in <span className="bg-light-green font-bold">Mobile and Dekstop </span>view of based on the
                                Prototyping result.
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center md:py-4">
                            <div className="mt-8 flex h-full w-full flex-col rounded-2xl bg-black md:mt-2">
                                <div className="p-4">
                                    <h2 className="text-[1.5rem] font-bold !text-white">Dekstop View</h2>
                                    <p className="!text-white">Designed in 1024 dimension for friendly user interaction in mobile. </p>
                                </div>
                                <div className="grid grid-cols-1 items-center justify-center gap-4 p-4 md:grid-cols-3">
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="images/rwfd/landing-page-tablet.gif" className="h-full w-[13rem] md:w-[12rem] lg:w-[15rem]" />
                                        <p className="!text-white lg:p-2">Landing-Page</p>
                                    </div>

                                    <div className="flex flex-col items-center justify-center">
                                        <img src="images/rwfd/FAQ-tablet.gif" className="h-full w-[13rem] md:w-[12rem] lg:w-[15rem]" />
                                        <p className="!text-white lg:p-2">FAQ</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="images/rwfd/about-us-tablet.gif" className="h-full w-[13rem] md:w-[12rem] lg:w-[15rem]" />
                                        <p className="!text-white lg:p-2">About-Us-Page</p>
                                    </div>

                                    <div className="p-4 md:col-span-3">
                                        <hr className="mb-8 h-[0.05rem] bg-white"></hr>
                                        <h2 className="text-[1.5rem] font-bold !text-white">Mobile View</h2>
                                        <p className="!text-white">Designed in 1024 dimension for friendly user interaction in mobile. </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="images/rwfd/notebook-page.gif" className="h-full w-[5rem] md:w-[7rem] lg:w-[10rem]" />
                                        <p className="!text-white lg:p-2">Notebook-Page</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="images/rwfd/dataset-page.gif" className="h-full w-[5rem] md:w-[7rem] lg:w-[10rem]" />
                                        <p className="!text-white lg:p-2">Dataset-Page</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <img src="images/rwfd/dataset-detail-page.gif" className="h-full w-[5rem] md:w-[7rem] lg:w-[10rem]" />
                                        <p className="!text-white lg:p-2">Dataset-Details</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-center justify-center md:py-4"></div>
                        <div className="mt-4 flex flex-col items-start justify-start md:mt-16">
                            <div className="flex flex-row items-center justify-center gap-x-2">
                                <h1 className="font-creato text-[1.5rem] font-bold text-black">Afterword</h1>
                                <img src="images/star-component.png" className="h-full w-[1.5rem]" />
                            </div>
                            <p className="">
                                I deeply appreciate the opportunity provided by{' '}
                                <span className="bg-light-green font-bold">@SatuData Universitas Airlangga</span>. I learned a lot of valuable
                                lessons, getting hands-on experience in a product design approach that blends{' '}
                                <span className="bg-light-green font-bold">Design Thinking with SDLC</span>. It was an incredible journey of honing my
                                skills in selecting the right tech stack based on company standards and applying modern technologies like React
                                libraries and responsive design principles with Figma's Auto Layout.
                            </p>
                        </div>
                    </>
                }
            />
            <div className="lg:x-32 flex flex-col items-start justify-center px-8 py-8 md:px-32 xl:px-64"></div>
            <Footer />
        </>
    );
}
