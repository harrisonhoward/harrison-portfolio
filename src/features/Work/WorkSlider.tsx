import React, { useCallback, useMemo } from "react";
import type { SliderOwnProps } from "@mui/material";

import {
    getIsUnemployed,
    getSliderPercentageForUnemployed,
    getWorkByIndex,
    getWorkByYearMarkers,
} from "../../utils/WorkUtil";
import Slider from "../../components/ui/Slider/Slider";

export interface WorkSliderProps {
    activeWorkIndex: number;
    onChange: (index: number) => void;
}

const WorkSlider: React.FC<WorkSliderProps> = ({
    activeWorkIndex,
    onChange,
}) => {
    const workMarkers = useMemo(() => getWorkByYearMarkers(), []);
    const isUnemployed = getIsUnemployed();

    const min = 0;
    const max = workMarkers.length - 1;
    const actualMax = isUnemployed ? max + 1 : max;

    // In the event I am unemployed we need to handle disabling the slider
    const percentageForUnemployed = getSliderPercentageForUnemployed(actualMax);

    const handleChange: NonNullable<SliderOwnProps["onChange"]> = useCallback(
        (_, newValue) => {
            if (Array.isArray(newValue)) return;
            const workExists = !!getWorkByIndex(newValue);
            if (workExists) {
                onChange(newValue);
                return;
            }
        },
        [onChange, actualMax]
    );

    return (
        <Slider
            min={min}
            max={max}
            value={activeWorkIndex}
            step={null}
            marks={workMarkers}
            // This will disable the slider when I'm unemployed
            percentage={isUnemployed ? percentageForUnemployed : 100}
            // This handles disabling the mark
            index={isUnemployed ? max : -1}
            onChange={handleChange}
        />
    );
};

export default WorkSlider;
