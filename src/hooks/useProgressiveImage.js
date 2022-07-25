import { useEffect, useState } from "react";

/**
 *
 * @param {string} lowSrc Low res image
 * @param {string} highSrc High res image
 */
const useProgressiveImage = (lowSrc, highSrc) => {
    const [image, setImage] = useState(lowSrc);
    useEffect(() => {
        const image = new Image();
        image.src = highSrc;
        image.onload = () => setImage(highSrc);
    }, []);
    return image;
};

export default useProgressiveImage;
