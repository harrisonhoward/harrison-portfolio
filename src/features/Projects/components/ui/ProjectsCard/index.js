import React, { useState, useEffect, useCallback } from "react";
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    Slide,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Color from "color";

import GlassCard from "../../../../../components/ui/GlassCard";
import GroupBox from "../../../../../styles/GroupBox";
import Banner from "./styles/Banner";
import Ribbon from "./styles/Ribbon";

import { GLOBAL_PREFIX } from "../../../../../ClassNameGenerator";

const ACTIVE = [
    {
        label: "Inactive",
        palette: "error",
    },
    {
        label: "In progress",
        palette: "warning",
    },
    {
        label: "Active",
        palette: "success",
    },
];

const AnimationTransition = {
    type: "spring",
    stiffness: 100,
    damping: 8,
    mass: 0.7,
};

const ExpandVariants = {
    initial: {
        width: "min(100%, 400px)",
    },
    expanded: {
        width: "min(100%, 500px)",
    },
};

const SlideUpVariants = (distance, override) => ({
    initial: {
        y: distance,
        ...(override?.initial || {}),
    },
    show: {
        y: 0,
        ...(override?.show || {}),
    },
});

const SlideDownVariants = (distance, override) => ({
    initial: {
        y: -distance,
        ...(override?.initial || {}),
    },
    show: {
        y: 0,
        ...(override?.show || {}),
    },
});

const SlideRightVariants = (distance, override) => ({
    initial: {
        x: -distance,
        ...(override?.initial || {}),
    },
    show: {
        x: 0,
        ...(override?.show || {}),
    },
});

const SlideDown = React.forwardRef(function SlideDown(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

/**
 *
 * @param {{ project: import("../../../../../data/projects").ProjectItem }} props
 * @returns
 */
function ProjectsCard(props) {
    const [cardHovered, setCardHovered] = useState(false);
    // Used to store actual state to fix hovered being true when mouse is not over the card
    const [_cardHovered, _setCardHovered] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleMouseOver = useCallback(() => {
        setCardHovered(true);
        _setCardHovered(true);
    }, []);
    const handleMouseOut = useCallback(() => {
        setCardHovered(dialogOpen);
        _setCardHovered(false);
    }, [dialogOpen]);

    const handleOpen = useCallback(
        () => setDialogOpen(!!props.project.links),
        [props.project.links]
    );
    const handleClose = useCallback(() => setDialogOpen(false), []);

    const openLinks = useCallback((links) => {
        if (!Array.isArray(links)) return window.open(links, "_blank");
        links.forEach((link) => window.open(link, "_blank"));
    }, []);

    useEffect(() => {
        if (!dialogOpen && cardHovered !== _cardHovered)
            setCardHovered(_cardHovered);
    }, [dialogOpen, cardHovered, _cardHovered]);

    return (
        <>
            <Dialog
                open={dialogOpen}
                onClose={handleClose}
                TransitionComponent={SlideDown}
            >
                <DialogTitle textAlign="center">
                    {props.project.title}'s Links
                </DialogTitle>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>
                        Close
                    </Button>
                    {props.project.links?.code && (
                        <Button
                            onClick={() => {
                                handleClose();
                                openLinks(props.project.links.code);
                            }}
                        >
                            Code
                        </Button>
                    )}
                    {props.project.links?.website && (
                        <Button
                            onClick={() => {
                                handleClose();
                                openLinks(props.project.links.website);
                            }}
                        >
                            Live Website
                        </Button>
                    )}
                    {props.project.links?.misc && (
                        <Button
                            onClick={() => {
                                handleClose();
                                openLinks(props.project.links.misc);
                            }}
                        >
                            Other
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
            <AnimatePresence>
                <motion.div
                    variants={ExpandVariants}
                    initial="initial"
                    animate={cardHovered ? "expanded" : "initial"}
                    transition={AnimationTransition}
                >
                    <GlassCard
                        elevation={10}
                        sx={{
                            position: "relative",
                            border: "none",
                        }}
                        onClick={handleOpen}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <Banner
                            src={`resources/projects/${props.project.banner}`}
                            container={{
                                sx: {
                                    position: "relative",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "calc(100% - 4px)",
                                    transition:
                                        "background-color 0.2s ease-in-out",
                                    backgroundColor:
                                        cardHovered &&
                                        ((theme) =>
                                            `rgba(${Color(
                                                theme.palette.primary.dark
                                            )
                                                .darken(0.7)
                                                .rgb()
                                                .array()
                                                .join(", ")}, 0.9)`),
                                }}
                            ></Box>
                        </Banner>
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                top: 0,
                                left: 0,
                            }}
                        >
                            {props.project.links && (
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 5,
                                        right: 5,
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faExternalLinkAlt}
                                        size="lg"
                                    />
                                </Box>
                            )}
                            <motion.div
                                style={{ position: "absolute" }}
                                variants={SlideDownVariants(45, {
                                    show: { y: -15 },
                                })}
                                initial={false}
                                animate={cardHovered ? "initial" : "show"}
                                transition={AnimationTransition}
                            >
                                <GroupBox>
                                    <Ribbon
                                        sx={{
                                            background: (theme) =>
                                                `rgba(${Color(
                                                    theme.palette.info.dark
                                                )
                                                    .rgb()
                                                    .array()
                                                    .join(", ")}, 0.5)`,
                                            marginLeft: "0.6rem",
                                        }}
                                    >
                                        <Typography>Hover me</Typography>
                                    </Ribbon>
                                </GroupBox>
                            </motion.div>
                            <motion.div
                                variants={SlideDownVariants(45, {
                                    show: { y: -15 },
                                })}
                                initial="initial"
                                animate={cardHovered ? "show" : "initial"}
                                transition={AnimationTransition}
                            >
                                <GroupBox>
                                    <Ribbon
                                        sx={{
                                            background: (theme) =>
                                                `rgba(${Color(
                                                    theme.palette[
                                                        ACTIVE[
                                                            props.project.active
                                                        ].palette
                                                    ].dark
                                                )
                                                    .rgb()
                                                    .array()
                                                    .join(", ")}, 0.7)`,
                                            marginLeft: "0.6rem",
                                        }}
                                    >
                                        <Typography>
                                            {ACTIVE[props.project.active].label}
                                        </Typography>
                                    </Ribbon>
                                    {props.project.dateRange && (
                                        <Ribbon
                                            sx={{
                                                background: (theme) =>
                                                    `rgba(${Color(
                                                        theme.palette.info.dark
                                                    )
                                                        .rgb()
                                                        .array()
                                                        .join(", ")}, 0.7)`,
                                                marginLeft: "0.6rem",
                                            }}
                                        >
                                            <Typography>
                                                {props.project.dateRange.start}
                                                {props.project.dateRange.end &&
                                                    ` - ${props.project.dateRange.end}`}
                                            </Typography>
                                        </Ribbon>
                                    )}
                                </GroupBox>
                            </motion.div>
                            <motion.div
                                variants={SlideRightVariants(235)}
                                initial="initial"
                                animate={cardHovered ? "show" : "initial"}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    mass: 0.7,
                                }}
                            >
                                <Box
                                    sx={{
                                        marginLeft: "0.7rem",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        letterSpacing="0.1rem"
                                    >
                                        {props.project.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                            <motion.div
                                variants={SlideUpVariants(235)}
                                initial="initial"
                                animate={cardHovered ? "show" : "initial"}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 12,
                                    mass: 0.7,
                                }}
                            >
                                <Box
                                    sx={{
                                        marginLeft: "0.7rem",
                                    }}
                                >
                                    <Typography variant="body1">
                                        {props.project.description}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Box>
                    </GlassCard>
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default ProjectsCard;
