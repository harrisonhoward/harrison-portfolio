import React from "react";
import GlassCardStyles from "./styles/GlassCardStyles";

/**
 *
 * @type {import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").CardTypeMap<{}, "div">}
 */
const GlassCard = React.forwardRef((props, ref) => {
    return <GlassCardStyles ref={ref} {...props} />;
});

export default GlassCard;
