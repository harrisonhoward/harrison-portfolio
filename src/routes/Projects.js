import React from "react";
import { Element } from "react-scroll";

import Container from "../styles/Container";
import ProjectsCard from "../features/Projects/components/ui/ProjectsCard";

import projects from "../data/projects";

function Projects() {
    return (
        <Element name="/projects">
            <Container>
                {projects.map((project, index) => (
                    <ProjectsCard key={index} project={project} />
                ))}
            </Container>
        </Element>
    );
}

export default Projects;
