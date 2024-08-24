import type { Mark } from "@mui/base";

import Spangraphy from "../components/ui/Spangraphy";
import work, { type Role, type Work } from "../data/work";
import { keyBy } from "lodash";

// #region Work by year

/**
 * Will return an array of unique years (includes the work title)
 */
export function getAllAvailableWork(): {
    id: string;
    title: string;
}[] {
    const works = work.map((work) => {
        return { id: work.id, title: work.title };
    });
    const workById = keyBy(work, "id");
    // Sort from oldest to newest
    return works.sort((a, b) => {
        const aEnd = workById[a.id].roles[0].dates.end;
        const bEnd = workById[b.id].roles[0].dates.end;
        if (!aEnd) {
            return 1;
        }
        if (!bEnd) {
            return -1;
        }
        return aEnd.diff(bEnd);
    });
}

/**
 * Determines if any of the roles have no end date, no end date means I'm employed actively
 */
export function getIsUnemployed() {
    // Check that each role has an end date
    return work.every((work) => work.roles.every((role) => !!role.dates.end));
}

/**
 * Based on the year provided is able to calculate where this particular year would lie on the slider\
 * Work is positioned by it's end year rather than it's start year
 */
export function getSliderPercentageForUnemployed(index: number): number {
    const workMarkers = getAllAvailableWork();
    if (getIsUnemployed()) {
        workMarkers.push({
            id: "unemployed",
            title: "Unemployed",
        });
    }
    const min = 1;
    const max = workMarkers.length;
    // Get the range from the min & max
    const range = max - min;
    const percentageRange = 100 / range;
    // Calculate the percentage of the year before the current year
    const indexBefore = index - 1;
    return (indexBefore - min) * percentageRange;
}

export function getWorkByYearMarkers(): Mark[] {
    const workMarkers = getAllAvailableWork();
    const isUnemployed = getIsUnemployed();
    if (isUnemployed) {
        workMarkers.push({ id: "unemployed", title: "Unemployed" });
    }
    return workMarkers.map((work, index) => {
        if (isUnemployed && work.id === "unemployed") {
            return {
                label: (
                    <Spangraphy color="InactiveCaptionText">
                        {work.title}
                    </Spangraphy>
                ),
                value: index,
            };
        }
        return {
            label: work.title,
            value: index,
        };
    });
}

// #endregion

// #region Work roles

export function getWorkByIndex(index: number): Work | undefined {
    const workMarker = getAllAvailableWork()[index];
    return work.find((work) => work.id === workMarker?.id);
}

export function getRoleByWorkAndRoleIndex(
    workIndex: number,
    roleIndex: number
): Role | undefined {
    const work = getWorkByIndex(workIndex);
    return work?.roles[roleIndex];
}

export function getAllRolesForWork(workID: string): Role[] {
    return work.find((work) => work.id === workID)!.roles;
}

export function getWorkRolesMarkers(workIndex: number): Mark[] {
    const work = getWorkByIndex(workIndex)!;
    const roles = getAllRolesForWork(work.id);
    return roles.map((role, index) => ({
        label: role.title,
        value: index,
    }));
}

export function getWorkByRoleIndex(
    workID: string,
    index: number
): Role | undefined {
    return work.find((work) => work.id === workID)?.roles[index];
}

// #endregion
