import React, { useEffect } from "react";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

import Parallax from "./components/layout/Parallax";
import Routing from "./components/layout/Routing";

import ContainerDiv from "./features/App/styles/ContainerDiv";
import BlurDiv from "./features/App/styles/BlurDiv";

import useProgressiveImage from "./hooks/useProgressiveImage";

import imagesData from "./data/images";
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

    return (
        <ThemeProvider theme={theme}>
            <ContainerDiv
                isMobile={isMobile}
                desktopBackground={desktopBackground}
                mobileBackground={mobileBackground}
            >
                <BlurDiv />
            </ContainerDiv>
            <Parallax />
            <Routing />
        </ThemeProvider>
    );
}

export default App;
