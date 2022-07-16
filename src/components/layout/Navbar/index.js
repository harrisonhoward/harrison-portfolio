import React, { useState } from "react";
import { AppBar, Toolbar, Container } from "@mui/material";

import NavButton from "./NavButton";
import useEventListener from "../../../hooks/useEventListener";

import routes from "../../../data/routes";

/**
 *
 * @param {{ isMobile?: boolean }} props
 */
function Navbar(props) {
    const [isFixed, setIsFixed] = useState(false);
    useEventListener("scroll", (evt) => {
        const scrollOffset = document.scrollingElement.scrollTop;
        if (scrollOffset >= 120 && !isFixed) setIsFixed(true);
        else if (isFixed) setIsFixed(false);
    });

    return (
        <AppBar position={isFixed ? "fixed" : "static"}>
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
    );
}

export default Navbar;
