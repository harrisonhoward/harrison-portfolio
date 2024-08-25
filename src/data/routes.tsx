import { Navigate } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faHouse,
    faAddressCard,
    faDiagramProject,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import Home from "../routes/Home";
import About from "../routes/About";
import Projects from "../routes/Projects";
import Work from "../routes/Work";

export enum RouteName {
    Home = "Home",
    About = "About",
    Projects = "Projects",
    Work = "Work",
    NotFound = "404",
}

export interface Route {
    name: RouteName;
    path: string;
    element: JSX.Element;
    icon?: IconDefinition;
    noNav?: boolean;
}

const routes: Route[] = [
    { name: RouteName.Home, path: "/", element: <Home />, icon: faHouse },
    {
        name: RouteName.About,
        path: "/about",
        element: <About />,
        icon: faAddressCard,
    },
    {
        name: RouteName.Projects,
        path: "/projects",
        element: <Projects />,
        icon: faDiagramProject,
    },
    {
        name: RouteName.Work,
        path: "/work",
        element: <Work />,
        icon: faBriefcase,
    },
    {
        name: RouteName.NotFound,
        path: "*",
        element: <Navigate to="/" />,
        noNav: true,
    },
];
export default routes;
