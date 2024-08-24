import dayjs, { type Dayjs } from "dayjs";
import { nanoid } from "nanoid";
// Add ability to add custom format for this file
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const SkillMap = {
    wordpress: {
        title: "WordPress",

        link: "https://wordpress.com",
    },
    nodejs: {
        title: "Node.js",
        link: "https://nodejs.org/en",
    },
    react: {
        title: "React",
        link: "https://reactjs.org",
    },
    awsAmplify: {
        title: "AWS Amplify",
        link: "https://aws.amazon.com/amplify",
    },
    threejs: {
        title: "Three.js",
        link: "https://threejs.org",
    },
    typescript: {
        title: "TypeScript",
        link: "https://www.typescriptlang.org",
    },
    redux: {
        title: "Redux",
        link: "https://redux.js.org",
    },
    jira: {
        title: "Jira",
        link: "https://www.atlassian.com/software/jira",
    },
    sql: {
        title: "SQL",
        link: "https://www.mysql.com",
    },
    aws: {
        title: "AWS",
        link: "https://aws.amazon.com",
    },
    coldfusion: {
        title: "ColdFusion",
        link: "https://www.adobe.com/products/coldfusion-family.html",
    },
    tinymce: {
        title: "TinyMCE",
        link: "https://www.tiny.cloud",
    },
    java: {
        title: "Java",
        link: "https://www.java.com",
    },
    storybook: {
        title: "Storybook",
        link: "https://storybook.js.org",
    },
    tiptap: {
        title: "TipTap",
        link: "https://www.tiptap.dev",
    },
} as const;

export type SkillKey = keyof typeof SkillMap;

export interface Role {
    title: string;
    dates: {
        start: Dayjs;
        end?: Dayjs;
    };
    skills?: SkillKey[];
}

export interface Work {
    id: string;
    banner: string;
    title: string;
    type: "part-time" | "full-time";
    location: string;
    locationType: "on-site" | "remote" | "hybrid";
    skills?: SkillKey[];
    roles: Role[];
}

const work: Work[] = [
    {
        id: nanoid(),
        banner: "PakkoBanner.jpg",
        title: "Pakko",
        type: "full-time",
        location: "Geebung, Queensland, Australia",
        locationType: "on-site",
        skills: [
            "react",
            "redux",
            "threejs",
            "nodejs",
            "wordpress",
            "awsAmplify",
        ],
        roles: [
            {
                title: "Junior Systems Developer",
                dates: {
                    start: dayjs("07/2022", "MM/YYYY"),
                    end: dayjs("09/2022", "MM/YYYY"),
                },
            },
        ],
    },
    {
        id: nanoid(),
        banner: "AxcelerateBanner.jpg",
        title: "aXcelerate",
        type: "full-time",
        location: "Milton, Queensland, Australia",
        locationType: "hybrid",
        roles: [
            {
                title: "Junior Software Developer",
                dates: {
                    start: dayjs("10/2022", "MM/YYYY"),
                    end: dayjs("06/2024", "MM/YYYY"),
                },
                skills: [
                    "react",
                    "redux",
                    "storybook",
                    "nodejs",
                    "typescript",
                    "tinymce",
                    "coldfusion",
                    "java",
                    "sql",
                    "aws",
                    "jira",
                ],
            },
            {
                title: "Software Developer",
                dates: {
                    start: dayjs("06/2024", "MM/YYYY"),
                },
                skills: [
                    "react",
                    "redux",
                    "storybook",
                    "nodejs",
                    "typescript",
                    "tiptap",
                    "tinymce",
                    "coldfusion",
                    "java",
                    "sql",
                    "aws",
                    "jira",
                ],
            },
        ],
    },
];

export default work;
