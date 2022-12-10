import ClassNameGenerator from "@mui/utils/ClassNameGenerator";

ClassNameGenerator.configure((componentName) =>
    componentName.replace(/Mui/gim, import.meta.env.VITE_GLOBAL_PREFIX || "Mui")
);
