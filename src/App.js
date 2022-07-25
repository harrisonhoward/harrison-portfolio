import React, { useEffect } from "react";
import {
    ThemeProvider,
    createTheme,
    styled,
    useMediaQuery,
} from "@mui/material";

import Parallax from "./components/layout/Parallax";
import Routing from "./components/layout/Routing";

import useProgressiveImage from "./hooks/useProgressiveImage";

import imagesData from "./data/images";
import navGlobals from "./data/navGlobals.json";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        background: "rgba(0,0,0,0)",
                        boxShadow: "none",
                    },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        height: navGlobals.height,
                    },
                },
            },
            MuiContainer: {
                styleOverrides: {
                    root: {
                        transition: "all 0.5s ease-in-out",
                    },
                },
                variants: [
                    {
                        props: { variant: "nav" },
                        style: {
                            display: "flex",
                            alignItems: "center",
                            width: "unset",
                        },
                    },
                ],
            },
            MuiTypography: {
                variants: [
                    {
                        props: { variant: "nav" },
                        style: {
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                                color: "#c9a240",
                            },
                        },
                    },
                    {
                        props: { type: "nav-active" },
                        style: {
                            color: "#ffd15c",
                            "&:hover": {
                                color: "#c9a240",
                            },
                        },
                    },
                ],
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        background: "rgba(26, 26, 26, 0.5)",
                        backdropFilter: "blur(5px)",
                        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                    },
                },
            },
        },
    });
    // Preload images stored in data
    useEffect(() => {
        imagesData.forEach((image) => (new Image().src = image));
    }, []);
    // Progressively load background
    const isMobile = useMediaQuery("(max-width: 600px)");
    const desktopBackground = useProgressiveImage(
        "resources/dark-background-low.jpg",
        "resources/dark-background-high.jpg"
    );
    const mobileBackground = useProgressiveImage(
        "resources/dark-background-low-mobile.jpg",
        "resources/dark-background-high-mobile.jpg"
    );

    const ContainerDiv = styled("div")({
        position: "fixed",
        background: `url(${isMobile ? mobileBackground : desktopBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: -1,
    });
    const BlurDiv = styled("div")({
        position: "fixed",
        height: "100vh",
        width: "100vw",
    });
    return (
        <ThemeProvider theme={theme}>
            <ContainerDiv>
                <BlurDiv />
            </ContainerDiv>
            <Parallax />
            <Routing />
        </ThemeProvider>
    );
}

export default App;
