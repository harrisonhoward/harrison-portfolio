import React, { useCallback, useMemo } from "react";
import { Slider, type SliderOwnProps } from "@mui/material";
import { motion, type Variants } from "framer-motion";
import { getWorkRolesMarkers } from "../../utils/WorkUtil";

export interface WorkRolesSliderProps {
    activeWorkIndex: number;
    activeRoleIndex: number;
    onChange: (index: number) => void;
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

const WorkRolesSlider: React.FC<WorkRolesSliderProps> = ({
    activeWorkIndex,
    activeRoleIndex,
    onChange,
}) => {
    const roleMarkers = useMemo(
        () => getWorkRolesMarkers(activeWorkIndex),
        [activeWorkIndex]
    );

    const min = roleMarkers[0].value;
    const max = roleMarkers[roleMarkers.length - 1].value;

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
            variants={RAIL_VARIANTS}
            initial={roleMarkers.length > 1 ? "expanded" : "shrunk"}
            animate={roleMarkers.length > 1 ? "expanded" : "shrunk"}
            min={min}
            max={max}
            value={activeRoleIndex}
            step={null}
            marks={roleMarkers}
            color="secondary"
            onChange={handleChange}
            sx={{
                maxWidth: "60%",
            }}
        />
    );
};

export default WorkRolesSlider;
