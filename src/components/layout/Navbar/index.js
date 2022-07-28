import React, { useEffect, useState } from "react";
import {
    useMediaQuery,
    AppBar,
    Toolbar,
    Container,
    SwipeableDrawer,
    IconButton,
    MenuItem,
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
                    {isMobile ? (
                        <>
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
                                    <MenuItem key={index}>
                                        <NavButton to={route.path}>
                                            {route.name}
                                        </NavButton>
                                    </MenuItem>
                                ))}
                            </SwipeableDrawer>
                        </>
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
