import { styled, Box, BoxProps, StyledComponentProps } from "@mui/material";
const Container = styled(Box)({
    position: "relative",
    // Reduce margins as container is bigger than child slightly
    marginBottom: "-5px",
});
const StyledImage = styled("img")({
    width: "100%",
});
const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "background-color 0.2s ease-in-out",
    ":hover": {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
});

export interface BannerProps {
    src: string;
    containerProps?: BoxProps;
    imageProps?: StyledComponentProps<"img">;
    children?: React.ReactNode;
}

function Banner(props: BannerProps) {
    return (
        <Container {...(props.containerProps ?? {})}>
            <StyledImage src={props.src} {...(props.imageProps ?? {})} />
            <Overlay>{props.children}</Overlay>
        </Container>
    );
}

export default Banner;
