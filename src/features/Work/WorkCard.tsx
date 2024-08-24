import React from "react";
import { Box, PaletteColors, styled, Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";

import { Role, Work } from "../../data/work";
import GlassCard from "../../components/ui/GlassCard";
import Banner from "../../components/ui/Banner";
import { stringToTitle } from "../../utils/StringUtil";
import Dot from "../../components/ui/Dot";
import { toRelativeTime } from "../../utils/DateUtil";
import WorkSkills from "./WorkSkills";

export interface WorkCardProps {
    work: Work;
    role: Role;
    // These props are to ensure when it doesn't need to animate it doesn't
    refWork?: Work;
    refRole?: Role;
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

const CONTENT_ROLE_VARIANTS: Variants = {
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 90,
            damping: 17,
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

const WorkCard: React.FC<WorkCardProps> = ({
    work,
    role,
    refWork,
    refRole,
}) => {
    const newStart = work.roles[0].dates.start;
    const refStart = refWork?.roles[0].dates.start;
    const newEnd = work.roles[work.roles.length - 1].dates.end;
    const refEnd = refWork?.roles[refWork.roles.length - 1].dates.end;

    const isSameBanner = refWork?.banner === work.banner;
    const isSameStart = refStart?.isSame(newStart);
    const isSameEnd = refEnd?.isSame(newEnd);
    const isSameType = refWork?.type === work.type;
    const isSameRole = refRole?.title === role.title;

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
                    src={`resources/projects/${work.banner}`}
                    alt={work.title}
                    skeletonWidth={600}
                    skeletonHeight={180}
                />
            </motion.div>
            <Ribbons
                // Will be overridden if the animation is present
                style={{ y: -16 }}
                variants={
                    !isSameStart || !isSameEnd || !isSameType
                        ? RIBBON_VARIANTS
                        : undefined
                }
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <Ribbon>
                    <Typography variant="subtitle2">
                        {newStart.format("YYYY")}
                        {newEnd ? ` - ${newEnd.format("YYYY")}` : " - Present"}
                    </Typography>
                </Ribbon>
                <Ribbon palette="secondary">
                    <Typography variant="subtitle2">
                        {stringToTitle(work.type)}
                    </Typography>
                </Ribbon>
            </Ribbons>
            <Content
                variants={CONTENT_VARIANTS}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                {/* Title */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h4" fontWeight="500">
                        {work.title}
                    </Typography>
                    <Dot />
                    {/* Current time past (i.e. 1 yr 11 mos) */}
                    <Typography variant="h6" fontWeight={400}>
                        {toRelativeTime(newStart, newEnd)}
                    </Typography>
                </Box>
                {/* Location */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "-6px",
                    }}
                >
                    <Typography variant="subtitle2" color="lightgray">
                        {work.location}
                    </Typography>
                    <Dot />
                    <Typography variant="subtitle2" color="lightgray">
                        {stringToTitle(work.locationType)}
                    </Typography>
                </Box>
                <WorkSkills skills={work.skills} />
                {/* Role */}
                <Content
                    style={{ padding: 0, x: "-200%" }}
                    variants={!isSameRole ? CONTENT_ROLE_VARIANTS : undefined}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <Typography
                        variant="h6"
                        fontWeight="500"
                        color="secondary"
                        paddingLeft="1rem"
                    >
                        {role.title}
                    </Typography>
                    {/* Time frame */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "-6px",
                            paddingLeft: "1rem",
                        }}
                    >
                        <Typography variant="subtitle2" color="lightgray">
                            {role.dates.start.format("MMMM YYYY")} -{" "}
                            {role.dates.end
                                ? role.dates.end.format("MMMM YYYY")
                                : "Present"}
                        </Typography>
                        <Dot />
                        <Typography variant="subtitle2" color="lightgray">
                            {toRelativeTime(role.dates.start, role.dates.end)}
                        </Typography>
                    </Box>
                    {/* Skills */}
                    <WorkSkills skills={role.skills} indent />
                </Content>
            </Content>
        </GlassCard>
    );
};

export default WorkCard;
