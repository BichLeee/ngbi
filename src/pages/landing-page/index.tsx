import { Banner } from "./_components/banner";
import { AboutMe } from "./_components/about-me";
import { Highlight } from "./_components/highlight";
import { NgBi } from "./_components/ngbi";
import { Skills } from "./_components/skills";
import { Projects } from "./_components/projects";
import { Contact } from "./_components/contact";
export const LandingPage = () => {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Highlight />
            <NgBi />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};
