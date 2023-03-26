import { useCallback, useMemo } from "react";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Variants } from "framer-motion";
import { useBoolean } from "usehooks-ts";

// Components
import GlassCard from "../../../../components/ui/GlassCard";
import Banner from "./styles/Banner";
import Ribbon from "./styles/Ribbon";
import LeftGroup from "./styles/LeftGroup";
import RightGroup from "./styles/RightGroup";
import MainGroup from "./styles/MainGroup";

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

const ribbonVariants: Variants = {
    initial: {
        y: -64,
    },
    hovered: {
        y: -16,
    },
};

const mainGroupVariants: Variants = {
    initial: {
        x: "-110%",
    },
    hovered: {
        x: 0,
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
                active={!showHoverText}
            >
                <LeftGroup
                    variants={ribbonVariants}
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
                {/* Title & Description */}
                <MainGroup
                    variants={mainGroupVariants}
                    initial="initial"
                    animate={showHoverText ? "initial" : "hovered"}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 150,
                    }}
                >
                    <Typography
                        variant="h6"
                        fontWeight={500}
                        fontSize={"clamp(0rem, 4.5vw, 1.25rem)"}
                    >
                        {props.project.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        fontSize={"clamp(0rem, 2.8vw, 0.9rem)"}
                    >
                        {props.project.description}
                    </Typography>
                </MainGroup>
            </Banner>
        </GlassCard>
    );
}

export default ProjectCard;
