import { useEffect, useRef } from "react";

const useEventListener = (
    eventName,
    handler,
    firstRender,
    element = window
) => {
    const savedHandler = useRef();

    useEffect(() => {
        // If first render is true, run the handler
        if (!!firstRender) handler(element);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

export default useEventListener;
