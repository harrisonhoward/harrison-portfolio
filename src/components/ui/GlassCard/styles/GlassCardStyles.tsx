import { styled, Card } from "@mui/material";
const StyledCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    background: "rgba(26, 26, 26, 0.4)",
    backdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
});
export default StyledCard;
