import Home from "../routes/Home";

export interface Route {
    name: string;
    path: string;
    element: JSX.Element;
}

const routes: Route[] = [{ name: "Home", path: "/", element: <Home /> }];
export default routes;
