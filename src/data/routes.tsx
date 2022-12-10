import { Navigate } from "react-router-dom";

import Home from "../routes/Home";
import About from "../routes/About";

export interface Route {
    name: string;
    path: string;
    element: JSX.Element;
    noNav?: boolean;
}

const routes: Route[] = [
    { name: "Home", path: "/", element: <Home /> },
    {
        name: "About",
        path: "/about",
        element: <About />,
    },
    {
        name: "404",
        path: "*",
        element: <Navigate to="/" />,
        noNav: true,
    },
];
export default routes;
