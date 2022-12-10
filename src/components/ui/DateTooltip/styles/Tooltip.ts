import { styled, Tooltip } from "@mui/material";
import Color from "color";
const StyledTooltip = styled(Tooltip)(({ theme }) => ({
    background: `rgba(${Color(theme.palette.secondary.dark)
        .darken(0.4)
        .rgb()
        .array()
        .join(", ")}, 0.3)`,
    borderRadius: "4px",
    padding: "2px 3px",
    transition: "background 0.2s ease-in-out",
    "&:hover": {
        background: `rgba(${Color(theme.palette.secondary.dark)
            .darken(0.4)
            .rgb()
            .array()
            .join(", ")}, 0.5)`,
    },
}));
export default StyledTooltip;
