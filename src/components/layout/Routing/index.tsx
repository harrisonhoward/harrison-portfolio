import { useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Context
import { useRouteContext } from "../../../context/RouteContext";

// Resources
import routes from "../../../data/routes";

/**
 * The duration the x axis takes to complete one phase of the animation.
 * This will be used to prevent you from navigation while the animation is still exiting
 */
export const X_DURATION = 0.4;
const OPACITY_DURATION = 0.3;
const DESKTOP_SPRING = {
    stiffness: 90,
    damping: 13,
    mass: 0.9,
};
const MOBILE_SPRING = {
    stiffness: 90,
    damping: 12,
    mass: 1,
};

export interface RoutingProps {
    isMobile: boolean;
}

const moveLeft = "-100vw";
const moveRight = "100vw";

function Routing(props: RoutingProps) {
    const location = useLocation();
    const { current, previous } = useRouteContext();

    // Using the current route and the previous route calculate whether to move the page to the left or to the right
    const shouldMoveLeft = useMemo(() => {
        const currentRouteIndex = routes.findIndex(
            (route) => route.path === current
        );
        const previousRouteIndex = routes.findIndex(
            (route) => route.path === previous
        );
        return currentRouteIndex > previousRouteIndex;
    }, [current]);

    return (
        <AnimatePresence initial={false} mode="wait">
            <Routes location={location} key={location.pathname}>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <motion.div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                                initial={{
                                    x: shouldMoveLeft ? moveRight : moveLeft,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: X_DURATION,
                                        x: {
                                            type: "spring",
                                            ...(props.isMobile
                                                ? MOBILE_SPRING
                                                : DESKTOP_SPRING),
                                        },
                                        opacity: {
                                            duration: OPACITY_DURATION,
                                        },
                                    },
                                    transitionEnd: {
                                        x: 0,
                                        y: 0,
                                    },
                                }}
                                exit={{
                                    x: shouldMoveLeft ? moveLeft : moveRight,
                                    opacity: 0,
                                    transition: {
                                        x: {
                                            duration: X_DURATION,
                                        },
                                        opacity: {
                                            duration: OPACITY_DURATION,
                                        },
                                    },
                                }}
                            >
                                {route.element}
                            </motion.div>
                        }
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );
}

export default Routing;
