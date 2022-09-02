import { styled, Typography } from "@mui/material";
import Color from "color";
const TEXT_SHADOW_PX = 0.9;
const TEXT_DARK = 0.4;
const StyledCode = styled((props) => (
    <Typography {...props} component="code" />
))(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    color: theme.palette.primary.main,
    textShadow:
        `${TEXT_SHADOW_PX}px 0 0 ${Color(theme.palette.primary.dark).darken(
            TEXT_DARK
        )}, ` +
        `-${TEXT_SHADOW_PX}px 0 0 ${Color(theme.palette.primary.dark).darken(
            TEXT_DARK
        )}, ` +
        `0 ${TEXT_SHADOW_PX}px 0 ${Color(theme.palette.primary.dark).darken(
            TEXT_DARK
        )}, ` +
        `0 -${TEXT_SHADOW_PX}px 0 ${Color(theme.palette.primary.dark).darken(
            TEXT_DARK
        )}`,
}));
export default StyledCode;
