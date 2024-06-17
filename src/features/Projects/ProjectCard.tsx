import React from "react";
import { Box, PaletteColors, Typography, styled } from "@mui/material";
import { Variants, motion } from "framer-motion";

import {
    STATUS_COLORS,
    STATUS_LABELS,
    type Project,
} from "../../data/projects";
import GlassCard from "../../components/ui/GlassCard";
import Banner from "../../components/ui/Banner";

interface ProjectCardProps {
    project: Project;
    /**
     * This is useful for determine if animation plays or not\
     * For instance if the banner never changes, why animate it?
     */
    refProject?: Project;
}

interface RibbonProps {
    palette?: keyof PaletteColors;
}

const Content = styled(motion(Box))`
    width: 100%;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
`;

const Ribbon = styled(Box)<RibbonProps>`
    border-end-start-radius: 10px;
    border-end-end-radius: 10px;
    padding: 1rem 1rem 0;
    border: 1px solid rgba(0, 0, 0, 0.25);
    background-color: ${({ theme, palette }) =>
        theme.palette[palette ?? "info"].dark};
    transition: background-color 400ms ease-in-out;
`;

const Ribbons = styled(motion(Box))`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 0.1rem;
`;

const RIBBON_VARIANTS: Variants = {
    visible: {
        y: -16,
    },
    hidden: {
        y: -64,
    },
};

const BANNER_VARIANTS: Variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

const CONTENT_VARIANTS: Variants = {
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 13,
            mass: 0.9,
        },
    },
    hidden: {
        x: "-100%",
        transition: {
            duration: 0.275,
        },
    },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, refProject }) => {
    const startYear = project.dates.start.year();
    const endYear = project.dates.end?.year();

    const isSameBanner = refProject?.banner === project.banner;
    const isSameStartYear = refProject?.dates.start.year() === startYear;
    const isSameEndYear = refProject?.dates.end?.year() === endYear;
    const isSameStatus = refProject?.status === project?.status;

    return (
        <GlassCard
            backgroundOpacity={0.8}
            sx={{
                maxWidth: 600,
            }}
        >
            <motion.div
                style={{ display: "flex", opacity: 1 }}
                variants={!isSameBanner ? BANNER_VARIANTS : undefined}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <Banner
                    src={`resources/projects/${project.banner}`}
                    alt={project.title}
                    skeletonWidth={600}
                    skeletonHeight={180}
                />
            </motion.div>
            <Ribbons
                // Will be overridden if the animation is present
                style={{ y: -16 }}
                variants={
                    !isSameStartYear || !isSameEndYear || !isSameStatus
                        ? RIBBON_VARIANTS
                        : undefined
                }
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <Ribbon>
                    <Typography variant="subtitle2">
                        {startYear}
                        {endYear && ` - ${endYear}`}
                    </Typography>
                </Ribbon>
                <Ribbon palette={STATUS_COLORS[project.status]}>
                    <Typography variant="subtitle2">
                        {STATUS_LABELS[project.status]}
                    </Typography>
                </Ribbon>
            </Ribbons>
            <Content
                variants={CONTENT_VARIANTS}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <Typography
                    variant="h4"
                    fontSize="clamp(0rem, 5.5vw, 2rem)"
                    fontWeight="500"
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body1"
                    fontSize="clamp(0rem, 2.75vw, 1rem)"
                >
                    {project.description}
                </Typography>
            </Content>
        </GlassCard>
    );
};

export default ProjectCard;
