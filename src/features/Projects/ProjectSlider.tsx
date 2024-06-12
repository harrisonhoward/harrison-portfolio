import React, { useCallback, useMemo } from "react";
import { Slider, SliderOwnProps, css, styled } from "@mui/material";

import projects from "../../data/projects";
import {
    getCurrentYearHasProject,
    getProjectMarkers,
    getSliderPercentageOfTheYear,
} from "../../utils/ProjectUtil";
import { GLOBAL_PREFIX } from "../../core/ClassNameGenerator";

export interface ProjectSliderProps {
    activeYear: number;
    onChange: (year: number) => void;
}

const StyledSlider = styled(Slider)<{ percentage: number; index: number }>`
    & .${GLOBAL_PREFIX}Slider-rail {
        background: ${({ theme, percentage }) => `
            linear-gradient(
                to right,
                ${theme.palette.primary.main} 0% ${percentage}%,
                ${theme.palette.action.disabled} ${percentage}% 100%
            )
        `};
        border: 0.1px solid black;
    }

    ${({ theme, index }) =>
        index > -1 &&
        css`
            & .${GLOBAL_PREFIX}Slider-mark[data-index="${index}"] {
                background: ${theme.palette.action.disabled};
            }
        `}
`;

const ProjectSlider: React.FC<ProjectSliderProps> = ({
    activeYear,
    onChange,
}) => {
    const projectMarkers = useMemo(() => getProjectMarkers(), []);
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
                (project) => project.dates.start === newValue.toString()
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
        <StyledSlider
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

export default ProjectSlider;
