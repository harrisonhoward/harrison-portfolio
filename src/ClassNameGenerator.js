import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/material/className";

export const GLOBAL_PREFIX = "hhp";
ClassNameGenerator.configure((componentName) =>
    componentName.replace(/Mui/gim, GLOBAL_PREFIX)
);
