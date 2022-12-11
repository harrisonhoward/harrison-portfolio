import { Grid, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Container from "../styles/Container";
import ProjectCard from "../features/Projects/components/ProjectCard";

// Resources
import projects from "../data/projects";

// Contants
const DESKTOP_WIDTH = 500;
const MOBILE_WIDTH = 350;

function Projects() {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const smallerHeight = useMediaQuery("(max-height: 700px)");

    return (
        <Container sx={{ width: "100%" }}>
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
                            animate={{
                                width:
                                    isMobile || smallerHeight
                                        ? MOBILE_WIDTH
                                        : DESKTOP_WIDTH,
                            }}
                            whileHover={{
                                width:
                                    (isMobile || smallerHeight
                                        ? MOBILE_WIDTH
                                        : DESKTOP_WIDTH) + 50,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <Grid item key={index}>
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
