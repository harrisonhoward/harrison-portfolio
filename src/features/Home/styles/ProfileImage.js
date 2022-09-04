import { styled } from "@mui/material";
const ProfileImage = styled("div")((props) => ({
    background: `url(${props.background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "50%",
    width: "132px",
    height: "132px",
    marginBottom: "1rem",
}));
export default ProfileImage;
