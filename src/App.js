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
import glass_dark from "./themes/glass_dark";

function App() {
    const theme = createTheme(glass_dark);
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
