import React, { forwardRef } from "react";
import { CardProps } from "@mui/material";
import StyledCard from "./styles/GlassCardStyles";

const GlassCard = forwardRef(
    (props: CardProps, ref: React.Ref<HTMLDivElement>) => {
        return <StyledCard ref={ref} {...props} />;
    }
);
export default GlassCard;
