import React from "react";
import { Box, Typography } from "@mui/material";

import { SkillKey, SkillMap } from "../../data/work";

export interface WorkSkillsProps {
    skills?: SkillKey[];
    /**
     * Indents the skills (For the role skills for the most part)
     */
    indent?: boolean;
}

const WorkSkills: React.FC<WorkSkillsProps> = ({ skills, indent }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                columnGap: "0.3rem",
                rowGap: "0",
                marginTop: "0.1rem",
                paddingLeft: indent ? "1rem" : 0,
            }}
        >
            {skills?.map((skill, index, arr) => (
                <Typography key={skill} variant="subtitle2" color="lightgray">
                    {SkillMap[skill].title}
                    {index < arr.length - 1 && ", "}
                </Typography>
            ))}
        </Box>
    );
};

export default WorkSkills;
