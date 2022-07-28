import navGlobals from "../data/navGlobals.json";

/**
 * @type {import("@mui/material").ThemeOptions}
 */
const glass_dark = {
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
};

export default glass_dark;
