import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Components
import NavButton from "./NavButton";

// Types
import { Route } from "../../../data/routes";

export interface NavMobileProps {
    routes: Route[];
    drawer: boolean;
    setDrawer: (open: boolean) => void;
    toggleDrawer: () => void;
}

function NavMobile(props: NavMobileProps) {
    return (
        <Box>
            <IconButton onClick={props.toggleDrawer}>
                <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <SwipeableDrawer
                open={props.drawer}
                onOpen={() => props.setDrawer(true)}
                onClose={() => props.setDrawer(false)}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {props.routes.map((route, index) => (
                    <NavButton key={index} to={route.path} isMobile>
                        {route.name}
                    </NavButton>
                ))}
            </SwipeableDrawer>
        </Box>
    );
}

export default NavMobile;