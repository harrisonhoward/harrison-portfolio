import { useEffect, useState } from "react";

function useProgressiveImage(lowSrc: string, highSrc: string): string {
    const [image, setImage] = useState(lowSrc);
    useEffect(() => {
        const image = new Image();
        image.src = highSrc;
        image.onload = () => setImage(highSrc);
    }, [highSrc]);
    return image;
}

export default useProgressiveImage;
