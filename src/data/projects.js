/**
 * @typedef {object} ProjectItem
 * @property {string} banner
 * @property {string} title
 * @property {string} description
 * @property {0 | 1 | 2} active
 * @property {{ start: string, end?: string }} [dateRange]
 * @property {{ code?: string, website?: string, misc?: string }} [links]
 */

/**
 * @type {ProjectItem[]}
 */
const projects = [
    {
        banner: "ForbiddenBanner.gif",
        title: "Forbidden Statistics",
        description:
            "Forbidden was a General Statistics Discord bot. " +
            "It gathered statistics from video games and other media and " +
            "provided the user an analysis of the data.",
        active: 0,
        dateRange: {
            start: "2017",
            end: "2020",
        },
        links: {
            code: "https://github.com/Forbidden-Duck/forbidden-bot",
        },
    },
];
export default projects;
