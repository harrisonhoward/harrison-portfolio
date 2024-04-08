import { create } from "zustand";
import { Route } from "../data/routes";

export interface RouteContextType {
    current: Route["path"];
    previous: Route["path"] | null;
    update: (newRoute: Route["path"]) => void;
}

export const useRouteContext = create<RouteContextType>((set, get) => ({
    current: window.location.pathname,
    previous: null,
    update: (newRoute: Route["path"]) => {
        // If the new route is the same as the current route, do nothing
        if (get().current === newRoute) return;
        set((state) => ({ current: newRoute, previous: state.current }));
    },
}));
