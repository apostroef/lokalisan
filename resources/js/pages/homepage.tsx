import { AboutMe } from '@/components/about-me';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navbar } from '@/components/navbar-folder';
import { ProjectCard } from '@/components/project-card';
import ScrollStack, { ScrollStackItem } from '@/components/scroll-stack';
import { Header } from '@/components/ui/header';
import { XMargin } from '@/components/x-margin-line';

export default function homepage() {
    return (
        <>
            <div className="h-screen overflow-x-hidden overflow-y-scroll">
                <XMargin />
                <div>
                    <Navbar src1="/images/folder-plain.svg" src2="" src3="/images/folder.svg" src4="/images/folder-orange.svg" />
                </div>
                <div className="">
                    <div className="relative"></div>
                    <HeroSection />

                    <div className="mt-32 h-auto w-auto selection:bg-[#D2E09A]">
                        <div className="flex min-h-[40px] w-full flex-col justify-end pb-4">
                            <p className="text-center text-gray-700">
                                ( <span>Graphic Design</span> project can be accessed{' '}
                                <a
                                    href="https://www.canva.com/design/DAFaLtBWDgA/J0afjm4tN8xwRDwsTNjMIw/view?utm_content=DAFaLtBWDgA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd8f0555fb7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-black bg-light-green px-3 py-1 text-sm transition-all hover:font-bold hover:shadow-md"
                                >
                                    here
                                </a>{' '}
                                )
                            </p>
                        </div>
                        <hr></hr>

                        <div className="mt-8 h-auto w-auto px-4 md:px-24 xl:px-36">
                            <Header
                                icon="/images/seal.gif"
                                title={
                                    <>
                                        {' '}
                                        <span className="font-serif italic">About</span> Me
                                    </>
                                }
                                description="GPA 3.82/4 | Less than 1 year UI/UX research experiences | 2nd Outstanding Student 2024 | 3rd Outstanding Student 2023"
                            />
                            <AboutMe />
                        </div>
                    </div>
                    <div className="mt-24 h-auto w-auto">
                        <hr></hr>
                        <div className="mt-8 h-auto w-auto px-4 md:px-24 xl:px-36">
                            <Header
                                icon="/images/crab.gif"
                                title={
                                    <>
                                        Project & <span className="font-serif italic">Study</span> Cases
                                    </>
                                }
                                description={
                                    <>
                                        Several relevant projects. <span className="font-bold italic">Scroll for more.</span>
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <div className="bg-dot-pattern overflow-y-auto p-4 lg:p-8">
                        <ScrollStack className="h-[100vh] w-auto px-4 md:h-[120vh] md:px-24 xl:h-[100vh] xl:px-36">
                            <ScrollStackItem>
                                <ProjectCard
                                    link="/priorly"
                                    title={
                                        <>
                                            <span className="font-serif italic">Priorly:</span> Task Prioritization
                                        </>
                                    }
                                    description={
                                        <>
                                            April 2026 | <span className="font-bold">Role</span> UI/UX Designer, iOS Developer |{' '}
                                            <span className="font-bold">User</span> Procrastinator | <span className="font-bold">Scope</span>{' '}
                                            Information Gathering, User Research, UI/UX, Prototyping, iOS App Development
                                        </>
                                    }
                                    intro="In a 5-person team during Apple Foundation Program, I designed UI/UX based on user pain point and developed each app features with SwiftUI and Swift Data."
                                    problem="How to overcome procrastination through s clear & rewarding target activity?"
                                    icon="/images/foundation/apple-dev.png"
                                    imgSrc1="/images/foundation/streak-task.gif"
                                    imgSrc2="/images/foundation/next-task.gif"
                                    imgSrc3="/images/foundation/prototype.svg"
                                    imgMobile="/images/foundation/landing-mock.png"
                                />
                            </ScrollStackItem>
                            <ScrollStackItem>
                                <ProjectCard
                                    link="/rwfd"
                                    title={
                                        <>
                                            <span className="font-serif italic">RWFD: </span>Real World{' '}
                                            <span className="font-serif italic">Fake Data</span> Website
                                        </>
                                    }
                                    description={
                                        <>
                                            March - July 2025 | <span className="font-bold">Role</span> Project Manager, UI/UX Designer |{' '}
                                            <span className="font-bold">User</span> Academic Civitas | <span className="font-bold">Scope</span>{' '}
                                            Information Gathering, UI/UX, User Research, Prototyping, Front-End Dev
                                        </>
                                    }
                                    intro="In a 3-person team, I designed and coded interface following SLDC and Design Thinking framework."
                                    problem="How Might We build a website to publish and manage research datasets from Airlangga University's faculty and staff, making them accessible for use?"
                                    icon="/images/icon/satu-data.png"
                                    imgSrc1="/images/faq.gif"
                                    imgSrc2="/images/landing-page.gif"
                                    imgSrc3="/images/tags-dataset.gif"
                                    imgMobile="/images/landing-page.gif"
                                />
                            </ScrollStackItem>

                            <ScrollStackItem>
                                <ProjectCard
                                    link="/beyond-the-bite"
                                    title={
                                        <>
                                            Beyond <span className="font-serif italic">The</span> Bite
                                        </>
                                    }
                                    description="March - July 2025 | Role UI/UX, Web Dev | Users General | Scope Information Gathering, UI/UX, User Research, Prototyping, Fullstack Development"
                                    intro="In a 5-person team, I designed and coded the website development following Agile Framework."
                                    problem="How might we build a friendly interface for our Computer Vision project?"
                                    imgSrc1="/images/beyondBite/product2.png"
                                    imgSrc2="/images/beyondBite/main.gif"
                                    imgMobile="/images/beyondBite/main.gif"
                                />
                            </ScrollStackItem>
                            <ScrollStackItem>
                                <ProjectCard
                                    link="/tedx-ua"
                                    title={
                                        <>
                                            TedXUA <span className="font-serif italic">Official</span> Website
                                        </>
                                    }
                                    description={
                                        <>
                                            Aug - Oct 2024 | <span className="font-bold">Role </span>UI/UX Designer |{' '}
                                            <span className="font-bold">Users</span> General Buyer | <span className="font-bold">Scope</span> User
                                            Research, UI/UX Design, Prototyping
                                        </>
                                    }
                                    intro="I contributed in designing responsive Landing Page, Event Page and Ticketing Page along with the system flows."
                                    problem="How Migh We Build an official website that shows main theme idea and easy to navigate."
                                    icon="/images/icon/tedx.png"
                                    imgSrc2="/images/tedx/login-mobile.gif"
                                    imgSrc1="/images/tedx/banner-no-border.gif"
                                    imgMobile="/images/tedx/banner-no-border.gif"
                                />
                            </ScrollStackItem>
                        </ScrollStack>
                    </div>

                    <div className="mt-[4rem] mb-[2rem]">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
