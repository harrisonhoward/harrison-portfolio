import React from "react";
import { Typography } from "@mui/material";

const Dot: React.FC = () => {
    return (
        <Typography
            variant="body1"
            fontWeight={400}
            sx={{ paddingTop: "2px", margin: "0 8px" }}
        >
            •
        </Typography>
    );
};

export default Dot;
