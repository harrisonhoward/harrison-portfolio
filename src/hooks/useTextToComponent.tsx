import { useMemo } from "react";
import { Typography } from "@mui/material";
import reactStringReplace from "react-string-replace";
import Color from "color";
import dayjs from "dayjs";

// Components
import Code from "../components/ui/Code";
import DateTooltip from "../components/ui/DateTooltip";
import Spangraphy from "../components/ui/Spangraphy";

// Resources
import { IMyInfo } from "../data/myInfo";

function useTextToComponent(texts: string[], myInfo: IMyInfo) {
    const currentAge = useMemo(
        () => dayjs().diff(myInfo.dob, "years"),
        [myInfo.dob]
    );
    const yearsCoding = useMemo(
        () => dayjs().diff(myInfo.startCode, "years"),
        [myInfo.startCode]
    );
    return useMemo(
        () =>
            texts.map((text, index) => {
                // REPLACE {fullname}
                let replacedText = reactStringReplace(
                    // Normal string replace
                    // REPLACE {started_code}
                    text.replace(/{started_code}/gm, yearsCoding.toString()),
                    /({fullname})/gm,
                    (_, matchIndex) => (
                        <Code
                            key={`{fullname}_${matchIndex}`}
                            sx={{
                                color: (theme) =>
                                    Color(theme.palette.primary.main)
                                        .lighten(0.6)
                                        .string(),
                            }}
                        >
                            {myInfo.name.standard}
                        </Code>
                    )
                );
                // REPLACE {age}
                replacedText = reactStringReplace(
                    replacedText,
                    /({age})/gm,
                    (_, matchIndex) => (
                        <DateTooltip
                            key={`{age}_${matchIndex}`}
                            date={myInfo.dob}
                            format={"dddd, Do of MMMM YYYY"}
                        >
                            <Spangraphy>{currentAge} years old</Spangraphy>
                        </DateTooltip>
                    )
                );
                return (
                    <Typography key={`paragraph_${index}`} variant="body1">
                        {replacedText}
                    </Typography>
                );
            }),
        [texts.length]
    );
}

export default useTextToComponent;
