import mainStyle from "@/styles/Main";
import { Box } from "@mui/joy";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
    return (
        <Box sx={mainStyle} component="main">
            <Skills />
            <Projects />
        </Box>
    );
};

export default Main;
