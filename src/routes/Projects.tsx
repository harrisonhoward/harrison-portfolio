import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Container from "../styles/Container";
import NavButton from "../components/layout/NavButton/NavButton";
import GlassCard from "../components/ui/GlassCard";

// Features
import ProjectYearSlider from "../features/Projects/ProjectYearSlider";
import ProjectMonthSlider from "../features/Projects/ProjectSlider";
import ProjectCard from "../features/Projects/ProjectCard";

// Resources
import projects, { Project } from "../data/projects";
import { RouteName } from "../data/routes";
import {
    getAllAvailableYears,
    getProjectByYearAndIndex,
} from "../utils/ProjectUtil";
import { useAnimatedSelected } from "../hooks/useAnimatedSelection";

const firstProjectYear = getAllAvailableYears()[0];

const Projects: React.FC = () => {
    const [activeYear, setActiveYear] = useState(firstProjectYear);
    // Index is based on the active year
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    // TODO: Return this code when framer motion animations don't break
    // const selectedProject = useMemo(
    //     () => getProjectByYearAndIndex(activeYear, activeProjectIndex),
    //     [activeYear, activeProjectIndex]
    // );

    const {
        selected: selectedProject,
        refSelected: refProjectSelected,
        setSelected: setSelectedProject,
    } = useAnimatedSelected<Project | undefined>(
        getProjectByYearAndIndex(activeYear, activeProjectIndex)
    );
    useEffect(() => {
        const newProject = getProjectByYearAndIndex(
            activeYear,
            activeProjectIndex
        );
        if (selectedProject?.id !== newProject?.id) {
            setSelectedProject(newProject);
        }
    }, [activeYear, activeProjectIndex]);

    const handleYearChange = useCallback(
        (newYear: number) => {
            setActiveYear(newYear);
            setActiveProjectIndex(0);
        },
        [setActiveYear, setActiveProjectIndex]
    );

    return (
        <Container
            sx={{
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: 700,
            }}
        >
            <NavButton toName={RouteName.About} direction="left" />
            <GlassCard
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    // Fix overflow issues, 4rem for padding and 2px for border
                    width: "calc(100% - 4rem - 2px)",
                    padding: "1rem 2rem",
                    marginBottom: "1rem",
                }}
            >
                <ProjectYearSlider
                    activeYear={activeYear}
                    onChange={handleYearChange}
                />
                <ProjectMonthSlider
                    activeYear={activeYear}
                    activeProjectIndex={activeProjectIndex}
                    onChange={setActiveProjectIndex}
                />
            </GlassCard>
            <AnimatePresence mode="wait">
                {/* This setup allows us to animate in and out of projects */}
                {projects.map((project) => {
                    if (project.id !== selectedProject?.id) {
                        return null;
                    }

                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            refProject={refProjectSelected}
                        />
                    );
                })}
            </AnimatePresence>
        </Container>
    );
};

export default Projects;
