import { styled } from "@mui/material";
const ProfileImage = styled("div")((props) => ({
    background: `url(${props.background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "132px",
    height: "132px",
}));
export default ProfileImage;
