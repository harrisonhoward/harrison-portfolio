import React from "react";
import { styled, Card } from "@mui/material";

/**
 *
 * @param {import("@mui/material").CardProps} props
 */
function GlassCard(props) {
    const GlassCard = styled(Card)({
        display: "flex",
        flexDirection: "column",
        background: "rgba(26, 26, 26, 0.1)",
        backdropFilter: "blur(3px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
    });
    return <GlassCard {...props} />;
}

export default GlassCard;
