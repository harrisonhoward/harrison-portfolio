import create from "zustand";

export const ActiveScroller = create((set) => ({
    active: null,
    scrollActive: false,
    setActive: (to) => set(() => ({ active: to })),
    setScrollActive: (active) => set(() => ({ scrollActive: active })),
}));
