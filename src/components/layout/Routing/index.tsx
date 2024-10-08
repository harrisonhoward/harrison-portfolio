import { useEffect, useMemo, useRef } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    // Special code for strict mode where it runs navigate twice
    const historyTrack = useRef<string | undefined>(location.pathname);
    const { current, previous, update } = useRouteContext();

    useEffect(() => {
        // We have to navigate here instead of when the user clicks the button.
        // This is because the framer animation will animate before this has had a chance to update
        if (
            current !== location.pathname &&
            historyTrack.current &&
            historyTrack.current !== current
        ) {
            navigate(current);
            historyTrack.current = current;
        }
    }, [current, location, historyTrack]);

    // Using the current route and the previous route calculate whether to move the page to the left or to the right
    const shouldMoveLeft = useMemo(() => {
        const currentRouteIndex = routes.findIndex(
            (route) => route.path === current
        );
        const previousRouteIndex = routes.findIndex(
            (route) => route.path === previous
        );
        return currentRouteIndex > previousRouteIndex;
    }, [current, previous]);

    // This should track when the user presses a browser navigation button
    useEffect(() => {
        if (
            // If the current state doesn't match the current around
            current !== location.pathname &&
            // And there is no history track or it is equal to current state
            (!historyTrack.current || historyTrack.current === current)
        ) {
            // Reset state because we are out of sync
            historyTrack.current = undefined;
            update(location.pathname);
        }
    }, [location.pathname]);

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
