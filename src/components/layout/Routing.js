import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../../routes/Home";

import routes from "../../data/routes";

function Routing() {
    const location = useLocation();
    const navigate = useNavigate();

    // If route doesn't exist redirect to home page
    useEffect(() => {
        const currentRoute = location.pathname;
        const allRoutes = routes.map((route) => route.path);
        if (!allRoutes.includes(currentRoute)) {
            navigate("/");
        }
    }, [location]);

    return (
        <>
            <Navbar />
            <Home />
        </>
    );
}

export default Routing;
