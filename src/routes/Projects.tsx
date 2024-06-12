import React, { useState } from "react";

// Components
import Container from "../styles/Container";
import NavButton from "../components/layout/NavButton/NavButton";
import GlassCard from "../components/ui/GlassCard";

// Features
import ProjectSlider from "../features/Projects/ProjectSlider";

// Resources
import { RouteName } from "../data/routes";

const Projects: React.FC = () => {
    const [activeYear, setActiveYear] = useState(2017);

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
                <ProjectSlider
                    activeYear={activeYear}
                    onChange={setActiveYear}
                />
            </GlassCard>
        </Container>
    );
};

export default Projects;
