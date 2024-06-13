import type { Mark } from "@mui/base";

import dayjs from "dayjs";
import { Tooltip } from "@mui/material";

import projects from "../data/projects";
import Spangraphy from "../components/ui/Spangraphy";

/**
 * Will return an array of unique years
 */
export function getAllAvailableYears() {
    const years = projects.map((project) =>
        dayjs(project.dates.start).year().toString()
    );
    return Array.from(new Set(years)).sort();
}

/**
 * Will determine if the current year has a project connected to it
 */
export function getCurrentYearHasProject() {
    const currentYear = dayjs().year().toString();
    return projects.some(
        (project) =>
            dayjs(project.dates.start).year().toString() === currentYear
    );
}

/**
 * Based on the year provided is able to calculate where this particular year would lie on the slider
 */
export function getSliderPercentageOfTheYear(year: number): number {
    const projectMarkers = getAllAvailableYears();
    if (!getCurrentYearHasProject()) {
        projectMarkers.push(dayjs().year().toString());
    }
    const min = parseInt(projectMarkers[0]);
    const max = parseInt(projectMarkers[projectMarkers.length - 1]);
    // Get the range from the min & max
    const range = max - min;
    const percentageRange = 100 / range;
    // Calculate the percentage of the year before the current year
    const yearBefore = year;
    return (yearBefore - min) * percentageRange;
}

export function getProjectYearMarkers(): Mark[] {
    const projectMarkers = getAllAvailableYears();
    if (!getCurrentYearHasProject()) {
        projectMarkers.push(dayjs().year().toString());
    }
    return projectMarkers.map((year) => {
        if (dayjs().year().toString() === year) {
            return {
                label: (
                    <Tooltip
                        title="No projects this year"
                        placement="top"
                        // Make the tooltip instant for all devices
                        enterDelay={0}
                        enterTouchDelay={0}
                    >
                        <Spangraphy color="InactiveCaptionText">
                            {year}
                        </Spangraphy>
                    </Tooltip>
                ),
                value: parseInt(year),
            };
        }

        return {
            label: year,
            value: parseInt(year),
        };
    });
}
