import React, { useState, useEffect } from "react";
import {
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
    styled,
} from "@mui/material/styles";

import Routing from "./components/layout/Routing";

import imagesData from "./data/images.json";

const NAV_HEIGHT = 90;

function App() {
    const theme = responsiveFontSizes(
        createTheme({
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
                            height: NAV_HEIGHT,
                        },
                    },
                },
                MuiContainer: {
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
            },
        })
    );

    // Preload images stored in data
    useEffect(() => {
        Object.values(imagesData).forEach((image) => (new Image().src = image));
    }, []);

    const ContainerDiv = styled("div")({
        position: "absolute",
        background: "url(resources/dark-background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
    });
    const BlurDiv = styled("div")({
        position: "absolute",
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(10px)",
    });
    return (
        <ThemeProvider theme={theme}>
            <ContainerDiv>
                <BlurDiv />
                <Routing />
            </ContainerDiv>
        </ThemeProvider>
    );
}

export default App;
