import { Typography } from "@mui/material";

/**
 *
 * @param {import("@mui/material").TypographyProps} props
 */
function Spangraphy(props) {
    return (
        <Typography
            align="inherit"
            color="inherit"
            fontSize="inherit"
            fontWeight="inherit"
            border="inherit"
            {...props}
            component="span"
        />
    );
}

export default Spangraphy;
