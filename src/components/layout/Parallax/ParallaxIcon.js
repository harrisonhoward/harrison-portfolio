import React, { useState, memo } from "react";
import { styled } from "@mui/material";
import { motion } from "framer-motion";
import TypeAnimation from "react-type-animation";
import useMousePosition from "@react-hook/mouse-position";
import * as DevIcon from "devicons-react";

import "./ParallaxStyles.css";

const COLOUR = 0;
const TYPED_MEMO = memo(({ ...props }) => (
    <TypeAnimation
        className="animation"
        sequence={[props.label, 3000, ""]}
        cursor={false}
    />
));

/**
 *
 * @param {{ icon: keyof import("devicons-react"), top?: string | number,
 * left?: string | number, right?: string | number, bottom?: string | number,
 * width?: string | number, height?: string | number, depth?: number, label?: string
 * sx?: import("@mui/material").SxProps }} props
 */
function ParallaxIcon(props) {
    const { top, left, right, bottom, width, height } = props;
    const Component = DevIcon[props.icon || "Aarch64Original"];

    const mouseCoords = useMousePosition(document.getElementById("root"));
    const coordX =
        (mouseCoords.elementHeight / 2 - mouseCoords.clientX) /
        (props.depth || 15);
    const coordY =
        (mouseCoords.elementWidth / 2 - mouseCoords.clientY) /
        (props.depth || 15);

    // Container state
    const [mouseOver, setMouseOver] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const [clicked, setClicked] = useState(false);
    // Button
    const IconButton = styled("div")({
        position: "absolute",
        width: "100%",
        height: "100%",
        background: mouseOver
            ? mouseDown
                ? `rgba(${COLOUR},${COLOUR},${COLOUR},0.3)`
                : `rgba(${COLOUR},${COLOUR},${COLOUR},0.2)`
            : `rgba(${COLOUR},${COLOUR},${COLOUR},0.1)`,
        backdropFilter: "blur(5px)",
        borderRadius: "50%",
        padding: "0.5rem",
        transform: "translate3d(-8px,-8px,0)",
        zIndex: -1,
    });

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
            <IconButton />
            <Component style={props.sx} />
            {clicked && props.label && <TYPED_MEMO label={props.label} />}
        </motion.div>
    );
}

export default ParallaxIcon;
