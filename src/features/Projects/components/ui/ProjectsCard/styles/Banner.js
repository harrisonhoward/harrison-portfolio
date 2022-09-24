import { styled, Box } from "@mui/material";
const BannerContainer = styled(Box)({
    // Container is 5 pixels bigger than child
    marginBottom: "-5px",
});
const Image = styled("img")({
    width: "100%",
});
/**
 *
 * @param {{ src: string,
 * container?: import("@mui/material").BoxProps, image?: import("@mui/material").StyledComponentProps }} param0
 * @returns
 */
function Banner({ src, ...props }) {
    return (
        <BannerContainer {...(props?.container || {})}>
            {props.children}
            <Image src={src} {...(props?.image || {})} />
        </BannerContainer>
    );
}
export default Banner;
