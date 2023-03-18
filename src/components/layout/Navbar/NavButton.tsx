import { Link, useLocation } from "react-router-dom";
import { Container, Typography, MenuItem } from "@mui/material";

// Context
import { useRouteContext } from "../../../context/RouteContext";
import { useCallback } from "react";

export interface NavButtonProps {
    to: string;
    isMobile?: boolean;
    children?: string | JSX.Element;
}

function NavButton(props: NavButtonProps) {
    const location = useLocation();
    const { update } = useRouteContext();

    // Actions
    const onButtonClicked = useCallback(() => {
        update(props.to);
    }, []);

    // This is the render for the component
    const ComponentRender = (
        <Typography
            variant={location.pathname === props.to ? "nav-active" : "nav"}
            sx={{
                userSelect: "none",
            }}
        >
            {props.children}
        </Typography>
    );

    // This is the component itself
    const Component = props.isMobile ? (
        <MenuItem
            sx={{
                padding: props.isMobile ? "1.2rem 32px" : "0",
                borderBottom: props.isMobile
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "none",
            }}
            children={ComponentRender}
        />
    ) : (
        <Container children={ComponentRender} />
    );

    return (
        <Link
            // Remove default link styling
            style={{
                color: "inherit",
                textDecoration: "none",
            }}
            to={props.to}
            onMouseDown={onButtonClicked}
        >
            {Component}
        </Link>
    );
}

export default NavButton;
