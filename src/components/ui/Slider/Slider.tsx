import { css, Slider as MUISlider, styled } from "@mui/material";

import { GLOBAL_PREFIX } from "../../../core/ClassNameGenerator";

const Slider = styled(MUISlider)<{ percentage: number; index: number }>`
    & .${GLOBAL_PREFIX}Slider-rail {
        background: ${({ theme, percentage }) => `
            linear-gradient(
                to right,
                ${theme.palette.primary.main} 0% ${percentage}%,
                ${theme.palette.action.disabled} ${percentage}% 100%
            )
        `};
        border: 0.1px solid black;
    }

    ${({ theme, index }) =>
        index > -1 &&
        css`
            & .${GLOBAL_PREFIX}Slider-mark[data-index="${index}"] {
                background: ${theme.palette.action.disabled};
            }
        `}
`;

export default Slider;
