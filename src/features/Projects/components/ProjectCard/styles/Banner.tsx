import { styled, Box, BoxProps, StyledComponentProps } from "@mui/material";
const Container = styled(Box)({
    // Reduce margins as container is bigger than child slightly
    marginBottom: "-5px",
});
const StyledImage = styled("img")({
    width: "100%",
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
            {props.children}
            <StyledImage src={props.src} {...(props.imageProps ?? {})} />
        </Container>
    );
}

export default Banner;
