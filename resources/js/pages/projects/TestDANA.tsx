import { NavBarProject } from '@/components/projects/navbar-project';
import { XMargin } from '@/components/x-margin-line';
export default function danaTest() {
    return (
        <>
            <XMargin />
            <NavBarProject
                ProjectName="projects/DANA ID"
                ProjectName2="projects/Beyond-The-Bite"
                ProjectName3="projects/TedXUA"
                ProjectName4="projects/Priorly"
                link="/beyond-the-bite"
                link1="/tedx-ua"
                link2="/priorly"
            />
            <p>test</p>
            </>
    )
}