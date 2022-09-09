import { styled, Slider } from "@mui/material";
import { GLOBAL_PREFIX } from "../../../../ClassNameGenerator";
const StyledSlider = styled(Slider)((props) => ({
    color: props.colour,
    [`& .${GLOBAL_PREFIX}Slider-thumb`]: {
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "none",
        },
    },
}));
export default StyledSlider;
