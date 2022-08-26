import React from "react";
import { AnimatePresence } from "framer-motion";
import useMousePosition from "@react-hook/mouse-position";

import ParallaxIcon from "./ParallaxIcon";
import ParallaxContainer from "./styles/ParallaxContainer";

import PARALLAX_ITEMS from "../../../data/parallaxicons";

function Parallax() {
    const mouseCoords = useMousePosition(document.getElementById("root"));
    return (
        <AnimatePresence initial={false}>
            <ParallaxContainer>
                {PARALLAX_ITEMS.map((item, index) => (
                    <ParallaxIcon
                        {...item}
                        key={index}
                        sx={item.sx || { borderRadius: "20%" }}
                        mouseCoords={mouseCoords}
                    />
                ))}
            </ParallaxContainer>
        </AnimatePresence>
    );
}

export default Parallax;
