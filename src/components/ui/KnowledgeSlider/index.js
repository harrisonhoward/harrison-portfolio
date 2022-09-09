import React, { useMemo } from "react";

import Label from "./styles/Label";
import StyledSlider from "./styles/StyledSlider";

/**
 *
 * @param {{ label: string, selectedValue: number, marks: string[], colour?: string,
 * typographyProps?: import("@mui/material").TypographyProps, sliderProps?: import("@mui/material").SliderProps }} props
 * @returns
 */
function KnowledgeSlider(props) {
    const max = useMemo(() => props.marks?.length || 3, [props.marks?.length]);
    const marks = useMemo(
        () =>
            Array.isArray(props.marks)
                ? props.marks.map((mark, index) => ({
                      value: index + 1,
                      label: mark,
                  }))
                : [
                      { value: 1, label: "Beginner" },
                      { value: 2, label: "Proficient" },
                      { value: 3, label: "Advanced" },
                  ],
        [props.marks]
    );
    return (
        <>
            <Label>{props.label}</Label>
            <StyledSlider
                colour={props.colour || "primary"}
                min={1}
                max={max}
                marks={marks}
                value={props.selectedValue}
            />
        </>
    );
}

export default KnowledgeSlider;
