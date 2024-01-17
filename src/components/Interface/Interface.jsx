import React from "react";
import Section from "./Section";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";

const Interface = ({ setSection }) => {
    return (
        <>
            <div className="flex flex-col items-center w-screen">
                <AboutSection setSection={setSection} />
                <SkillsSection />
                {/* <ExperienceSection /> */}
                {/* <Section idName={"Projects"}>
                    <h1>Experience</h1>
                </Section> */}
                <ProjectsSection />
                {/* <Section idName={"Projects"}>
                    <h1>Projects</h1>
                </Section> */}
                <ContactSection />
            </div>
        </>
    );
};

export default Interface;
