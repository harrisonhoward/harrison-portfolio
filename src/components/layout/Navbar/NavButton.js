import React from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Typography } from "@mui/material";

/**
 *
 * @param {{ to?: string, children?: JSX.Element }} props
 */
function NavButton(props) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <Container>
            <Link
                to={props.to}
                duration={500}
                spy
                smooth
                onSetActive={() => navigate(props.to || "/")}
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
