import { Box, useMediaQuery } from "@mui/material";

// Components
import GlassCard from "../components/ui/GlassCard";
import Container from "../styles/Container";
import GroupBox from "../styles/GroupBox";
import ProfileImage from "../features/About/styles/ProfileImage";

// Hooks
import useProgressiveImage from "../hooks/useProgressiveImage";
import useTextToComponent from "../hooks/useTextToComponent";

// Resources
import myInfo from "../data/myInfo";

// Constants
const MAX_WIDTH = 600;

function About() {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const profileBackgroundDesktop = useProgressiveImage(
        "resources/profile/HarrisonHoward-low.jpg",
        "resources/profile/HarrisonHoward-high.jpg"
    );
    const profileBackgroundMobile = useProgressiveImage(
        "resources/profile/HarrisonHoward-low-mobile.jpg",
        "resources/profile/HarrisonHoward-high-mobile.jpg"
    );

    const AboutMe = useTextToComponent(myInfo.aboutMe, myInfo);

    return (
        <Container sx={{ margin: "0 1rem" }}>
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
                        minWidth: "142px",
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
                            transform: "translate(-10.5px, 1rem)",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            borderRight: "10px solid rgba(100, 100, 100, 0.7)",
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
                        <Box
                            sx={{
                                "*:not(:last-child)": {
                                    marginBottom: "1rem",
                                },
                            }}
                        >
                            {AboutMe}
                        </Box>
                    </GroupBox>
                </GlassCard>
            </GroupBox>
        </Container>
    );
}

export default About;
