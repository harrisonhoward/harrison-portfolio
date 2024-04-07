import { useCallback, useState } from "react";
import { Grid } from "@mui/material";
import { AnimatePresence } from "framer-motion";

// Components
import Container from "../styles/Container";
import ProjectDialog from "../features/Projects/components/ProjectDialog";

// Resources
import projects from "../data/projects";
import Project from "../features/Projects/components/Project";

function Projects() {
    // Dialog logic
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const handleDialogOpen = useCallback(
        (project: Project) => {
            setSelectedProject(project);
            setDialogOpen(true);
        },
        [setSelectedProject]
    );
    const handleDialogClose = useCallback(() => {
        setDialogOpen(false);
    }, [setSelectedProject]);

    // Action
    const handleProjectClick = useCallback((project: Project) => {
        handleDialogOpen(project);
    }, []);

    return (
        <Container>
            <ProjectDialog
                project={selectedProject}
                open={dialogOpen}
                handleClose={handleDialogClose}
            />
            <AnimatePresence>
                <Grid
                    container
                    justifyContent="center"
                    rowGap={4}
                    columnGap={4}
                    maxWidth="1100px"
                >
                    {projects.map((project) => (
                        <Project
                            key={project.title}
                            project={project}
                            selectedProject={selectedProject}
                            dialogOpen={dialogOpen}
                            onClick={handleProjectClick}
                        />
                    ))}
                </Grid>
            </AnimatePresence>
        </Container>
    );
}

export default Projects;
