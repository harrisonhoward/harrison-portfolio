import { styled, Tooltip } from "@mui/material";
const StyledTooltip = styled(Tooltip)({
    background: "rgba(6, 6, 6, 0.15)",
    backdropFilter: "blur(5px)",
    borderRadius: "4px",
    padding: "0rem 0.15rem",
    transition: "background 0.2s ease-in-out",
    "&:hover": {
        background: "rgba(6, 6, 6, 0.3)",
    },
});
export default StyledTooltip;
