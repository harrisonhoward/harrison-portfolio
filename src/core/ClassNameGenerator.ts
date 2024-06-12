import ClassNameGenerator from "@mui/utils/ClassNameGenerator";

export const GLOBAL_PREFIX = import.meta.env.VITE_GLOBAL_PREFIX;

ClassNameGenerator.configure((componentName) =>
    componentName.replace(/Mui/gim, GLOBAL_PREFIX || "Mui")
);
