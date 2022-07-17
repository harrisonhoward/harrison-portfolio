import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "@react-hook/mouse-position";
import * as DevIcon from "devicons-react";

/**
 *
 * @param {{ icon: keyof import("devicons-react"), top?: string | number,
 * left?: string | number, right?: string | number, bottom?: string | number,
 * width?: string | number, height?: string | number, depth?: number
 * sx?: import("@mui/material").SxProps }} props
 */
function ParallaxIcon(props) {
    const { top, left, right, bottom, width, height } = props;
    const Component = DevIcon[props.icon || "Aarch64Original"];
    const mouseCoords = useMousePosition(document.getElementById("root"));

    return (
        <motion.div
            style={{
                position: "absolute",
                width: width || "32px",
                height: height || "32px",
                //filter: "blur(1px)",
                top,
                left,
                right,
                bottom,
            }}
            animate={{
                x:
                    (mouseCoords.elementHeight / 2 - mouseCoords.clientX) /
                    (props.depth || 15),
                y:
                    (mouseCoords.elementWidth / 2 - mouseCoords.clientY) /
                    (props.depth || 15),
            }}
            transition={{
                type: "spring",
                stiffness: 100,
            }}
        >
            <Component style={props.sx} />
        </motion.div>
    );
}

export default ParallaxIcon;
