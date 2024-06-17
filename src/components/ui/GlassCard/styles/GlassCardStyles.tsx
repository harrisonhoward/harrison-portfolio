import { styled, Card } from "@mui/material";
import { GlassCardProps } from "..";
const StyledCard = styled(Card, {
    shouldForwardProp(propName) {
        return propName !== "backgroundOpacity";
    },
})<GlassCardProps>`
    display: flex;
    flex-direction: column;
    background: ${({ backgroundOpacity }) =>
        `rgba(26, 26, 26, ${backgroundOpacity ?? 0.6})`};
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
`;
export default StyledCard;
