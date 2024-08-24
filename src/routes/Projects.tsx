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
    getAllAvailableProjectsInYear,
    getAllAvailableYears,
    getProjectByYearAndIndex,
} from "../utils/ProjectUtil";
import { useAnimatedSelected } from "../hooks/useAnimatedSelection";

const allAvailableYears = getAllAvailableYears();
const initialActiveYear = allAvailableYears[allAvailableYears.length - 1];
const projectsInYear = getAllAvailableProjectsInYear(initialActiveYear);
const initialActiveProjectIndex = projectsInYear.length - 1;

const Projects: React.FC = () => {
    const [activeYear, setActiveYear] = useState(initialActiveYear);
    // Index is based on the active year
    const [activeProjectIndex, setActiveProjectIndex] = useState(
        initialActiveProjectIndex
    );

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
                    width: "100%",
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
