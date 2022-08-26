/**
 * @typedef {{ icon: keyof import("devicons-react"), top?: string | number,
 * left?: string | number, right?: string | number, bottom?: string | number,
 * depth?: number, label?: string }} ParallaxType
 */

/**
 * @type {ParallaxType[]}
 */
const PARALLAX_ITEMS = [
    {
        icon: "JavascriptOriginal",
        top: "10%",
        left: "10%",
        depth: 15,
        label: "JavaScript",
    },
    {
        icon: "ReactOriginal",
        top: "20%",
        left: "25%",
        depth: 20,
        label: "React",
    },
    {
        icon: "ReduxOriginal",
        top: "25%",
        left: "50%",
        depth: 30,
        sx: {
            transform: "translate3d(0.5px,-2px,0)",
        },
        label: "Redux",
    },
    {
        icon: "Html5Original",
        top: "70%",
        left: "25%",
        depth: 30,
        label: "HTML5",
    },
    {
        icon: "Css3Original",
        top: "78%",
        left: "45%",
        depth: 35,
        label: "CSS3",
    },
    {
        icon: "PostgresqlOriginal",
        top: "40%",
        left: "80%",
        depth: 60,
        label: "PostgreSQL",
    },
    {
        icon: "MongodbOriginal",
        top: "15%",
        left: "70%",
        depth: 50,
        label: "MongoDB",
    },
    {
        icon: "GithubOriginal",
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
        icon: "ThreejsOriginal",
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
