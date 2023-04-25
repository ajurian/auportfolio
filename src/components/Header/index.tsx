import headerStyle from "@/styles/Header";
import { Box } from "@mui/joy";
import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";

const Header: React.FC = () => {
    return (
        <Box sx={headerStyle} component="header">
            <Nav />
            <Banner />
        </Box>
    );
};

export default Header;
