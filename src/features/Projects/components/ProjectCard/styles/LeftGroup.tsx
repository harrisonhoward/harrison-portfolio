import { motion } from "framer-motion";
import { styled } from "@mui/material";
const LeftGroup = styled(motion.div)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    "> *:not(:last-child)": {
        marginRight: "0.1rem",
    },
});
export default LeftGroup;
