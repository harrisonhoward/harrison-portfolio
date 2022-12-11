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
    dates: {
        start: string;
        end?: string;
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
        status: Status.Active,
        dates: {
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
        status: Status.Active,
        dates: {
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
        status: Status.Active,
        dates: {
            start: "2022",
        },
        links: {
            website: "https://idp.pakko.com.au/",
        },
    },
];

export default projects;
