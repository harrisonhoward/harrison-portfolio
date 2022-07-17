import React, { useRef, useEffect, useState } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import NavButton from "./NavButton";
import useEventListener from "../../../hooks/useEventListener";

import routes from "../../../data/routes";
import navGlobals from "../../../data/navGlobals.json";

/**
 *
 * @param {{ isMobile?: boolean }} props
 */
function Navbar(props) {
    const [scrolledAmount, setScrolledAmount] = useState(0);
    // Prevent the state from updating unnecessarily
    const updateScolledAmount = (amount) => {
        if (amount < navGlobals.scrollLimit) setScrolledAmount(amount);
        else if (
            amount > navGlobals.scrollLimit &&
            scrolledAmount < navGlobals.scrollLimit
        )
            setScrolledAmount(navGlobals.scrollLimit);
    };
    useEffect(() => {
        updateScolledAmount(document.scrollingElement.scrollTop);
    }, []);
    useEventListener("scroll", () => {
        updateScolledAmount(document.scrollingElement.scrollTop);
    });

    return (
        <AnimatePresence>
            <AppBar position="fixed">
                <motion.div
                    style={{
                        position: "absolute",
                        background: "#09082b",
                        boxShadow:
                            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
                        width: "575px",
                        height: navGlobals.height + 20,
                        left: "calc(50% - 575px / 2)",
                    }}
                    initial={false}
                    animate={{
                        top:
                            scrolledAmount === navGlobals.scrollLimit
                                ? -20
                                : -(navGlobals.height + 30),
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                    }}
                />
                <Toolbar>
                    {props.isMobile ? (
                        <p>m</p>
                    ) : (
                        <Container variant="nav">
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
