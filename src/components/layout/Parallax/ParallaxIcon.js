import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import * as DevIcon from "devicons-react";

import IconButton from "./styles/IconButton";

import "./ParallaxStyles.css";

/**
 *
 * @param {{ icon: keyof import("devicons-react"), top?: string | number,
 * left?: string | number, right?: string | number, bottom?: string | number,
 * width?: string | number, height?: string | number, depth?: number, label?: string,
 * sx?: import("@mui/material").SxProps, mouseCoords: import("@react-hook/mouse-position").MousePosition }} props
 */
function ParallaxIcon(props) {
    const { top, left, right, bottom, width, height } = props;
    const Component = DevIcon[props.icon || "Aarch64Original"];

    const coordX =
        (props.mouseCoords.elementHeight / 2 - props.mouseCoords.clientX) /
        (props.depth || 15);
    const coordY =
        (props.mouseCoords.elementWidth / 2 - props.mouseCoords.clientY) /
        (props.depth || 15);

    // Container state
    const [mouseOver, setMouseOver] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const [clicked, setClicked] = useState(false);

    const onMouseOver = (evt) => {
        setMouseOver(true);
    };

    const onMouseOut = (evt) => {
        setMouseOver(false);
    };

    const onMouseDown = (evt) => {
        setMouseDown(true);
        document.addEventListener("mouseup", () => setMouseDown(false), {
            once: true,
        });
    };

    const onClick = () => {
        if (!clicked) {
            setClicked(true);
            setTimeout(() => setClicked(false), 5000);
        }
    };

    return (
        <motion.div
            style={{
                position: "absolute",
                width: width || "32px",
                height: height || "32px",
                userSelect: "none",
                top,
                left,
                right,
                bottom,
            }}
            animate={{
                translateX: coordX,
                translateY: coordY,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
            }}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onMouseDown={onMouseDown}
            onClick={onClick}
        >
            <IconButton mousedown={`${mouseDown}`} mouseover={`${mouseOver}`} />
            <Component style={props.sx} />
            {clicked && props.label && (
                <TypeAnimation
                    className="animation"
                    sequence={[props.label, 3000, ""]}
                    cursor={false}
                />
            )}
        </motion.div>
    );
}

export default ParallaxIcon;
