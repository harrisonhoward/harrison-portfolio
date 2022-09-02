import React from "react";
import { Typography } from "@mui/material";

/**
 *
 * @param {import("@mui/material").TypographyProps} props
 */
const Spangraphy = React.forwardRef((props, ref) => {
    return (
        <Typography
            align="inherit"
            color="inherit"
            fontSize="inherit"
            fontWeight="inherit"
            border="inherit"
            {...props}
            ref={ref}
            component="span"
        />
    );
});

export default Spangraphy;
