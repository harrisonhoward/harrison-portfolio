import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMousePosition from "@react-hook/mouse-position";
import { styled } from "@mui/material";

import ParallaxIcon from "./ParallaxIcon";
import useEventListener from "../../../hooks/useEventListener";

const PARALLAX_DEPTH = 20;

function Parallax() {
    const mouseCoords = useMousePosition(document.getElementById("root"), {
        fps: 60,
    });

    return (
        <AnimatePresence initial={false}>
            <motion.div
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    height: "100vh",
                    width: "100vw",
                    overflow: "hidden",
                }}
                animate={{
                    x:
                        -(mouseCoords.elementHeight / 2 - mouseCoords.clientX) /
                        PARALLAX_DEPTH,
                    y:
                        -(mouseCoords.elementWidth / 2 - mouseCoords.clientY) /
                        PARALLAX_DEPTH,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                }}
            >
                <ParallaxIcon
                    icon="JavascriptOriginal"
                    top="10%"
                    left="10%"
                    sx={{
                        borderRadius: "20%",
                    }}
                />
            </motion.div>
        </AnimatePresence>
    );
}

export default Parallax;
