import React from "react";
import { useTheme } from "@mui/material";
import Color from "color";

import StyledCode from "./styles/Code";

const TEXT_SHADOW_PX = 0.9;
const TEXT_DARK = 0.8;

/**
 *
 * @param {import("@mui/material").TypographyProps} props
 * @returns
 */
function Code(props) {
    const theme = useTheme();
    const colour = props.color
        ? props.color
        : props?.sx.color
        ? props.sx.color instanceof Function
            ? props.sx.color(theme)
            : props.sx.color
        : theme.palette.primary.main;

    return (
        <StyledCode
            {...props}
            sx={{
                ...props.sx,
                color: colour,
                textShadow:
                    `${TEXT_SHADOW_PX}px 0 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}, ` +
                    `-${TEXT_SHADOW_PX}px 0 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}, ` +
                    `0 ${TEXT_SHADOW_PX}px 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}, ` +
                    `0 -${TEXT_SHADOW_PX}px 0 ${Color(colour).darken(
                        TEXT_DARK
                    )}`,
            }}
        />
    );
}

export default Code;
