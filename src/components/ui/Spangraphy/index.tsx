import { forwardRef } from "react";
import { Typography, TypographyProps } from "@mui/material";

const Spangraphy = forwardRef(
    (
        props: Omit<TypographyProps, "component">,
        ref: React.Ref<HTMLSpanElement>
    ) => {
        return (
            <Typography
                align="inherit"
                color="inherit"
                fontSize="inherit"
                fontWeight="inherit"
                border="inherit"
                lineHeight="inherit"
                letterSpacing="inherit"
                {...props}
                ref={ref}
                component="span"
            />
        );
    }
);
export default Spangraphy;
