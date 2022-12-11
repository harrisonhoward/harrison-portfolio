import { useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Hooks
import usePathname from "../../../hooks/usePathname";

// Resources
import routes from "../../../data/routes";

const X_DURATION = 0.4;
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

function Routing(props: RoutingProps) {
    const location = useLocation();
    const { current, previous } = usePathname();

    // Get the index of the current route
    const routeIndex = useMemo(
        () => routes.findIndex((route) => route.path === current),
        [current]
    );
    // Get the index of the previous route
    const previousIndex = useMemo(
        () => routes.findIndex((route) => route.path === previous),
        [previous]
    );

    return (
        <AnimatePresence initial={false} mode="sync">
            <Routes location={location} key={location.pathname}>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            /**
                             * If the current route is before the next route
                             * 1. Current route moves to the left
                             * 2. Next route moves in from the right
                             * Else
                             * 1. Current route moves to the right
                             * 2. Next route moves in from the left
                             */
                            <motion.div
                                initial={{
                                    x:
                                        previousIndex !== null &&
                                        routeIndex > previousIndex
                                            ? "-100vw"
                                            : "100vw",
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
                                }}
                                exit={{
                                    x:
                                        previousIndex !== null &&
                                        routeIndex > previousIndex
                                            ? "100vw"
                                            : "-100vw",
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
