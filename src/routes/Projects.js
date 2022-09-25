import React from "react";
import { Grid } from "@mui/material";
import { Element } from "react-scroll";

import Container from "../styles/Container";
import ProjectsCard from "../features/Projects/components/ui/ProjectsCard";

import projects from "../data/projects";

function Projects() {
    return (
        <Element name="/projects">
            <Container>
                <Grid container justifyContent="space-evenly">
                    {projects.map((project, index) => (
                        <Grid item key={index}>
                            <ProjectsCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Element>
    );
}

export default Projects;
