import type { Mark } from "@mui/base";

import dayjs from "dayjs";
import { Tooltip } from "@mui/material";

import projects, { type Project } from "../data/projects";
import Spangraphy from "../components/ui/Spangraphy";

// #region Project Years

/**
 * Will return an array of unique years
 */
export function getAllAvailableYears() {
    const years = projects.map((project) => project.dates.start.year());
    return Array.from(new Set(years)).sort();
}

/**
 * Will determine if the current year has a project connected to it
 */
export function getCurrentYearHasProject() {
    const currentYear = dayjs().year();
    return projects.some(
        (project) => project.dates.start.year() === currentYear
    );
}

/**
 * Based on the year provided is able to calculate where this particular year would lie on the slider
 */
export function getSliderPercentageOfTheYear(year: number): number {
    const projectMarkers = getAllAvailableYears();
    if (!getCurrentYearHasProject()) {
        projectMarkers.push(dayjs().year());
    }
    const min = projectMarkers[0];
    const max = projectMarkers[projectMarkers.length - 1];
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
        projectMarkers.push(dayjs().year());
    }
    return projectMarkers.map((year) => {
        if (dayjs().year() === year) {
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
                value: year,
            };
        }

        return {
            label: year,
            value: year,
        };
    });
}

// #endregion

// #region Project By Year

/**
 * Will return an array of projects in the year provided
 */
export function getAllAvailableProjectsInYear(year: number) {
    const projectsInYear = projects.filter(
        (project) => project.dates.start.year() === year
    );
    // Return projects sorted by month (if same month then use existing order)
    return projectsInYear.sort((a, b) => {
        return a.dates.start.month() - b.dates.start.month();
    });
}

export function getProjectByYearMarkers(year: number): Mark[] {
    const projectMarkers = getAllAvailableProjectsInYear(year);
    return projectMarkers.map((project, index) => {
        return {
            label: project.title,
            value: index,
        };
    });
}

/**
 * This will return the project by the year and index provided. Can be undefined.
 */
export function getProjectByYearAndIndex(
    year: number,
    index: number
): Project | undefined {
    return getAllAvailableProjectsInYear(year)[index];
}

// #endregion
