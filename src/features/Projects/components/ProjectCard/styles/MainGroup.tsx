import { motion } from "framer-motion";
import { styled } from "@mui/material";
const MainGroup = styled(motion.div)({
    position: "absolute",
    top: "calc(16px + 1rem)",
    left: 0,
    width: "calc(100% - 0.5rem)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: "0.5rem",
});
export default MainGroup;
