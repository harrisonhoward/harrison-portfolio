import { useState, useEffect } from "react";
import {
    useLocation as useRouterLocation,
    Location as RouterLocation,
} from "react-router-dom";

export interface Location {
    current: RouterLocation["pathname"];
    previous: RouterLocation["pathname"] | null;
}

function useLocation() {
    const location = useRouterLocation();

    const [current, setCurrent] = useState<Location["previous"]>(
        location.pathname
    );
    const [previous, setPrevious] = useState<Location["previous"]>(null);
    useEffect(() => {
        setPrevious(current);
        setCurrent(location.pathname);
    }, [location.pathname]);

    return {
        current,
        previous,
    };
}

export default useLocation;
