// Types
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

// Icons
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export interface Redirect {
    username: string;
    link: string;
    label: string;
    icon: IconDefinition;
}

const redirects: Redirect[] = [
    {
        username: "harrison.howard00707@gmail.com",
        link: "mailto:{username}",
        label: "Email",
        icon: faEnvelope,
    },
    {
        username: "harrisonhoward",
        link: "https://github.com/{username}",
        label: "Github",
        icon: faGithub,
    },
    {
        username: "harrison-howard",
        link: "https://www.linkedin.com/in/{username}",
        label: "LinkedIn",
        icon: faLinkedin,
    },
    {
        username: "harrisonhowardd",
        link: "https://twitter.com/{username}",
        label: "Twitter",
        icon: faTwitter,
    },
];
export default redirects;
