import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";

/**
 *
 * @param {{ to?: string, children?: JSX.Element }} props
 */
function NavButton(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const [firstRender, setFirstRender] = useState(true);
    useEffect(() => {
        if (firstRender) setFirstRender(false);
    }, []);

    const handleSetActive = (to) => {
        if (!firstRender) {
            navigate(props.to || "/");
        } else {
            scroller.scrollTo(location.pathname, {
                duration: 1000,
                delay: 1000,
                smooth: true,
            });
        }
    };

    return (
        <Container>
            <Link
                to={props.to}
                duration={500}
                spy
                smooth
                onSetActive={handleSetActive}
            >
                <Typography
                    type={location.pathname === props.to ? "nav-active" : ""}
                    variant="nav"
                    sx={{
                        userSelect: "none",
                    }}
                >
                    {props.children}
                </Typography>
            </Link>
        </Container>
    );
}

export default NavButton;
