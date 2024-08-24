import { Navigate } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/About";
import Projects from "../routes/Projects";
import Work from "../routes/Work";

export enum RouteName {
    Home = "Home",
    About = "About Me",
    Projects = "Projects",
    Work = "Work",
    NotFound = "404",
}

export interface Route {
    name: RouteName;
    path: string;
    element: JSX.Element;
    noNav?: boolean;
}

const routes = [
    { name: RouteName.Home, path: "/", element: <Home /> },
    {
        name: RouteName.About,
        path: "/about",
        element: <About />,
    },
    {
        name: RouteName.Projects,
        path: "/projects",
        element: <Projects />,
    },
    {
        name: RouteName.Work,
        path: "/work",
        element: <Work />,
    },
    {
        name: RouteName.NotFound,
        path: "*",
        element: <Navigate to="/" />,
        noNav: true,
    },
] as const;
export default routes;
