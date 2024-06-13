import dayjs, { type Dayjs } from "dayjs";
// Add ability to add custom format for this file
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export enum Status {
    Active = "active",
    InProgress = "in-progress",
    Inactive = "inactive",
}

export interface Project {
    banner: string;
    title: string;
    description: string;
    status: Status;
    // Days are not accurate and will not be included in any of the pages
    // It's included now so that it can be parsed
    dates: {
        start: Dayjs;
        end?: Dayjs;
    };
    links?: {
        code?: string;
        website?: string;
        misc?: string;
    };
}

const projects: Project[] = [
    {
        banner: "ForbiddenBanner.gif",
        title: "Forbidden Statistics",
        description:
            "Forbidden was a General Statistics Discord bot. " +
            "It gathered statistics from video games and other media and " +
            "provided the user an analysis of the data.",
        status: Status.Inactive,
        dates: {
            start: dayjs("04/2017", "MM/YYYY"),
            end: dayjs("11/2020", "MM/YYYY"),
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
        status: Status.Active,
        dates: {
            start: dayjs("12/2020", "MM/YYYY"),
            end: dayjs("02/2022", "MM/YYYY"),
        },
        links: {
            website:
                "https://gallery.fitbit.com/developer/9dc2e29f-47c0-4dfd-90dd-d9a838ebfb15",
        },
    },
    {
        banner: "PakkoBanner.jpg",
        title: "Quote System",
        description:
            "I create the user interface for the current quote system for Pakko. " +
            "It allows the user to intuitively insert the specifications for their packaging needs. " +
            "The site will create a quote based on that criterion.",
        status: Status.Active,
        dates: {
            start: dayjs("06/2022", "MM/YYYY"),
            end: dayjs("09/2022", "MM/YYYY"),
        },
        links: {
            website: "https://quote.pakko.com.au/",
        },
    },
    {
        banner: "PakkoBanner.jpg",
        title: "Interactive Design Platform",
        description:
            "Using three.js, I assisted in the creation of a 3D interactive design platform. " +
            "This system allows the user to create a live 3D model of their box. I overlooked " +
            "the implementation of the animation and scaling.",
        status: Status.Active,
        dates: {
            start: dayjs("06/2022", "MM/YYYY"),
            end: dayjs("09/2022", "MM/YYYY"),
        },
        links: {
            website: "https://idp.pakko.com.au/",
        },
    },
];

export default projects;
