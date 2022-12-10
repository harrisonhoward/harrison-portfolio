import { useMemo } from "react";
import { Typography, IconButton, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

// Components
import ProfileImage from "../features/Home/styles/ProfileImage";
import GlassCard from "../components/ui/GlassCard";
import Spangraphy from "../components/ui/Spangraphy";
import Container from "../styles/Container";
import GroupBox from "../styles/GroupBox";

// Hooks
import useProgressiveImage from "../hooks/useProgressiveImage";

// Resources
import redirects from "../data/redirects";
import myInfo from "../data/myInfo";

function Home() {
    const h4FontClamping = "clamp(0rem, 7vw, 2.125rem)";
    const h5FontClamping = "clamp(0rem, 6vw, 1.5rem)";

    const profileBackground = useProgressiveImage(
        "resources/profile/HarrisonHoward-low-mobile.jpg",
        "resources/profile/HarrisonHoward-high-mobile.jpg"
    );

    // TypeAnimation uses a memo anyway so if the value changes it won't change until a remount
    const describeMe = useMemo(
        () => myInfo.describeMe.map((item) => [item, 1000]).flat(),
        []
    );

    return (
        <Container>
            <GlassCard
                elevation={10}
                sx={{ alignItems: "center", padding: "1rem" }}
            >
                <ProfileImage background={profileBackground} />
                <Typography
                    variant="h4"
                    fontWeight={500}
                    fontSize={h4FontClamping}
                >
                    Hi, I'm{" "}
                    <Spangraphy color="primary.light">
                        {myInfo.name.standard}
                    </Spangraphy>
                </Typography>
                <Typography
                    variant="h5"
                    fontSize={h5FontClamping}
                    sx={{ marginBottom: "1rem" }}
                >
                    I am a{" "}
                    <Spangraphy fontWeight={500} color="secondary.light">
                        <TypeAnimation
                            className="animation-home"
                            sequence={describeMe}
                            wrapper="h5"
                            repeat={Infinity}
                        />
                    </Spangraphy>
                </Typography>
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
                                        color: "rgba(255, 255, 255, 0.8)",
                                    },
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={redirect.icon}
                                    color="white"
                                />
                            </IconButton>
                        </Tooltip>
                    ))}
                </GroupBox>
            </GlassCard>
        </Container>
    );
}

export default Home;
