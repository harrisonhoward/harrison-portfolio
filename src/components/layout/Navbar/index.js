import React, { useEffect, useState } from "react";
import {
    useMediaQuery,
    AppBar,
    Toolbar,
    Container,
    Box,
    SwipeableDrawer,
    IconButton,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";
import useEventListener from "../../../hooks/useEventListener";

import routes from "../../../data/routes";
import navGlobals from "../../../data/navGlobals.json";

function Navbar() {
    const isMobile = useMediaQuery("(max-width: 511px)");

    const [drawerOpen, setDrawerOpen] = useState(false);
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

    const handleDrawer = (value) => () =>
        setDrawerOpen(typeof value === "boolean" ? !!value : !drawerOpen);

    return (
        <AnimatePresence>
            <AppBar position="fixed">
                <motion.div
                    style={{
                        position: "absolute",
                        background: "rgba(26, 26, 26, 0.8)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        width: "575px",
                        height: navGlobals.height + 30,
                        left: "calc(50% - 575px / 2)",
                    }}
                    initial={false}
                    animate={{
                        top:
                            scrolledAmount === navGlobals.scrollLimit
                                ? -30
                                : -(navGlobals.height + 40),
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                    }}
                />
                <Toolbar>
                    <Box
                        sx={{
                            display: isMobile ? "inherit" : "none",
                        }}
                    >
                        <IconButton onClick={handleDrawer()}>
                            <FontAwesomeIcon icon={faBars} />
                        </IconButton>
                        <SwipeableDrawer
                            open={drawerOpen}
                            onOpen={handleDrawer(true)}
                            onClose={handleDrawer(false)}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            {routes.map((route, index) => (
                                <NavButton key={index} to={route.path} isMobile>
                                    {route.name}
                                </NavButton>
                            ))}
                        </SwipeableDrawer>
                    </Box>
                    <Container
                        variant="nav"
                        sx={{
                            display: isMobile ? "none" : "inherit",
                        }}
                    >
                        {routes.map((route, index) => (
                            <NavButton key={index} to={route.path}>
                                {route.name}
                            </NavButton>
                        ))}
                    </Container>
                </Toolbar>
            </AppBar>
        </AnimatePresence>
    );
}

export default Navbar;
