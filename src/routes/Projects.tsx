import React, { useState } from "react";

// Components
import Container from "../styles/Container";
import NavButton from "../components/layout/NavButton/NavButton";
import GlassCard from "../components/ui/GlassCard";

// Features
import ProjectYearSlider from "../features/Projects/ProjectYearSlider";

// Resources
import { RouteName } from "../data/routes";
import { getAllAvailableYears } from "../utils/ProjectUtil";

const firstProjectYear = parseInt(getAllAvailableYears()[0]);

const Projects: React.FC = () => {
    const [activeYear, setActiveYear] = useState(firstProjectYear);

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
                    padding: "1rem 2rem",
                    width: "100%",
                }}
            >
                <ProjectYearSlider
                    activeYear={activeYear}
                    onChange={setActiveYear}
                />
            </GlassCard>
        </Container>
    );
};

export default Projects;
