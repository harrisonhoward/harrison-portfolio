import React, { useState } from "react";
import { styled } from "@mui/material";
import * as DevIcon from "devicons-react";

/**
 *
 * @param {{ icon: keyof import("devicons-react"), top?: string | number,
 * left?: string | number, right?: string | number, bottom?: string | number,
 * width?: string | number, height?: string | number, sx?: import("@mui/material").SxProps }} props
 */
function ParallaxIcon(props) {
    const { top, left, right, bottom, width, height } = props;
    const Component = DevIcon[props.icon || "Aarch64Original"];
    const IconContainer = styled("div")({
        position: "absolute",
        width: width || "32px",
        height: height || "32px",
        top,
        left,
        right,
        bottom,
    });

    return (
        <IconContainer>
            <Component style={props.sx} />
        </IconContainer>
    );
}

export default ParallaxIcon;
