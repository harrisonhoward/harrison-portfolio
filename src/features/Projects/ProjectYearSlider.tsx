import React, { useCallback, useMemo } from "react";
import { SliderOwnProps } from "@mui/material";

import projects from "../../data/projects";
import {
    getCurrentYearHasProject,
    getProjectYearMarkers,
    getSliderPercentageOfTheYear,
} from "../../utils/ProjectUtil";
import Slider from "../../components/ui/Slider/Slider";

export interface ProjectYearSliderProps {
    activeYear: number;
    onChange: (year: number) => void;
}

const ProjectYearSlider: React.FC<ProjectYearSliderProps> = ({
    activeYear,
    onChange,
}) => {
    const projectMarkers = useMemo(() => getProjectYearMarkers(), []);
    const currentYearHasProject = getCurrentYearHasProject();

    const min = projectMarkers[0].value;
    const max = projectMarkers[projectMarkers.length - 1].value;
    const actualMax = currentYearHasProject
        ? max
        : projectMarkers[projectMarkers.length - 2].value;

    // In the event the current year is disabled, we are using a linear-gradient
    // To mimic a disabled track
    const percentageBeforeCurrentYear = getSliderPercentageOfTheYear(actualMax);

    const handleChange: NonNullable<SliderOwnProps["onChange"]> = useCallback(
        (_, newValue) => {
            // If a project doesn't exist then we need to prevent the change
            const projectExists = projects.some(
                (project) => project.dates.start.year() === newValue
            );
            if (!Array.isArray(newValue) && projectExists) {
                onChange(newValue);
                return;
            }

            // Otherwise set it to the maximum value
            onChange(actualMax);
        },
        [onChange, actualMax]
    );

    return (
        <Slider
            min={min}
            max={max}
            value={activeYear}
            step={null}
            marks={projectMarkers}
            // This will disable the slider between the current year and the last project year
            percentage={
                currentYearHasProject ? 100 : percentageBeforeCurrentYear
            }
            // This will hide the mark at that index level
            index={currentYearHasProject ? -1 : projectMarkers.length - 1}
            onChange={handleChange}
        />
    );
};

export default ProjectYearSlider;
