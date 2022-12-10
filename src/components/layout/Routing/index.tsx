import { Routes, Route, Navigate } from "react-router-dom";

// Resources
import routes from "../../../data/routes";

function Routing() {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
}

export default Routing;
