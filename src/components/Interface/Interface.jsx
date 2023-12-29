import React from "react";
import Section from "./Section";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const Interface = () => {
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection />
            <SkillsSection />
            <Section>
                <h1>Experience</h1>
            </Section>
            <Section>
                <h1>Projects</h1>
            </Section>
            <ContactSection />
        </div>
    );
};

export default Interface;
