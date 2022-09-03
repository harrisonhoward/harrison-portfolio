import { styled, Typography } from "@mui/material";
const StyledCode = styled((props) => (
    <Typography {...props} component="code" />
))({
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
});
export default StyledCode;
