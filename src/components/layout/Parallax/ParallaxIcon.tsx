import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import DevIcons from "devicons-react";

// Components
import DevIconButton from "./styles/DevIconButton";

// Styles
import "./ParallaxStyles.css";

// Types
import { ParallaxItem } from "../../../data/parallaxIcons";
import { MousePosition } from "@react-hook/mouse-position";

export interface ParallaxIconProps extends ParallaxItem {
    width?: React.CSSProperties["width"];
    height?: React.CSSProperties["height"];
    mouseCoords?: MousePosition;
}

function ParallaxIcon(props: ParallaxIconProps) {
    const { top, left, right, bottom, width, height } = props;
    const DevIconComponent = DevIcons[props.icon || "Aarch64Original"];

    let coordX = 0;
    let coordY = 0;
    if (props.mouseCoords) {
        coordX =
            ((props.mouseCoords.elementHeight || 0) / 2 -
                (props.mouseCoords.clientX || 0)) /
            (props.depth || 15);
        coordY =
            ((props.mouseCoords.elementWidth || 0) / 2 -
                (props.mouseCoords.clientY || 0)) /
            (props.depth || 15);
    }

    // State
    const [mouseOver, setMouseOver] = useState(false);
    const [mouseDown, setMouseDown] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleMouseOver = () => {
        setMouseOver(true);
    };

    const handleMouseOut = () => {
        setMouseOver(false);
    };

    const handleMouseDown = () => {
        setMouseDown(true);
        document.addEventListener("mouseup", () => setMouseDown(false), {
            once: true,
        });
    };

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            setTimeout(() => setClicked(false), 5000);
        }
    };

    return (
        <motion.div
            className="parallax-icon"
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
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
            onClick={handleClick}
        >
            <DevIconButton
                colour={0}
                mousedown={mouseDown}
                mouseover={mouseOver}
            />
            <DevIconComponent style={props.sx} size={props.width || "32px"} />
            {clicked && props.label && (
                <TypeAnimation
                    className="animation"
                    sequence={[props.label, 3000, ""]}
                    cursor={false}
                    wrapper="div"
                />
            )}
        </motion.div>
    );
}

export default ParallaxIcon;
