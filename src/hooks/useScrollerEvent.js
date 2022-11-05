import { useRef, useEffect } from "react";
import { Events } from "react-scroll";

import { ActiveScroller } from "../context/ScrollerContext";

const useScrollerEvent = (handler) => {
    const savedHandler = useRef();
    const { setScrollActive } = ActiveScroller();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const eventListener = (eventName) => (to, element) => {
            if (eventName === "begin") setScrollActive(true);
            if (eventName === "end") setScrollActive(false);
            if (typeof savedHandler.current === "function") {
                savedHandler.current(eventName, to, element);
            }
        };
        Events.scrollEvent.register("begin", eventListener("begin"));
        Events.scrollEvent.register("end", eventListener("end"));
        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    });
};

export default useScrollerEvent;
