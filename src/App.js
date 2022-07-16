import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import imagesData from "./data/images.json";

function App() {
    const [themeType, setThemeType] = useState("dark");
    const theme = createTheme({});

    const setDarkTheme = () => setThemeType("dark");
    const setLightTheme = () => setThemeType("light");
    const toggleTheme = () =>
        setThemeType(themeType === "dark" ? "light" : "dark");

    // Preload images stored in data
    useEffect(() => {
        Object.values(imagesData).forEach((image) => (new Image().src = image));
    }, []);

    return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
