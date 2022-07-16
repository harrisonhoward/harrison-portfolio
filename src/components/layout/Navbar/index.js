import React, { useEffect, useState } from "react";
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
    useEventListener("scroll", (evt) => {
        setScrolledAmount(document.scrollingElement.scrollTop);
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
                        width: "100vw",
                        height: "90px",
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
