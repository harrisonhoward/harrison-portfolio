import React, { useRef, useEffect, useState } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import NavButton from "./NavButton";
import useEventListener from "../../../hooks/useEventListener";

import routes from "../../../data/routes";

/**
 *
 * @param {{ isMobile?: boolean }} props
 */
function Navbar(props) {
    const [scrolledAmount, setScrolledAmount] = useState(0);
    useEffect(() => {
        setScrolledAmount(document.scrollingElement.scrollTop);
    }, []);
    useEventListener("scroll", () => {
        setScrolledAmount(document.scrollingElement.scrollTop);
    });

    const ContainerRef = useRef(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const updateContainerSize = () =>
        setContainerSize({
            width: ContainerRef.current.offsetWidth,
            height: ContainerRef.current.offsetHeight,
        });
    useEffect(() => {
        updateContainerSize();
    }, []);
    useEventListener("resize", updateContainerSize);

    return (
        <AnimatePresence>
            <AppBar position="fixed">
                <motion.div
                    style={{
                        position: "absolute",
                        background: "#09082b",
                        boxShadow:
                            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                        width: containerSize.width,
                        height: "90px",
                        left: `calc(50% - ${containerSize.width}px / 2)`,
                    }}
                    initial={{
                        top: `${-92 + scrolledAmount / 2}px`,
                    }}
                    animate={{
                        top: `${
                            scrolledAmount < 184 ? -92 + scrolledAmount / 2 : 0
                        }px`,
                    }}
                />
                <Toolbar>
                    {props.isMobile ? (
                        <p>m</p>
                    ) : (
                        <Container ref={ContainerRef} variant="nav">
                            {routes.map((route, index) => (
                                <NavButton key={index} to={route.path}>
                                    {route.name}
                                </NavButton>
                            ))}
                        </Container>
                    )}
                </Toolbar>
            </AppBar>
        </AnimatePresence>
    );
}

export default Navbar;
