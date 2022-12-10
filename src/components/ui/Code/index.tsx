import React from "react";
import { Theme, TypographyProps, useTheme } from "@mui/material";
import Color from "color";
import StyledCode from "./styles/Code";

const TEXT_SHADOW = 0.9;
const TEXT_DARK = 0.8;

/**
 * CodeProps is TypographyProps without the component prop
 * And a custom sx handler
 */
export type CodeProps = Omit<TypographyProps, "component"> & {
    sx?: {
        color?: string | ((theme: Theme) => React.CSSProperties["color"]);
    };
};

function Code(props: CodeProps) {
    const theme = useTheme();
    /**
     * Checks for all possible ways to set the color through priority
     * 1. Colour set directly to props
     * 2. Colour set through sx prop
     *  2.1. Colour set through function
     *  2.2. Colour set through string
     * 3. Default to primary colour
     */
    const colour =
        props.color ||
        (props.sx &&
            (typeof props.sx.color === "function"
                ? props.sx.color(theme)
                : props.sx.color)) ||
        theme.palette.primary.main;
    return (
        <StyledCode
            {...props}
            sx={{
                ...props.sx,
                color: colour,
                textShadow:
                    `${TEXT_SHADOW}px 0 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}, ` +
                    `-${TEXT_SHADOW}px 0 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}, ` +
                    `0 ${TEXT_SHADOW}px 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}, ` +
                    `0 -${TEXT_SHADOW}px 0 ${Color(colour).darken(TEXT_DARK)}`,
            }}
        />
    );
}

export default Code;
