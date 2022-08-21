import React from "react";
import { Zoom } from "@mui/material";
import moment from "moment";
import Tooltip from "./styles/Tooltip";

/**
 *
 * @param {{ children: string, date: Date, dateFormat?: string }} props
 */
function DateTooltip(props) {
    const format = props.dateFormat || "dddd, Do MMMM YYYY hh:mm:ss a";
    return (
        <Tooltip title={moment(props.date).format(format)} placement="top">
            {props.children}
        </Tooltip>
    );
}

export default DateTooltip;
