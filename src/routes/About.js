import React, { useMemo } from "react";
import { Element } from "react-scroll";
import { Box, Typography } from "@mui/material";

import GlassCard from "../components/ui/GlassCard";
import Spangraphy from "../components/ui/Spangraphy";
import Container from "../styles/Container";
import GroupBox from "../styles/GroupBox";
import ProfileImage from "../features/About/styles/ProfileImage";
import DateTooltip from "../components/ui/DateTooltip";

const DOB = new Date(2002, 5, 6);

function About() {
    // Using year, month and day calculate my age
    const age = useMemo(() => {
        const today = new Date();
        const age = today.getFullYear() - DOB.getFullYear();
        const m = today.getMonth() - DOB.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < DOB.getDate()))
            return age - 1;
        return age;
    }, []);

    return (
        <Element name="/about">
            <Container>
                <Box
                    sx={{
                        height: "334px",
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
                    elevation={10}
                    sx={{
                        position: "relative",
                        width: "50%",
                        height: "332px",
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
                        },
                    }}
                >
                    <GroupBox
                        sx={{
                            marginTop: "1rem",
                            marginLeft: "1rem",
                        }}
                    >
                        <Box>
                            <Typography variant="body1">
                                I am currently&nbsp;
                                <DateTooltip
                                    date={DOB}
                                    dateFormat={"dddd, Do MMMM YYYY"}
                                >
                                    <Spangraphy>{age} years old</Spangraphy>
                                </DateTooltip>
                            </Typography>
                        </Box>
                    </GroupBox>
                </GlassCard>
            </Container>
        </Element>
    );
}

export default About;
