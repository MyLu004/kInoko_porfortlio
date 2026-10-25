import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/layout/Footer.jsx";
import Nav from "./components/layout/Nav.jsx";
import Section from "./components/layout/Section.jsx";
import ContactSection from "./components/sections/Contact/ContactSection.jsx";
import EducationClubs from "./components/sections/Education/EducationClubs.jsx";
import ExperienceTimeline from "./components/sections/Experience/ExperienceTimeline.jsx";
import Hero from "./components/sections/Hero/Hero.jsx";
import ProjectsScrapbook from "./components/sections/Projects/ProjectsScrapbook.jsx";
import SkillsStickers from "./components/sections/Skills/SkillsStickers.jsx";
import {
    contact,
    education,
    experiences,
    navLinks,
    projectCategories,
    projects,
    resume,
    skills,
} from "./constants/index.js";

const App = () => {
    return (
        <>
            <Nav links={navLinks} resume={resume} />
            <main>
                <Section id="home" hero>
                    <Hero contact={contact} resume={resume} />
                </Section>
                <Section id="experience">
                    <ExperienceTimeline experiences={experiences} />
                </Section>
                <Section id="projects" dots="strong">
                    <ProjectsScrapbook projects={projects} categories={projectCategories} />
                </Section>
                <Section id="skills">
                    <SkillsStickers skills={skills} />
                </Section>
                <Section id="education">
                    <EducationClubs education={education} />
                </Section>
                <Section id="contact">
                    <ContactSection contact={contact} resume={resume} />
                </Section>
            </main>
            <Footer contact={contact} />
            {/* Vercel Web Analytics: only records on the deployed site, once enabled in the Vercel dashboard */}
            <Analytics />
        </>
    );
};

export default App;
