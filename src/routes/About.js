import React, { useMemo } from "react";
import { Element } from "react-scroll";
import { Box, Typography } from "@mui/material";

import GlassCard from "../components/ui/GlassCard";
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
                            marginRight: "0.5rem",
                        }}
                    >
                        <ProfileImage />
                    </GlassCard>
                </Box>
                <GlassCard
                    elevation={10}
                    sx={{
                        width: "50%",
                        height: "332px",
                        overflow: "visible",
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
                                    <span>{age} years old</span>
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
