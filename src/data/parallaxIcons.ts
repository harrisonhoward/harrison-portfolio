import React from "react";

// Icons
import JavaScriptOriginal from "devicons-react/icons/JavascriptOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import ReduxOriginal from "devicons-react/icons/ReduxOriginal";
import Html5Original from "devicons-react/icons/Html5Original";
import Css3Original from "devicons-react/icons/Css3Original";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";
import GithubOriginal from "devicons-react/icons/GithubOriginal";
import ThreejsOriginal from "devicons-react/icons/ThreejsOriginal";

interface IconProps extends React.SVGProps<SVGElement> {
    size?: number | string;
}

export interface ParallaxItem {
    icon: React.FC<IconProps>;
    top?: React.CSSProperties["top"];
    left?: React.CSSProperties["left"];
    right?: React.CSSProperties["right"];
    bottom?: React.CSSProperties["bottom"];
    depth?: number;
    label?: string;
    sx?: React.CSSProperties;
}

const PARALLAX_ITEMS: ParallaxItem[] = [
    {
        icon: JavaScriptOriginal,
        top: "10%",
        left: "10%",
        depth: 15,
        label: "JavaScript",
    },
    {
        icon: ReactOriginal,
        top: "20%",
        left: "25%",
        depth: 20,
        label: "React",
    },
    {
        icon: ReduxOriginal,
        top: "17%",
        left: "50%",
        depth: 30,
        sx: {
            transform: "translate3d(0.5px,-2px,0)",
        },
        label: "Redux",
    },
    {
        icon: Html5Original,
        top: "70%",
        left: "25%",
        depth: 30,
        label: "HTML5",
    },
    {
        icon: Css3Original,
        top: "78%",
        left: "45%",
        depth: 35,
        label: "CSS3",
    },
    {
        icon: PostgresqlOriginal,
        top: "40%",
        left: "80%",
        depth: 60,
        label: "PostgreSQL",
    },
    {
        icon: MongodbOriginal,
        top: "15%",
        left: "70%",
        depth: 50,
        label: "MongoDB",
    },
    {
        icon: GithubOriginal,
        top: "80%",
        left: "80%",
        depth: 80,
        sx: {
            borderRadius: "15%",
            background: "white",
        },
        label: "GitHub",
    },
    {
        icon: ThreejsOriginal,
        top: "45%",
        left: "14%",
        depth: 25,
        label: "Threejs",
        sx: {
            fill: "white",
            transform: "translate3d(1.5px,0,0)",
        },
    },
];

export default PARALLAX_ITEMS;
