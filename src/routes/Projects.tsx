import { useCallback, useMemo, useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { AnimatePresence, Variants, motion } from "framer-motion";

// Components
import Container from "../styles/Container";
import ProjectCard from "../features/Projects/components/ProjectCard";
import ProjectDialog from "../features/Projects/components/ProjectDialog";

// Resources
import projects, { Project } from "../data/projects";

// Contants
const DESKTOP_WIDTH = 500;
const MOBILE_WIDTH = 350;

function Projects() {
    // Dialog logic
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const handleDialogOpen = useCallback(
        (project: Project) => {
            setSelectedProject(project);
        },
        [setSelectedProject]
    );
    const handleDialogClose = useCallback(() => {
        setSelectedProject(null);
    }, [setSelectedProject]);

    const isMobile = useMediaQuery("(max-width: 600px)");
    const smallerHeight = useMediaQuery("(max-height: 700px)");

    const projectCardWidth = useMemo(() => {
        return isMobile || smallerHeight ? MOBILE_WIDTH : DESKTOP_WIDTH;
    }, [isMobile, smallerHeight]);
    const projectVariants = useMemo(() => {
        return {
            initial: {
                width: projectCardWidth,
            },
            expanded: {
                width: projectCardWidth + 50,
            },
        };
    }, [projectCardWidth]);

    // Action
    const handleProjectClick = useCallback((project: Project) => {
        return useCallback(() => {
            handleDialogOpen(project);
        }, []);
    }, []);

    return (
        <Container sx={{ width: "100%" }}>
            <ProjectDialog
                project={selectedProject}
                open={!!selectedProject}
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
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            initial="initial"
                            animate={
                                selectedProject?.title === project.title
                                    ? "expanded"
                                    : "initial"
                            }
                            whileHover="expanded"
                            transition={{ duration: 0.2 }}
                            onClick={handleProjectClick(project)}
                        >
                            <Grid item>
                                <ProjectCard project={project} />
                            </Grid>
                        </motion.div>
                    ))}
                </Grid>
            </AnimatePresence>
        </Container>
    );
}

export default Projects;
