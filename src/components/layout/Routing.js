import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

import Navbar from "./Navbar";
import Home from "../../routes/Home";
import About from "../../routes/About";
import Projects from "../../routes/Projects";

import routes from "../../data/routes";

import { ActiveScroller } from "../../context/ScrollerContext";

import useScrollerEvent from "../../hooks/useScrollerEvent";

function Routing() {
    const location = useLocation();
    const navigate = useNavigate();
    const { active, scrollActive } = ActiveScroller();
    useScrollerEvent();

    // If route doesn't exist redirect to home page
    useEffect(() => {
        const currentRoute = location.pathname;
        const allRoutes = routes.map((route) => route.path);
        if (!allRoutes.includes(currentRoute)) navigate("/", { replace: true });
    }, [location.pathname, navigate]);

    // Scroll to active element
    useEffect(() => {
        const currentRoute = location.pathname;
        const allRoutes = routes.map((route) => route.path);
        if (currentRoute !== active && allRoutes.includes(currentRoute))
            scroller.scrollTo(currentRoute, {
                duration: 1000,
                delay: 1000,
                smooth: true,
            });
        // eslint-disable-next-line
    }, [location.pathname]);

    // Set path as active
    useEffect(() => {
        // Record when scrolling is active
        // Prevent route from updating while auto-scrolling is active
        if (!scrollActive) {
            const currentRoute = location.pathname;
            if (![null, undefined].includes(active))
                if (currentRoute !== active)
                    navigate(active, { replace: true });
        }
        // eslint-disable-next-line
    }, [active, navigate, scrollActive]);

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Projects />
        </>
    );
}

export default Routing;
