import { styled } from "@mui/material";
type ProfileImageProps = {
    background: string;
};
const ProfileImage = styled("div")<ProfileImageProps>((props) => ({
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
