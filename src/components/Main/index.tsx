import mainStyle from "@/styles/Main";
import { Box } from "@mui/joy";
import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";

const Main: React.FC = () => {
    return (
        <Box component="main" sx={mainStyle}>
            <Skills />
            <Projects />
        </Box>
    );
};

export default Main;
