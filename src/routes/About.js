import React from "react";
import { Element } from "react-scroll";
import { Box, Typography } from "@mui/material";

import GlassCard from "../components/ui/GlassCard";
import Container from "../styles/Container";
import ProfileImage from "../features/About/styles/ProfileImage";

function About() {
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
                    <Typography>Content</Typography>
                </GlassCard>
            </Container>
        </Element>
    );
}

export default About;
