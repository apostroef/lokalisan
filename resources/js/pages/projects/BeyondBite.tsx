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
        { img: './images/beyondBite/main.gif', label: 'Landing Page' },
        { img: './images/beyondBite/works.gif', label: 'Landing Page' },
        { img: './images/beyondBite/product1.png', label: 'Landing Page' },
    ];
    const myMobileScreens: ShowcaseItem[] = [{ img: '/images/beyondBite/works.gif', label: 'Notebook View' }];
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/Beyond-The-Bite"
                ProjectName2="projects/RWFD"
                ProjectName3="projects/TedX"
                link="/rwfd"
                link1="/tedx-ua"
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
                                <>
                                    {' '}
                                    <p>
                                        <span className="bg-light-green font-bold">Beyond the Bite</span> was a 4-months project with 6-person-team
                                        for our <span className="bg-light-green font-bold">Project Management </span>class. I was given the role for
                                        <span className="bg-light-green font-bold"> UI/UX Designer coupled with Front-End Dev</span>. I integrated the
                                        ML Model with Django as back-end. Along the way, I changed my role into{' '}
                                        <span className="bg-light-green font-bold">Administrative Project Assistant</span> who took care of Project
                                        Standard using PM2 Method and Click Up.
                                    </p>
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Challenges"
                            SectionBody={
                                <>
                                    {' '}
                                    <div className="grid break-inside-avoid grid-cols-1 justify-items-center gap-x-4 md:grid-cols-3 xl:grid-cols-3 xl:justify-items-start">
                                        <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                            <Memo
                                                number="1"
                                                memotext="Where to start & What to do?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                            />
                                        </div>
                                        <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                            <Memo
                                                number="2"
                                                memotext="How do we make the product feel easy to use?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                            />
                                        </div>
                                    </div>
                                </>
                            }
                        />
                        <ProjectSection
                            SectionTitle="Process"
                            SectionBody={
                                <>
                                    {' '}
                                    <div className="p-4 md:p-2 lg:p-8">
                                        <div className="flex w-full items-center justify-start gap-x-2">
                                            <h1 className="text-[2rem] text-black md:text-[1.2rem] xl:text-[1.5rem]">Q1.</h1>
                                            <p className="font-shine text-[2rem]">Work Break Down & Use Case</p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">Where to start</span>. After
                                                pitching our idea to Dr. Eva as our lecturer, our PM decided to pick on the medium dificulty product
                                                among the other 3 options (Thank God). My role were described with great details (Thank you, Kemal)
                                                and assesed with the accepted Work Breakdown Structure such as listed below.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 rounded-2xl p-4 md:gap-y-4">
                                                <img src="images/beyondBite/wbs.png" className="w-full min-w-[30vh] rounded-2xl" />
                                            </div>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">What to do</span>. In a 2-person
                                                engineers team, I worked with our ML Engineer, Riry, to execute all of to do list before our product
                                                pitch to Dr. Eva. To make work easier, I designed a simple use case to describe the overall feature. I
                                                did make an SRS documentation, too, to fulfill the WBS list.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 rounded-2xl p-4 md:gap-y-4">
                                                <img src="images/beyondBite/usecase.png" className="w-full min-w-[30vh] rounded-2xl" />
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="flex w-full items-center justify-start gap-x-2">
                                            <h1 className="text-[2rem] text-black md:text-[1.2rem] xl:text-[1.5rem]">Q2.</h1>
                                            <p className="font-shine text-[2rem]">Research, Design, Code</p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green"> Design Ideas. </span>We took
                                                inspiration from website called <span className="bg-light-green font-bold">alma.com</span>, website
                                                that works in the same domain as our project. I drew the low fidelity design before pitching it to the
                                                FE(me). PM did not have much to say since our first goal was to make sure we have progress to present
                                                during the weekly class meeting.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 rounded-2xl p-8 md:gap-y-4">
                                                <img src="images/beyondBite/design.png" className="w-full rounded-2xl border-1 border-light-green" />
                                            </div>
                                            <p>
                                                <span className="rounded-2xl border-1 bg-light-green"> User Flow </span>. Following stated use case, I
                                                created user flow to make it easier during UI designing and prototyping. There were several states to
                                                define, such as error messages of image uploading and messages if our model failed to recognize the
                                                file.
                                            </p>
                                            <br></br>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 overflow-x-scroll rounded-2xl p-4 md:gap-y-4 lg:p-8">
                                                <img
                                                    src="images/beyondBite/userflow.png"
                                                    className="w-full min-w-[20rem] rounded-2xl border-1 border-light-green md:w-full"
                                                />
                                            </div>

                                            <br></br>

                                            <br></br>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">UI Design & Prototyping</span>. I
                                                built responsive prototype with auto-layout then pitched them to our PM& PMOs. Since I worked as
                                                Front-End dev, I did not make proper navigation arrow (best practice). As long as it works and the PM
                                                understood the approach, then it's all settled.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 rounded-2xl p-4 md:gap-y-4 lg:p-8">
                                                <img
                                                    src="images/beyondBite/prototype.png"
                                                    className="w-full min-w-[10rem] rounded-2xl border-1 border-light-green md:w-full"
                                                />
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
                                <>
                                    {' '}
                                    <p>
                                        Might not be my best performance since I had to take other classes with other projects during it, but I gained
                                        incredible amount of profesional insights. The class, Dr. Eva and my team had opened my curiosity regarding PM
                                        world to the point that I took all management classes in the next semester{' '}
                                        <span className="border-1 border-black bg-light-green">
                                            (Risk Managent, IT Service Management, IT Audit and Software Testing Management)
                                        </span>
                                    </p>
                                </>
                            }
                        />
                    </>
                }
            />
        </>
    );
}
