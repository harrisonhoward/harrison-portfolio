import { useCallback, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

interface AnimatedSelectedReturn<T> {
    selected: T;
    /**
     * This could either be next or previous selected value.\
     * This is used for internal animations to know when they should cancel the animation.
     *
     * Why would you want to prevent an animation? If the values never changed.\
     * Based on the debounce ms, it will show the next project and then when that animation finishes
     * it will swap to the previous value. This will allow the exiting and entering animations to play correctly.
     */
    refSelected: T | undefined;
    setSelected: (value: T) => void;
}

/**
 * Currently handles the bug on framer-motion that breaks the exit animation being cut early.\
 * This also provides a reference state to be used for determining if the values are the same on the state.\
 * You can read more on the description on the return 'refSelected' property.
 *
 * @param initialState
 * @param ms Default to 250
 */
export function useAnimatedSelected<T>(
    initialState: T,
    ms: number = 200
): AnimatedSelectedReturn<T> {
    const [r1, setR1] = useState<T | undefined>(undefined);

    const [selected, _setSelected] = useDebounceValue<T>(initialState, ms);
    const setSelected = useCallback(
        (value: T) => {
            _setSelected(value);
            // For the exit animation
            setR1(value);
            // For the entry animation
            setTimeout(() => setR1(selected), ms * 2);
        },
        [setR1, _setSelected, ms, selected]
    );

    return {
        selected,
        refSelected: r1,
        setSelected,
    };
}
