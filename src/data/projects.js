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
        banner: "EcommerceBanner.jpg",
        title: "Ecommerce Website",
        description:
            "In a test environment create fake successful and unsuccessful payments on " +
            "a catalogue of products. Manager your card, orders and the receipt for your order. As an " +
            "administrator manage the users, products and orders present on the website.",
        active: 0,
        dateRange: {
            start: "2021",
            end: "2021",
        },
        links: {
            code: [
                "https://github.com/Forbidden-Duck/ecommerce-frontend",
                "https://github.com/Forbidden-Duck/ecommerce-backend",
            ],
        },
    },
    {
        banner: "MongoDBBanner.jpg",
        title: "Mongo Web App",
        description:
            "Create a new database connection entry and view all of the databasdes, " +
            "collections and documents for that particular connection. Create an account to be able " +
            "to save and favourite your database connections.",
        active: 0,
        dateRange: {
            start: "2022",
            end: "2022",
        },
        links: {
            code: "https://github.com/Forbidden-Duck/mongo-web-app",
        },
    },
];
export default projects;
