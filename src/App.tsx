import { useEffect } from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";

// Components
import PageContainer from "./features/App/styles/PageContainer";
import Blur from "./features/App/styles/Blur";
import Parallax from "./components/layout/Parallax";
import Navbar from "./components/layout/Navbar";
import Routing from "./components/layout/Routing";

// Hooks
import useProgressiveImage from "./hooks/useProgressiveImage";

// Resources
import preloadImages from "./data/preloadImages";
import glass_dark from "./themes/glass_dark";

function App() {
    // Preload images set in preloadImages
    useEffect(() => {
        preloadImages.forEach((image) => {
            new Image().src = image;
        });
    }, []);

    // Progessively load the background for desktop and mobile
    const isMobile = useMediaQuery("(max-width: 600px)");
    const desktopBackground = useProgressiveImage(
        "resources/background/dark-background-low.jpg",
        "resources/background/dark-background-high.jpg"
    );
    const mobileBackground = useProgressiveImage(
        "resources/background/dark-background-low-mobile.jpg",
        "resources/background/dark-background-high-mobile.jpg"
    );

    return (
        <ThemeProvider theme={glass_dark}>
            <PageContainer
                background={isMobile ? mobileBackground : desktopBackground}
            >
                <Blur />
            </PageContainer>
            {isMobile ? null : <Parallax />}
            <Navbar />
            <Routing isMobile={isMobile} />
        </ThemeProvider>
    );
}

export default App;
