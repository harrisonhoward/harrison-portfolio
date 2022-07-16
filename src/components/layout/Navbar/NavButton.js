import React from "react";
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
        <Container onClick={() => navigate(props.to || "/")}>
            <Typography
                type={location.pathname === props.to ? "nav-active" : ""}
                variant="nav"
                sx={{
                    userSelect: "none",
                }}
            >
                {props.children}
            </Typography>
        </Container>
    );
}

export default NavButton;
