import mainStyle from "@/styles/Main";
import { Box } from "@mui/joy";
import Projects from "./Projects";
import Skills from "./Skills";
import React from "react";

const Main: React.FC = () => {
    return (
        <Box component="main" sx={mainStyle}>
            <Skills />
            <Projects />
        </Box>
    );
};

export default Main;
