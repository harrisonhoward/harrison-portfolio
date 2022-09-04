import React, { useCallback, useMemo } from "react";
import { Element } from "react-scroll";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Color from "color";

import GlassCard from "../components/ui/GlassCard";
import Spangraphy from "../components/ui/Spangraphy";
import Container from "../styles/Container";
import GroupBox from "../styles/GroupBox";
import ProfileImage from "../features/About/styles/ProfileImage";
import DateTooltip from "../components/ui/DateTooltip";
import Code from "../components/ui/Code";
import ParagraphDivider from "../styles/ParagraphDivider";

import useProgressiveImage from "../hooks/useProgressiveImage";

const DOB = new Date(2002, 5, 6);
const MAX_WIDTH = 600;

function About() {
    // Using year, month and day to calculate years past
    const calculateYears = useCallback((date) => {
        const today = new Date();
        const age = today.getFullYear() - date.getFullYear();
        const m = today.getMonth() - date.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < date.getDate()))
            return age - 1;
        return age;
    }, []);
    const age = useMemo(() => calculateYears(DOB), [calculateYears]);
    const coding = useMemo(
        () => calculateYears(new Date(2015, 5, 6)),
        [calculateYears]
    );

    const isMobile = useMediaQuery("(max-width: 600px)");
    const profileBackgroundDesktop = useProgressiveImage(
        "resources/profile/HarrisonHoward-low.jpg",
        "resources/profile/HarrisonHoward-high.jpg"
    );
    const profileBackgroundMobile = useProgressiveImage(
        "resources/profile/HarrisonHoward-low-mobile.jpg",
        "resources/profile/HarrisonHoward-high-mobile.jpg"
    );

    return (
        <Element name="/about">
            <Container
                sx={{
                    margin: "0 1rem",
                    "@media (max-width: 600px)": {
                        flexDirection: "column",
                    },
                }}
            >
                <GroupBox
                    sx={{
                        "@media (max-width: 600px)": {
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    <GlassCard
                        elevation={10}
                        sx={{
                            maxHeight: "210px",
                            minWidth: "140px",
                            marginRight: "2rem",
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                marginBottom: "2rem",
                                marginRight: 0,
                            },
                        }}
                    >
                        <ProfileImage
                            background={
                                isMobile
                                    ? profileBackgroundMobile
                                    : profileBackgroundDesktop
                            }
                            sx={{
                                "@media (min-width: 600px)": {
                                    height: "100%",
                                    width: "100%",
                                },
                            }}
                        />
                    </GlassCard>
                    <GlassCard
                        elevation={10}
                        sx={{
                            position: "relative",
                            width: "100%",
                            maxWidth: MAX_WIDTH,
                            overflow: "visible",
                            "&:before": {
                                content: "''",
                                position: "absolute",
                                transform: "translate(-10px, 1rem)",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                borderRight:
                                    "10px solid rgba(100, 100, 100, 0.7)",
                                "@media (max-width: 600px)": {
                                    transform: `translate(-50%, -20.5px)`,
                                    left: "50%",
                                    borderLeft: "10px solid transparent",
                                    borderRight: "10px solid transparent",
                                    borderBottom:
                                        "10px solid rgba(100, 100, 100, 0.7)",
                                },
                            },
                        }}
                    >
                        <GroupBox
                            sx={{
                                margin: "1rem",
                            }}
                        >
                            <Box>
                                <Typography variant="body1">
                                    Hi, I'm{" "}
                                    <Code
                                        sx={{
                                            color: (theme) =>
                                                Color(
                                                    theme.palette.primary.main
                                                )
                                                    .lighten(0.6)
                                                    .string(),
                                        }}
                                    >
                                        Harrison Howard
                                    </Code>{" "}
                                    a Full-Stack Website Developer based in
                                    Brisbane, Australia. I am currently{" "}
                                    <DateTooltip
                                        date={DOB}
                                        dateFormat={"dddd, Do of MMMM YYYY"}
                                    >
                                        <Spangraphy>{age} years old</Spangraphy>
                                    </DateTooltip>
                                    , and have been coding since I was 13 years
                                    old. I started with Unity making 2D games
                                    and evolved into exploring the technology of
                                    Full-Stack Website Development.
                                </Typography>
                                <ParagraphDivider />
                                <Typography variant="body1">
                                    I am eager to invest and expand my knowledge
                                    in the real world, solving real-world
                                    problems. I have spent {coding} years
                                    learning and discovering new technologies
                                    and languages that have given me the
                                    experience I need to begin the career I
                                    want.
                                </Typography>
                            </Box>
                        </GroupBox>
                    </GlassCard>
                </GroupBox>
            </Container>
        </Element>
    );
}

export default About;
