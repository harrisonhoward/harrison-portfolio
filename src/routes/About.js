import React, { useState, useCallback, useMemo, useRef } from "react";
import { Element } from "react-scroll";
import { Box, Typography } from "@mui/material";
import Color from "color";

import GlassCard from "../components/ui/GlassCard";
import Spangraphy from "../components/ui/Spangraphy";
import Container from "../styles/Container";
import GroupBox from "../styles/GroupBox";
import ProfileImage from "../features/About/styles/ProfileImage";
import DateTooltip from "../components/ui/DateTooltip";
import Code from "../components/ui/Code";
import ParagraphDivider from "../styles/ParagraphDivider";

import useEventListener from "../hooks/useEventListener";

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
    const age = useMemo(() => calculateYears(DOB), []);
    const coding = useMemo(() => calculateYears(new Date(2015, 5, 6)), []);

    const contentRef = useRef(null);
    const [contentSize, setContentSize] = useState({
        width: contentRef.current?.offsetWidth,
        height: contentRef.current?.offsetHeight,
    });
    useEventListener(
        "resize",
        () => {
            setContentSize({
                width: contentRef.current.offsetWidth,
                height: contentRef.current.offsetHeight,
            });
        },
        window
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
                <Box
                    sx={{
                        height: contentSize.height || 242,
                        "@media (max-width: 600px)": {
                            height: "auto",
                            marginLeft: "2rem",
                            marginBottom: "2rem",
                        },
                    }}
                >
                    <GlassCard
                        elevation={10}
                        sx={{
                            padding: "1rem",
                            marginRight: "2rem",
                        }}
                    >
                        <ProfileImage />
                    </GlassCard>
                </Box>
                <GlassCard
                    ref={contentRef}
                    elevation={10}
                    sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: MAX_WIDTH,
                        overflow: "visible",
                        "&:before": {
                            content: "''",
                            position: "absolute",
                            width: 0,
                            height: 0,
                            transform: "translate(-10px, 1rem)",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            borderRight: "10px solid rgba(100, 100, 100, 0.7)",
                            "@media (max-width: 600px)": {
                                transform: `translate(calc(${
                                    contentSize.width || MAX_WIDTH
                                }px / 2 - 0.5rem), -20.5px)`,
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
                                            Color(theme.palette.primary.main)
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
                                , and have been coding since I was 13 years old.
                                I started with Unity making 2D games and evolved
                                into exploring the technology of Full-Stack
                                Website Development.
                            </Typography>
                            <ParagraphDivider />
                            <Typography variant="body1">
                                I am eager to invest and expand my knowledge in
                                the real world, solving real-world problems. I
                                have spent {coding} years learning and
                                discovering new technologies and languages that
                                have given me the experience I need to begin the
                                career I want.
                            </Typography>
                        </Box>
                    </GroupBox>
                </GlassCard>
            </Container>
        </Element>
    );
}

export default About;
