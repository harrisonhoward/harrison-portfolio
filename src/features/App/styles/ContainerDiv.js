import { styled } from "@mui/material";
const ContainerDiv = styled("div")((props) => ({
    position: "fixed",
    background: `url(${
        props.ismobile === "true"
            ? props.mobilebackground
            : props.desktopbackground
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    top: 0,
    left: 0,
    zIndex: -1,
}));
export default ContainerDiv;
