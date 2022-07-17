import React from "react";
import { AnimatePresence } from "framer-motion";
import { styled } from "@mui/material";

import ParallaxIcon from "./ParallaxIcon";

/**
 * @type {{ icon: keyof import("devicons-react"), top?: string | number,
 * left?: string | number, right?: string | number, bottom?: string | number,
 * depth?: number }[]}
 */
const PARALLAX_ITEMS = [
    {
        icon: "JavascriptOriginal",
        top: "10%",
        left: "10%",
        depth: 15,
    },
    {
        icon: "ReactOriginal",
        top: "20%",
        left: "25%",
        depth: 20,
    },
    {
        icon: "ReduxOriginal",
        top: "25%",
        left: "50%",
        depth: 30,
    },
    {
        icon: "Html5Original",
        top: "60%",
        left: "20%",
        depth: 30,
    },
    {
        icon: "Css3Original",
        top: "75%",
        left: "40%",
        depth: 25,
    },
    {
        icon: "PostgresqlOriginal",
        top: "40%",
        left: "80%",
        depth: 60,
    },
    {
        icon: "MongodbOriginal",
        top: "15%",
        left: "70%",
        depth: 50,
    },
    {
        icon: "GithubOriginal",
        top: "80%",
        left: "80%",
        depth: 80,
        sx: {
            borderRadius: "10%",
            background: "white",
        },
    },
];

function Parallax() {
    const ParallaxContainer = styled("div")({
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
    });

    return (
        <AnimatePresence initial={false}>
            <ParallaxContainer>
                {PARALLAX_ITEMS.map((item, index) => (
                    <ParallaxIcon
                        {...item}
                        key={index}
                        sx={item.sx || { borderRadius: "20%" }}
                    />
                ))}
            </ParallaxContainer>
        </AnimatePresence>
    );
}

export default Parallax;
