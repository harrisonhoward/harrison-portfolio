import { styled } from "@mui/material";
type DevIconButtonProps = {
    colour: number;
    mouseover: boolean;
    mousedown: boolean;
};
const DevIconButton = styled("div", {
    shouldForwardProp: (prop) =>
        !["mousedown", "mouseover"].includes(prop as string),
})<DevIconButtonProps>((props) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    background: props.mouseover
        ? props.mousedown
            ? `rgba(${props.colour},${props.colour},${props.colour},0.3)`
            : `rgba(${props.colour},${props.colour},${props.colour},0.2)`
        : `rgba(${props.colour},${props.colour},${props.colour},0.1)`,
    backdropFilter: "blur(5px)",
    borderRadius: "50%",
    padding: "0.5rem",
    transform: "translate3d(-8px,-8px,0)",
    zIndex: -1,
}));
export default DevIconButton;
