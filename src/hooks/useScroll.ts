import { useState, useEffect, useCallback } from "react";
import { useEventListener } from "usehooks-ts";

export interface ScrollOptions {
    limit?: number;
}

function useScroll(options?: ScrollOptions) {
    const [scrollAmount, setScrollAmount] = useState(0);

    const handleScroll = useCallback(
        (amount: number) => {
            if (options?.limit) {
                // Scroll amount can not be bigger than limit
                if (scrollAmount > options.limit) {
                    setScrollAmount(options.limit);
                }
                // If the new amount is bigger than the limit return
                if (amount > options.limit) {
                    setScrollAmount(options.limit);
                    return;
                }
            }
            setScrollAmount(amount);
        },
        [scrollAmount]
    );

    // Ensure the scroll limit is updated on mount
    useEffect(() => {
        handleScroll(document.scrollingElement?.scrollTop || 0);
    }, []);

    // Update scroll amount when scroll event is fired
    useEventListener("scroll", () => {
        handleScroll(document.scrollingElement?.scrollTop || 0);
    });

    return scrollAmount;
}

export default useScroll;
