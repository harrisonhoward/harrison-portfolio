import { createTheme, Palette, PaletteColor, Zoom } from "@mui/material";
import Color from "color";

import navGlobals from "../data/navGlobals";
import { GLOBAL_PREFIX } from "../core/ClassNameGenerator";

export const PrimaryMain = Color("#11a2cf");
export const SecondaryMain = Color("#12e69c");

declare module "@mui/material" {
    export type PaletteColors = Omit<
        Palette,
        {
            [K in keyof Palette]: Palette[K] extends PaletteColor ? never : K;
        }[keyof Palette]
    >;
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
        MuiIconButton: {
            variants: [
                {
                    // As any because TypeScript complains but this is a perfectly acceptable use case
                    props: { target: undefined } as any,
                    style: {
                        background: "rgba(26, 26, 26, 0.4)",
                        backdropFilter: "blur(5px)",
                        border: "1px solid rgba(255, 255, 255, 0)",
                        transition: "all 200ms ease-in-out",
                        transitionProperty: "background, border, opacity",
                        ":hover": {
                            background: "rgba(100, 100, 100, 0.6)",
                            border: "1px solid rgba(200, 200, 200, 0.1)",
                            opacity: 0.6,
                        },
                    },
                },
            ],
        },
        MuiSpeedDial: {
            styleOverrides: {
                root: {
                    [`& > .${GLOBAL_PREFIX}ButtonBase-root`]: {
                        background: PrimaryMain.rgb().alpha(0.5).toString(),
                        backdropFilter: "blur(5px)",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        ":hover": {
                            background: PrimaryMain.rgb().alpha(0.6).toString(),
                            border: "1px solid rgba(200, 200, 200, 0.1)",
                            opacity: 0.6,
                        },
                    },
                    [`.${GLOBAL_PREFIX}SpeedDial-actions > .${GLOBAL_PREFIX}ButtonBase-root`]:
                        {
                            background: "rgba(26, 26, 26, 0.8)",
                            backdropFilter: "blur(5px)",
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                            ":hover": {
                                background: "rgba(26, 26, 26, 0.6)",
                                border: "1px solid rgba(200, 200, 200, 0.1)",
                            },
                        },
                },
            },
        },
    },
});

export default glass_dark;
