import React, { useCallback, useState } from "react";

// Components
import Container from "../styles/Container";
import NavButton from "../components/layout/NavButton/NavButton";
import GlassCard from "../components/ui/GlassCard";
import ProjectMonthSlider from "../features/Projects/ProjectSlider";

// Features
import ProjectYearSlider from "../features/Projects/ProjectYearSlider";

// Resources
import { RouteName } from "../data/routes";
import { getAllAvailableYears } from "../utils/ProjectUtil";

const firstProjectYear = getAllAvailableYears()[0];

const Projects: React.FC = () => {
    const [activeYear, setActiveYear] = useState(firstProjectYear);
    // Index is based on the active year
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

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
        </Container>
    );
};

export default Projects;
