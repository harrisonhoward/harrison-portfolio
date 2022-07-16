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
    const [hasScrolled, setScrolled] = useState(false);
    useEventListener("scroll", (evt) => {
        const scrollOffset = document.scrollingElement.scrollTop;
        if (scrollOffset >= 1 && !hasScrolled) setScrolled(true);
        else if (scrollOffset < 1 && hasScrolled) setScrolled(false);
    });

    return (
        <AppBar position="fixed" variant={hasScrolled && "scrolled"}>
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
