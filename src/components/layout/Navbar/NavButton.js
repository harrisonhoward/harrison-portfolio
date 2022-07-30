import React from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Container, Typography, MenuItem } from "@mui/material";

import { ActiveScroller } from "../../../context/ScrollerContext";

/**
 *
 * @param {{ to?: string, isMobile?: boolean, children?: JSX.Element }} props
 */
function NavButton(props) {
    const location = useLocation();
    const { setActive } = ActiveScroller();

    const handleSetActive = () => {
        setActive(props.to);
    };

    const MobileContainer = props.isMobile ? MenuItem : React.Fragment;

    return (
        <Link
            to={props.to}
            duration={500}
            spy
            smooth
            onSetActive={handleSetActive}
        >
            <MobileContainer
                {...(props.isMobile
                    ? {
                          sx: {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textAlign: "center",
                          },
                      }
                    : {})}
            >
                <Container>
                    <Typography
                        type={
                            location.pathname === props.to ? "nav-active" : ""
                        }
                        variant="nav"
                        sx={{
                            userSelect: "none",
                        }}
                    >
                        {props.children}
                    </Typography>
                </Container>
            </MobileContainer>
        </Link>
    );
}

export default NavButton;
