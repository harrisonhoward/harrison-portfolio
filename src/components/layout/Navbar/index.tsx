import { useCallback, useEffect, useRef } from "react";
import { AppBar, Container, Toolbar, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useBoolean } from "usehooks-ts";

// Components
import NavButton from "./NavButton";
import NavMobile from "./NavMobile";

// Hooks
import useScroll from "../../../hooks/useScroll";

// Resources
import routes from "../../../data/routes";
import navGlobals from "../../../data/navGlobals";
import { X_DURATION } from "../Routing";

function Navbar() {
    // Logic for the animation timeout
    const animationTimeoutRef = useRef<number>();
    const { value: animating, setValue: setAnimating } = useBoolean(false);

    const {
        value: drawerOpen,
        setValue: setDrawerOpen,
        toggle: toggleDrawer,
    } = useBoolean(false);

    const isMobile = useMediaQuery("(max-width: 511px)");

    const scrollAmount = useScroll({ limit: navGlobals.scrollLimit });

    // Clear timeouts when unmounting (not necessary due to this being a layout component but still good practice)
    useEffect(() => {
        return () => {
            clearTimeout(animationTimeoutRef.current);
        };
    }, []);

    // When mobile is set to false ensure drawer is now closed
    useEffect(() => {
        if (!isMobile && drawerOpen) {
            setDrawerOpen(false);
        }
    }, [isMobile]);

    // Handle nav button click to prevent clicking another button while the page is still exiting
    const handleClick = useCallback(() => {
        if (!animating) {
            setAnimating(true);
            animationTimeoutRef.current = setTimeout(() => {
                setAnimating(false);
            }, X_DURATION * 1000);
        }
    }, [animating, setAnimating]);

    return (
        <AnimatePresence>
            <AppBar position="fixed">
                <motion.div
                    style={{
                        position: "absolute",
                        background: "rgba(26, 26, 26, 0.5)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        width: navGlobals.width,
                        height: navGlobals.height + 30,
                        left: `calc(50% - ${navGlobals.width}px / 2)`,
                    }}
                    initial={false}
                    animate={{
                        top:
                            scrollAmount === navGlobals.scrollLimit
                                ? -30
                                : -(navGlobals.height + 40),
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                    }}
                />
                <Toolbar>
                    {isMobile ? (
                        <NavMobile
                            routes={routes}
                            drawer={drawerOpen}
                            setDrawer={setDrawerOpen}
                            toggleDrawer={toggleDrawer}
                        />
                    ) : (
                        // Container doesn't support variant, use ID to enable nav styles
                        <Container id="nav">
                            {routes
                                // noNav is used to hide routes from the navbar
                                .filter((route) => !route.noNav)
                                .map((route, index) => (
                                    <NavButton
                                        key={index}
                                        to={route.path}
                                        animating={animating}
                                        onClick={handleClick}
                                    >
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
