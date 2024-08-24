import { styled } from "@mui/material";
type PageContainerProps = {
    background: string;
};
const PageContainer = styled("div")<PageContainerProps>((props) => ({
    position: "fixed",
    background: `url(${props.background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100dvh",
    width: "100dvw",
    top: 0,
    left: 0,
    zIndex: -1,
    overflow: "hidden",
}));
export default PageContainer;
