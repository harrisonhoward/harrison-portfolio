import { createTheme, Zoom } from "@mui/material";
import Color from "color";

import navGlobals from "../data/navGlobals";

const PrimaryMain = Color("#11a2cf");
const SecondaryMain = Color("#12e69c");

declare module "@mui/material" {
    interface ContainerPropsVariantOverrides {
        nav: true;
    }

    interface TypographyPropsVariantOverrides {
        nav: true;
        "nav-active": true;
    }
}

const glass_dark = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: PrimaryMain.lighten(0.5).hex(),
            main: PrimaryMain.hex(),
            dark: PrimaryMain.darken(0.3).hex(),
            contrastText: "black",
        },
        secondary: {
            light: SecondaryMain.lighten(0.5).hex(),
            main: SecondaryMain.hex(),
            dark: SecondaryMain.darken(0.3).hex(),
            contrastText: "black",
        },
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
                    props: { id: "nav" },
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
                    props: { variant: "nav-active" },
                    style: {
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        transition: "all 0.2s ease-in-out",
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
                    background: "rgba(6, 6, 6, 0.5)",
                    backdropFilter: "blur(5px)",
                    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                },
            },
        },
        MuiTooltip: {
            defaultProps: {
                enterTouchDelay: 100,
                TransitionComponent: Zoom,
                TransitionProps: { timeout: 300 },
            },
            styleOverrides: {
                tooltip: {
                    background: "rgba(6, 6, 6, 0.5)",
                    backdropFilter: "blur(5px)",
                    fontSize: "0.8rem",
                    padding: "0.4rem 0.5rem",
                },
                arrow: {
                    color: "rgba(6, 6, 6, 0.5)",
                    backdropFilter: "blur(5px)",
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    display: "flex",
                    flexDirection: "column",
                    background: "rgba(26, 26, 26, 0.4)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                },
            },
        },
    },
});

export default glass_dark;
