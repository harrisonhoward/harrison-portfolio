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
    {
        banner: "FitbitBanner.jpg",
        title: "Fitbit",
        description:
            "A collection of clockfaces and apps that I have created. " +
            "They work on a variety of Fitbit devices and I continue to apply bug fixes as " +
            "users continue to report them to me.",
        active: 2,
        dateRange: {
            start: "2020",
        },
        links: {
            website:
                "https://gallery.fitbit.com/developer/9dc2e29f-47c0-4dfd-90dd-d9a838ebfb15",
        },
    },
    {
        banner: "PakkoBanner.jpg",
        title: "Quote System",
        description: "Pakko quote system",
        active: 2,
        dateRange: {
            start: "2022",
        },
        links: {
            website: "https://quote.pakko.com.au/",
        },
    },
    {
        banner: "PakkoBanner.jpg",
        title: "Interactive Design Platform",
        description: "Pakko IDP",
        active: 2,
        dateRange: {
            start: "2022",
        },
        links: {
            website: "https://idp.pakko.com.au/",
        },
        overrideTitle: 305,
    },
];
export default projects;
