import React, { useCallback, useState } from "react";
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardFast } from "@fortawesome/free-solid-svg-icons";

import routes from "../../../data/routes";
import { GLOBAL_PREFIX } from "../../../core/ClassNameGenerator";
import useAnimatedLink from "../../../hooks/useAnimatedLink";

const actions = routes
    .filter((route) => !!route.icon && !route.noNav)
    .map((route) => ({
        icon: <FontAwesomeIcon icon={route.icon!} />,
        name: route.name,
        path: route.path,
    }));

interface ActionProps {
    icon: JSX.Element;
    name: string;
    path: string;
    open: boolean;
}

const Action: React.FC<ActionProps> = ({ open, icon, name, path }) => {
    const handleClick = useAnimatedLink(path);

    return (
        <SpeedDialAction
            open={open}
            icon={icon}
            tooltipTitle={name}
            tooltipPlacement="left"
            onClick={handleClick}
        />
    );
};

const RouteDial: React.FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 16,
                right: 16,
                zIndex: 1,
                [`.${GLOBAL_PREFIX}SpeedDial-actions`]: {
                    flexDirection: "column",
                },
            }}
        >
            <SpeedDial
                ariaLabel="Navigation"
                icon={
                    <SpeedDialIcon
                        icon={<FontAwesomeIcon icon={faForwardFast} />}
                    />
                }
                direction="up"
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
            >
                {actions.map((action) => (
                    <Action key={action.name} open={open} {...action} />
                ))}
            </SpeedDial>
        </Box>
    );
};

export default RouteDial;
