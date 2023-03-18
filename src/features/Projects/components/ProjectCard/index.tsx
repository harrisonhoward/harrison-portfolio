import { useState, useEffect, useCallback } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Color from "color";

// Components
import GlassCard from "../../../../components/ui/GlassCard";
import GroupBox from "../../../../styles/GroupBox";
import Banner from "./styles/Banner";
import Ribbon from "./styles/Ribbon";
import ProjectDialog from "../ProjectDialog";

// Hooks
import { useBoolean } from "usehooks-ts";

// Types
import { Project, Status } from "../../../../data/projects";

// Contants
const STATUS_COLOURS: { [key in Status]: string } = {
    active: "success",
    "in-progress": "warning",
    inactive: "error",
};

export interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <>
            <GlassCard
                key={`${JSON.stringify(props.project)}-card`}
                elevation={10}
                sx={{
                    position: "relative",
                    border: "none",
                    cursor: props.project.links ? "pointer" : "default",
                }}
            >
                <Banner
                    src={`resources/projects/${props.project.banner}`}
                    containerProps={{
                        sx: {
                            position: "relative",
                        },
                    }}
                ></Banner>
            </GlassCard>
        </>
    );
}

export default ProjectCard;
