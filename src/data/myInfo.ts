import dayjs from "dayjs";

export interface IMyInfo {
    name: {
        firstLower: string;
        lastLower: string;
        firstUpper: string;
        lastUpper: string;
        standard: string;
    };
    dob: dayjs.Dayjs;
    startCode: dayjs.Dayjs;
    email: string;
    describeMe: string[];
    aboutMe: string[];
}

const myInfo: IMyInfo = {
    name: {
        firstLower: "harrison",
        lastLower: "howard",
        firstUpper: "Harrison",
        lastUpper: "Howard",
        standard: "Harrison Howard",
    },
    dob: dayjs("2002/06/06"),
    startCode: dayjs("2015/06/06"),
    email: "harrison.howard00707@gmail.com",
    describeMe: [
        "Full-Stack Developer",
        "React Developer",
        "Passionate Developer",
    ],
    aboutMe: [
        `Hi, I'm {fullname} a Full-Stack Website Developer based in Brisbane, 
        Australia. I am currently {age}, and have been coding since I was 
        13 years old. I started with Unity making 2D games and evolved into 
        exploring the technology of Full-Stack Website Development.`,

        `I am eager to invest and expand my knowledge in the real world, 
        solving real-world problems. I have spent {started_code} years learning and 
        discovering new technologies and languages that have given me the 
        experience I need to begin the career I want.`,
    ],
};

export default myInfo;
