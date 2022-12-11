import { useCallback } from "react";

type OpenFunc = (links: string | string[]) => void;

function useLinks(): OpenFunc {
    return useCallback<OpenFunc>((links) => {
        if (!Array.isArray(links)) return window.open(links, "_blank");
        links.forEach((link) => window.open(link, "_blank"));
    }, []);
}

export default useLinks;
