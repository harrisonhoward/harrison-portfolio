import React from "react";
import { Element } from "react-scroll";
import { styled, Box, Typography } from "@mui/material";

import GlassCard from "../components/ui/GlassCard";

function About() {
    const Container = styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    });

    const ProfileImage = styled("div")({
        background: "url(resources/HarrisonHoward.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "132px",
        height: "132px",
    });

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
