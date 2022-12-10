import { Routes, Route, Navigate } from "react-router-dom";

// Resources
import routes from "../../../data/routes";

function Routing() {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
            {/* Handle redirecting */}
            {/* TODO Add Error 404 page */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default Routing;
