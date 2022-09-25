import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { Element } from "react-scroll";

import Container from "../styles/Container";
import ProjectsCard from "../features/Projects/components/ui/ProjectsCard";

import projects from "../data/projects";

function Projects() {
    const px1000 = useMediaQuery("(max-width: 1000px)");

    return (
        <Element name="/projects">
            <Container>
                <Grid container justifyContent="center" rowGap={4}>
                    {projects.map((project, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            md={px1000 ? 12 : 6}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <ProjectsCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Element>
    );
}

export default Projects;