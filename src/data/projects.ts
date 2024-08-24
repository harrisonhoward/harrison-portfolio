import { PaletteColors } from "@mui/material";
import dayjs, { type Dayjs } from "dayjs";
import { nanoid } from "nanoid";
// Add ability to add custom format for this file
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export enum ProjectStatus {
    Active = "active",
    InProgress = "in-progress",
    Inactive = "inactive",
}

export const STATUS_COLORS: Record<ProjectStatus, keyof PaletteColors> = {
    [ProjectStatus.Active]: "success",
    [ProjectStatus.InProgress]: "warning",
    [ProjectStatus.Inactive]: "error",
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
    [ProjectStatus.Active]: "Active",
    [ProjectStatus.InProgress]: "In Progress",
    [ProjectStatus.Inactive]: "Inactive",
};

export interface Project {
    id: string;
    banner: string;
    title: string;
    description: string;
    status: ProjectStatus;
    // Days are not accurate and will not be included in any of the pages
    // It's included now so that it can be parsed
    dates: {
        start: Dayjs;
        end?: Dayjs;
    };
    links?: {
        code?: string;
        website?: string;
    };
}

const projects: Project[] = [
    {
        id: nanoid(),
        banner: "ForbiddenBanner.gif",
        title: "Forbidden Statistics",
        description:
            "Forbidden was a General Statistics Discord bot. " +
            "It gathered statistics from video games and other media and " +
            "provided the user an analysis of the data.",
        status: ProjectStatus.Inactive,
        dates: {
            start: dayjs("04/2017", "MM/YYYY"),
            end: dayjs("11/2020", "MM/YYYY"),
        },
        links: {
            code: "https://github.com/Forbidden-Duck/forbidden-bot",
        },
    },
    {
        id: nanoid(),
        banner: "FitbitBanner.jpg",
        title: "Fitbit",
        description:
            "A collection of clockfaces and apps that I have created. " +
            "They work on a variety of Fitbit devices and I continue to apply bug fixes as " +
            "users continue to report them to me.",
        status: ProjectStatus.Inactive,
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
        id: nanoid(),
        banner: "PakkoBanner.jpg",
        title: "Quote System",
        description:
            "I create the user interface for the current quote system for Pakko. " +
            "It allows the user to intuitively insert the specifications for their packaging needs. " +
            "The site will create a quote based on that criterion.",
        status: ProjectStatus.Active,
        dates: {
            start: dayjs("06/2022", "MM/YYYY"),
            end: dayjs("09/2022", "MM/YYYY"),
        },
        links: {
            website: "https://quote.pakko.com.au/",
        },
    },
    {
        id: nanoid(),
        banner: "PakkoBanner.jpg",
        title: "Interactive Design Platform",
        description:
            "Using three.js, I assisted in the creation of a 3D interactive design platform. " +
            "This system allows the user to create a live 3D model of their box. I overlooked " +
            "the implementation of the animation and scaling.",
        status: ProjectStatus.Active,
        dates: {
            start: dayjs("06/2022", "MM/YYYY"),
            end: dayjs("09/2022", "MM/YYYY"),
        },
        links: {
            website: "https://idp.pakko.com.au/",
        },
    },
    {
        id: nanoid(),
        banner: "AxcelerateBanner.jpg",
        title: "Online Assessments",
        description:
            "I played a major part in upgrading the WYSIWYG framework that powers the Assessment editor. " +
            "I assisted in the development in the Question Banks feature that allows the user to create a bank of questions " +
            "that can be used in multiple assessments.",
        status: ProjectStatus.Active,
        dates: {
            start: dayjs("01/2023", "MM/YYYY"),
        },
        links: {
            website:
                "https://www.axcelerate.com.au/feature/assessment-authoring",
        },
    },
    {
        id: nanoid(),
        banner: "AxcelerateBanner.jpg",
        title: "Learner Help Requests",
        description:
            "Implemented the design overhaul of the Learner Help Requests features. " +
            "This gave Learners a more intuitive experience when requesting help, it also allows them " +
            "to assign trainers relating to their enrolments.",
        status: ProjectStatus.Active,
        dates: {
            start: dayjs("01/2023", "MM/YYYY"),
        },
        links: {
            website:
                "https://www.axcelerate.com.au/features/learner-help-requests",
        },
    },
    {
        id: nanoid(),
        banner: "AxcelerateBanner.jpg",
        title: "Unannounced Project",
        description: "More details to come on aXcelerate day 2024",
        status: ProjectStatus.InProgress,
        dates: {
            start: dayjs("04/2024", "MM/YYYY"),
        },
        links: {
            website: "https://www.axcelerate.com.au/axcelerate-day-2024",
        },
    },
    {
        id: nanoid(),
        banner: "PlexGleamBanner.jpg",
        title: "Plex Discord RPC",
        description: "A Discord Rich Presence tool for Plex Media Server.",
        status: ProjectStatus.InProgress,
        dates: {
            start: dayjs("05/2024", "MM/YYYY"),
        },
        links: {
            code: "https://github.com/harrisonhoward/plex_discord_rpc",
        },
    },
];

export default projects;
