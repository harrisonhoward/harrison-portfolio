import { useState, useEffect, useCallback, useMemo } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Variants, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Color from "color";
import { useBoolean } from "usehooks-ts";

// Components
import GlassCard from "../../../../components/ui/GlassCard";
import GroupBox from "../../../../styles/GroupBox";
import Banner from "./styles/Banner";
import Ribbon from "./styles/Ribbon";
import LeftGroup from "./styles/LeftGroup";
import RightGroup from "./styles/RightGroup";

// Types
import { Project, Status } from "../../../../data/projects";

// Contants
const STATUS_COLOURS = {
    active: "success",
    "in-progress": "warning",
    inactive: "error",
} as const;
const STATUS_TEXT: { [key in Status]: string } = {
    active: "Active",
    "in-progress": "In Progress",
    inactive: "Inactive",
};

export interface ProjectCardProps {
    project: Project;
    dialogOpen: boolean;
}

const cardVariants: Variants = {
    initial: {
        y: -64,
    },
    hovered: {
        y: -16,
    },
};

function ProjectCard(props: ProjectCardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 600px)");

    // Hover state
    const {
        value: isHovered,
        setTrue: setHoveredTrue,
        setFalse: setHoveredFalse,
    } = useBoolean(false);
    const handleMouseEnter = useCallback(() => {
        setHoveredTrue();
    }, [setHoveredTrue]);
    const handleMouseLeave = useCallback(() => {
        setHoveredFalse();
    }, [setHoveredFalse]);
    // Calculate the hover state
    const showHoverText = useMemo(() => {
        // Always show click me on mobile
        if (isMobile) return false;
        return !isHovered && !props.dialogOpen;
    }, [isHovered, props.dialogOpen, isMobile]);

    return (
        <GlassCard
            elevation={10}
            sx={{
                position: "relative",
                border: "none",
                cursor: props.project.links ? "pointer" : "default",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Banner
                src={`resources/projects/${props.project.banner}`}
                containerProps={{
                    sx: {
                        position: "relative",
                    },
                }}
            >
                <LeftGroup
                    variants={cardVariants}
                    animate={showHoverText ? "initial" : "hovered"}
                >
                    {/* Date Ribbon */}
                    <Ribbon
                        sx={{
                            backgroundColor: theme.palette.info.dark,
                        }}
                    >
                        <Typography variant="subtitle2">
                            {`${props.project.dates.start}${
                                props.project.dates.end
                                    ? ` - ${props.project.dates.end}`
                                    : ""
                            }`}
                        </Typography>
                    </Ribbon>
                    {/* Status Ribbon */}
                    <Ribbon
                        sx={{
                            backgroundColor:
                                theme.palette[
                                    STATUS_COLOURS[props.project.status]
                                ].dark,
                        }}
                    >
                        {STATUS_TEXT[props.project.status]}
                    </Ribbon>
                </LeftGroup>
                <RightGroup>
                    <Ribbon
                        sx={{
                            backgroundColor: theme.palette.info.dark,
                            paddingTop: 0,
                        }}
                    >
                        <Typography variant="subtitle2">
                            {showHoverText ? "Hover me" : "Click me"}
                        </Typography>
                    </Ribbon>
                </RightGroup>
            </Banner>
        </GlassCard>
    );
}

export default ProjectCard;
