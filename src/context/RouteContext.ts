import { create } from "zustand";
import routes, { Route } from "../data/routes";

export interface RouteContextType {
    current: Route["path"];
    previous: Route["path"] | null;
    update: (newRoute: Route["path"]) => void;
}

export const useRouteContext = create<RouteContextType>((set) => ({
    current: window.location.pathname,
    previous: null,
    update: (newRoute: Route["path"]) =>
        set((state) => ({ current: newRoute, previous: state.current })),
}));
