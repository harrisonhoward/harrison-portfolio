import { useCallback, useEffect, useRef } from "react";
import { useBoolean } from "usehooks-ts";

import { X_DURATION } from "../components/layout/Routing";
import { useRouteContext } from "../context/RouteContext";

type AnimatedLinkReturn = React.MouseEventHandler<HTMLElement>;

/**
 * Hook to handle the main project navigation. This handles preventing the button from working while animating.
 * TODO: This will need to be moved to context to be more effective as this only blocks the button you click
 */
function useAnimatedLink(to: string): AnimatedLinkReturn {
    const animationTimeoutRef = useRef<number>();
    const { value: animating, setValue: setAnimating } = useBoolean(false);
    const { update } = useRouteContext();

    // Clear timeouts when unmounting
    useEffect(() => {
        return () => {
            clearTimeout(animationTimeoutRef.current);
        };
    }, []);

    const handleAnimating = useCallback(() => {
        setAnimating(true);
        clearTimeout(animationTimeoutRef.current);
        animationTimeoutRef.current = setTimeout(() => {
            setAnimating(false);
        }, X_DURATION * 1000);
    }, [setAnimating, animationTimeoutRef]);

    return useCallback(
        (evt) => {
            evt.preventDefault();
            if (!animating) {
                handleAnimating?.();
                update(to);
            }
        },
        [animating, handleAnimating, update]
    );
}

export default useAnimatedLink;
