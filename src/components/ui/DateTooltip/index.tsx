import { SxProps } from "@mui/material";
import dayjs from "dayjs";
import StyledTooltip from "./styles/Tooltip";

// Components
import Spangraphy from "../Spangraphy";

// DayJS Plugins
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

export interface DateTooltipProps {
    children: string | JSX.Element;
    date: dayjs.Dayjs;
    format?: string;
    sx?: SxProps;
}

function DateTooltip({
    children,
    date,
    format = "dddd, Do MMMM YYYY hh:mm:ss a",
    sx,
}: DateTooltipProps) {
    return (
        <StyledTooltip
            title={date.format(format)}
            placement="top"
            sx={sx}
            enterTouchDelay={0}
        >
            <Spangraphy>{children}</Spangraphy>
        </StyledTooltip>
    );
}

export default DateTooltip;
