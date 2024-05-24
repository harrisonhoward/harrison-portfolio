import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Typography, MenuItem } from "@mui/material";

// Context
import { useRouteContext } from "../../../context/RouteContext";

export interface NavButtonProps {
    to: string;
    /**
     * If true this will prevent the button from being clicked
     */
    animating?: boolean;
    isMobile?: boolean;
    children?: string | JSX.Element;
    onClick?: () => void;
}

function NavButton(props: NavButtonProps) {
    const { to, animating, isMobile, children, onClick } = props;

    const location = useLocation();
    const { update } = useRouteContext();

    // Actions
    const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> =
        useCallback(
            (evt) => {
                evt.preventDefault();
                if (!animating) {
                    onClick?.();
                    update(to);
                }
            },
            [onClick, animating]
        );

    // This is the render for the component
    const ComponentRender = (
        <Typography
            variant={location.pathname === to ? "nav-active" : "nav"}
            sx={{
                userSelect: "none",
            }}
        >
            {children}
        </Typography>
    );

    // This is the component itself
    const Component = isMobile ? (
        <MenuItem
            sx={{
                padding: isMobile ? "1.2rem 32px" : "0",
                borderBottom: isMobile
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
            to={to}
            onClick={handleLinkClick}
        >
            {Component}
        </Link>
    );
}

export default NavButton;
