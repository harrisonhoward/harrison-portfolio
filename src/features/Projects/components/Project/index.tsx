import React, { useCallback, useMemo } from "react";
import { Variants, motion } from "framer-motion";

import { Grid } from "@mui/material";

import ProjectCard from "../ProjectCard";

// Types
import type { Project } from "../../../../data/projects";

// Interfaces
export interface ProjectProps {
    project: Project;
    selectedProject?: Project | null;
    dialogOpen?: boolean;
    onClick?: (project: Project) => void;
}

// Constants
const WIDTH = 500;

const Project: React.FC<ProjectProps> = ({
    project,
    selectedProject,
    dialogOpen,
    onClick,
}) => {
    // Animation logic
    const projectVariants: Variants = useMemo(() => {
        return {
            initial: {
                width: WIDTH,
            },
            expanded: {
                width: WIDTH + 50,
            },
        };
    }, []);

    const handleProjectClick = useCallback(() => {
        onClick?.(project);
    }, [onClick, project]);

    return (
        <motion.div
            variants={projectVariants}
            initial="initial"
            animate={
                dialogOpen && selectedProject?.title === project.title
                    ? "expanded"
                    : "initial"
            }
            whileHover="expanded"
            transition={{ duration: 0.2 }}
            onClick={handleProjectClick}
        >
            <Grid item>
                <ProjectCard
                    project={project}
                    dialogOpen={
                        !!(
                            dialogOpen &&
                            selectedProject?.title === project.title
                        )
                    }
                />
            </Grid>
        </motion.div>
    );
};

export default Project;
