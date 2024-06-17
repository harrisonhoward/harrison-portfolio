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

    // In some cases the image is loaded from the cache so we need to handle it in a callback ref
    const handleRef = useCallback((node: HTMLImageElement | null) => {
        if (node?.complete) {
            setLoaded(true);
        }
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
                <StyledImage
                    ref={handleRef}
                    src={src}
                    alt={alt}
                    onLoad={handleLoad}
                />
            </Skeleton>
        );
    }

    return <StyledImage src={src} alt={alt} draggable="false" />;
};

export default Banner;
