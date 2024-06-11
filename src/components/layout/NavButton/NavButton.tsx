import React from "react";
import { IconButton, SxProps, Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleRight,
    faCircleLeft,
} from "@fortawesome/free-regular-svg-icons";

import routes, { RouteName } from "../../../data/routes";
import useAnimatedLink from "../../../hooks/useAnimatedLink";

export interface NavButtonProps {
    toName: RouteName;
    direction?: "left" | "right";
}

const COMMON_STYLE: SxProps = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
};

const RIGHT_STYLE: SxProps = {
    ...COMMON_STYLE,
    right: -60,
};

const LEFT_STYLE: SxProps = {
    ...COMMON_STYLE,
    left: -60,
};

const NavButton: React.FC<NavButtonProps> = ({
    toName,
    direction = "right",
}) => {
    const navigationRoute = routes.find((route) => route.name === toName);
    const handleClick = useAnimatedLink(navigationRoute?.path || "");

    if (!navigationRoute) return null;

    return (
        <Tooltip title={toName}>
            <IconButton
                href={navigationRoute.path}
                sx={direction === "right" ? RIGHT_STYLE : LEFT_STYLE}
                size="medium"
                onClick={handleClick}
            >
                <FontAwesomeIcon
                    icon={direction === "right" ? faCircleRight : faCircleLeft}
                    size="xl"
                    color="inherit"
                />
            </IconButton>
        </Tooltip>
    );
};

export default NavButton;
