import React, { useCallback, useMemo } from "react";
import { Slider, SliderOwnProps } from "@mui/material";
import { Variants, motion } from "framer-motion";

import { getProjectByYearMarkers } from "../../utils/ProjectUtil";

export interface ProjectMonthSliderProps {
    activeYear: number;
    activeProjectIndex: number;
    onChange: (month: number) => void;
}

const AnimatedSlider = motion(Slider);
const RAIL_VARIANTS: Variants = {
    shrunk: {
        height: 0,
        opacity: 0,
        padding: 0,
        marginBottom: 0,
    },
    expanded: {
        height: 4,
        opacity: 1,
        padding: "13px 0",
        marginBottom: "20px",
    },
};

const ProjectMonthSlider: React.FC<ProjectMonthSliderProps> = ({
    activeYear,
    activeProjectIndex,
    onChange,
}) => {
    const projectMarkers = useMemo(
        () => getProjectByYearMarkers(activeYear),
        [activeYear]
    );

    const min = projectMarkers[0].value;
    const max = projectMarkers[projectMarkers.length - 1].value;

    const handleChange: NonNullable<SliderOwnProps["onChange"]> = useCallback(
        (_, newValue) => {
            if (!Array.isArray(newValue)) {
                onChange(newValue);
                return;
            }
        },
        [onChange]
    );

    return (
        <AnimatedSlider
            // For animating
            variants={RAIL_VARIANTS}
            animate={projectMarkers.length > 1 ? "expanded" : "shrunk"}
            // For the slider
            min={min}
            max={max}
            value={activeProjectIndex}
            step={null}
            marks={projectMarkers}
            color="secondary"
            onChange={handleChange}
            sx={{
                maxWidth: "60%",
            }}
        />
    );
};

export default ProjectMonthSlider;
