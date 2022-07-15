import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
    const [themeType, setThemeType] = useState("dark");
    const theme = createTheme({});

    const setDarkTheme = () => setThemeType("dark");
    const setLightTheme = () => setThemeType("light");
    const toggleTheme = () =>
        setThemeType(themeType === "dark" ? "light" : "dark");

    return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
