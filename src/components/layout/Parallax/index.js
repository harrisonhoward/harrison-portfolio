import React, { useRef, useState } from "react";
import { styled } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";

import ParallaxIcon from "./ParallaxIcon";
import useEventListener from "../../../hooks/useEventListener";

const PARALLAX_DEPTH = 20;

function Parallax() {
    const ParallaxContainer = styled("div")({
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
    });

    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
    useEventListener(
        "mousemove",
        (evt) => {
            setMouseCoords({
                x: (window.innerHeight / 2 - evt.screenX) / PARALLAX_DEPTH,
                y: (window.innerWidth / 2 - evt.screenY) / PARALLAX_DEPTH,
            });
        },
        window
    );

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
                    x: mouseCoords.x,
                    y: mouseCoords.y,
                    transition: {
                        type: "tween",
                    },
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
