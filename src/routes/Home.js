import React, { useState } from "react";
import { Element } from "react-scroll";
import { Typography, IconButton, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

import GlassCard from "../components/ui/GlassCard";
import Container from "../styles/Container";
import GroupBox from "../styles/GroupBox";
import ProfileImage from "../features/Home/styles/ProfileImage";

import redirects from "../data/redirects";

function Home() {
    const [iconColour] = useState({});

    const h4FontClamping = "clamp(0rem, 8vw, 2.125rem)";
    const h5FontClamping = "clamp(0rem, 7vw, 1.5rem)";

    return (
        <Element name="/">
            <Container>
                <GlassCard
                    elevation={10}
                    sx={{
                        alignItems: "center",
                        padding: "1rem",
                    }}
                >
                    <ProfileImage />
                    <GroupBox>
                        <Typography
                            variant="h4"
                            fontWeight={500}
                            fontSize={h4FontClamping}
                        >
                            Hi, I'm&nbsp;
                        </Typography>
                        <Typography
                            variant="h4"
                            color="primary.dark"
                            fontWeight={500}
                            fontSize={h4FontClamping}
                        >
                            Harrison Howard
                        </Typography>
                    </GroupBox>
                    <GroupBox
                        sx={{
                            marginBottom: "1rem",
                        }}
                    >
                        <Typography variant="h5" fontSize={h5FontClamping}>
                            I am a&nbsp;
                        </Typography>
                        <TypeAnimation
                            className="animation-home"
                            sequence={[
                                "Full-Stack Developer",
                                1000,
                                "React Developer",
                                1000,
                                "Passionate Learner",
                                1000,
                            ]}
                            wrapper="h5"
                            repeat={Infinity}
                        />
                    </GroupBox>
                    <GroupBox>
                        {redirects.map((redirect, index) => (
                            <Tooltip
                                key={index}
                                title={redirect.label}
                                placement="bottom"
                            >
                                <IconButton
                                    href={redirect.link.replace(
                                        /{username}/gi,
                                        redirect.username
                                    )}
                                    target="_blank"
                                    sx={{
                                        "&:hover": {
                                            color: "rgba(255, 255, 255, 0.5)",
                                        },
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={redirect.icon}
                                        color={iconColour[redirect.label]}
                                    />
                                </IconButton>
                            </Tooltip>
                        ))}
                    </GroupBox>
                </GlassCard>
            </Container>
        </Element>
    );
}

export default Home;
