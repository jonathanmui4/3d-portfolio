import React from "react";
import { useAtom } from "jotai";
import Section from "./Section";
import { projects } from "../../content";
import { currentProjectAtom } from "../Scenes/ProjectsDisplay";

const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject(
            (currentProject - 1 + projects.length) % projects.length
        );
    };

    return (
        <Section idName={"projects"}>
            <div className="flex w-full h-full py-20 mt-20 gap-8 items-start justify-center">
                <button
                    className="hover:text-indigo-600 transition-colors py-2"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-5xl font-bold">Projects</h2>
                <button
                    className="hover:text-indigo-600 transition-colors py-2"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};

export default ProjectsSection;
