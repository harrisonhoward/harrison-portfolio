import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Typography, MenuItem } from "@mui/material";

/**
 *
 * @param {{ to?: string, isMobile?: boolean, children?: JSX.Element }} props
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
