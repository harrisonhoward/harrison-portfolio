import React, { forwardRef } from "react";
import { CardProps } from "@mui/material";
import StyledCard from "./styles/GlassCardStyles";

export interface GlassCardProps extends CardProps {
    /**
     * @default 0.6
     */
    backgroundOpacity?: number;
}

const GlassCard = forwardRef(
    (props: GlassCardProps, ref: React.Ref<HTMLDivElement>) => {
        return <StyledCard ref={ref} {...props} />;
    }
);
export default GlassCard;
