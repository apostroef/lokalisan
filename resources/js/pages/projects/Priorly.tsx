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
        { img: './images/foundation/prototype.svg', label: 'User Interface' },
        { img: './images/foundation/landing-mock.png', label: 'Mock Up' },
    ];
    const myMobileScreens: ShowcaseItem[] = [
        { img: '/images/foundation/adding-task.gif', label: 'Add Your Task!' },
        { img: '/images/foundation/streak-task.gif', label: 'Task Streak' },
        { img: './images/foundation/next-task.gif', label: 'Next Prioritized Task' },
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
                                <>
                                    {' '}
                                    <p>
                                        <span className="bg-light-green font-bold">🎐Priorly</span> is a product from a 1-month intense Apple
                                        Foundation Program under the Apple Developer Academy @ UC, Surabaya. The 5-person-team consists of 3 medical
                                        students (Universitas Ciputra) <span className="font-bold">(Bilal, Hendrik, Paulinne)</span> and 2 engineers{' '}
                                        <span className="font-bold">(me & Edward)</span>. I took the role as{' '}
                                        <span className="bg-light-green font-bold">lead iOS Developer & UI/UX Designer</span>, responsible to make
                                        sure our end-product directly fulfill our challenge response.
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
                                                memotext="How do we overcome procrastination with an iOS App?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                            />
                                        </div>
                                        <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                            <Memo
                                                number="2"
                                                memotext="How to support the app through user interface & experience?"
                                                className="h-auto w-[13rem] md:h-auto md:w-[10rem] lg:h-auto lg:w-auto"
                                            />
                                        </div>
                                        <div className="relative rotate-[-5] py-2 transition-all duration-299 ease-in-out hover:rotate-1">
                                            <Memo
                                                number="3"
                                                memotext="How do I implement SwiftUI & SwiftData best practice?"
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
                                            <p className="font-shine text-[2rem]">Identify & Iteration</p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">Identify</span>. During this phase,
                                                we were obligated to do academic research to find correct respond to the challenge. I was tasked to
                                                identify{' '}
                                                <span className="bg-light-green">
                                                    what type of feature we can integrate to the application in order to fulfill Basic Psychology
                                                    Needs (autonomy, competence, relatedness)
                                                </span>
                                                . This research led me to read{' '}
                                                <a href="https://www.sciencedirect.com/science/article/pii/S1071581920300513?via%3Dihub#bib0159">
                                                    <span className="font-bold">
                                                        Apps That Motivate: a Taxonomy of App Features Based on Self-Determination Theory
                                                    </span>
                                                </a>{' '}
                                                as my main sources.
                                            </p>
                                            <br></br>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">Iteration</span>. After team
                                                discussion and iteration where we need to respond several crucial yet unanswered question, we decided
                                                our main features.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 rounded-2xl p-4 md:gap-y-4">
                                                <img src="images/foundation/miro.png" className="rounded-2xl lg:max-w-[60vh]" loading="lazy" />
                                            </div>
                                        </div>
                                        <br></br>
                                        {/* second part */}

                                        <div className="flex w-full items-center justify-start gap-x-2">
                                            <h1 className="text-[2rem] text-black md:text-[1.2rem] xl:text-[1.5rem]">Q2.</h1>
                                            <p className="font-shine text-[2rem]">UX Research & UI Design</p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">Wireframe</span>.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 gap-y-4 rounded-2xl p-8 md:gap-y-4">
                                                <img
                                                    src="images/foundation/wireframe.png"
                                                    className="max-w-[30vh] rounded-2xl border-1 border-light-green lg:max-w-[60vh]"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <p>
                                                <span className="rounded-2xl border-1 border-black bg-light-green">UX Research</span>. Keypoints were
                                                made to make sure our app{' '}
                                                <span className="bg-light-green">
                                                    will not overwhelm user, follow Apple Human Interface Guide (HIG) and Self-Determination Theory
                                                    (SDT) persuasive features.
                                                </span>{' '}
                                                We also focus on putting task prioritization container on top, as our app focus.
                                            </p>
                                            <br></br>
                                            <p>
                                                <span className="rounded-2xl border-1 bg-light-green"> UI Design </span>. It was my first time using
                                                Sketch, but it only took me 2 days to figure out most of the setting and useable feature for our
                                                prototype. Check{' '}
                                                <a href="https://bit.ly/Priorly-Prototype">
                                                    {' '}
                                                    <span className="bg-light-green">here</span>
                                                </a>{' '}
                                                for a working prototype.
                                            </p>
                                            <div className="bg-dot-pattern grid-cols-1 justify-center gap-y-4 rounded-2xl p-8 md:gap-y-4">
                                                <img
                                                    src="images/foundation/sketch.png"
                                                    className="max-w-[30vh] rounded-2xl border-1 border-light-green lg:max-w-[60vh]"
                                                    loading="lazy"
                                                />
                                            </div>

                                            <div className="flex w-full items-center justify-start gap-x-2">
                                                <h1 className="text-[2rem] text-black md:text-[1.2rem] xl:text-[1.5rem]">Q3.</h1>
                                                <p className="font-shine text-[2rem]">SwiftUI Coding & SwiftData</p>
                                            </div>
                                            <div>
                                                <p>
                                                    {' '}
                                                    <a href="https://github.com/apostroef/Priorly">
                                                        <span className="bg-light-green font-bold">GitHub Repo</span>
                                                    </a>
                                                </p>
                                                <br></br>
                                                <p>
                                                    I developed Priorly to tackle choice paralysis through automated, logic-driven prioritization.
                                                    Technically, this involved building a deep persistence layer using{' '}
                                                    <span className="bg-light-green">
                                                        SwiftData to manage task objects and their RICE calculations
                                                    </span>
                                                    . I learned SwiftUI from free courses in YouTube and read documentation from Apple Developer
                                                    website as well as utilizing AI agent helps (Claude, Gemini) for debugging.
                                                </p>
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
                                <>
                                    {' '}
                                    <p>
                                        Our process ensured all design choices were grounded in research, collaboration and iteration. While the
                                        current solution effectively maintains user motivation through rewarding target activities, we identified
                                        "Relatedness" aspect from BPN as a key area for future development.{' '}
                                    </p>
                                    <br></br>
                                    <p>
                                        I mastered technical skills in SwiftUI and SwiftData while adhering to Apple’s Human Interface Guidelines
                                        through consistent daily self-regulated learning. This experience has deeply motivated me to pursue further
                                        mastery within the Apple developer ecosystem.
                                    </p>
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
