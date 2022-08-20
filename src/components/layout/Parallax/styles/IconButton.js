import { styled } from "@mui/material";
const COLOUR = 0;
const IconButton = styled("div")((props) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
        props.mouseover === "true"
            ? props.mousedown === "true"
                ? `rgba(${COLOUR},${COLOUR},${COLOUR},0.3)`
                : `rgba(${COLOUR},${COLOUR},${COLOUR},0.2)`
            : `rgba(${COLOUR},${COLOUR},${COLOUR},0.1)`,
    backdropFilter: "blur(5px)",
    borderRadius: "50%",
    padding: "0.5rem",
    transform: "translate3d(-8px,-8px,0)",
    zIndex: -1,
}));
export default IconButton;
