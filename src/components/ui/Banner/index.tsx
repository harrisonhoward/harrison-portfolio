import React, { useCallback, useEffect, useState } from "react";
import { Skeleton, styled } from "@mui/material";

export interface BannerProps {
    src: string;
    alt: string;
    skeletonWidth?: React.CSSProperties["width"];
    skeletonHeight?: React.CSSProperties["height"];
}

const StyledImage = styled("img")`
    width: 100%;
`;

const Banner: React.FC<BannerProps> = ({
    src,
    alt,
    skeletonWidth,
    skeletonHeight,
}) => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = useCallback(() => {
        setLoaded(true);
    }, []);

    // If the image changes we need to reset the loading state until the new image is loaded
    useEffect(() => {
        setLoaded(false);
    }, [src]);

    if (!loaded) {
        return (
            <Skeleton
                variant="rectangular"
                width={skeletonWidth || "100%"}
                height={skeletonHeight || "100%"}
                animation="wave"
            >
                <StyledImage src={src} alt={alt} onLoad={handleLoad} />
            </Skeleton>
        );
    }

    return <StyledImage src={src} alt={alt} />;
};

export default Banner;
